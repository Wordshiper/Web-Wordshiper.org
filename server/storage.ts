import {
  users,
  volunteers,
  newsletter_subscribers,
  donations,
  type User,
  type UpsertUser,
  type Volunteer,
  type InsertVolunteer,
  type NewsletterSubscriber,
  type InsertNewsletterSubscriber,
  type Donation,
  type InsertDonation,
} from "@shared/schema";
import { db, pool } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer>;
  getVolunteers(): Promise<Volunteer[]>;
  subscribeNewsletter(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  getSubscribers(): Promise<NewsletterSubscriber[]>;
  createDonation(donation: InsertDonation): Promise<Donation>;
  updateDonationStatus(id: string, status: string, stripeSessionId?: string): Promise<Donation | undefined>;
  getDonations(): Promise<Donation[]>;
  ensureLineageSchema(): Promise<void>;
}

function mapSubscriberRow(r: Record<string, unknown>): NewsletterSubscriber {
  return {
    id: String(r.id),
    email: String(r.email),
    lineageNumber:
      r.lineage_number == null && r.lineageNumber == null
        ? null
        : Number(r.lineage_number ?? r.lineageNumber),
    subscribed: Boolean(r.subscribed ?? true),
    createdAt: (r.created_at ?? r.createdAt ?? null) as Date | null,
  };
}

export class DatabaseStorage implements IStorage {
  async ensureLineageSchema(): Promise<void> {
    await pool.query(`CREATE SEQUENCE IF NOT EXISTS pre_register_lineage_seq START WITH 1`);
    await pool.query(
      `ALTER TABLE newsletter_subscribers ADD COLUMN IF NOT EXISTS lineage_number integer`,
    );
    await pool.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS newsletter_subscribers_lineage_number_uidx
      ON newsletter_subscribers (lineage_number)
      WHERE lineage_number IS NOT NULL
    `);
  }

  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async createVolunteer(insertVolunteer: InsertVolunteer): Promise<Volunteer> {
    const [volunteer] = await db
      .insert(volunteers)
      .values(insertVolunteer)
      .returning();
    return volunteer;
  }

  async getVolunteers(): Promise<Volunteer[]> {
    return await db.select().from(volunteers);
  }

  async subscribeNewsletter(
    insertSubscriber: InsertNewsletterSubscriber,
  ): Promise<NewsletterSubscriber> {
    await this.ensureLineageSchema();
    const email = insertSubscriber.email.trim().toLowerCase();

    const existingRes = await pool.query(
      `SELECT id, email, lineage_number, subscribed, created_at
       FROM newsletter_subscribers WHERE lower(email) = $1 LIMIT 1`,
      [email],
    );
    const existing = existingRes.rows[0] as Record<string, unknown> | undefined;

    if (existing?.lineage_number != null) {
      if (existing.subscribed === false) {
        await pool.query(
          `UPDATE newsletter_subscribers SET subscribed = true WHERE id = $1`,
          [existing.id],
        );
      }
      return mapSubscriberRow(existing);
    }

    if (existing) {
      const updated = await pool.query(
        `UPDATE newsletter_subscribers
         SET lineage_number = nextval('pre_register_lineage_seq'), subscribed = true
         WHERE id = $1 AND lineage_number IS NULL
         RETURNING id, email, lineage_number, subscribed, created_at`,
        [existing.id],
      );
      if (updated.rows[0]) return mapSubscriberRow(updated.rows[0]);
      const again = await pool.query(
        `SELECT id, email, lineage_number, subscribed, created_at FROM newsletter_subscribers WHERE id = $1`,
        [existing.id],
      );
      return mapSubscriberRow(again.rows[0]);
    }

    const inserted = await pool.query(
      `INSERT INTO newsletter_subscribers (email, lineage_number, subscribed)
       VALUES ($1, nextval('pre_register_lineage_seq'), true)
       RETURNING id, email, lineage_number, subscribed, created_at`,
      [email],
    );
    return mapSubscriberRow(inserted.rows[0]);
  }

  async getSubscribers(): Promise<NewsletterSubscriber[]> {
    return await db.select().from(newsletter_subscribers);
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const [donation] = await db
      .insert(donations)
      .values(insertDonation)
      .returning();
    return donation;
  }

  async updateDonationStatus(
    id: string,
    status: string,
    stripeSessionId?: string,
  ): Promise<Donation | undefined> {
    const updateData: Partial<{ status: string; stripeSessionId: string }> = {
      status,
    };
    if (stripeSessionId) {
      updateData.stripeSessionId = stripeSessionId;
    }

    const [donation] = await db
      .update(donations)
      .set(updateData)
      .where(eq(donations.id, id))
      .returning();
    return donation;
  }

  async getDonations(): Promise<Donation[]> {
    return await db.select().from(donations);
  }
}

export const storage = new DatabaseStorage();
