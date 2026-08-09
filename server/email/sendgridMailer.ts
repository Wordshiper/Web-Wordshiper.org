/**
 * Portable SendGrid mailer.
 * Prefers SENDGRID_API_KEY + SENDGRID_FROM (Cloudflare / local).
 * Falls back to Replit connector when those env vars are absent.
 */
import sgMail from "@sendgrid/mail";
import { sendViaSendGrid } from "@shared/lineage-email";

export interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

async function sendWithEnvKey(options: EmailOptions): Promise<boolean | null> {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) return null;
  const from = process.env.SENDGRID_FROM || "info@wordshiper.org";
  return sendViaSendGrid({
    apiKey,
    from,
    fromName: "Wordshiper",
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
}

async function sendWithReplitConnector(options: EmailOptions): Promise<boolean> {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? "depl " + process.env.WEB_REPL_RENEWAL
      : null;

  if (!hostname || !xReplitToken) {
    throw new Error("SendGrid credentials not configured");
  }

  const connectionSettings = await fetch(
    `https://${hostname}/api/v2/connection?include_secrets=true&connector_names=sendgrid`,
    {
      headers: {
        Accept: "application/json",
        "X_REPLIT_TOKEN": xReplitToken,
      },
    },
  )
    .then((res) => res.json())
    .then((data: { items?: Array<{ settings: { api_key?: string; from_email?: string } }> }) => data.items?.[0]);

  if (
    !connectionSettings?.settings?.api_key ||
    !connectionSettings?.settings?.from_email
  ) {
    throw new Error("SendGrid not connected");
  }

  sgMail.setApiKey(connectionSettings.settings.api_key);
  await sgMail.send({
    to: options.to,
    from: connectionSettings.settings.from_email,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
  return true;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const viaEnv = await sendWithEnvKey(options);
    if (viaEnv !== null) {
      if (viaEnv) console.log(`Email sent (env key) to ${options.to}`);
      return viaEnv;
    }
    await sendWithReplitConnector(options);
    console.log(`Email sent (Replit connector) to ${options.to}`);
    return true;
  } catch (error) {
    console.error("SendGrid email error:", error);
    return false;
  }
}
