import { notFound } from 'next/navigation';
import BrandPage from '@/components/BrandPage';
import { brands, brandSlugs } from '@/data/brands';

export function generateStaticParams() {
  return brandSlugs.map((brand) => ({ brand }));
}

export function generateMetadata({ params }) {
  const b = brands[params.brand];
  if (!b) return {};
  return {
    title: `${b.name} Authorised Channel Partner & Distributor`,
    description: `SSC Control — authorised channel partner, distributor and dealer for ${b.name} (${b.titleEm}) in Ahmedabad, Baroda (Vadodara), Gujarat and across India. ${b.heroSub}`,
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

export default function Page({ params }) {
  const b = brands[params.brand];
  if (!b) notFound();
  return <BrandPage brand={b} />;
}
