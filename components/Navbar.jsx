'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, ROUTES, SOLUTION_LINKS, BRAND_LINKS, ABOUT_LINKS, TOOL_LINKS } from '@/lib/routes';
import { COMPANY } from '@/data/site';
import { InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';

function isActive(pathname, href) {
  if (!href || href === '#') return false;
  if (href === '/') return pathname === '/';
  if (href.startsWith('/#')) return false;
  return pathname === href || pathname.startsWith(href + '/');
}

const Caret = () => (
  <svg className="nav-caret" width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function MegaPanel({ which, onNavigate }) {
  if (which === 'solutions') {
    return (
      <div className="mega-inner">
        <div className="mega-cols">
          <div className="mega-head">What We Do</div>
          <div className="mega-grid mega-grid-2">
            {SOLUTION_LINKS.map((s) =>
              s.external ? (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="mega-item" onClick={onNavigate}>
                  <span className="mega-item-label">{s.label}</span>
                  <span className="mega-item-desc">{s.desc}</span>
                </a>
              ) : (
                <Link key={s.label} href={s.href} className="mega-item" onClick={onNavigate}>
                  <span className="mega-item-label">{s.label}</span>
                  <span className="mega-item-desc">{s.desc}</span>
                </Link>
              )
            )}
          </div>
        </div>
        <Link href={ROUTES.contact} className="mega-feature" onClick={onNavigate}>
          <div className="mega-feature-label">60 Years of Engineering</div>
          <h4>From automation to safety, one trusted partner.</h4>
          <p>Conventional and advanced solutions, tailored to your operations.</p>
          <span className="mega-feature-cta">Talk to our team &rarr;</span>
        </Link>
      </div>
    );
  }
  if (which === 'tools') {
    return (
      <div className="mega-inner">
        <div className="mega-cols">
          <div className="mega-head">Engineering Tools</div>
          <div className="mega-grid mega-grid-2">
            {TOOL_LINKS.map((t) => (
              <Link key={t.label} href={t.href} className="mega-item" onClick={onNavigate}>
                <span className="mega-item-label">{t.label}</span>
                <span className="mega-item-desc">{t.desc}</span>
              </Link>
            ))}
          </div>
        </div>
        <Link href={ROUTES.contact} className="mega-feature" onClick={onNavigate}>
          <div className="mega-feature-label">Free Selection Tools</div>
          <h4>Spec the right product, faster.</h4>
          <p>Quick selectors for starters, panel cooling and drives.</p>
          <span className="mega-feature-cta">Need help? Talk to us &rarr;</span>
        </Link>
      </div>
    );
  }
  if (which === 'about') {
    return (
      <div className="mega-inner">
        <div className="mega-cols">
          <div className="mega-head">About SSC</div>
          <div className="mega-grid mega-grid-2">
            {ABOUT_LINKS.map((a) => (
              <Link key={a.label} href={a.href} className="mega-item" onClick={onNavigate}>
                <span className="mega-item-label">{a.label}</span>
                <span className="mega-item-desc">{a.desc}</span>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/about/heritage" className="mega-feature" onClick={onNavigate}>
          <div className="mega-feature-label">Since 1966</div>
          <h4>60 years of trust.</h4>
          <p>From a 1966 founding to a future-ready engineering company.</p>
          <span className="mega-feature-cta">Explore our heritage &rarr;</span>
        </Link>
      </div>
    );
  }
  return (
    <div className="mega-inner">
      <div className="mega-cols">
        <div className="mega-head">Our Brands</div>
        <div className="mega-grid mega-grid-3">
          {BRAND_LINKS.map((b) => (
            <Link key={b.label} href={b.href} className="mega-item" onClick={onNavigate}>
              <span className="mega-item-label">{b.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <Link href={ROUTES.partners} className="mega-feature" onClick={onNavigate}>
        <div className="mega-feature-label">Authorised Channel Partner</div>
        <h4>Genuine products, full warranty.</h4>
        <p>12+ of the world&rsquo;s leading automation &amp; electrical brands.</p>
        <span className="mega-feature-cta">View all partners &rarr;</span>
      </Link>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(null);
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

      <div className="nav-shell" onMouseLeave={() => setMega(null)}>
        <nav>
          <Link href={ROUTES.home} onMouseEnter={() => setMega(null)}>
            <img src="/ssc-60th-logo-color.png" className="logo-img" alt={`${COMPANY.name} logo`} />
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map((l) =>
              l.mega ? (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`nav-mega-link${mega === l.mega ? ' mega-active' : ''}${isActive(pathname, l.href) ? ' active' : ''}`}
                  onMouseEnter={() => setMega(l.mega)}
                  onClick={() => setMega(null)}
                >
                  {l.label}
                  <Caret />
                </Link>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className={isActive(pathname, l.href) ? 'active' : undefined}
                  onMouseEnter={() => setMega(null)}
                >
                  {l.label}
                </Link>
              )
            )}
          </div>

          <Link href={ROUTES.contact} className="nav-cta" onMouseEnter={() => setMega(null)}>
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

        {mega && (
          <div className="mega-panel">
            <MegaPanel which={mega} onNavigate={() => setMega(null)} />
          </div>
        )}
      </div>

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
