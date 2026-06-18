import Link from 'next/link';
import '../solution.css';
import FlowLines from '@/components/FlowLines';
import { ROUTES } from '@/lib/routes';

export const metadata = {
  title: 'Industrial Safety Solutions',
  alternates: { canonical: '/solutions/industrial-safety' },
  description:
    'Engineering-led machine safety by SSC Control, risk assessment, safety concept & design, product selection, safety circuit architecture, safety-controller programming and validation, powered by Schmersal.',
};

const CAPABILITIES = [
  {
    title: 'Risk Assessment',
    desc: 'We assess machine hazards and determine the required Performance Level (PLr) to ISO 13849-1 / IEC 62061, the foundation of a compliant, right-sized safety system.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.3 3.2 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.2a2 2 0 0 0-3.4 0z" /><path d="M12 9v4M12 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Safety Concept & Design',
    desc: 'We define the safety functions, guarding concept and access strategy for your machine or line, balancing protection, productivity and operator workflow.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Product Selection',
    desc: 'We select the right interlocks, light curtains, safety relays and controllers from the Schmersal range to achieve your target Performance Level, nothing over- or under-specified.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Safety Architecture',
    desc: 'We design the safety control architecture, category, redundancy, diagnostics and wiring, so the implemented circuit actually meets the required PL.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" />
        <path d="M12 8v4M12 12H5v4M12 12h7v4" />
      </svg>
    ),
  },
  {
    title: 'Programming',
    desc: 'We configure and program safety controllers and safety PLCs (Schmersal PROTECT PSC), logic that is structured, documented and built to your safety functions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Validation & Commissioning',
    desc: 'We verify and validate that each safety function achieves its required PL, commission on-site, and hand over full documentation, plus operator and maintenance training.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.7-.7-.7-2.7z" />
      </svg>
    ),
  },
];

const SCHMERSAL_RANGE = [
  { name: 'Safety Switches & Interlocks', note: 'AZ/AZM solenoid interlocks and guard locking' },
  { name: 'Safety Light Curtains & Grids', note: 'SLC/SLG optoelectronic protective devices' },
  { name: 'Safety Controllers & Relays', note: 'PROTECT PSC safety PLCs and SRB relay modules' },
  { name: 'RFID Safety Sensors', note: 'Coded non-contact sensors with high coding levels' },
  { name: 'Emergency Stop & Command', note: 'E-stops, two-hand controls and enabling switches' },
  { name: 'Position & Limit Switches', note: 'Robust position switches for harsh environments' },
];

const PROCESS = [
  { n: '01', t: 'Assess', d: 'Machine risk assessment & required PL.' },
  { n: '02', t: 'Concept', d: 'Define safety functions & guarding.' },
  { n: '03', t: 'Select', d: 'Right Schmersal devices for the PL.' },
  { n: '04', t: 'Design', d: 'Safety circuit & architecture.' },
  { n: '05', t: 'Validate', d: 'Program, verify & validate the PL.' },
  { n: '06', t: 'Commission', d: 'Install, document & train.' },
];

const STRENGTHS = [
  '60 years of trust in industrial safety & electrical engineering',
  'Authorised Schmersal partner, genuine products with warranty',
  'In-house safety engineering: risk assessment to validation',
  'Designed to ISO 13849-1 / IEC 62061 machine-safety standards',
  'Single source: safety products, panel integration, programming & validation',
  'On-site commissioning, documentation and operator training',
];

export default function IndustrialSafetyPage() {
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
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Industrial Safety</span>
          </div>
          <div className="hero-tag">Solutions</div>
          <h1>Industrial Safety</h1>
          <p className="sol-hero-sub">
            From risk assessment to validation, SSC Control delivers complete machine-safety
            solutions, powered by Schmersal and backed by 60 years of engineering depth and
            compliance know-how.
          </p>
          <div className="sol-hero-badges">
            <span className="sol-badge">Authorised Schmersal Partner</span>
            <span className="sol-badge">Machine Safety Engineering</span>
          </div>
        </div>
      </div>

      {/* APPROACH */}
      <section className="sol-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-narrow">
          <div className="sec-label">Our Approach</div>
          <h2 className="sec-title">Safety engineered in, not bolted on</h2>
          <p className="sec-body">
            A safe machine is more than a light curtain at the end. SSC Control pairs genuine
            Schmersal safety products with an in-house engineering team that starts at the risk
            assessment, defining the right safety functions, selecting devices that meet the
            required Performance Level, designing the safety circuit, programming the safety
            controller, and validating that it all actually performs to standard.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="sol-section alt">
        <div className="sol-wrap">
          <div className="sec-label center">What We Do</div>
          <h2 className="sec-title center">End-to-end machine-safety capabilities</h2>
          <div className="cap-grid">
            {CAPABILITIES.map((c) => (
              <div className="cap-card" key={c.title}>
                <div className="cap-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHMERSAL RANGE */}
      <section className="sol-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-wrap">
          <div className="sol-split">
            <div className="sol-split-copy">
              <div className="sec-label">Technology Partner</div>
              <Link href={ROUTES.brand('schmersal')} className="sol-partner-link"><img src="/logos/schmersal.svg" alt="Schmersal, SSC Control machine safety partner" className="sol-partner-logo" /></Link>
              <h2 className="sec-title">Powered by Schmersal</h2>
              <p className="sec-body">
                As an authorised Schmersal partner, we build on a global leader in machine safety, 
                from coded interlocks and light curtains to safety controllers, with genuine
                products, full warranty and local engineering support.
              </p>
              <Link href={ROUTES.brand('schmersal')} className="sol-link">
                Explore the Schmersal range →
              </Link>
            </div>
            <div className="range-grid">
              {SCHMERSAL_RANGE.map((r) => (
                <div className="range-item" key={r.name}>
                  <div className="range-name">{r.name}</div>
                  <div className="range-note">{r.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sol-section alt">
        <div className="sol-wrap">
          <div className="sec-label center">How We Deliver</div>
          <h2 className="sec-title center">From hazard to validated safety</h2>
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
      <section className="sol-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-narrow">
          <div className="sec-label">Why SSC Control</div>
          <h2 className="sec-title">A safety partner that owns the outcome</h2>
          <ul className="why-list">
            {STRENGTHS.map((s) => (
              <li key={s}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <div className="sol-cta">
        <div className="sol-cta-inner">
          <h2>Need to make a machine safe & compliant?</h2>
          <p>
            Tell us about your machine, our engineers will assess the risk, select the right
            Schmersal devices, design the safety circuit, and validate it to standard.
          </p>
          <div className="sol-cta-btns">
            <Link href={ROUTES.contact} className="btn-w">
              Talk to a Safety Engineer
            </Link>
            <Link href={ROUTES.brand('schmersal')} className="btn-ghost">
              View Schmersal Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
