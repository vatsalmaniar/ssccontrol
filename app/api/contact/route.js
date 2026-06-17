import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TO = process.env.CONTACT_TO || 'sales@ssccontrol.com';
// Until ssccontrol.com is verified in Resend, the shared sender works for your own inbox.
const FROM = process.env.CONTACT_FROM || 'SSC Control Website <onboarding@resend.dev>';

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured -> skip
  if (!token) return false;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, ...(ip ? { remoteip: ip } : {}) }),
    });
    const data = await res.json();
    return Boolean(data.success);
  } catch {
    return false;
  }
}

export async function POST(req) {
  let d;
  try {
    d = await req.json();
  } catch {
    return Response.json({ success: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: bots fill this hidden field. Pretend success and drop it.
  if (d.company_website) return Response.json({ success: true });

  // Basic validation
  if (!d.name || !d.email || !d.message) {
    return Response.json({ success: false, error: 'Please fill in all required fields.' }, { status: 422 });
  }

  // Optional bot challenge
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  if (!(await verifyTurnstile(d.captchaToken, ip))) {
    return Response.json({ success: false, error: 'Verification failed. Please try again.' }, { status: 403 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { success: false, error: 'Email service not configured yet.' },
      { status: 503 }
    );
  }

  const isProduct = d.type === 'product';
  const subject = isProduct
    ? `Product Inquiry${d.product ? `: ${d.product}` : ''}, ${d.name}`
    : `General Inquiry, ${d.name}`;

  const rows = [
    ['Inquiry Type', isProduct ? 'Product Inquiry' : 'General Inquiry'],
    ['Name', d.name],
    ['Email', d.email],
    ['Phone', d.phone || ', '],
    ...(isProduct
      ? [
          ['Company', d.company || ', '],
          ['Product / Brand', d.product || ', '],
          ['Quantity', d.quantity || ', '],
          ['City / Location', d.city || ', '],
        ]
      : []),
    ['Message', d.message],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#1a2a4a">
      <h2 style="color:#00489c;margin:0 0 12px">${subject}</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 14px 6px 0;color:#6b7a99;vertical-align:top">${k}</td><td style="padding:6px 0">${String(
                v
              ).replace(/\n/g, '<br>')}</td></tr>`
          )
          .join('')}
      </table>
      <p style="color:#6b7a99;font-size:12px;margin-top:18px">Sent from the SSC Control website contact form.</p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: d.email,
      subject,
      text,
      html,
    });
    if (error) {
      return Response.json({ success: false, error: 'Could not send. Please email us directly.' }, { status: 502 });
    }
    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: 'Could not send. Please email us directly.' }, { status: 502 });
  }
}
