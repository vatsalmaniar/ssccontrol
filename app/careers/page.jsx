import Link from 'next/link';
import './careers.css';
import FlowLines from '@/components/FlowLines';

export const metadata = {
  title: 'Careers',
  alternates: { canonical: '/careers' },
  description: 'Build your career with SSC Control, 60 years of industrial automation and electrical distribution excellence.',
};

export default function CareersPage() {
  return (
    <main className="page-careers">

      {/* HERO */}
      <div className="careers-hero">
        <div className="careers-hero-bg"></div>
        <div className="careers-hero-deco">CAREERS</div>
        <div className="careers-hero-inner">
          <div className="hero-tag">Careers</div>
          <h1>Build Your Career<br /><em>with SSC Control</em></h1>
          <p className="careers-hero-sub">
            Join a 60-year legacy in industrial automation, electrical distribution, machine safety, and panel manufacturing.
            Work alongside a team that takes pride in engineering excellence and helping industry move forward.
          </p>
          <div className="careers-hero-stats">
            <div className="careers-hero-stat">
              <div className="chs-num"><em>60</em>+</div>
              <div className="chs-lbl">Years in Business</div>
            </div>
            <div className="careers-hero-stat">
              <div className="chs-num"><em>3</em></div>
              <div className="chs-lbl">Locations</div>
            </div>
            <div className="careers-hero-stat">
              <div className="chs-num"><em>15</em>+</div>
              <div className="chs-lbl">Global Brand Partners</div>
            </div>
            <div className="careers-hero-stat">
              <div className="chs-num"><em>4</em></div>
              <div className="chs-lbl">Solution Verticals</div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY JOIN US */}
      <div className="careers-section careers-why">
        <FlowLines className="ink" opacity={0.9} />
        <div className="careers-inner">
          <div className="sec-label">Why Join Us</div>
          <div className="sec-title">What Makes SSC Different</div>
          <div className="why-grid">

            <div className="why-card">
              <div className="why-icon" style={{ background: 'rgba(20,102,196,0.1)', color: 'var(--blue)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div className="why-title">60 Years of Stability</div>
              <div className="why-desc">
                SSC Control was established in 1966. Three generations of the founding family have built
                an organisation rooted in trust, long-term relationships, and consistent growth, so you
                join a company with real staying power.
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon" style={{ background: 'rgba(30,95,170,0.1)', color: 'var(--blue2)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className="why-title">Work with World-Class Brands</div>
              <div className="why-desc">
                As authorised partners of ABB, Mitsubishi Electric, Schmersal, Wago, nVent Hoffman and
                more, you get direct access to cutting-edge industrial technology and ongoing training from
                global engineering leaders.
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon" style={{ background: 'rgba(0,148,68,0.1)', color: '#009444' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div className="why-title">Learning &amp; Growth</div>
              <div className="why-desc">
                From technical product training to hands-on field experience, we invest in the people who
                join us. Engineers, sales professionals, and operations staff all have clear paths to
                develop expertise and advance their careers.
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon" style={{ background: 'rgba(20,102,196,0.08)', color: 'var(--blue)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="why-title">Ownership Culture</div>
              <div className="why-desc">
                We run a flat, transparent organisation where your ideas matter and your contributions are
                visible. We hire people who take initiative, communicate openly, and care about outcomes, 
                not just activity.
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* LIFE AT SSC */}
      <div className="careers-section careers-life">
        <div className="careers-inner careers-life-inner">
          <div className="life-text">
            <div className="sec-label">Life at SSC</div>
            <div className="sec-title">An Engineering Culture Built on People</div>
            <div className="life-body">
              <p>
                At SSC Control, work is not just about completing transactions, it is about solving real
                industrial problems. Our teams work closely with machine builders, OEMs, panel builders,
                and plant engineers across Gujarat and beyond, delivering solutions that range from
                individual components to complete automation systems.
              </p>
              <p>
                We value people who are curious, disciplined, and genuinely interested in how things
                work. Whether you come from a sales, engineering, or operations background, you will
                find colleagues who take their craft seriously and support each other to do their best work.
              </p>
              <p>
                From our Ahmedabad headquarters to our Vadodara and Surat offices, SSC is a close-knit
                team with the reach and partnerships of a much larger organisation, giving you the best
                of both worlds.
              </p>
            </div>
          </div>
          <div className="life-stats">
            <div className="life-stat">
              <div className="ls-num">60<span>+</span></div>
              <div className="ls-lbl">Years of Operation</div>
            </div>
            <div className="life-stat">
              <div className="ls-num">3</div>
              <div className="ls-lbl">Office Locations</div>
            </div>
            <div className="life-stat">
              <div className="ls-num">15<span>+</span></div>
              <div className="ls-lbl">Partner Brands</div>
            </div>
            <div className="life-stat">
              <div className="ls-num">4</div>
              <div className="ls-lbl">Solution Verticals</div>
            </div>
          </div>
        </div>
      </div>

      {/* CURRENT OPENINGS */}
      <div className="careers-section careers-openings">
        <FlowLines className="ink" opacity={0.9} />
        <div className="careers-inner">
          <div className="sec-label">Current Openings</div>
          <div className="sec-title">Join the Team</div>
          <div className="openings-box">
            <div className="openings-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
              </svg>
            </div>
            <h3 className="openings-title">We're Always Looking for Great People</h3>
            <p className="openings-desc">
              We don't always have open roles listed publicly, but we are continuously building our
              team across sales, technical, and operations functions. If you are passionate about
              industrial automation, electrical distribution, or machine safety, we want to hear from you.
            </p>
            <p className="openings-areas">
              Areas of interest: <strong>Technical Sales</strong>, <strong>Application Engineering</strong>,
              {' '}<strong>Automation &amp; Commissioning</strong>, <strong>Panel Assembly</strong>,
              {' '}<strong>Procurement &amp; Logistics</strong>, <strong>Marketing</strong>.
            </p>
            <a
              className="btn-apply"
              href="mailto:people@ssccontrol.com?subject=Career%20Application"
            >
              Send Your Resume
            </a>
            <div className="openings-note">
              Email us at{' '}
              <a href="mailto:people@ssccontrol.com" className="openings-email">people@ssccontrol.com</a>
              {' '}, we read every application.
            </div>
          </div>
        </div>
      </div>

      {/* CLOSING CTA */}
      <div className="careers-cta">
        <div className="careers-cta-inner">
          <div className="careers-cta-label">Ready to contribute?</div>
          <h2>Grow with a Company That Has Stood the Test of Time</h2>
          <p>
            60 years of building industries. Join SSC Control and become part of the next chapter.
          </p>
          <div className="careers-cta-actions">
            <a className="btn-cta-primary" href="mailto:people@ssccontrol.com?subject=Career%20Application">
              Send Your Resume
            </a>
            <Link href="/about" className="btn-cta-secondary">
              Learn About SSC
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
