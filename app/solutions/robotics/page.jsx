import Link from 'next/link';
import '../solution.css';
import FlowLines from '@/components/FlowLines';
import { ROUTES } from '@/lib/routes';

export const metadata = {
  title: 'Robotics Solutions',
  description:
    'Vision-guided robotic automation by SSC Control — application study, robot selection, vision integration, cell design, programming and commissioning, powered by Mitsubishi MELFA robots and Sensopart machine vision.',
};

const CHK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CAPABILITIES = [
  {
    title: 'Application Study',
    desc: 'We assess the task — pick & place, machine tending, palletising, assembly — with cycle-time and ROI analysis to confirm robotics is the right fit before you invest.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: 'Robot Selection',
    desc: 'We specify the right MELFA robot — RV vertical articulated, RH SCARA, or ASSISTA collaborative — matched to your reach, payload and cycle-time requirements.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="6" rx="1" /><path d="M12 8v5l-5 4M12 13l5 4" /><circle cx="7" cy="19" r="2" /><circle cx="17" cy="19" r="2" />
      </svg>
    ),
  },
  {
    title: 'Vision Integration',
    desc: 'We add Sensopart VISOR machine vision for part location, orientation and quality inspection — enabling reliable vision-guided robotics, even on randomly placed parts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Cell Design',
    desc: 'We design the robot cell — layout, end-of-arm tooling and grippers, safety guarding, and integration with PLCs, conveyors and the wider line.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: 'Programming & Simulation',
    desc: 'We program robots in RT ToolBox3, validate cycle times with offline simulation, and calibrate the vision-to-robot coordinate system for accurate, repeatable picks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Installation & Commissioning',
    desc: 'We integrate, install and commission the cell on-site, prove the cycle, and train your team — with long-term programming and spares support.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.7-.7-.7-2.7z" />
      </svg>
    ),
  },
];

const APPLICATIONS = [
  'Pick & Place',
  'Machine Tending',
  'Palletising',
  'Assembly',
  'Material Handling',
  'Vision Inspection',
  'Packaging',
  'Dispensing & Sealing',
  'Screw Driving',
];

const PROCESS = [
  { n: '01', t: 'Study', d: 'Application feasibility & ROI.' },
  { n: '02', t: 'Select', d: 'Right MELFA robot for the job.' },
  { n: '03', t: 'Vision', d: 'Integrate Sensopart guidance.' },
  { n: '04', t: 'Design', d: 'Cell, tooling & safety.' },
  { n: '05', t: 'Program', d: 'RT ToolBox3 + simulation.' },
  { n: '06', t: 'Commission', d: 'Install, prove & train.' },
];

const STRENGTHS = [
  '60 years of automation engineering applied to robotic cells',
  'Authorised Mitsubishi MELFA robot partner — genuine products & warranty',
  'Sensopart machine-vision integration for vision-guided robotics',
  'In-house robot programming, simulation and vision calibration',
  'Single source: robot, vision, panel, safety and integration',
  'On-site commissioning, operator training and long-term support',
];

export default function RoboticsPage() {
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
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Robotics</span>
          </div>
          <div className="hero-tag">Solutions</div>
          <h1>Robotics</h1>
          <p className="sol-hero-sub">
            Vision-guided robotic automation, engineered end to end. SSC Control studies the
            application, selects the robot, integrates the vision, and programs and commissions the
            cell — powered by Mitsubishi MELFA robots and Sensopart machine vision.
          </p>
          <div className="sol-hero-badges">
            <span className="sol-badge">Mitsubishi MELFA Robots</span>
            <span className="sol-badge">Sensopart Machine Vision</span>
          </div>
        </div>
      </div>

      {/* APPROACH */}
      <section className="sol-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-narrow">
          <div className="sec-label">Our Approach</div>
          <h2 className="sec-title">Robots that see, integrated and programmed</h2>
          <p className="sec-body">
            A robot arm on its own isn&apos;t a solution. SSC Control engineers the whole cell — the
            right MELFA robot for the reach and payload, Sensopart vision so it can locate and inspect
            parts, the tooling and safety around it, and the programming that makes it repeatable.
            From a single pick-and-place station to a fully integrated line.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="sol-section alt">
        <div className="sol-wrap">
          <div className="sec-label center">What We Do</div>
          <h2 className="sec-title center">End-to-end robotic automation</h2>
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

      {/* TECHNOLOGY PARTNERS (dual) */}
      <section className="sol-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="sol-wrap">
          <div className="sec-label center">Technology Partners</div>
          <h2 className="sec-title center">Robots + vision, integrated</h2>
          <div className="duo-grid">
            <div className="duo-card">
              <div className="duo-logo">
                <img src="/logos/mitsubishi.svg" alt="Mitsubishi Electric" />
              </div>
              <h3>Mitsubishi MELFA Robots</h3>
              <p className="duo-sub">
                Fast, precise industrial robots for assembly, handling and machine tending.
              </p>
              <ul className="duo-list">
                <li>{CHK}<span>RV Series — vertical articulated 6-axis robots</span></li>
                <li>{CHK}<span>RH Series — SCARA (horizontal) high-speed robots</span></li>
                <li>{CHK}<span>ASSISTA — collaborative robot (cobot)</span></li>
                <li>{CHK}<span>CR800 controllers &amp; RT ToolBox3 software</span></li>
              </ul>
              <Link href={ROUTES.brand('mitsubishi')} className="sol-link">
                Explore Mitsubishi →
              </Link>
            </div>
            <div className="duo-card">
              <div className="duo-logo">
                <img src="/logos/sensopart.svg" alt="Sensopart" />
              </div>
              <h3>Sensopart Machine Vision</h3>
              <p className="duo-sub">
                Compact, powerful vision sensors for guidance, identification and inspection.
              </p>
              <ul className="duo-list">
                <li>{CHK}<span>VISOR Robotic — robot guidance &amp; part location</span></li>
                <li>{CHK}<span>VISOR Object — presence, completeness &amp; quality</span></li>
                <li>{CHK}<span>VISOR Code Reader — 1D / 2D code reading</span></li>
                <li>{CHK}<span>Easy calibration to the robot coordinate system</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="sol-section alt">
        <div className="sol-wrap">
          <div className="sec-label center">Applications</div>
          <h2 className="sec-title center">What we automate</h2>
          <div className="ind-grid">
            {APPLICATIONS.map((a) => (
              <div className="ind-item" key={a}>
                <div className="ind-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="ind-name">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sol-section">
        <div className="sol-wrap">
          <div className="sec-label center">How We Deliver</div>
          <h2 className="sec-title center">From application to automated cell</h2>
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
          <h2 className="sec-title">A robotics partner that owns the cell</h2>
          <ul className="why-list">
            {STRENGTHS.map((s) => (
              <li key={s}>
                {CHK}
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <div className="sol-cta">
        <div className="sol-cta-inner">
          <h2>Thinking of automating with robots?</h2>
          <p>
            Tell us about the task — our engineers will study the application, select the right MELFA
            robot and Sensopart vision, and build the cell end to end.
          </p>
          <div className="sol-cta-btns">
            <Link href={ROUTES.contact} className="btn-w">
              Talk to a Robotics Engineer
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
