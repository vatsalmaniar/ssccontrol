'use client';

import Link from 'next/link';
import './brand.css';
import FlowLines from '@/components/FlowLines';
import { ROUTES } from '@/lib/routes';
import { useEnquiry } from '@/components/EnquiryModal';
import { AWARDS } from '@/data/awards';
import { AwardGrid } from '@/components/Awards';

const UL_MARK = (
  <svg viewBox="0 0 120 64" fill="none" aria-hidden="true" className="cert-ul-svg">
    <text x="6" y="42" fontSize="26" fontWeight="700" fill="currentColor" fontFamily="Arial, sans-serif">c</text>
    <circle cx="60" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="3.5" />
    <text x="60" y="42" fontSize="26" fontWeight="800" fill="currentColor" fontFamily="Arial, sans-serif" textAnchor="middle">UL</text>
    <text x="95" y="42" fontSize="22" fontWeight="700" fill="currentColor" fontFamily="Arial, sans-serif">us</text>
  </svg>
);

const MAIL_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function BrandPage({ brand }) {
  const { open } = useEnquiry();
  const accent = brand.accent;

  return (
    <main className="page-brand" style={{ '--brand': accent }}>
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="breadcrumb">
              <Link href={ROUTES.home}>Home</Link>
              <span>/</span>
              <Link href={ROUTES.partners}>Partners</Link>
              <span>/</span>
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>{brand.name}</span>
            </div>
            <div className="hero-tag">{brand.heroTag.replace(/^[^A-Za-z0-9(]+\s*/, '')}</div>
            <h1>
              {brand.title}
              <br />
              <em>{brand.titleEm}</em>
            </h1>
            <div className="hero-sub">{brand.heroSub}</div>
            {brand.partnerNote && <div className="hero-note">{brand.partnerNote}</div>}
            <div className="hero-badges">
              {brand.badges.map((b) => (
                <span className="hero-badge" key={b}>
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-logo-wrap">
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  style={{ maxHeight: brand.logoMaxH || 36, width: 'auto', maxWidth: 200, display: 'block' }}
                />
              ) : (
                <span style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.01em', color: accent }}>
                  {brand.logoText || brand.name}
                </span>
              )}
              <div className="partner-txt">{brand.since ? `Partner Since ${brand.since}` : 'Authorised Partner'}</div>
              <div className="hstats">
                {brand.stats.map((s) => (
                  <div className="hstat" key={s.label}>
                    <div className="hstat-num">
                      <em>{s.num}</em>
                    </div>
                    <div className="hstat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cats-wrap">
        <FlowLines className="ink" opacity={0.9} />
        <div className="slabel">{brand.catsLabel}</div>
        <div className="stitle">{brand.catsTitle}</div>
        <div className="ssub">{brand.catsSub}</div>
        {(() => {
          const renderCard = (c) => {
            const color = c.color || accent;
            return (
              <div className="cat-card" key={c.name}>
                {c.image && (
                  <div className="cat-photo">
                    <img
                      src={c.image}
                      alt={`${brand.name} ${c.name}`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.parentElement.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="cat-top">
                  {!c.image && (
                    <div
                      className="cat-icon"
                      style={{ background: `color-mix(in srgb, ${color} 13%, transparent)`, color }}
                      dangerouslySetInnerHTML={{ __html: c.icon }}
                    />
                  )}
                  <div className="cat-label" style={{ color }}>
                    {c.label}
                  </div>
                </div>
                <div className="cat-name">{c.name}</div>
                <div className="cat-desc">{c.desc}</div>
                <div className="cat-foot">
                  <div className="cat-tags">
                    {c.tags.map((t) => (
                      <span className="cat-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {c.slug ? (
                    <Link href={`/partners/${brand.slug}/${c.slug}`} className="cat-know" style={{ color }}>
                      Know More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                  ) : (
                    <button className="cat-btn" style={{ background: color }} onClick={() => open(c.name)}>
                      {MAIL_ICON}
                      Enquire Now
                    </button>
                  )}
                </div>
              </div>
            );
          };
          return <div className="cats-grid">{brand.categories.map(renderCard)}</div>;
        })()}
      </div>

      {brand.certifications && (
        <div className="cats-wrap" style={{ paddingTop: 0 }}>
          <div className="slabel">{brand.certsLabel || 'Quality & Compliance'}</div>
          <div className="stitle">{brand.certsTitle}</div>
          {brand.certsSub && <div className="ssub">{brand.certsSub}</div>}
          <div className="cert-strip">
            {brand.certifications.map((c) => (
              <div className="cert-item" key={c.name}>
                <div className="cert-logo">
                  {c.ul ? UL_MARK : c.img ? <img src={c.img} alt={`${c.name} certification`} loading="lazy" /> : <span className="cert-textmark">{c.mark}</span>}
                </div>
                <div className="cert-name">{c.name}</div>
                {c.desc && <div className="cert-desc">{c.desc}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {AWARDS[brand.slug] && (
        <div className="cats-wrap" style={{ paddingTop: 0 }}>
          <div className="slabel">Awards &amp; Recognition</div>
          <div className="stitle">Recognised by {brand.name}</div>
          <div className="ssub">
            Honoured by {brand.name} for our sales performance, growth and partnership.
          </div>
          <AwardGrid items={AWARDS[brand.slug]} brandSlug={brand.slug} />
        </div>
      )}

      {brand.protocols && (
        <div className="cats-wrap" style={{ paddingTop: 0 }}>
          <div className="slabel">{brand.protocolsLabel || 'Connectivity'}</div>
          <div className="stitle">{brand.protocolsTitle}</div>
          {brand.protocolsSub && <div className="ssub">{brand.protocolsSub}</div>}
          <div className="proto-grid">
            {brand.protocols.map((pr) => (
              <div className="proto-card" key={pr.name}>
                <div className="proto-logo">
                  {pr.logo ? (
                    <img
                      src={pr.logo}
                      alt={`${pr.name} logo`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <span className="proto-logo-text">{pr.name}</span>
                  )}
                </div>
                <div className="proto-name">{pr.name}</div>
                <div className="proto-desc">{pr.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="cta">
        <FlowLines className="ink" opacity={0.9} />
        <div className="cta-inner">
          <h2>{brand.ctaTitle}</h2>
          <p>{brand.ctaText}</p>
          <div className="cta-btns">
            <button className="btn-w" onClick={() => open(`${brand.name}, General Enquiry`)}>
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
