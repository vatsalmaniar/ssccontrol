import Link from 'next/link';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <div className="nf-wrap">
      <div className="nf-code">
        4<span>0</span>4
      </div>
      <div className="nf-title">This page could not be found</div>
      <p className="nf-text">
        The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you back
        on track.
      </p>
      <div className="nf-actions">
        <Link href="/" className="nf-btn">
          Back to Home
        </Link>
        <Link href="/contact" className="nf-btn alt">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
