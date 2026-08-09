/**
 * Cloudflare Pages Function — POST /api/newsletter/subscribe
 *
 * Assigns a unique lineage number, stores the subscriber, and emails:
 *  1) the subscriber (lineage welcome)
 *  2) info@wordshiper.org (admin notify)
 *
 * Env (Cloudflare Pages → Settings → Environment variables):
 *   DATABASE_URL        — Neon Postgres (required)
 *   SENDGRID_API_KEY    — SendGrid API key (required for emails)
 *   SENDGRID_FROM       — verified sender (default: info@wordshiper.org)
 *   ADMIN_NOTIFY_EMAIL  — admin inbox (default: info@wordshiper.org)
 */
import { neon } from "@neondatabase/serverless";
import {
  createLineageWelcomeEmail,
  createAdminLineageNotification,
  sendViaSendGrid,
} from "../../_shared/lineage-email";

interface Env {
  DATABASE_URL: string;
  SENDGRID_API_KEY?: string;
  SENDGRID_FROM?: string;
  ADMIN_NOTIFY_EMAIL?: string;
}

async function ensureLineageSchema(sql: ReturnType<typeof neon>) {
  await sql`CREATE SEQUENCE IF NOT EXISTS pre_register_lineage_seq START WITH 1`;
  await sql`
    ALTER TABLE newsletter_subscribers
    ADD COLUMN IF NOT EXISTS lineage_number integer
  `;
  await sql`
    CREATE UNIQUE INDEX IF NOT EXISTS newsletter_subscribers_lineage_number_uidx
    ON newsletter_subscribers (lineage_number)
    WHERE lineage_number IS NOT NULL
  `;
}

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}) => {
  const { request, env } = context;
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    });

  if (!env.DATABASE_URL) {
    return json({ error: "Server misconfigured: DATABASE_URL missing" }, 500);
  }

  let email: string | undefined;
  let language = "en";
  try {
    const body = (await request.json()) as { email?: string; language?: string };
    email = body.email?.trim().toLowerCase();
    if (body.language) language = body.language;
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Invalid subscription data" }, 400);
  }

  try {
    const sql = neon(env.DATABASE_URL);
    await ensureLineageSchema(sql);

    const existing = await sql`
      SELECT id, email, lineage_number AS "lineageNumber", subscribed, created_at AS "createdAt"
      FROM newsletter_subscribers
      WHERE lower(email) = ${email}
      LIMIT 1
    `;

    let row = existing[0] as
      | {
          id: string;
          email: string;
          lineageNumber: number | null;
          subscribed: boolean;
          createdAt: string;
        }
      | undefined;
    let isNew = false;

    if (row?.lineageNumber != null) {
      // Returning subscriber — keep same lineage number
    } else if (row) {
      const assigned = await sql`
        UPDATE newsletter_subscribers
        SET lineage_number = nextval('pre_register_lineage_seq'),
            subscribed = true
        WHERE id = ${row.id} AND lineage_number IS NULL
        RETURNING id, email, lineage_number AS "lineageNumber", subscribed, created_at AS "createdAt"
      `;
      row = assigned[0] as typeof row;
      isNew = true;
    } else {
      const inserted = await sql`
        INSERT INTO newsletter_subscribers (email, lineage_number, subscribed)
        VALUES (${email}, nextval('pre_register_lineage_seq'), true)
        RETURNING id, email, lineage_number AS "lineageNumber", subscribed, created_at AS "createdAt"
      `;
      row = inserted[0] as typeof row;
      isNew = true;
    }

    if (!row?.lineageNumber) {
      return json({ error: "Failed to assign lineage number" }, 500);
    }

    const lineageNumber = Number(row.lineageNumber);
    const from = env.SENDGRID_FROM || "info@wordshiper.org";
    const adminTo = env.ADMIN_NOTIFY_EMAIL || "info@wordshiper.org";
    let emailSent = false;
    let adminEmailSent = false;

    if (env.SENDGRID_API_KEY) {
      const welcome = createLineageWelcomeEmail({
        email,
        lineageNumber,
        language,
      });
      emailSent = await sendViaSendGrid({
        apiKey: env.SENDGRID_API_KEY,
        from,
        fromName: "Wordshiper",
        to: email,
        subject: welcome.subject,
        text: welcome.text,
        html: welcome.html,
      });

      if (isNew) {
        const admin = createAdminLineageNotification({ email, lineageNumber });
        adminEmailSent = await sendViaSendGrid({
          apiKey: env.SENDGRID_API_KEY,
          from,
          fromName: "Wordshiper Website",
          to: adminTo,
          subject: admin.subject,
          text: admin.text,
          html: admin.html,
        });
      }
    }

    return json({
      id: row.id,
      email: row.email,
      lineageNumber,
      subscribed: row.subscribed,
      createdAt: row.createdAt,
      emailSent,
      adminEmailSent,
      isNew,
    });
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return json({ error: "Failed to subscribe to newsletter" }, 500);
  }
};
