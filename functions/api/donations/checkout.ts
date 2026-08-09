/**
 * POST /api/donations/checkout
 *
 * Creates a Stripe Checkout Session when STRIPE_SECRET_KEY is set.
 * Otherwise returns { url } from DONATION_URL / STRIPE_PAYMENT_LINK.
 *
 * Env:
 *   STRIPE_SECRET_KEY     — Stripe secret (Checkout Sessions)
 *   STRIPE_PAYMENT_LINK  — or DONATION_URL — hosted payment link fallback
 *   PUBLIC_SITE_URL      — success/cancel base (default https://www.wordshiper.org)
 */
interface Env {
  STRIPE_SECRET_KEY?: string;
  STRIPE_PAYMENT_LINK?: string;
  DONATION_URL?: string;
  PUBLIC_SITE_URL?: string;
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

  let amount = 50;
  let type: "oneTime" | "monthly" = "oneTime";
  try {
    const body = (await request.json()) as {
      amount?: number;
      type?: "oneTime" | "monthly";
    };
    if (typeof body.amount === "number" && body.amount > 0) amount = body.amount;
    if (body.type === "monthly" || body.type === "oneTime") type = body.type;
  } catch {
    /* use defaults */
  }

  const site = (env.PUBLIC_SITE_URL || "https://www.wordshiper.org").replace(
    /\/$/,
    "",
  );
  const paymentLink = env.STRIPE_PAYMENT_LINK || env.DONATION_URL;

  if (env.STRIPE_SECRET_KEY) {
    try {
      const params = new URLSearchParams();
      params.set("mode", type === "monthly" ? "subscription" : "payment");
      params.set("success_url", `${site}/donate?success=1`);
      params.set("cancel_url", `${site}/donate?canceled=1`);
      params.set(
        "line_items[0][price_data][currency]",
        "usd",
      );
      params.set(
        "line_items[0][price_data][product_data][name]",
        "Wordshiper Ministry Donation",
      );
      params.set(
        "line_items[0][price_data][product_data][description]",
        "Tax-deductible gift · 501(c)(3) EIN 33-1561112",
      );
      params.set(
        "line_items[0][price_data][unit_amount]",
        String(Math.round(amount * 100)),
      );
      if (type === "monthly") {
        params.set("line_items[0][price_data][recurring][interval]", "month");
      }
      params.set("line_items[0][quantity]", "1");
      params.set("submit_type", "donate");
      params.set("billing_address_collection", "auto");
      params.set("metadata[source]", "wordshiper-web");
      params.set("metadata[type]", type);

      const stripeRes = await fetch(
        "https://api.stripe.com/v1/checkout/sessions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        },
      );
      const session = (await stripeRes.json()) as {
        id?: string;
        url?: string;
        error?: { message?: string };
      };
      if (!stripeRes.ok || !session.url) {
        return json(
          {
            error: session.error?.message || "Stripe Checkout failed",
            fallbackUrl: paymentLink || null,
          },
          502,
        );
      }
      return json({ url: session.url, sessionId: session.id });
    } catch (err) {
      console.error("Stripe checkout error:", err);
      if (paymentLink) return json({ url: paymentLink });
      return json({ error: "Failed to create checkout session" }, 500);
    }
  }

  if (paymentLink) {
    return json({ url: paymentLink });
  }

  return json(
    {
      error:
        "Donation payments are not configured yet. Set STRIPE_SECRET_KEY or DONATION_URL.",
      mailto: "mailto:info@wordshiper.org?subject=Wordshiper%20Donation",
    },
    503,
  );
};
