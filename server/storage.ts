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
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations - Required for Replit Auth
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Volunteer operations
  createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer>;
  getVolunteers(): Promise<Volunteer[]>;
  
  // Newsletter operations
  subscribeNewsletter(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  getSubscribers(): Promise<NewsletterSubscriber[]>;
  
  // Donation operations
  createDonation(donation: InsertDonation): Promise<Donation>;
  updateDonationStatus(id: string, status: string, stripeSessionId?: string): Promise<Donation | undefined>;
  getDonations(): Promise<Donation[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations - Required for Replit Auth
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

  async subscribeNewsletter(insertSubscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const [subscriber] = await db
      .insert(newsletter_subscribers)
      .values(insertSubscriber)
      .onConflictDoUpdate({
        target: newsletter_subscribers.email,
        set: { subscribed: true },
      })
      .returning();
    return subscriber;
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

  async updateDonationStatus(id: string, status: string, stripeSessionId?: string): Promise<Donation | undefined> {
    const updateData: any = { status };
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