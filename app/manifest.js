import { COMPANY } from '@/data/site';

// Web app manifest — enables "Add to Home Screen" with branding on mobile.
// Served at /manifest.webmanifest and auto-linked from <head> by Next.
export default function manifest() {
  return {
    name: COMPANY.name,
    short_name: 'SSC Control',
    description:
      '60 years of trust in industrial automation, electrical distribution, safety and cooling. Authorised channel partner for the world\'s best brands.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00489c',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
