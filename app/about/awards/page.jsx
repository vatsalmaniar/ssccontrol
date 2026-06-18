import Link from 'next/link';
import '../about.css';
import { ALL_AWARDS } from '@/data/awards';
import { AwardGrid } from '@/components/Awards';

export const metadata = {
  title: 'Awards & Recognitions',
  alternates: { canonical: '/about/awards' },
  description:
    'SSC Control has been repeatedly recognised by Mitsubishi Electric, Schmersal, nVent Hoffman, Hicool and other principals for sales performance, growth and partnership.',
};

export default function AwardsPage() {
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
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>Awards &amp; Recognitions</span>
          </div>
          <div className="hero-tag">Recognition</div>
          <h1>Awards &amp; Recognitions</h1>
          <div className="hero-tagline">Honoured by the brands we represent for sales performance, growth and partnership, a reflection of the trust we&apos;ve built over six decades.</div>
        </div>
      </div>

      {/* AWARDS */}
      <div className="section" style={{ background: 'var(--light)' }}>
        <div className="section-inner">
          <div className="sec-label">Awards &amp; Recognition</div>
          <h2 className="sec-title">Recognised by the brands we represent</h2>
          <p className="sec-body" style={{ marginBottom: '38px' }}>
            Our principals have repeatedly recognised SSC Control for sales performance, growth and
            partnership, a reflection of the trust we&apos;ve built over six decades.
          </p>
          <AwardGrid items={ALL_AWARDS} showBrand />
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
