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
    title: `${b.name} — ${b.titleEm}`,
    description: b.heroSub,
  };
}

export default function Page({ params }) {
  const b = brands[params.brand];
  if (!b) notFound();
  return <BrandPage brand={b} />;
}
