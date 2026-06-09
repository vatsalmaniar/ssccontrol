# Migration conventions (static HTML → Next.js App Router, static export)

The site is being migrated to Next.js (JS/JSX, App Router, `output: 'export'`). Shared chrome
(top bar, nav, footer) lives in the root layout — **individual pages must NOT render their own
nav/topbar/footer.** Geist is the site font (wired in layout); replace any `'Poppins'` in CSS
with `var(--font-sans)`.

## Route map (use these, via `next/link`)
| Old file | New route |
|---|---|
| index.html | `/` |
| about.html | `/about` |
| contact.html | `/contact` |
| partners.html | `/partners` |
| `<brand>.html` (abb, axelon, …) | `/partners/<brand>` |
| type2_selection_tool.html | `/tools/motor-starter` |
| panel_ac_tool.html | `/tools/panel-ac` |
| vfd_selection_tool.html | `/tools/vfd` |

Import the route helper if useful: `import { ROUTES } from '@/lib/routes'` (`@` = project root).

## How to convert a page
1. Create `app/<route>/page.jsx` and `app/<route>/<name>.css`.
2. Render ONLY the page's main content — everything in the original `<body>` **between** the
   mobile-nav block and the `<footer>`. Drop the original `<head>`, `.topbar`, `<nav>`,
   `.mobile-nav`, `<footer>`, the Google Analytics `gtag` script, and any `toggleNav` script.
3. Wrap the content in `<main className="page-<name>">…</main>`.
4. Put the page's CSS in `<name>.css` and `import './<name>.css'` at the top of page.jsx.
   - **Scope every rule** by prefixing the selector with `.page-<name> ` (e.g. `.hero{}` →
     `.page-<name> .hero{}`; `h2{}` → `.page-<name> h2{}`). For `@media` blocks, prefix the
     inner selectors the same way.
   - **Delete** these (already global): the `*{}` reset, `:root{}`, `body{}`, `html{}`, and any
     `.topbar/.nav*/.hamburger/.mobile-nav/footer/.footer*/.fsoc/.tool-badge` rules.
   - Replace `font-family:'Poppins',sans-serif` with `font-family:var(--font-sans)`.
5. HTML → JSX:
   - `class=` → `className=`; `for=` → `htmlFor=`; self-close `<img>/<br>/<input>`.
   - `style="a:b;c:d"` → `style={{ a: 'b', c: 'd' }}` with camelCased props.
   - Inline `onclick="fn()"` → a React handler. Reimplement the JS behavior with React state.
   - Internal `href="x.html"` → `<Link href="/x">` (use the route map). Keep external/`mailto:`/`tel:`/`#`
     anchors as plain `<a>`.
   - Comment out / remove `gtag`/analytics.
6. If the page has ANY interactivity (forms, tabs, filters, toggles), add `'use client'` at the top
   of page.jsx (or extract a small client child component).
7. Keep inline `data:` URIs (logos/images) as-is.
8. Export `metadata = { title: '…', description: '…' }` (allowed only in a server component — if the
   page is `'use client'`, instead create the metadata in a sibling and keep page client, or just
   omit metadata for client pages).

## Reference example
`components/BrandPage.jsx` + `components/brand.css` show the scoping + JSX patterns. Follow them.
