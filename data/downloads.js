// Downloadable resources (price lists, catalogues, datasheets).
// Drop the file in public/downloads/ and add an entry here. No database needed.
// `logo` overrides the brand logo on the card; falls back to data/brands by brandSlug.
export const DOWNLOADS = [
  {
    title: 'Mitsubishi Electric — LVS Price List',
    brand: 'Mitsubishi Electric',
    brandSlug: 'mitsubishi',
    logo: '/logos/mitsubishi.svg',
    category: 'Price Lists',
    file: '/downloads/mitsubishi-lvs-pricelist-apr-2026.pdf',
    effective: 'Effective 1 April 2026',
    size: '8 MB',
    type: 'PDF',
  },
  {
    title: 'GIC Direct Domestic — Price List (FY 2026)',
    brand: 'GIC',
    brandSlug: 'gic',
    logo: '/logos/gic.webp',
    category: 'Price Lists',
    file: '/downloads/gic-pricelist-may-2026.pdf',
    effective: 'Effective 1 May 2026',
    size: '2 MB',
    type: 'PDF',
  },
  {
    title: 'ABB Electrification India — Price List',
    brand: 'ABB',
    brandSlug: 'abb',
    category: 'Price Lists',
    file: '/downloads/abb-pricelist-may-2026.pdf',
    effective: 'Effective 11 May 2026',
    size: '20 MB',
    type: 'PDF',
  },
  {
    title: 'Connectwell — Price List',
    brand: 'Connectwell',
    brandSlug: 'connectwell',
    category: 'Price Lists',
    comingSoon: true, // set file/effective/size and remove this when the PDF is shared
  },
];

export const DOWNLOAD_CATEGORIES = [...new Set(DOWNLOADS.map((d) => d.category))];
