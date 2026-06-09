import { brandSlugs } from '@/data/brands';

export const dynamic = 'force-static';

const BASE = 'https://ssccontrol.com';

export default function sitemap() {
  const staticRoutes = ['', '/about', '/contact', '/partners', '/tools/motor-starter', '/tools/panel-ac', '/tools/vfd'];
  const brandRoutes = brandSlugs.map((s) => `/partners/${s}`);
  return [...staticRoutes, ...brandRoutes].map((path) => ({
    url: `${BASE}${path}/`,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : path.startsWith('/tools') ? 0.9 : 0.8,
  }));
}
