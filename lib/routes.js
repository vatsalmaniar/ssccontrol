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
  downloads: '/downloads',
  tools: {
    motorStarter: '/tools/motor-starter',
    panelAc: '/tools/panel-ac',
    vfd: '/tools/vfd',
  },
};

// Primary navigation, canonical order: Home, Solutions, Partners, About us, Contact us
// (matches the homepage; fixes the inconsistency where 14 pages had Partners before Solutions).
export const NAV_LINKS = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Solutions', href: '/#solutions', mega: 'solutions' },
  { label: 'Partners', href: ROUTES.partners, mega: 'partners' },
  { label: 'Downloads', href: ROUTES.downloads },
  { label: 'Tools', href: ROUTES.tools.motorStarter, mega: 'tools' },
  { label: 'About us', href: ROUTES.about, mega: 'about' },
  { label: 'Contact us', href: ROUTES.contact },
];

export const TOOL_LINKS = [
  { label: 'Motor Starter Selector', href: ROUTES.tools.motorStarter, desc: 'Type-2 coordinated starter selection' },
  { label: 'Panel AC Selector', href: ROUTES.tools.panelAc, desc: 'Size enclosure cooling by heat load' },
  { label: 'VFD Selector', href: ROUTES.tools.vfd, desc: 'Pick the right drive for your motor' },
];

export const ABOUT_LINKS = [
  { label: 'Company', href: '/about', desc: 'Who we are, vision & values' },
  { label: 'Leadership', href: '/about/leadership', desc: 'The team driving SSC forward' },
  { label: 'Awards & Recognitions', href: '/about/awards', desc: 'Recognised by our principals' },
  { label: 'Heritage', href: '/about/heritage', desc: '60 years since 1966' },
];

// Lightweight link lists for the navbar mega-menus (kept here so the client
// bundle doesn't import the heavy per-brand data files).
export const SOLUTION_LINKS = [
  { label: 'Industrial Automation', href: ROUTES.industrialAutomation, desc: 'PLCs, drives, SCADA & control' },
  { label: 'Product Distribution', href: ROUTES.productDistribution, desc: 'Genuine components, full warranty' },
  { label: 'Industrial Safety', href: ROUTES.industrialSafety, desc: 'Machine safety & compliance' },
  { label: 'Industrial Software', href: ROUTES.industrialSoftware, desc: 'SCADA, MES & data logging' },
  { label: 'Robotics', href: ROUTES.robotics, desc: 'MELFA robots & vision systems' },
  { label: 'Panel Manufacturing', href: ROUTES.panelManufacturing, desc: 'Custom control panels', external: true },
];

export const BRAND_LINKS = [
  { label: 'Mitsubishi Electric', href: '/partners/mitsubishi' },
  { label: 'ABB', href: '/partners/abb' },
  { label: 'Schmersal', href: '/partners/schmersal' },
  { label: 'Hicool', href: '/partners/hicool' },
  { label: 'nVent Hoffman', href: '/partners/nvent' },
  { label: 'Connectwell', href: '/partners/connectwell' },
  { label: 'GIC', href: '/partners/gic' },
  { label: 'Klauke', href: '/partners/klauke' },
  { label: 'Hummel', href: '/partners/hummel' },
  { label: 'Novotechnik', href: '/partners/novotecnik' },
  { label: 'Axelon', href: '/partners/axelon' },
  { label: 'Unison', href: '/partners/unison' },
];
