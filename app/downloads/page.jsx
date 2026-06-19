import Link from 'next/link';
import './downloads.css';
import FlowLines from '@/components/FlowLines';
import DownloadsBrowser from '@/components/DownloadsBrowser';
import { ROUTES } from '@/lib/routes';
import { DOWNLOADS, DOWNLOAD_CATEGORIES } from '@/data/downloads';
import { brands } from '@/data/brands';

export const metadata = {
  title: 'Downloads, Price Lists & Catalogues',
  alternates: { canonical: '/downloads' },
  description:
    'Download the latest price lists, product catalogues and datasheets from SSC Control, ABB, Mitsubishi Electric, Schmersal and more.',
};

// Resolve each download's brand logo on the server so the client component
// stays light (no brand-data import on the client).
const ITEMS = DOWNLOADS.map((d) => ({
  ...d,
  logoSrc: d.logo || brands[d.brandSlug]?.logo || null,
}));

export default function DownloadsPage() {
  return (
    <main className="page-downloads">
      <div className="dl-hero">
        <div className="dl-hero-inner">
          <div className="breadcrumb">
            <Link href={ROUTES.home}>Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Downloads</span>
          </div>
          <div className="hero-tag">Resources</div>
          <h1>Downloads</h1>
          <p className="dl-hero-sub">
            The latest price lists, catalogues and datasheets from the brands we represent. For older
            versions or product-specific documents, please get in touch.
          </p>
        </div>
      </div>

      <section className="dl-section">
        <FlowLines className="ink" opacity={0.9} />
        <div className="dl-wrap">
          <DownloadsBrowser items={ITEMS} categories={DOWNLOAD_CATEGORIES} />

          <p className="dl-note">
            Looking for a price list or catalogue that isn&apos;t here?{' '}
            <Link href={ROUTES.contact}>Contact our team</Link> and we&apos;ll share it.
          </p>
        </div>
      </section>
    </main>
  );
}
