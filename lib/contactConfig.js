// ───────────────────────────────────────────────────────────────────────────
// Contact form config.
//
// Submissions POST to /api/contact (a Vercel serverless route) which emails them
// to sales@ssccontrol.com via Resend. The email-sending secret (RESEND_API_KEY)
// lives in Vercel Environment Variables — never in the client bundle.
//
// The only client-side value here is the optional Cloudflare Turnstile SITE key
// (public). Add it to show the bot challenge; its SECRET goes in Vercel env as
// TURNSTILE_SECRET_KEY (the API route verifies it server-side). The honeypot
// works with or without Turnstile.
// ───────────────────────────────────────────────────────────────────────────

export const CONTACT = {
  TURNSTILE_SITE_KEY: '', // optional: paste Cloudflare Turnstile SITE key
  TO_EMAIL: 'sales@ssccontrol.com',
};

export const turnstileEnabled = () => Boolean(CONTACT.TURNSTILE_SITE_KEY);
