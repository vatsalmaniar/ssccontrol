import Link from 'next/link';
import './product.css';
import { ROUTES } from '@/lib/routes';
import FlowLines from '@/components/FlowLines';
import EnquireButton from '@/components/EnquireButton';

const CHECK = (
  <svg className="pd-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ProductDetail({ product, brand }) {
  const accent = brand.accent;
  return (
    <main className="page-product" style={{ '--brand': accent }}>

      {/* HERO */}
      <div className="pd-hero">
        <div className="pd-hero-inner">
          <div className="pd-hero-left">
            <div className="pd-breadcrumb">
              <Link href={ROUTES.home}>Home</Link><span>/</span>
              <Link href={ROUTES.partners}>Partners</Link><span>/</span>
              <Link href={ROUTES.brand(brand.slug)}>{brand.name}</Link><span>/</span>
              <span className="pd-bc-current">{product.category}</span>
            </div>
            <div className="pd-tag">{brand.name}</div>
            <h1>{product.title} <em>{product.titleEm}</em></h1>
            <div className="pd-tagline">{product.tagline}</div>
            <p className="pd-intro">{product.intro}</p>
            <div className="pd-hero-actions">
              <EnquireButton subject={`${brand.name} ${product.category}`} className="pd-btn-primary">Enquire Now</EnquireButton>
              <Link href={ROUTES.brand(brand.slug)} className="pd-btn-ghost">All {brand.name} Products</Link>
            </div>
          </div>
          <div className="pd-hero-right">
            <div className="pd-hero-photo">
              <img src={product.heroImage} alt={`${brand.name} ${product.category}`} />
            </div>
          </div>
        </div>
      </div>

      {/* SERIES LINEUP */}
      <div className="pd-series-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="pd-inner">
          <div className="pd-label">{product.seriesLabel}</div>
          <div className="pd-title">{product.seriesTitle}</div>
          <div className="pd-series-grid">
            {product.series.map((s) => (
              <div className="pd-series-card" key={s.name}>
                <div className="pd-series-photo">
                  <img src={s.image} alt={`${brand.name} ${s.name}`} />
                </div>
                <div className="pd-series-body">
                  <div className="pd-series-tag">{s.tag}</div>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <ul className="pd-feats">
                    {s.features.map((f) => (
                      <li key={f}>{CHECK}{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      {product.highlights && (
        <div className="pd-highlights">
          <div className="pd-inner">
            <div className="pd-hl-grid">
              {product.highlights.map((h) => (
                <div className="pd-hl" key={h.title}>
                  <div className="pd-hl-title">{h.title}</div>
                  <div className="pd-hl-text">{h.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="pd-cta-section">
        <div className="pd-cta-inner">
          <h2>{product.ctaTitle}</h2>
          <p>{product.ctaText}</p>
          <div className="pd-cta-btns">
            <EnquireButton subject={`${brand.name} ${product.category}`} className="pd-btn-white">Enquire Now</EnquireButton>
            <Link href={ROUTES.contact} className="pd-btn-ow">Contact Sales Team</Link>
          </div>
        </div>
      </div>

    </main>
  );
}
