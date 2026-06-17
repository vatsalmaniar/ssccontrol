import { notFound } from 'next/navigation';
import { brands } from '@/data/brands';
import { PRODUCT_PAGES } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';

export function generateStaticParams() {
  return Object.values(PRODUCT_PAGES).map((p) => ({ brand: p.brandSlug, product: p.slug }));
}

export function generateMetadata({ params }) {
  const product = PRODUCT_PAGES[`${params.brand}/${params.product}`];
  const brand = brands[params.brand];
  if (!product || !brand) return {};
  const seriesNames = product.series.map((s) => s.name).join(', ');
  const title = `${brand.name} ${product.category}, Full Series & Lineup`;
  const description = `${brand.name} ${product.category}: ${seriesNames}. Authorised channel partner and distributor SSC Control, genuine products, warranty and technical support in Ahmedabad, Baroda (Vadodara), Gujarat and across India.`;
  const url = `/partners/${params.brand}/${params.product}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: 'SSC Control Pvt Ltd' },
    twitter: { card: 'summary_large_image', title, description },
    keywords: [
      `${brand.name} ${product.category}`,
      ...product.series.map((s) => s.name),
      `${brand.name} ${product.category} distributor`,
      `${brand.name} ${product.category} Ahmedabad`,
      `${brand.name} ${product.category} Baroda`,
      `${brand.name} ${product.category} Gujarat`,
    ],
  };
}

export default function Page({ params }) {
  const product = PRODUCT_PAGES[`${params.brand}/${params.product}`];
  const brand = brands[params.brand];
  if (!product || !brand) notFound();
  return <ProductDetail product={product} brand={brand} />;
}
