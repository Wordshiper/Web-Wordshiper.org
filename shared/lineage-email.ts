/**
 * Shared lineage welcome + admin notification email builders.
 * Used by Express (server) and Cloudflare Pages Functions.
 */

export function createLineageWelcomeEmail(opts: {
  email: string;
  lineageNumber: number;
  language?: string;
}) {
  const n = opts.lineageNumber;
  const isKo = (opts.language || "en").toLowerCase().startsWith("ko");

  if (isKo) {
    const subject = `당신은 ${n}번째 Wordshiper입니다 — 계보에 합류하셨습니다`;
    const text = `
안녕하세요,

Wordshiper 사전등록에 감사드립니다.

당신은 첫 만나를 함께 받을 ${n}번째 Wordshiper입니다.
이 숫자는 점수가 아닙니다. 말씀의 계보 안에서 당신의 위치를 보여주는 표지입니다.

출시일(2026년 12월), 전원이 같은 시각에 첫 만나를 받습니다.

Yes, I am a Wordshiper!
하루 한 구절, 예배자의 삶으로.

— Wordshiper Ministry
info@wordshiper.org
`.trim();

    const html = `
<!DOCTYPE html>
<html lang="ko">
<body style="margin:0;padding:0;background:#F8FCFE;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:28px;">
      <p style="margin:0;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#0090B8;font-weight:600;">Wordshiper</p>
    </div>
    <div style="background:#ffffff;border-radius:16px;padding:36px 28px;border:1px solid #E6F7FC;">
      <p style="margin:0 0 8px;font-size:15px;color:#64748b;">사전등록이 완료되었습니다</p>
      <h1 style="margin:0 0 20px;font-size:26px;line-height:1.35;color:#201E1F;font-weight:700;">
        당신은 <span style="color:#00B3E4;">${n}</span>번째<br/>Wordshiper입니다
      </h1>
      <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#475569;">
        이 숫자는 점수가 아닙니다. 말씀의 계보 안에서 당신의 위치를 보여주는 표지이며, 당신이 혼자가 아니라는 증거입니다.
      </p>
      <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#64748b;">
        출시일(2026년 12월), 전원이 같은 시각에 첫 만나를 받습니다.
      </p>
      <p style="margin:0;font-style:italic;font-size:18px;color:#003D4F;">Yes, I am a Wordshiper!</p>
      <p style="margin:8px 0 0;font-size:14px;color:#003D4F;">하루 한 구절, 예배자의 삶으로.</p>
    </div>
    <p style="margin:24px 0 0;text-align:center;font-size:12px;color:#94a3b8;">
      Wordshiper Ministry Inc. · 501(c)(3) · EIN 33-1561112<br/>
      <a href="mailto:info@wordshiper.org" style="color:#0090B8;">info@wordshiper.org</a>
    </p>
  </div>
</body>
</html>`.trim();

    return { subject, text, html };
  }

  const subject = `You are Wordshiper #${n} — welcome to the lineage`;
  const text = `
Hello,

Thank you for pre-registering with Wordshiper.

You are the ${n}th Wordshiper to join the first manna.
This number is not a score. It is a marker of your place in the lineage of the Word — proof that you are not alone.

On launch day (December 2026), everyone receives the first manna at the same moment.

Yes, I am a Wordshiper!
One verse a day. A life of worship.

— Wordshiper Ministry
info@wordshiper.org
`.trim();

  const html = `
<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#F8FCFE;font-family:Georgia,'EB Garamond',serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:28px;">
      <p style="margin:0;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#0090B8;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">Wordshiper</p>
    </div>
    <div style="background:#ffffff;border-radius:16px;padding:36px 28px;border:1px solid #E6F7FC;">
      <p style="margin:0 0 8px;font-size:15px;color:#64748b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">Pre-registration confirmed</p>
      <h1 style="margin:0 0 20px;font-size:28px;line-height:1.35;color:#201E1F;font-weight:700;">
        You are Wordshiper <span style="color:#00B3E4;">#${n}</span>
      </h1>
      <p style="margin:0 0 16px;font-size:17px;line-height:1.7;color:#475569;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        This number is not a score. It is a marker of your place in the lineage of the Word — proof that you are not alone.
      </p>
      <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#64748b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        On launch day (December 2026), everyone receives the first manna at the same moment.
      </p>
      <p style="margin:0;font-style:italic;font-size:20px;color:#003D4F;">Yes, I am a Wordshiper!</p>
      <p style="margin:8px 0 0;font-size:15px;color:#003D4F;">One verse a day. A life of worship.</p>
    </div>
    <p style="margin:24px 0 0;text-align:center;font-size:12px;color:#94a3b8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
      Wordshiper Ministry Inc. · 501(c)(3) · EIN 33-1561112<br/>
      <a href="mailto:info@wordshiper.org" style="color:#0090B8;">info@wordshiper.org</a>
    </p>
  </div>
</body>
</html>`.trim();

  return { subject, text, html };
}

export function createAdminLineageNotification(opts: {
  email: string;
  lineageNumber: number;
}) {
  const subject = `New pre-registration · Lineage #${opts.lineageNumber}`;
  const text = `New pre-registration\nEmail: ${opts.email}\nLineage #: ${opts.lineageNumber}`;
  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:20px;">
      <h2 style="color:#00B3E4;">New pre-registration</h2>
      <p><strong>Email:</strong> ${opts.email}</p>
      <p><strong>Lineage #:</strong> ${opts.lineageNumber}</p>
    </div>
  `.trim();
  return { subject, text, html };
}

/** Portable SendGrid send via REST (works in CF Workers + Node). */
export async function sendViaSendGrid(opts: {
  apiKey: string;
  from: string;
  fromName?: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}): Promise<boolean> {
  try {
    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${opts.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: opts.to }] }],
        from: {
          email: opts.from,
          name: opts.fromName || "Wordshiper",
        },
        subject: opts.subject,
        content: [
          { type: "text/plain", value: opts.text },
          { type: "text/html", value: opts.html },
        ],
      }),
    });
    return res.ok || res.status === 202;
  } catch {
    return false;
  }
}
