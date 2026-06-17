import Link from 'next/link';
import '../solution.css';
import FlowLines from '@/components/FlowLines';
import { ROUTES } from '@/lib/routes';

export const metadata = {
  title: 'Industrial Automation Solutions',
  description:
    'Engineering-led industrial automation by SSC Control, product selection, application development, control architecture, PLC programming and HMI design, powered by Mitsubishi Electric.',
};

const CAPABILITIES = [
  {
    title: 'Product Selection',
    desc: 'We size and select the right PLC, drive, servo and HMI for your load, cycle time and budget, across the full Mitsubishi MELSEC, MELSERVO and FR inverter range, so nothing is over- or under-specified.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Application Development',
    desc: 'We translate your process requirements into a working automation concept, sequence design, I/O planning and proof-of-concept, tailored to your specific machine or production line.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 6 6 .9-4.5 4.4 1 6.7L12 17l-5.5 3 1-6.7L3 8.9 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Architecture',
    desc: 'We design the control and network architecture, PLC, remote I/O, drives and HMI tied together over CC-Link IE / Ethernet, for performance, scalability and easy maintenance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" />
        <path d="M12 8v4M12 12H5v4M12 12h7v4" />
      </svg>
    ),
  },
  {
    title: 'Programming',
    desc: 'Our engineers develop and test PLC logic in GX Works3, structured, documented and built to your sequence, for MELSEC iQ-R, iQ-F and FX5 controllers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'HMI Screens',
    desc: 'We design intuitive operator screens in GT Designer for Mitsubishi GOT panels, clear visualisation, alarms, recipes and dashboards your operators actually find usable.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M6 7h6M6 11h4" />
      </svg>
    ),
  },
  {
    title: 'Commissioning & Support',
    desc: 'On-site commissioning, panel integration, operator training and long-term spares and service, so the system runs reliably long after handover.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.7-.7-.7-2.7z" />
      </svg>
    ),
  },
];

const MITSUBISHI_RANGE = [
  { name: 'MELSEC iQ-R / iQ-F / FX5 PLCs', note: 'Programmable controllers for machine and process control' },
  { name: 'GOT2000 HMIs', note: 'Graphic operator terminals with high-res visualisation' },
  { name: 'FR-A800 / F800 Inverters', note: 'Variable frequency drives for precise motor control' },
  { name: 'MELSERVO-J5 Servo Systems', note: 'High-response servo amplifiers and motors for motion' },
  { name: 'CC-Link IE Networks', note: 'Gigabit industrial Ethernet for deterministic control' },
  { name: 'SCADA & Edge / IIoT', note: 'Plant-wide data, monitoring and connectivity' },
];

const PROCESS = [
  { n: '01', t: 'Consult', d: 'Understand your machine, process and goals.' },
  { n: '02', t: 'Select', d: 'Specify the right Mitsubishi hardware.' },
  { n: '03', t: 'Design', d: 'Control architecture, I/O and network.' },
  { n: '04', t: 'Program', d: 'PLC logic in GX Works3, tested.' },
  { n: '05', t: 'Visualise', d: 'GOT/HMI screens for operators.' },
  { n: '06', t: 'Commission', d: 'On-site start-up, training, support.' },
];

const STRENGTHS = [
  '60 years of engineering trust in electrical & automation',
  'Authorised Mitsubishi Electric partner, genuine products with warranty',
  'In-house automation engineering team (selection to programming)',
  'Single source: products, panel manufacturing, programming & commissioning',
  'On-site commissioning, operator training and long-term spares support',
];

export default function IndustrialAutomationPage() {
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
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Industrial Automation</span>
          </div>
          <div className="hero-tag">Solutions</div>
          <h1>Industrial Automation</h1>
          <p className="sol-hero-sub">
            From product selection to programming and HMI, SSC Control delivers complete industrial
            automation solutions, powered by Mitsubishi Electric and backed by 60 years of
            engineering depth.
          </p>
          <div className="sol-hero-badges">
            <span className="sol-badge">Authorised Mitsubishi Electric Partner</span>
            <span className="sol-badge">In-house Engineering Team</span>
          </div>
        </div>
      </div>

      {/* APPROACH */}
      <section className="sol-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-narrow">
          <div className="sec-label">Our Approach</div>
          <h2 className="sec-title">Engineering-led automation, not just supply</h2>
          <p className="sec-body">
            Most distributors stop at the box. We don&apos;t. SSC Control pairs genuine Mitsubishi
            Electric automation products with an in-house engineering team that takes your
            application from concept to commissioning, selecting the right hardware, designing the
            control architecture, writing the PLC logic, and building the operator screens your team
            runs every day.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="sol-section alt">
        <div className="sol-wrap">
          <div className="sec-label center">What We Do</div>
          <h2 className="sec-title center">End-to-end automation capabilities</h2>
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

      {/* MITSUBISHI RANGE */}
      <section className="sol-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-wrap">
          <div className="sol-split">
            <div className="sol-split-copy">
              <div className="sec-label">Technology Partner</div>
              <Link href={ROUTES.brand('mitsubishi')} className="sol-partner-link"><img src="/logos/mitsubishi.svg" alt="Mitsubishi Electric, SSC Control industrial automation partner" className="sol-partner-logo" /></Link>
              <h2 className="sec-title">Powered by Mitsubishi Electric</h2>
              <p className="sec-body">
                As an authorised Mitsubishi Electric partner, we build on one of the world&apos;s most
                trusted automation platforms, from compact machine control to plant-wide systems, 
                with genuine products, full warranty and local support.
              </p>
              <Link href={ROUTES.brand('mitsubishi')} className="sol-link">
                Explore the Mitsubishi range →
              </Link>
            </div>
            <div className="range-grid">
              {MITSUBISHI_RANGE.map((r) => (
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
          <h2 className="sec-title center">From requirement to running line</h2>
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
          <h2 className="sec-title">A partner that owns the outcome</h2>
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
          <h2>Planning an automation project?</h2>
          <p>
            Tell us about your machine or line, our engineers will help you select the right
            Mitsubishi hardware, design the architecture, and build it end to end.
          </p>
          <div className="sol-cta-btns">
            <Link href={ROUTES.contact} className="btn-w">
              Talk to an Engineer
            </Link>
            <Link href={ROUTES.brand('mitsubishi')} className="btn-ghost">
              View Mitsubishi Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
