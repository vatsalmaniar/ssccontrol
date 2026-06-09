'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, ROUTES } from '@/lib/routes';
import { COMPANY } from '@/data/site';
import { InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';

function isActive(pathname, href) {
  if (!href || href === '#') return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';

  return (
    <>
      <div className="topbar">
        <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer">
          <InstagramIcon size={15} /> Instagram
        </a>
        <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedinIcon size={15} /> LinkedIn
        </a>
      </div>

      <nav>
        <Link href={ROUTES.home}>
          <img src="/ssc-60th-logo-color.png" className="logo-img" alt={COMPANY.name} />
        </Link>

        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className={isActive(pathname, l.href) ? 'active' : undefined}>
              {l.label}
            </Link>
          ))}
        </div>

        <Link href={ROUTES.contact} className="nav-cta">
          Get in Touch
        </Link>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-nav${open ? ' open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={isActive(pathname, l.href) ? 'active' : undefined}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link href={ROUTES.contact} className="nav-cta" onClick={() => setOpen(false)}>
          Get in Touch
        </Link>
      </div>
    </>
  );
}
