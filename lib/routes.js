// Central route map. Old static .html files map to clean Next routes.
// abb.html -> /partners/abb, type2_selection_tool.html -> /tools/motor-starter, etc.

export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
  partners: '/partners',
  brand: (slug) => `/partners/${slug}`,
  solutions: '/solutions',
  industrialAutomation: '/solutions/industrial-automation',
  productDistribution: '/solutions/product-distribution',
  industrialSafety: '/solutions/industrial-safety',
  industrialSoftware: '/solutions/industrial-software',
  panelManufacturing: 'https://sscautomation.com',
  robotics: '/solutions/robotics',
  tools: {
    motorStarter: '/tools/motor-starter',
    panelAc: '/tools/panel-ac',
    vfd: '/tools/vfd',
  },
};

// Primary navigation — canonical order: Home, Solutions, Partners, About us, Contact us
// (matches the homepage; fixes the inconsistency where 14 pages had Partners before Solutions).
export const NAV_LINKS = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Partners', href: ROUTES.partners },
  { label: 'About us', href: ROUTES.about },
  { label: 'Contact us', href: ROUTES.contact },
];
