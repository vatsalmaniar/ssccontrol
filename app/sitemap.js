import { brandSlugs } from '@/data/brands';
import { PRODUCT_PAGES } from '@/data/products';

export const dynamic = 'force-static';

const BASE = 'https://ssccontrol.com';

// All hand-authored (non-dynamic) routes. Dynamic brand and product routes are
// derived from data below so new partners/products appear automatically.
const STATIC_ROUTES = [
  '',
  '/about',
  '/about/awards',
  '/about/heritage',
  '/about/leadership',
  '/careers',
  '/contact',
  '/downloads',
  '/partners',
  '/privacy',
  '/terms',
  '/solutions/industrial-automation',
  '/solutions/industrial-safety',
  '/solutions/industrial-software',
  '/solutions/product-distribution',
  '/solutions/robotics',
  '/tools/motor-starter',
  '/tools/panel-ac',
  '/tools/vfd',
];

function priorityFor(path) {
  if (path === '') return 1.0;
  if (path.startsWith('/tools')) return 0.9;
  if (path.startsWith('/partners/')) return 0.8; // brand + product pages
  if (path.startsWith('/solutions')) return 0.8;
  if (path === '/partners' || path === '/about' || path === '/contact') return 0.7;
  return 0.5; // legal / sub-pages
}

export default function sitemap() {
  const lastModified = new Date();

  const brandRoutes = brandSlugs.map((s) => `/partners/${s}`);
  // PRODUCT_PAGES keys are already `${brandSlug}/${productSlug}`.
  const productRoutes = Object.keys(PRODUCT_PAGES).map((k) => `/partners/${k}`);

  const allRoutes = [...STATIC_ROUTES, ...brandRoutes, ...productRoutes];

  return allRoutes.map((path) => ({
    url: `${BASE}${path}/`,
    lastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: priorityFor(path),
  }));
}
