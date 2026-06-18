import Link from 'next/link';
import '../solution.css';
import FlowLines from '@/components/FlowLines';
import { ROUTES } from '@/lib/routes';
import { brands } from '@/data/brands';

export const metadata = {
  title: 'Product Distribution Solutions',
  alternates: { canonical: '/solutions/product-distribution' },
  description:
    'SSC Control is a solutions-focused distributor for OEMs, panel builders and end users, Mitsubishi & ABB low-voltage switchgear, nVent Hoffman, Schmersal, Connectwell, Hicool, GIC and Unison, backed by application support and 60 years of domain expertise.',
};

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SEGMENTS = [
  {
    tag: 'For OEMs',
    title: 'OEMs & Machine Builders',
    desc: 'A single, dependable source for your standardised bill of materials, so production never waits on parts.',
    points: ['Ready-to-build BOMs & kitting', 'Consistent supply with lead-time commitment', 'Component sizing & selection support', 'One window for switchgear, controls & wiring'],
  },
  {
    tag: 'For Panel Builders',
    title: 'Panel Builders',
    desc: 'Everything that goes inside the panel, switchgear, enclosures, cooling, terminals and wiring, from one stocked partner.',
    points: ['Complete switchgear, enclosures & cooling', 'Terminals, connectors & wiring in one place', 'Fast fulfilment to keep builds on schedule', 'Guidance on selection & compliance'],
  },
  {
    tag: 'For End Users',
    title: 'End Users & Plants',
    desc: 'Genuine products, plant spares and application support that keep your lines running and reduce downtime.',
    points: ['Genuine, warranty-backed products', 'Plant spares & MRO availability', 'Application & replacement support', 'Reliability that reduces downtime'],
  },
];

const PARTNERS = [
  { slug: 'mitsubishi', focus: 'Low Voltage Switchgear' },
  { slug: 'abb', focus: 'Low Voltage Switchgear' },
  { slug: 'nvent', focus: 'Enclosures (Hoffman)' },
  { slug: 'schmersal', focus: 'Safety Switchgear' },
  { slug: 'connectwell', focus: 'Terminals & Wiring' },
  { slug: 'hicool', focus: 'Panel Cooling' },
  { slug: 'gic', focus: 'Control Components' },
  { slug: 'unison', focus: 'SSR & Power Control' },
];

const ind = (paths) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
);
const INDUSTRIES = [
  { name: 'Plastic', icon: ind(<><path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" /></>) },
  { name: 'Chemical', icon: ind(<><path d="M9 2h6M10 2v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 17l-5-9V2" /><path d="M7 14h10" /></>) },
  { name: 'Elevator', icon: ind(<><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 9l-1.5 2h3L9 9zM15 15l1.5-2h-3l1.5 2" /></>) },
  { name: 'Refrigeration', icon: ind(<><path d="M12 2v20M4 7l16 10M20 7L4 17M12 2l-2.5 2M12 2l2.5 2M12 22l-2.5-2M12 22l2.5-2" /></>) },
  { name: 'Tyre', icon: ind(<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" /></>) },
  { name: 'Textile', icon: ind(<><path d="M6 3v18M18 3v18M6 6h12M6 12h12M6 18h12" /></>) },
  { name: 'Power', icon: ind(<><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></>) },
  { name: 'Infrastructure', icon: ind(<><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 11h.01M15 11h.01" /></>) },
  { name: 'Crane', icon: ind(<><path d="M4 21h6M7 21V5M7 5h11l-3 3M7 5l-3 3M15 8v3M15 11h-3" /></>) },
  { name: 'Machine Tool', icon: ind(<><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>) },
  { name: 'Pharma', icon: ind(<><path d="M10.5 3.5a4.95 4.95 0 0 1 7 7l-7 7a4.95 4.95 0 0 1-7-7l7-7z" /><path d="M8 8l8 8" /></>) },
  { name: 'Food & Beverages', icon: ind(<><path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8z" /><path d="M9 8V5a3 3 0 0 1 6 0v3" /></>) },
];

const PROCESS = [
  { n: '01', t: 'Understand', d: 'Your application, specs and constraints.' },
  { n: '02', t: 'Recommend', d: 'The right product & brand for the job.' },
  { n: '03', t: 'Optimise', d: 'The bill of materials for cost & lead time.' },
  { n: '04', t: 'Supply', d: 'From local stock, on schedule.' },
  { n: '05', t: 'Support', d: 'Replacements, spares and queries.' },
  { n: '06', t: 'Sustain', d: 'Long-term availability and service.' },
];

const STRENGTHS = [
  'Authorised partner for 8+ leading brands across switchgear, controls, safety, cooling & wiring',
  'Genuine products with full manufacturer warranty',
  'Application & sizing support, not just order-taking',
  'Local stock for faster fulfilment and shorter lead times',
  'Single source across the entire panel & control bill of materials',
  '60 years serving OEMs, panel builders and industry across Gujarat & beyond',
];

export default function ProductDistributionPage() {
  return (
    <main className="page-solution">
      {/* HERO */}
      <div className="sol-hero">
        <div className="sol-hero-inner">
          <div className="breadcrumb">
            <Link href={ROUTES.home}>Home</Link>
            <span>/</span>
            <span>Solutions</span>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Product Distribution</span>
          </div>
          <div className="hero-tag">Solutions</div>
          <h1>Product Distribution</h1>
          <p className="sol-hero-sub">
            We don&apos;t just sell boxes. SSC Control is a solutions-focused distributor, helping
            OEMs, panel builders and plants choose the right product, from the right brand, for the
            actual application, backed by stock, sizing support and 60 years of domain expertise.
          </p>
          <div className="sol-hero-badges">
            <span className="sol-badge">8+ Authorised Brands</span>
            <span className="sol-badge">OEM · Panel Builder · End User</span>
          </div>
        </div>
      </div>

      {/* APPROACH */}
      <section className="sol-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-narrow">
          <div className="sec-label">Our Approach</div>
          <h2 className="sec-title">Solution providers, not box-sellers</h2>
          <p className="sec-body">
            Anyone can quote a part number. We help you specify the right one. Our team understands
            switchgear, controls, safety and cooling deeply enough to recommend what actually fits
            your application, optimise your bill of materials, and keep it supplied reliably, so you
            get a working solution, not just a delivery.
          </p>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="sol-section alt">
        <div className="sol-wrap">
          <div className="sec-label center">Who We Serve</div>
          <h2 className="sec-title center">Built around how you build</h2>
          <div className="seg-grid">
            {SEGMENTS.map((s) => (
              <div className="seg-card" key={s.title}>
                <div className="seg-tag">{s.tag}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>
                      {CHECK}
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUSED PARTNERS */}
      <section className="sol-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-wrap">
          <div className="sec-label center">Focused Partners</div>
          <h2 className="sec-title center">A curated line-up, mastered, not a catalogue</h2>
          <div className="partner-logos">
            {PARTNERS.map(({ slug, focus }) => {
              const b = brands[slug];
              return (
                <Link href={ROUTES.brand(slug)} className="partner-logo-card" key={slug}>
                  <div className="partner-logo-box">
                    {b?.logo ? <img src={b.logo} alt={b.name} /> : <span>{b?.name || slug}</span>}
                  </div>
                  <div className="partner-focus">{b?.name}</div>
                  <div className="partner-sub">{focus}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="sol-section alt">
        <div className="sol-wrap">
          <div className="sec-label center">Industries We Serve</div>
          <h2 className="sec-title center">Trusted across demanding industries</h2>
          <div className="ind-grid">
            {INDUSTRIES.map((i) => (
              <div className="ind-item" key={i.name}>
                <div className="ind-icon">{i.icon}</div>
                <div className="ind-name">{i.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DO IT */}
      <section className="sol-section">
        <div className="sol-wrap">
          <div className="sec-label center">How We Do It</div>
          <h2 className="sec-title center">From requirement to reliable supply</h2>
          <div className="proc-grid">
            {PROCESS.map((p) => (
              <div className="proc-step" key={p.n}>
                <div className="proc-n">{p.n}</div>
                <div className="proc-t">{p.t}</div>
                <div className="proc-d">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SSC */}
      <section className="sol-section alt">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-narrow">
          <div className="sec-label">Why SSC Control</div>
          <h2 className="sec-title">More than a supplier</h2>
          <ul className="why-list">
            {STRENGTHS.map((s) => (
              <li key={s}>
                {CHECK}
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <div className="sol-cta">
        <div className="sol-cta-inner">
          <h2>Need the right components for your build?</h2>
          <p>
            Send us your requirement or bill of materials, our team will help you select, source and
            supply the right products for your application.
          </p>
          <div className="sol-cta-btns">
            <Link href={ROUTES.contact} className="btn-w">
              Talk to Our Team
            </Link>
            <Link href={ROUTES.partners} className="btn-ghost">
              View All Partners
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
