import Link from 'next/link';
import './about.css';
import FlowLines from '@/components/FlowLines';

export const metadata = {
  title: 'About Us, Company Overview',
  alternates: { canonical: '/about' },
  description:
    "SSC Control Pvt Ltd, 60 years of engineering excellence. India's trusted partner in electrical, automation and engineering solutions.",
};

export default function AboutPage() {
  return (
    <main className="page-about">

      {/* HERO */}
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-deco">60</div>
        <div className="hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>About Us</span>
          </div>
          <div className="hero-tag">Established 1966</div>
          <h1>Engineering Industries.<br /><em>Powering Progress.</em></h1>
          <div className="hero-tagline">A 60-year legacy of trust in electrical, automation, and engineering solutions, built on strong partnerships, deep expertise, and a relentless commitment to shared success.</div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="stat-num"><em>60</em>+</div><div className="stat-lbl">Years of Trust</div></div>
            <div className="hero-stat"><div className="stat-num"><em>15</em>+</div><div className="stat-lbl">Brand Partners</div></div>
            <div className="hero-stat"><div className="stat-num"><em>4</em></div><div className="stat-lbl">Solution Verticals</div></div>
            <div className="hero-stat"><div className="stat-num"><em>3</em></div><div className="stat-lbl">Offices</div></div>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="section-inner">
          <div className="sec-label">Who We Are</div>
          <div className="sec-title">India's Trusted Engineering Partner</div>
          <div className="sec-body">
            <p>SSC Control Pvt. Ltd. is a 60-year-old organisation and one of India's most trusted names in the field of electrical, automation, and engineering solutions. Over the decades, we have built strong partnerships with machine builders, OEMs, panel builders, and industrial enterprises, delivering quality products, deep technical expertise, and dependable service.</p>
            <p>At SSC, we are evolving beyond distribution, with a clear focus on becoming a future-ready engineering company driven by innovation, technology, and a service-first mindset.</p>
          </div>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="vm-section">
        <div className="vm-grid">
          <div className="vm-card vision">
            <div className="vm-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
                <line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" />
                <line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <div className="vm-title">Our Vision</div>
            <div className="vm-text">To become a leading engineering company, built on innovation, a service-first approach, and people at our core, driving automation and electrification solutions that contribute to nation building.</div>
          </div>
          <div className="vm-card mission">
            <div className="vm-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="vm-title">Our Mission</div>
            <div className="vm-text">To deliver smart, reliable, and innovative automation and electrification solutions through engineering excellence, with people at the heart of everything we do and a strong focus on shared success.</div>
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="section" style={{ background: 'var(--white)' }}>
        <FlowLines className="ink" opacity={0.9} />
        <div className="section-inner">
          <div className="sec-label">What We Stand For</div>
          <div className="sec-title">Our Core Values</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px', marginTop: '36px' }} className="values-grid">

            <div className="value-card">
              <div className="value-icon" style={{ background: 'rgba(30,95,170,0.08)', color: '#1e5faa' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="value-name">Integrity</div>
              <div className="value-desc">We do what we say. Honest, ethical, and consistent, in every interaction with the businesses we serve, partners, and colleagues.</div>
            </div>

            <div className="value-card">
              <div className="value-icon" style={{ background: 'rgba(20,102,196,0.1)', color: '#1466c4' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="value-name">Ownership &amp; Transparency</div>
              <div className="value-desc">We take full accountability for our actions and results, and we communicate openly, without filters, at every level.</div>
            </div>

            <div className="value-card">
              <div className="value-icon" style={{ background: 'rgba(230,0,18,0.07)', color: '#E60012' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="value-name">Innovation</div>
              <div className="value-desc">We challenge the status quo. Constantly seeking smarter solutions and better ways to serve the industries we work with and grow the business.</div>
            </div>

            <div className="value-card">
              <div className="value-icon" style={{ background: 'rgba(0,148,68,0.08)', color: '#009444' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="value-name">People Centric</div>
              <div className="value-desc">Our people are our greatest asset. We invest in their growth, wellbeing, and success, because when our people thrive, the businesses we serve do too.</div>
            </div>

          </div>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="wwd-section">
        <div className="wwd-inner">
          <div className="wwd-label">What We Do</div>
          <div className="wwd-title">End-to-End Engineering Solutions</div>
          <div className="wwd-grid">
            <div className="wwd-card">
              <div className="wwd-num">01</div>
              <div className="wwd-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className="wwd-name">Industrial Automation</div>
              <div className="wwd-desc">PLCs, HMIs, servo systems, VFDs, and complete automation solutions for machine builders and OEMs.</div>
            </div>
            <div className="wwd-card">
              <div className="wwd-num">02</div>
              <div className="wwd-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <div className="wwd-name">Product Distribution</div>
              <div className="wwd-desc">Authorised distribution of 15+ global brands, switchgear, terminals, enclosures, safety devices and more.</div>
            </div>
            <div className="wwd-card">
              <div className="wwd-num">03</div>
              <div className="wwd-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="wwd-name">Safety Solutions</div>
              <div className="wwd-desc">Machine safety products, interlocks, light curtains, safety PLCs and area scanners to SIL3 / PLe.</div>
            </div>
            <div className="wwd-card">
              <div className="wwd-num">04</div>
              <div className="wwd-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
                </svg>
              </div>
              <div className="wwd-name">Robotics</div>
              <div className="wwd-desc">Industrial robot solutions, MELFA series articulated and SCARA robots for assembly, welding and handling.</div>
            </div>
          </div>
        </div>
      </div>

      {/* COMMITMENT */}
      <div className="commit-section">
        <FlowLines opacity={0.5} />
        <div className="commit-inner">
          <div>
            <div className="commit-label">Our Commitment</div>
            <div className="commit-title">Engineering Excellence, Built for the Future</div>
            <div className="commit-body">With a legacy of trust and a vision for the future, SSC continues to empower industries by combining engineering excellence, innovative thinking, and a people-first approach, ensuring sustainable growth for the industries we serve and contributing to the progress of the nation.</div>
          </div>
          <div className="commit-pillars">
            <div className="pillar">
              <div className="pillar-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div><div className="pillar-text">Engineering Excellence</div><div className="pillar-sub">Technical depth across every solution we deliver</div></div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div><div className="pillar-text">60 Years of Trust</div><div className="pillar-sub">A legacy built on reliability and relationships</div></div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div><div className="pillar-text">People First</div><div className="pillar-sub">Our team and the industries we serve are at our core</div></div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div><div className="pillar-text">Innovation-Driven Growth</div><div className="pillar-sub">Evolving beyond distribution into full solutions</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-inner">
          <h2>Let's Build Something Great Together</h2>
          <p>Partner with SSC Control for your next automation, electrical, or safety project.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn-white">Get in Touch</Link>
          </div>
        </div>
      </div>

    </main>
  );
}
