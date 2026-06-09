import { ROUTES } from '@/lib/routes';

export const COMPANY = {
  name: 'SSC Control Pvt Ltd',
  legalName: 'SSC Control Pvt. Ltd.',
  cin: 'U51909GJ2021PTC122539',
  email: 'sales@ssccontrol.com',
  phone: '+91 93130 80866',
  phoneHref: '+919313080866',
  address: ['E-12, Siddhivinayak Tower,', 'S.G. Highway, Makarba,', 'Ahmedabad, Gujarat 380051'],
  blurb:
    'Leading industrial automation, safety solutions, and electrical distribution for over 60 years. Your link to excellence.',
  social: {
    instagram: 'http://instagram.com/ssc.control',
    linkedin: 'https://www.linkedin.com/company/ssc-control/',
  },
};

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Solutions',
    links: [
      { label: 'Industrial Automation', href: ROUTES.industrialAutomation },
      { label: 'Industrial Software', href: ROUTES.industrialSoftware },
      { label: 'Industrial Safety', href: ROUTES.industrialSafety },
      { label: 'Product Distribution', href: ROUTES.productDistribution },
      { label: 'Panel Manufacturing', href: ROUTES.panelManufacturing },
      { label: 'Robotics', href: ROUTES.robotics },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: ROUTES.about },
      { label: 'Partners', href: ROUTES.partners },
      { label: 'Contact Us', href: ROUTES.contact },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Free Tools',
    links: [
      { label: 'Motor Starter Selection', href: ROUTES.tools.motorStarter, badge: 'FREE' },
      { label: 'Panel AC Selection', href: ROUTES.tools.panelAc, badge: 'FREE' },
      { label: 'VFD Selection Tool', href: ROUTES.tools.vfd, badge: 'FREE' },
    ],
  },
  {
    title: 'Partners',
    links: [
      { label: 'Mitsubishi Electric', href: ROUTES.brand('mitsubishi') },
      { label: 'ABB', href: ROUTES.brand('abb') },
      { label: 'Schmersal', href: ROUTES.brand('schmersal') },
      { label: 'Connectwell', href: ROUTES.brand('connectwell') },
      { label: 'View All →', href: ROUTES.partners },
    ],
  },
];
