// Awards & recognition from the brands we represent.
// Keyed by brand slug → reused on brand pages, the About page, and the home strip.
export const AWARDS = {
  mitsubishi: [
    { title: 'Special Recognition — Multifold Growth', year: '2024' },
    { title: 'All-India Highest Sales — Control Gear', year: '2024' },
    { title: 'All-India Highest Sales — LVS', year: '2023' },
    { title: 'All-India Highest Sales — LVS', year: '2022' },
    { title: 'Highest Sales — LVS', year: '2021' },
  ],
  schmersal: [
    { title: 'Consistency Champion', year: '2025' },
    { title: 'Distributor of the Year', year: '2023' },
  ],
  hicool: [
    { title: 'Top Sales Performer', year: '2025' },
    { title: 'Sales Excellence', year: '2023' },
  ],
  nvent: [{ title: 'Commercial Champion', year: '2024' }],
};

export const AWARD_BRAND_NAMES = {
  mitsubishi: 'Mitsubishi Electric',
  schmersal: 'Schmersal',
  hicool: 'Hicool',
  nvent: 'nVent Hoffman',
};

// Flat list (newest first) for the About page and home strip.
export const ALL_AWARDS = Object.entries(AWARDS)
  .flatMap(([slug, list]) => list.map((a) => ({ ...a, slug, brand: AWARD_BRAND_NAMES[slug] })))
  .sort((a, b) => Number(b.year) - Number(a.year));

export const AWARD_COUNT = ALL_AWARDS.length;
