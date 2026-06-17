import Link from 'next/link';
import '../about.css';
import FlowLines from '@/components/FlowLines';
import Timeline from '@/components/Timeline';

export const metadata = {
  title: 'Our Heritage, 60 Years Since 1966',
  description:
    'The SSC Control story, from a 1966 founding in Ludhiana to a future-ready engineering company. Six decades of milestones and the Maniar family legacy.',
};

export default function HeritagePage() {
  return (
    <main className="page-about">

      {/* HERO */}
      <div className="hero hero-sub">
        <div className="hero-bg"></div>
        <div className="hero-deco">60</div>
        <div className="hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/about">About</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>Heritage</span>
          </div>
          <div className="hero-tag">Since 1966</div>
          <h1>Our Heritage</h1>
          <div className="hero-tagline">From a 1966 founding to a future-ready engineering company, six decades of milestones, partnerships, and the Maniar family legacy.</div>
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

      {/* ARCHIVES */}
      <div className="archive-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="archive-inner">
          <div className="sec-label">From the Archives</div>
          <div className="sec-title">Where It All Began</div>
          <p className="sec-body" style={{ marginBottom: '36px' }}>
            SSC Control began life as <strong>Sales &amp; Service Corporation</strong>. These photographs and our first newspaper advertisement, from the 1983 inauguration of a new sales office, capture the earliest chapters of a six-decade journey.
          </p>
          <div className="archive-feature">
            <a className="archive-news" href="/heritage/newspaper-1983.jpg" target="_blank" rel="noopener noreferrer">
              <img src="/heritage/newspaper-1983.jpg" alt="Sales & Service Corporation 1983 newspaper inauguration advertisement" loading="lazy" />
            </a>
            <div className="archive-news-text">
              <div className="archive-badge">1983</div>
              <h3>Our first newspaper advertisement</h3>
              <p>Announcing the inauguration of a new sales office, switchgear, terminal connectors, relays and panel accessories, &ldquo;to serve you and be with you.&rdquo;</p>
              <span className="archive-hint">Tap to view the full page &rarr;</span>
            </div>
          </div>
          <div className="archive-grid">
            <figure className="archive-fig"><img src="/heritage/storefront-1983.jpg" alt="The Sales & Service Corporation storefront on inauguration day" loading="lazy" /><figcaption>The original storefront, garlanded on inauguration day</figcaption></figure>
            <figure className="archive-fig"><img src="/heritage/archive-1.jpg" alt="Showcasing products at an industry exhibition" loading="lazy" /><figcaption>Showcasing products at an industry exhibition</figcaption></figure>
            <figure className="archive-fig"><img src="/heritage/archive-2.jpg" alt="At the SSC product showcase" loading="lazy" /><figcaption>At the product showcase</figcaption></figure>
            <figure className="archive-fig"><img src="/heritage/archive-3.jpg" alt="Explaining a component to a customer" loading="lazy" /><figcaption>Explaining a component to a customer</figcaption></figure>
            <figure className="archive-fig"><img src="/heritage/archive-4.jpg" alt="The SSC team at an industry event" loading="lazy" /><figcaption>The team at an industry event</figcaption></figure>
            <figure className="archive-fig"><img src="/heritage/archive-5.jpg" alt="Inside the early Ahmedabad office" loading="lazy" /><figcaption>Inside the early office</figcaption></figure>
            <figure className="archive-fig"><img src="/heritage/archive-6.jpg" alt="With international partners abroad" loading="lazy" /><figcaption>With international partners abroad</figcaption></figure>
          </div>
        </div>
      </div>


      {/* TIMELINE */}
      <div className="timeline-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="timeline-inner">
          <div className="sec-label">Our Journey</div>
          <div className="sec-title">60 Years in the Making</div>
          <Timeline />
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
