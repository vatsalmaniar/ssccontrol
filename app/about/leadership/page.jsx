import Link from 'next/link';
import '../about.css';
import FlowLines from '@/components/FlowLines';

export const metadata = {
  title: 'Leadership Team',
  description:
    'Meet the leadership team driving SSC Control forward, three generations of the Maniar family building India\'s trusted engineering partner.',
};

export default function LeadershipPage() {
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
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>Leadership</span>
          </div>
          <div className="hero-tag">Our Team</div>
          <h1>Leadership</h1>
          <div className="hero-tagline">Three generations of the Maniar family, driving SSC forward with engineering depth, a service-first mindset, and a relentless focus on shared success.</div>
        </div>
      </div>

      {/* LEADERSHIP */}
      <div className="lead-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="lead-inner">
          <div className="sec-label">Leadership Team</div>
          <div className="sec-title">Driving SSC Forward</div>
          <div className="lead-grid">
            <div className="lead-card">
              <div className="lead-photo"><img src="/leadership/mehul.jpg" alt="Mehul Maniar" loading="lazy" style={{ objectPosition: '50% 20%' }} /></div>
              <div className="lead-info">
                <div className="lead-name">Mehul Maniar</div>
                <div className="lead-role">Managing Director</div>
              </div>
            </div>
            <div className="lead-card">
              <div className="lead-photo"><img src="/leadership/mayank.jpg" alt="Mayank Maniar" loading="lazy" style={{ objectPosition: '52% 20%' }} /></div>
              <div className="lead-info">
                <div className="lead-name">Mayank Maniar</div>
                <div className="lead-role">Director, Finance</div>
              </div>
            </div>
            <div className="lead-card">
              <div className="lead-photo"><img src="/leadership/vatsal.jpg" alt="Vatsal Maniar" loading="lazy" style={{ objectPosition: '50% 15%' }} /></div>
              <div className="lead-info">
                <div className="lead-name">Vatsal Maniar</div>
                <div className="lead-role">Chief Growth Officer</div>
              </div>
            </div>
            <div className="lead-card">
              <div className="lead-photo"><img src="/leadership/jital.jpg" alt="Jital Maniar" loading="lazy" style={{ objectPosition: '50% 22%' }} /></div>
              <div className="lead-info">
                <div className="lead-name">Jital Maniar</div>
                <div className="lead-role">Chief Revenue Officer</div>
              </div>
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
