import Link from 'next/link';
import '../solution.css';
import FlowLines from '@/components/FlowLines';
import { ROUTES } from '@/lib/routes';

export const metadata = {
  title: 'Industrial Software Solutions',
  description:
    'Digital-factory software by SSC Control, SCADA, MES, data logging and energy management built on Mitsubishi e-F@ctory and ICONICS, plus custom factory software developed in-house at SSC.',
};

const CAPABILITIES = [
  {
    title: 'SCADA & Visualisation',
    desc: 'Plant-wide supervisory control and real-time dashboards with ICONICS GENESIS64 / MC Works64, one clear view of your whole operation, on screen or on the web.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M6 13l3-3 2 2 4-5 3 4" />
      </svg>
    ),
  },
  {
    title: 'MES',
    desc: 'Manufacturing Execution, production tracking, genealogy and traceability, OEE and paperless operations that connect the shop floor to your business systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8" width="3" height="10" /><rect x="17" y="5" width="3" height="13" />
      </svg>
    ),
  },
  {
    title: 'Data Logging & Historian',
    desc: 'High-speed data collection straight from your PLCs via Mitsubishi data loggers and MELIPC edge devices, stored, trended and ready for analysis.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
      </svg>
    ),
  },
  {
    title: 'Energy Management',
    desc: 'Monitor, benchmark and reduce energy consumption with ICONICS Energy AnalytiX, turning meter data into actionable savings across the plant.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Edge & IIoT Integration',
    desc: 'Bridge the shop floor (FA) to your IT systems with Mitsubishi e-F@ctory edge computing, collect, pre-process and feed data to MES, ERP and the cloud.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" />
      </svg>
    ),
  },
  {
    title: 'Custom Software Development',
    desc: 'Off-the-shelf does not always fit. Our in-house team builds bespoke factory software, dashboards, reports, traceability and integrations, tailored to how your plant actually runs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="13" y1="4" x2="11" y2="20" />
      </svg>
    ),
  },
];

const RANGE = [
  { name: 'ICONICS GENESIS64 SCADA', note: '64-bit supervisory control & web visualisation' },
  { name: 'MES Interface & Execution', note: 'Traceability, OEE and shop-floor-to-IT connectivity' },
  { name: 'Data Loggers & Historian', note: 'High-speed PLC data capture and storage' },
  { name: 'MELIPC Edge Computing', note: 'Edge analytics and predictive maintenance' },
  { name: 'Energy AnalytiX', note: 'Plant energy monitoring and optimisation' },
  { name: 'Custom Apps by SSC', note: 'Bespoke dashboards, reports and integrations' },
];

const PROCESS = [
  { n: '01', t: 'Assess', d: 'Your data, visibility and reporting needs.' },
  { n: '02', t: 'Architect', d: 'Shop-floor, edge and IT data layers.' },
  { n: '03', t: 'Build', d: 'Configure SCADA / MES platforms.' },
  { n: '04', t: 'Integrate', d: 'Connect PLCs and log live data.' },
  { n: '05', t: 'Customise', d: 'Bespoke apps, reports & dashboards.' },
  { n: '06', t: 'Deploy', d: 'Commission, train and support.' },
];

const STRENGTHS = [
  '60 years of automation engineering depth across the shop floor',
  'Built on Mitsubishi e-F@ctory and ICONICS SCADA / MES platforms',
  'In-house software team, we customise and build, not just install',
  'One partner from PLCs and data loggers to IT dashboards',
  'Custom factory software developed at SSC for your specific process',
  'Deployment, integration, training and long-term support',
];

// ISA-95 automation pyramid, top (L5) to bottom (L1)
const LEVELS = [
  { n: 5, short: 'IoT & AI', name: 'Level 5, IoT & AI', w: '46%', color: '#2f86e0', desc: 'IoT, AI/ML and big-data analytics for predictive maintenance and autonomous, adaptive production.', ssc: 'Edge analytics & custom software' },
  { n: 4, short: 'Enterprise · ERP', name: 'Level 4, Enterprise (ERP)', w: '60%', color: '#1f6fd0', desc: 'ERP connecting finance, supply chain, HR and CRM for organisation-wide planning and visibility.', ssc: 'Data feeds & integration to ERP' },
  { n: 3, short: 'Operation · MES', name: 'Level 3, Operation (MES)', w: '74%', color: '#1466c4', desc: 'MES bridges the shop floor and enterprise, production monitoring, quality, traceability and inventory.', ssc: 'MES & data logging' },
  { n: 2, short: 'Supervisory · PLC / SCADA', name: 'Level 2, Supervisory (PLC / SCADA)', w: '88%', color: '#0c4f9e', desc: 'PLCs and SCADA for centralised, real-time monitoring, visualisation and control of processes.', ssc: 'Mitsubishi PLCs + ICONICS SCADA' },
  { n: 1, short: 'Device · Field', name: 'Level 1, Device (Field)', w: '100%', color: '#0d2b52', desc: 'Sensors, actuators, drives and field devices connected to the network, the data foundation.', ssc: 'Genuine field devices & components' },
];

export default function IndustrialSoftwarePage() {
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
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Industrial Software</span>
          </div>
          <div className="hero-tag">Solutions</div>
          <h1>Industrial Software</h1>
          <p className="sol-hero-sub">
            Connect your shop floor to IT and turn machine data into decisions. SSC Control delivers
            SCADA, MES, data-logging and energy software, built on Mitsubishi e-F@ctory and ICONICS
, and develops custom factory software in-house when off-the-shelf isn&apos;t enough.
          </p>
          <div className="sol-hero-badges">
            <span className="sol-badge">Powered by Mitsubishi e-F@ctory &amp; ICONICS</span>
            <span className="sol-badge">Custom Software Built at SSC</span>
          </div>
        </div>
      </div>

      {/* APPROACH */}
      <section className="sol-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-narrow">
          <div className="sec-label">Our Approach</div>
          <h2 className="sec-title">From machine data to decisions</h2>
          <p className="sec-body">
            A connected factory is only as good as the software that runs it. SSC Control bridges the
            gap between FA and IT, collecting data at the edge, visualising it in SCADA, executing
            and tracing production in MES, and surfacing energy and OEE insights. And where a standard
            product can&apos;t do the job, our in-house team builds the software that can.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="sol-section alt">
        <div className="sol-wrap">
          <div className="sec-label center">What We Do</div>
          <h2 className="sec-title center">Software for the connected factory</h2>
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

      {/* AUTOMATION PYRAMID */}
      <section className="sol-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-wrap">
          <div className="sec-label center">The Big Picture</div>
          <h2 className="sec-title center">Where it fits: the ISA-95 automation pyramid</h2>
          <p className="sec-body" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 44px' }}>
            The automation pyramid, based on the ISA-95 standard, describes how a factory connects
            from the shop floor up to the enterprise. SSC Control delivers at every level, and links
            them together into one connected operation.
          </p>
          <div className="pyr-wrap">
            <div className="pyramid">
              {LEVELS.map((l) => (
                <div className="tier" key={l.n} style={{ width: l.w, background: l.color }}>
                  <span className="tier-n">L{l.n}</span> {l.short}
                </div>
              ))}
            </div>
            <div className="pyr-levels">
              {LEVELS.map((l) => (
                <div className="pyr-level" key={l.n}>
                  <div className="pyr-badge">{l.n}</div>
                  <div>
                    <h4>{l.name}</h4>
                    <p>{l.desc}</p>
                    <span className="pyr-ssc">SSC: {l.ssc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RANGE */}
      <section className="sol-section alt">
        <div className="sol-wrap">
          <div className="sol-split">
            <div className="sol-split-copy">
              <div className="sec-label">Technology Platform</div>
              <Link href={ROUTES.brand('mitsubishi')} className="sol-partner-link"><img src="/logos/mitsubishi.svg" alt="Mitsubishi Electric, SSC Control industrial software partner" className="sol-partner-logo" /></Link>
              <h2 className="sec-title">Built on Mitsubishi e-F@ctory &amp; ICONICS</h2>
              <p className="sec-body">
                e-F@ctory integrates factory automation with IT across edge, data and visualisation
                layers, with ICONICS GENESIS64 SCADA at its core. We implement it end to end, and
                extend it with software we build ourselves.
              </p>
              <Link href={ROUTES.brand('mitsubishi')} className="sol-link">
                Explore Mitsubishi automation →
              </Link>
            </div>
            <div className="range-grid">
              {RANGE.map((r) => (
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
      <section className="sol-section">
        <div className="sol-wrap">
          <div className="sec-label center">How We Deliver</div>
          <h2 className="sec-title center">From data strategy to live system</h2>
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
          <h2 className="sec-title">Software partners who can also build</h2>
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
          <h2>Want to digitise your factory?</h2>
          <p>
            Tell us what you need to see, track or report, our engineers will architect the right
            SCADA / MES / data solution, and build any custom software your plant requires.
          </p>
          <div className="sol-cta-btns">
            <Link href={ROUTES.contact} className="btn-w">
              Talk to Our Software Team
            </Link>
            <Link href={ROUTES.brand('mitsubishi')} className="btn-ghost">
              View Mitsubishi Range
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
