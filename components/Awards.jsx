import { brands } from '@/data/brands';

const TROPHY = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
    <path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" />
  </svg>
);

// Presentational only, safe in both server and client components.
// `brandSlug` provides the logo when items don't carry their own slug (brand pages).
export function AwardGrid({ items, brandSlug }) {
  return (
    <div className="award-grid">
      {items.map((a, i) => {
        const slug = a.slug || brandSlug;
        const logo = slug && brands[slug]?.logo;
        return (
          <div className="award-card" key={`${a.title}-${a.year}-${i}`}>
            <div className="award-ic">{TROPHY}</div>
            <div className="award-info">
              <div className="award-title">{a.title}</div>
              <div className="award-meta">
                {logo && <img className="award-logo" src={logo} alt={a.brand || ''} />}
                <span className="award-year">{a.year}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
