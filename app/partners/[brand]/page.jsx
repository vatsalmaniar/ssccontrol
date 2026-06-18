import { notFound } from 'next/navigation';
import BrandPage from '@/components/BrandPage';
import { brands, brandSlugs } from '@/data/brands';
import { buildBrandFaq } from '@/lib/brandFaq';

export function generateStaticParams() {
  return brandSlugs.map((brand) => ({ brand }));
}

export function generateMetadata({ params }) {
  const b = brands[params.brand];
  if (!b) return {};
  const title = `${b.name} Authorised Channel Partner & Distributor`;
  const description = `SSC Control, authorised channel partner, distributor and dealer for ${b.name} (${b.titleEm}) in Ahmedabad, Baroda (Vadodara), Gujarat and across India. ${b.heroSub}`;
  const url = `/partners/${params.brand}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: 'SSC Control Pvt Ltd' },
    twitter: { card: 'summary_large_image', title, description },
    keywords: [
      b.name,
      `${b.name} distributor`,
      `${b.name} authorised partner`,
      `${b.name} dealer`,
      `${b.name} channel partner`,
      `${b.name} Ahmedabad`,
      `${b.name} Baroda`,
      `${b.name} Vadodara`,
      `${b.name} Gujarat`,
      `${b.name} India`,
    ],
  };
}

const BASE = 'https://ssccontrol.com';

export default function Page({ params }) {
  const b = brands[params.brand];
  if (!b) notFound();
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'Partners', item: `${BASE}/partners/` },
      { '@type': 'ListItem', position: 3, name: b.name, item: `${BASE}/partners/${params.brand}/` },
    ],
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: buildBrandFaq(b).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <BrandPage brand={b} />
    </>
  );
}
