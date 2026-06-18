import './globals.css';
import { GeistSans } from 'geist/font/sans';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EnquiryProvider } from '@/components/EnquiryModal';
import Analytics from '@/components/Analytics';
import ScrollReveal from '@/components/ScrollReveal';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';
import { COMPANY } from '@/data/site';

const SITE_URL = 'https://ssccontrol.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SSC Control Pvt Ltd, Industrial Automation & Electrical Solutions',
    template: '%s | SSC Control',
  },
  description:
    "SSC Control Pvt Ltd, 60 years of trust in industrial automation, electrical distribution, safety, and cooling. Authorised channel partner for the world's best brands.",
  keywords: [
    'industrial automation',
    'electrical distribution',
    'panel manufacturing',
    'ABB',
    'Mitsubishi Electric',
    'Schmersal',
    'motor starter',
    'VFD',
    'SSC Control',
    'Ahmedabad',
  ],
  authors: [{ name: COMPANY.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: COMPANY.name,
    title: 'SSC Control Pvt Ltd, Industrial Automation & Electrical Solutions',
    description:
      '60 years of trust in industrial automation, electrical distribution, safety, and cooling. Authorised channel partner for the world\'s best brands.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: COMPANY.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSC Control Pvt Ltd, Industrial Automation & Electrical Solutions',
    description:
      '60 years of trust in industrial automation, electrical distribution, safety, and cooling.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
};

export const viewport = {
  themeColor: '#00489c',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/ssc-60th-logo-color.png`,
  image: `${SITE_URL}/og-image.png`,
  foundingDate: '1966',
  description:
    '60 years of trust in industrial automation, electrical distribution, safety, and cooling.',
  email: COMPANY.email,
  telephone: COMPANY.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'E-12, Siddhivinayak Tower, S.G. Highway, Makarba',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380051',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY.phone,
    contactType: 'sales',
    email: COMPANY.email,
    areaServed: 'IN',
  },
  sameAs: [COMPANY.social.instagram, COMPANY.social.linkedin],
};

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: COMPANY.name,
  image: `${SITE_URL}/og-image.png`,
  url: SITE_URL,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'E-12, Siddhivinayak Tower, S.G. Highway, Makarba',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380051',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0152,
    longitude: 72.5095,
  },
  areaServed: ['Ahmedabad', 'Vadodara', 'Gujarat', 'India'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30',
    },
  ],
  sameAs: [COMPANY.social.instagram, COMPANY.social.linkedin],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
        <Analytics />
        <ScrollReveal />
        <EnquiryProvider>
          <Navbar />
          {children}
          <Footer />
        </EnquiryProvider>
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
