// ───────────────────────────────────────────────────────────────────────────
// Contact form delivery + spam protection config.
//
// Submissions are captured by EMAIL (no CRM/backend to maintain) via Web3Forms,
// which also runs server-side spam filtering. A hidden honeypot + Cloudflare
// Turnstile stop bots before they ever reach your inbox.
//
// TO GO LIVE, fill in the two free keys below:
//
// 1) WEB3FORMS_ACCESS_KEY
//    Go to https://web3forms.com → enter  sales@ssccontrol.com  → copy the
//    "Access Key" it emails you. Paste it below. (Free, no account needed.)
//    This is what delivers each submission to your inbox.
//
// 2) TURNSTILE_SITE_KEY  (anti-bot — recommended)
//    Cloudflare dashboard → Turnstile → add site "ssccontrol.com" → you get a
//    SITE key and a SECRET key.
//      • Paste the SITE key below.
//      • Paste the SECRET key into Web3Forms dashboard → your form → Spam
//        Protection → Cloudflare Turnstile. (Web3Forms verifies it server-side.)
//
// Until WEB3FORMS_ACCESS_KEY is set, the form falls back to opening the
// visitor's email app (mailto) so it still works during development.
// ───────────────────────────────────────────────────────────────────────────

export const CONTACT = {
  WEB3FORMS_ACCESS_KEY: '', // <-- paste Web3Forms access key
  TURNSTILE_SITE_KEY: '', // <-- paste Cloudflare Turnstile SITE key (optional but recommended)
  TO_EMAIL: 'sales@ssccontrol.com',
  COMPANY_NAME: 'SSC Control',
};

export const emailEnabled = () => Boolean(CONTACT.WEB3FORMS_ACCESS_KEY);
export const turnstileEnabled = () => Boolean(CONTACT.TURNSTILE_SITE_KEY);
