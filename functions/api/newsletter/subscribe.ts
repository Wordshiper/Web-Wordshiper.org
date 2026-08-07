/**
 * Cloudflare Pages Function — POST /api/newsletter/subscribe
 *
 * Portable replacement for the Express endpoint (server/routes.ts).
 * Used automatically when this repo is deployed to Cloudflare Pages;
 * on Replit / local `npm run dev`, the Express server handles the same route.
 *
 * Required env vars (Cloudflare Pages → Settings → Environment variables):
 *   - DATABASE_URL : Neon Postgres connection string
 * Optional:
 *   - SENDGRID_API_KEY : if set, sends an admin notification email
 */
import { neon } from "@neondatabase/serverless";

interface Env {
  DATABASE_URL: string;
  SENDGRID_API_KEY?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    });

  let email: string | undefined;
  try {
    const body = (await request.json()) as { email?: string };
    email = body.email?.trim();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Invalid subscription data" }, 400);
  }

  try {
    const sql = neon(env.DATABASE_URL);
    const rows = await sql`
      INSERT INTO newsletter_subscribers (email)
      VALUES (${email})
      ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
      RETURNING *;
    `;

    let emailSent = false;
    if (env.SENDGRID_API_KEY) {
      try {
        const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: "info@wordshiper.org" }] }],
            from: { email: "info@wordshiper.org", name: "Wordshiper Website" },
            subject: "New pre-registration / newsletter subscriber",
            content: [{ type: "text/plain", value: `New subscriber: ${email}` }],
          }),
        });
        emailSent = res.ok;
      } catch {
        emailSent = false;
      }
    }

    return json({ ...rows[0], emailSent });
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return json({ error: "Failed to subscribe to newsletter" }, 500);
  }
};
