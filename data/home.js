// 60-year anniversary reel.
// Paste the YouTube or Vimeo link below (any normal share link works).
// While it's empty, the "Celebrating 60 Years" video section is hidden.
export const REEL = {
  url: 'https://youtu.be/neCmj0t3YkU',
  title: 'SSC Control, Celebrating 60 Years',
};

export function toEmbedSrc(url) {
  if (!url) return '';
  let m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([\w-]{11})/);
  // Privacy-enhanced domain: YouTube sets no tracking cookies until the user
  // actually plays, which clears the third-party-cookie DevTools/Best-Practices warning.
  if (m) return `https://www.youtube-nocookie.com/embed/${m[1]}`;
  m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (m) return `https://player.vimeo.com/video/${m[1]}`;
  return url; // assume it's already an embeddable URL
}

// Companies shown in the "Trusted by" logo wall on the home page.
// Replace the placeholder names and drop logo files into /public/clients/,
// then set `logo: '/clients/<file>.png'`. Until a logo is set, the name shows as text.
export const CLIENTS = [
  { name: 'Pakona', logo: '/clients/pakona.png' },
  { name: 'Cosmos DigiFAC', logo: '/clients/cosmos-digifac.png' },
  { name: 'Windsor', logo: '/clients/windsor.png' },
  { name: 'Kevin', logo: '/clients/kevin.webp' },
  { name: 'CEAT', logo: '/clients/ceat.png' },
  { name: 'Mindra', logo: '/clients/mindra.png' },
  { name: 'Lubi', logo: '/clients/lubi.svg' },
  { name: 'Milacron', logo: '/clients/milacron.webp' },
];

// Testimonials. Replace the placeholder copy with real quotes.
// `image` is optional (path under /public); if absent, the author's initial is shown.
export const TESTIMONIALS = [
  {
    quote:
      'We have worked with SSC for more than 20 years, and they have consistently come back to us with unique, innovative solutions, never just a product, but the right answer for the problem.',
    author: 'Divy Shah',
    role: 'COO',
    company: 'Cess Controls',
    image: null,
  },
  {
    quote:
      'During a power outage at our hospital, the SSC team responded immediately and delivered the required product within the timeline, helping us minimise downtime when it mattered most.',
    author: 'Vishesh Bhuptani',
    role: 'Managing Director',
    company: 'Matis Hospital',
    image: null,
  },
  {
    quote:
      'SSC delivered a factory automation solution that helped us achieve 90% efficiency on one of our machine lines. Their technical understanding made a measurable difference.',
    author: 'Pravan Shah',
    role: 'Plant Head',
    company: 'Blue Star',
    image: null,
  },
];
