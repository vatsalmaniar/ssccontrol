import Link from 'next/link';
import './about.css';
import { ALL_AWARDS } from '@/data/awards';
import { AwardGrid } from '@/components/Awards';

export const metadata = {
  title: 'About Us — 60 Years of Engineering Excellence',
  description: '60 years of engineering excellence. SSC Control Pvt Ltd — India\'s trusted partner in electrical, automation and engineering solutions.',
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
          <div className="hero-tagline">A 60-year legacy of trust in electrical, automation, and engineering solutions — built on strong partnerships, deep expertise, and a relentless commitment to shared success.</div>
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
        <div className="section-inner">
          <div className="sec-label">Who We Are</div>
          <div className="sec-title">India's Trusted Engineering Partner</div>
          <div className="sec-body">
            <p>SSC Control Pvt. Ltd. is a 60-year-old organisation and one of India's most trusted names in the field of electrical, automation, and engineering solutions. Over the decades, we have built strong partnerships with machine builders, OEMs, panel builders, and industrial enterprises — delivering quality products, deep technical expertise, and dependable service.</p>
            <p>At SSC, we are evolving beyond distribution — with a clear focus on becoming a future-ready engineering company driven by innovation, technology, and a service-first mindset.</p>
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
            <div className="vm-text">To become a leading engineering company, built on innovation, a service-first approach, and people at our core — driving automation and electrification solutions that contribute to nation building.</div>
          </div>
          <div className="vm-card mission">
            <div className="vm-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="vm-title">Our Mission</div>
            <div className="vm-text">To deliver smart, reliable, and innovative automation and electrification solutions through engineering excellence — with people at the heart of everything we do and a strong focus on shared success.</div>
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="section" style={{ background: 'var(--white)' }}>
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
              <div className="value-desc">We do what we say. Honest, ethical, and consistent — in every interaction with the businesses we serve, partners, and colleagues.</div>
            </div>

            <div className="value-card">
              <div className="value-icon" style={{ background: 'rgba(20,102,196,0.1)', color: '#1466c4' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="value-name">Ownership &amp; Transparency</div>
              <div className="value-desc">We take full accountability for our actions and results — and we communicate openly, without filters, at every level.</div>
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
              <div className="value-desc">Our people are our greatest asset. We invest in their growth, wellbeing, and success — because when our people thrive, the businesses we serve do too.</div>
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
              <div className="wwd-desc">Authorised distribution of 15+ global brands — switchgear, terminals, enclosures, safety devices and more.</div>
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
              <div className="wwd-desc">Industrial robot solutions — MELFA series articulated and SCARA robots for assembly, welding and handling.</div>
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="timeline-section">
        <div className="timeline-inner">
          <div className="sec-label">Our Journey</div>
          <div className="sec-title">60 Years in the Making</div>
          <div className="timeline">

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#E60012', boxShadow: '0 0 0 2px #E60012' }}></div>
              <div className="tl-card">
                <div className="tl-year">1966</div>
                <div className="tl-event">Founded — Ludhiana, Punjab</div>
                <div className="tl-detail">SSC Control was established by Jayant Maniar and Sushila Maniar. Jayant led sales while Sushila managed accounts and operations — a partnership that would define SSC for decades.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#1e5faa', boxShadow: '0 0 0 2px #1e5faa' }}></div>
              <div className="tl-card">
                <div className="tl-year">1967</div>
                <div className="tl-event">Shift to Vadodara</div>
                <div className="tl-detail">The family relocated to Vadodara to stay close to family roots and build the business. Arvind Maniar, meanwhile, worked as Sales Manager at Batliboi, supporting the family while SSC found its footing.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#009444', boxShadow: '0 0 0 2px #009444' }}></div>
              <div className="tl-card">
                <div className="tl-year">1970</div>
                <div className="tl-event">Vadodara Office Opened</div>
                <div className="tl-detail">SSC formally opened its first dedicated office in Vadodara, establishing a proper base for sales and operations in Gujarat.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#C4262E', boxShadow: '0 0 0 2px #C4262E' }}></div>
              <div className="tl-card">
                <div className="tl-year">1971</div>
                <div className="tl-event">First Authorised Dealerships</div>
                <div className="tl-detail">Became the first authorised dealer for RGK and ICE switches in the region — SSC's first official brand partnerships, setting the foundation for what would become a multi-brand distribution powerhouse.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#133579', boxShadow: '0 0 0 2px #133579' }}></div>
              <div className="tl-card">
                <div className="tl-year">1978</div>
                <div className="tl-event">Ahmedabad Expansion</div>
                <div className="tl-detail">Arvind Maniar left his job at Batliboi and joined the business full-time. He and Sushila Maniar shifted to Ahmedabad, opening the first Ahmedabad branch — expanding SSC's geographic reach significantly.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#1466c4', boxShadow: '0 0 0 2px #1466c4' }}></div>
              <div className="tl-card">
                <div className="tl-year">1984</div>
                <div className="tl-event">First Dedicated Ahmedabad Office</div>
                <div className="tl-detail">SSC opened its first proper office in Ahmedabad, having operated from home until then. A major milestone marking the company's growing professional presence in the city.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#FF000F', boxShadow: '0 0 0 2px #FF000F' }}></div>
              <div className="tl-card">
                <div className="tl-year">1986</div>
                <div className="tl-event">Accent Sensors Partnership</div>
                <div className="tl-detail">Onboarded Accent Sensors — became their authorised partner for Gujarat. SSC's first foray into the sensors and automation space.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#1e5faa', boxShadow: '0 0 0 2px #1e5faa' }}></div>
              <div className="tl-card">
                <div className="tl-year">1988</div>
                <div className="tl-event">Second Generation Joins</div>
                <div className="tl-detail">Mehul Maniar — son of Arvind and Sushila Maniar — joined with a BE Electrical engineering background. His arrival transformed SSC's direction towards sensors and automation, reshaping the business for the future.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#009444', boxShadow: '0 0 0 2px #009444' }}></div>
              <div className="tl-card">
                <div className="tl-year">1992</div>
                <div className="tl-event">Mayank Maniar Joins</div>
                <div className="tl-detail">Mayank Maniar — son of Jayant Maniar — joined the Baroda office, bringing fresh energy and strengthening SSC's presence across Gujarat.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#1466c4', boxShadow: '0 0 0 2px #1466c4' }}></div>
              <div className="tl-card">
                <div className="tl-year">1993</div>
                <div className="tl-event">Symphony Air Cooler — Landmark Order</div>
                <div className="tl-detail">One of SSC's biggest early orders: 1,00,000 switches supplied to Symphony Air Coolers. A transformative win that cemented SSC's reputation as a reliable large-scale supplier.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#C4262E', boxShadow: '0 0 0 2px #C4262E' }}></div>
              <div className="tl-card">
                <div className="tl-year">1995</div>
                <div className="tl-event">Ajanta Order — Bare Copper Winding Wire</div>
                <div className="tl-detail">Secured one of the biggest orders at the time — bare copper winding wire supply for Ajanta, Morbi. A testament to SSC's growing reach across product categories.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#133579', boxShadow: '0 0 0 2px #133579' }}></div>
              <div className="tl-card">
                <div className="tl-year">1998</div>
                <div className="tl-event">Jital Maniar Joins</div>
                <div className="tl-detail">Jital Maniar — son of Jitendra Maniar — joined SSC, further strengthening the family leadership team and expanding the organisation's capacity.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#0066B3', boxShadow: '0 0 0 2px #0066B3' }}></div>
              <div className="tl-card">
                <div className="tl-year">2001</div>
                <div className="tl-event">Photo &amp; Linear Sensors Onboarded</div>
                <div className="tl-detail">Introduced complex, industry-new products — photo sensors and linear/rotary sensors from Wangler and Novotechnik. SSC was among the first to bring these technologies to the Indian industrial market.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#005BAA', boxShadow: '0 0 0 2px #005BAA' }}></div>
              <div className="tl-card">
                <div className="tl-year">2004</div>
                <div className="tl-event">Hicool Cooling Products</div>
                <div className="tl-detail">Added Hicool industrial cooling fans to the portfolio. At the time, these products were largely unknown in Indian industries — SSC's early adoption made them the No. 1 Hicool partner, a position held ever since.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#133579', boxShadow: '0 0 0 2px #133579' }}></div>
              <div className="tl-card">
                <div className="tl-year">2008</div>
                <div className="tl-event">Three New Strategic Partnerships</div>
                <div className="tl-detail">Partnered with Schmersal (Germany) for machine safety, Eldon (now nVent Hoffman) for enclosures, and Unison for SSR products. Fresh products, fresh vision, and broader market reach — a pivotal year.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#1e5faa', boxShadow: '0 0 0 2px #1e5faa' }}></div>
              <div className="tl-card">
                <div className="tl-year">2010</div>
                <div className="tl-event">Wago &amp; Hummel Products Added</div>
                <div className="tl-detail">2010: Wago products added to the basket. 2011: Hummel cable glands and connectors onboarded. The product portfolio was expanding rapidly across all segments of panel building.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#1466c4', boxShadow: '0 0 0 2px #1466c4' }}></div>
              <div className="tl-card">
                <div className="tl-year">2013</div>
                <div className="tl-event">Bigger Ahmedabad Office</div>
                <div className="tl-detail">Shifted the Ahmedabad office to a larger space to accommodate the growing team and broader vision — a physical reflection of SSC's expanding ambitions.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#009444', boxShadow: '0 0 0 2px #009444' }}></div>
              <div className="tl-card">
                <div className="tl-year">2015</div>
                <div className="tl-event">Baroda Upgrade</div>
                <div className="tl-detail">Shifted to a bigger space at the Baroda location, better positioned to serve businesses across Central Gujarat with greater reach and capability.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#E60012', boxShadow: '0 0 0 2px #E60012' }}></div>
              <div className="tl-card">
                <div className="tl-year">2016</div>
                <div className="tl-event">Mitsubishi Electric LVS Portfolio</div>
                <div className="tl-detail">Added Mitsubishi Electric Low Voltage Switchgear (LVS) portfolio — a marquee partnership that opened doors to the premium switchgear market.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#1e5faa', boxShadow: '0 0 0 2px #1e5faa' }}></div>
              <div className="tl-card">
                <div className="tl-year">2020</div>
                <div className="tl-event">Third Generation &amp; New Warehouse</div>
                <div className="tl-detail">Vatsal Maniar — son of Mehul Maniar — joined with greater vision and zeal to grow. SSC shifted the Ahmedabad warehouse to a 6,000 sq ft facility, enabling better service and faster fulfilment.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#009444', boxShadow: '0 0 0 2px #009444' }}></div>
              <div className="tl-card">
                <div className="tl-year">2021</div>
                <div className="tl-event">Control Panels &amp; Pvt Ltd</div>
                <div className="tl-detail">Started manufacturing control panels, entering the industrial automation market for the first time. The same year, converted the legacy Sales &amp; Service Corporation into SSC Control Pvt Ltd — a new chapter began.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#C4262E', boxShadow: '0 0 0 2px #C4262E' }}></div>
              <div className="tl-card">
                <div className="tl-year">2022</div>
                <div className="tl-event">No. 1 Mitsubishi LVS Partner + New Additions</div>
                <div className="tl-detail">Became the No. 1 LVS partner for Mitsubishi Electric — awarded at the CP Meet. Also added a cable company and Sensopart for vision cameras to the product lineup.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#E60012', boxShadow: '0 0 0 2px #E60012' }}></div>
              <div className="tl-card">
                <div className="tl-year">2023</div>
                <div className="tl-event">Mitsubishi Automation + Record Breaker Sales</div>
                <div className="tl-detail">Added Mitsubishi Automation, completing the full automation portfolio. Sold the highest number of breakers in Mitsubishi history. nVent Hoffman awarded SSC the No. 1 Sales Champion — Platinum Partner since inception.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#133579', boxShadow: '0 0 0 2px #133579' }}></div>
              <div className="tl-card">
                <div className="tl-year">2024</div>
                <div className="tl-event">ABB &amp; Connectwell + Awards</div>
                <div className="tl-detail">Onboarded ABB Switchgear and Connectwell, massively expanding the switchgear and terminal offerings. Again achieved the highest LVS product sales in Mitsubishi. Schmersal awarded SSC No. 1 Sales Partner.</div>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#1466c4', boxShadow: '0 0 0 2px #1466c4' }}></div>
              <div className="tl-card">
                <div className="tl-year">2025</div>
                <div className="tl-event">FA+ Partner — Industry Recognition</div>
                <div className="tl-detail">Achieved FA+ LVS Partner status with Mitsubishi — the highest sales tier in LVS products. Continued as No. 1 partner for Hicool (since inception) and Schmersal (No. 1 since forever). 60 years of trust, and still accelerating.</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FOUNDERS */}
      <div className="founders-section">
        <div className="founders-inner">
          <div className="sec-label">Our People</div>
          <div className="sec-title">The Maniar Family Legacy</div>
          <div className="founders-grid">
            <div>
              <div className="founders-col-title">Founders</div>
              <div className="founder-row">
                <div className="f-av" style={{ background: 'linear-gradient(135deg,#1466c4,#3f8ae0)' }}>SM</div>
                <div><div className="f-name">Sushila Maniar</div><div className="f-sub">Co-Founder</div></div>
              </div>
              <div className="founder-row">
                <div className="f-av" style={{ background: 'linear-gradient(135deg,#1e5faa,#2471cc)' }}>JM</div>
                <div><div className="f-name">Jayant Maniar</div><div className="f-sub">Co-Founder</div></div>
              </div>
            </div>
            <div>
              <div className="founders-col-title">Former Partners</div>
              <div className="founder-row">
                <div className="f-av" style={{ background: 'linear-gradient(135deg,#1e5faa,#2471cc)' }}>JM</div>
                <div><div className="f-name">Jayant Maniar</div><div className="f-sub">Former Partner</div></div>
              </div>
              <div className="founder-row">
                <div className="f-av" style={{ background: 'linear-gradient(135deg,#133579,#1e5faa)' }}>AM</div>
                <div><div className="f-name">Arvind Maniar</div><div className="f-sub">Former Partner</div></div>
              </div>
              <div className="founder-row">
                <div className="f-av" style={{ background: 'linear-gradient(135deg,#009444,#00b857)' }}>JI</div>
                <div><div className="f-name">Jitendra Maniar</div><div className="f-sub">Former Partner</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LEADERSHIP */}
      <div className="lead-section">
        <div className="lead-inner">
          <div className="sec-label">Leadership Team</div>
          <div className="sec-title">Driving SSC Forward</div>
          <div className="lead-grid">
            <div className="lead-card">
              <div className="lead-avatar" style={{ background: 'linear-gradient(135deg,#1e5faa,#2471cc)' }}>MM</div>
              <div className="lead-name">Mehul Maniar</div>
              <div className="lead-role">Managing Director</div>
            </div>
            <div className="lead-card">
              <div className="lead-avatar" style={{ background: 'linear-gradient(135deg,#133579,#1e5faa)' }}>MY</div>
              <div className="lead-name">Mayank Maniar</div>
              <div className="lead-role">Director — Finance</div>
            </div>
            <div className="lead-card">
              <div className="lead-avatar" style={{ background: 'linear-gradient(135deg,#1466c4,#3f8ae0)' }}>VM</div>
              <div className="lead-name">Vatsal Maniar</div>
              <div className="lead-role">Chief Growth Officer</div>
            </div>
            <div className="lead-card">
              <div className="lead-avatar" style={{ background: 'linear-gradient(135deg,#009444,#00b857)' }}>JM</div>
              <div className="lead-name">Jital Maniar</div>
              <div className="lead-role">Chief Revenue Officer</div>
            </div>
          </div>
        </div>
      </div>

      {/* AWARDS */}
      <div className="section" style={{ background: 'var(--light)' }}>
        <div className="section-inner">
          <div className="sec-label">Awards &amp; Recognition</div>
          <h2 className="sec-title">Recognised by the brands we represent</h2>
          <p className="sec-body" style={{ marginBottom: '38px' }}>
            Our principals have repeatedly recognised SSC Control for sales performance, growth and
            partnership — a reflection of the trust we&apos;ve built over six decades.
          </p>
          <AwardGrid items={ALL_AWARDS} showBrand />
        </div>
      </div>

      {/* COMMITMENT */}
      <div className="commit-section">
        <div className="commit-inner">
          <div>
            <div className="commit-label">Our Commitment</div>
            <div className="commit-title">Engineering Excellence, Built for the Future</div>
            <div className="commit-body">With a legacy of trust and a vision for the future, SSC continues to empower industries by combining engineering excellence, innovative thinking, and a people-first approach — ensuring sustainable growth for the industries we serve and contributing to the progress of the nation.</div>
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
        <h2>Let's Build Something Great Together</h2>
        <p>Partner with SSC Control for your next automation, electrical, or safety project.</p>
        <Link href="/contact" className="btn-primary">Get in Touch</Link>
      </div>

    </main>
  );
}
