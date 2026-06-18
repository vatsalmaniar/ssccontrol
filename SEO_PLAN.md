# SEO Plan — SSC Control Website

_Audit date: 2026-06-18 · Next.js 15 App Router · deploys on Vercel_

This is a working plan: what already exists, what's pending, and the order to do it in.
Nothing here has been implemented yet — it's the roadmap.

---

## Where we stand today (the good news)

The fundamentals are already in place and well done:

- **Per-page metadata** on every static route plus dynamic `generateMetadata` on brand
  (`/partners/[brand]`) and product (`/partners/[brand]/[product]`) pages, with localized
  keywords (Ahmedabad / Baroda / Vadodara / Gujarat / India).
- **Root metadata** — `metadataBase`, title template (`%s | SSC Control`), description,
  OpenGraph + Twitter cards, `robots: index,follow`. See `app/layout.jsx`.
- **Organization JSON-LD** at the root with address, phone, email, social links.
- **Clean HTML structure** — exactly one `<h1>` per page (all 20 pages verified).
- **Alt text** on all 59 `<img>` tags.
- **robots.txt** allows all and points to the sitemap.
- **Google Analytics** wired (gated on a Measurement ID via `lib/analyticsConfig`).
- **`trailingSlash: true`** is consistent between routes and the sitemap.

So this is not a rescue job — it's tightening a site that's already 80% there.

---

## Pending work, in priority order

### 🔴 P1 — Complete the sitemap  _(highest impact, zero risk)_

**Problem:** `app/sitemap.js` currently emits only **19 URLs** — 7 static routes + 12 brand
pages. It is missing roughly **70 pages**, including:

- **All 55 product detail pages** (`/partners/[brand]/[product]`). These are the long-tail
  pages most likely to rank ("ABB MCCB distributor Ahmedabad", "Mitsubishi VFD Gujarat",
  etc.). Right now Google is never told they exist except via internal links.
- 5 `/solutions/*` pages (automation, safety, software, robotics, product-distribution)
- 3 `/about/*` sub-pages (awards, heritage, leadership)
- `/careers`, `/downloads`, `/privacy`, `/terms`

**Fix:** Generate sitemap entries from the same data the pages use —
`PRODUCT_PAGES` (in `data/products.js`) and the route list — instead of a hand-maintained
array. Add every product key as `/partners/${brandSlug}/${slug}/`.

**Also add `lastModified`** to each entry so Google prioritizes re-crawls. A static build
date is fine to start.

_Effort: ~30 min. Risk: none (additive)._

---

### 🟡 P2 — Expand structured data (JSON-LD)

Only `Organization` exists today. For an Ahmedabad-based industrial distributor, the
next three schemas are the highest-leverage:

1. **`LocalBusiness`** — you have a real street address + phone in Makarba, Ahmedabad.
   This makes the business eligible for Google's local pack / map results. Can extend the
   existing Organization node or add a second `<script>`.
2. **`BreadcrumbList`** on brand and product pages (Home › Partners › ABB › MCCB).
   Google renders these as breadcrumb trails in search results → higher CTR.
3. **`Product`** schema on the 55 product pages (name, brand, category, description).
   Enables richer product snippets.

_Effort: ~2–3 hrs. Risk: low. Validate with Google Rich Results Test before deploy._

---

### 🟡 P3 — Explicit canonicals on static pages

Solutions pages and about sub-pages have titles/descriptions but no
`alternates.canonical`. Add it to each so there's zero duplicate-URL ambiguity
(http/https, trailing slash, query params). The dynamic pages already do this correctly —
just mirror the pattern.

_Effort: ~30 min. Risk: none._

---

### 🟢 P4 — Polish / nice-to-have

- **Brand- and product-specific OG images.** All share `/og-image.png` today. Custom
  images (or a generated OG image route) would lift click-through on shared links.
- **Web app manifest + `theme-color`** for PWA/mobile niceties.
- **FAQ schema** on solution pages if you add a Q&A section (FAQ rich results).
- **Internal linking audit** — ensure every product page is reachable in ≤3 clicks and
  that brand pages link down to their product pages (helps crawl + ranking).
- **Image performance** — `next.config.mjs` sets `images.unoptimized: true` (required for
  static export). Confirm large source images (some PDFs/PNGs in repo root are multi-MB)
  aren't shipped to the client; serve compressed WebP. Core Web Vitals feed ranking.

---

## Suggested execution order

1. **P1 sitemap** — do first, deploy, submit sitemap in Google Search Console.
2. **P3 canonicals** — quick, bundle with P1.
3. **P2 JSON-LD** — LocalBusiness → Breadcrumbs → Product.
4. **P4 polish** — as time allows.

## Off-page (not code, but worth noting)

- Set up / verify **Google Search Console** and submit the sitemap once P1 ships.
- Claim/optimize **Google Business Profile** (pairs with LocalBusiness schema).
- Each of the 55 product pages should target a real search query — worth a keyword pass.

---

_All code changes follow the usual flow: shown on localhost for review before any push/deploy._
