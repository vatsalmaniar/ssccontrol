'use client';

import { useMemo, useState } from 'react';

const PdfIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
    <line x1="8" y1="9" x2="10" y2="9" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// One-line helper shown under the tabs, per category.
const BLURBS = {
  Catalogues: 'Product brochures for each brand we represent, plus the complete combined catalogue.',
  'Price Lists': 'The latest manufacturer price lists. Prices are subject to change, GST extra.',
};

export default function DownloadsBrowser({ items, categories }) {
  const [active, setActive] = useState(categories[0]);
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const c = {};
    for (const cat of categories) c[cat] = items.filter((d) => d.category === cat).length;
    return c;
  }, [items, categories]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(
      (d) =>
        d.category === active &&
        (!q || `${d.title} ${d.brand}`.toLowerCase().includes(q))
    );
  }, [items, active, query]);

  return (
    <div className="dl-browser">
      <div className="dl-tabs" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={`dl-tab${active === cat ? ' active' : ''}`}
            onClick={() => {
              setActive(cat);
              setQuery('');
            }}
          >
            {cat}
            <span className="dl-tab-count">{counts[cat]}</span>
          </button>
        ))}
      </div>

      <div className="dl-toolbar">
        <p className="dl-blurb">{BLURBS[active] || ''}</p>
        <div className="dl-search">
          <SearchIcon />
          <input
            type="search"
            placeholder={`Search ${active.toLowerCase()}…`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={`Search ${active}`}
          />
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="dl-empty">No {active.toLowerCase()} match “{query}”.</p>
      ) : (
        <div className="dl-grid">
          {visible.map((d) => {
            const body = (
              <>
                <div className="dl-top">
                  <div className="dl-ic">
                    <PdfIcon />
                  </div>
                  {d.logoSrc ? (
                    <img className="dl-brand-logo" src={d.logoSrc} alt={d.brand} />
                  ) : (
                    <div className="dl-brand">{d.brand}</div>
                  )}
                </div>
                <div className="dl-title">{d.title}</div>
                <div className="dl-meta">
                  {d.comingSoon ? 'Available soon' : <>{d.effective} &middot; {d.type} &middot; {d.size}</>}
                </div>
                {d.comingSoon ? (
                  <span className="dl-btn dl-btn-soon">Coming soon</span>
                ) : (
                  <span className="dl-btn">
                    <DownloadIcon />
                    Download
                  </span>
                )}
              </>
            );
            return d.comingSoon ? (
              <div className="dl-card dl-card-soon" key={d.title}>
                {body}
              </div>
            ) : (
              <a className="dl-card" key={d.title} href={d.file} target="_blank" rel="noopener noreferrer" download>
                {body}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
