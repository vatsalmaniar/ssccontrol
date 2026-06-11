import Link from 'next/link';
import './downloads.css';
import { ROUTES } from '@/lib/routes';
import { DOWNLOADS, DOWNLOAD_CATEGORIES } from '@/data/downloads';
import { brands } from '@/data/brands';

export const metadata = {
  title: 'Downloads — Price Lists & Catalogues',
  description:
    'Download the latest price lists, product catalogues and datasheets from SSC Control — ABB, Mitsubishi Electric, Schmersal and more.',
};

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

export default function DownloadsPage() {
  return (
    <main className="page-downloads">
      <div className="dl-hero">
        <div className="dl-hero-inner">
          <div className="breadcrumb">
            <Link href={ROUTES.home}>Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Downloads</span>
          </div>
          <div className="hero-tag">Resources</div>
          <h1>Downloads</h1>
          <p className="dl-hero-sub">
            The latest price lists, catalogues and datasheets from the brands we represent. For older
            versions or product-specific documents, please get in touch.
          </p>
        </div>
      </div>

      <section className="dl-section">
        <div className="dl-wrap">
          {DOWNLOAD_CATEGORIES.map((cat) => (
            <div className="dl-cat" key={cat}>
              <h2 className="dl-cat-title">{cat}</h2>
              <div className="dl-grid">
                {DOWNLOADS.filter((d) => d.category === cat).map((d) => {
                  const logoSrc = d.logo || brands[d.brandSlug]?.logo;
                  const body = (
                    <>
                      <div className="dl-ic">
                        <PdfIcon />
                      </div>
                      <div className="dl-body">
                        {logoSrc ? (
                          <img className="dl-brand-logo" src={logoSrc} alt={d.brand} />
                        ) : (
                          <div className="dl-brand">{d.brand}</div>
                        )}
                        <div className="dl-title">{d.title}</div>
                        <div className="dl-meta">
                          {d.comingSoon ? (
                            'Available soon'
                          ) : (
                            <>
                              {d.effective} &middot; {d.type} &middot; {d.size}
                            </>
                          )}
                        </div>
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
                    <a
                      className="dl-card"
                      key={d.title}
                      href={d.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      {body}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}

          <p className="dl-note">
            Looking for a price list or catalogue that isn&apos;t here?{' '}
            <Link href={ROUTES.contact}>Contact our team</Link> and we&apos;ll share it.
          </p>
        </div>
      </section>
    </main>
  );
}
