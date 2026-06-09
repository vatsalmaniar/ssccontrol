import Link from 'next/link';
import { COMPANY, FOOTER_COLUMNS, LEGAL_LINKS } from '@/data/site';
import { InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';

function FooterLink({ href, children }) {
  const isHttp = href.startsWith('http');
  const external = isHttp || href.startsWith('mailto') || href.startsWith('tel');
  if (external || href === '#') {
    return (
      <a href={href} {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  return <Link href={href}>{children}</Link>;
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/ssc-60th-logo-white.png" className="footer-logo-img" alt={COMPANY.name} />
          <p>{COMPANY.blurb}</p>
          <div className="footer-contact">
            {COMPANY.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <br />
            <a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a>
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>
                    {link.label}
                    {link.badge && <span className="tool-badge">{link.badge}</span>}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>
          &copy; {year} {COMPANY.name}. All rights reserved. &nbsp;|&nbsp; CIN: {COMPANY.cin}
          {LEGAL_LINKS.map((l) => (
            <span key={l.href}>
              {' '}&nbsp;|&nbsp; <Link href={l.href}>{l.label}</Link>
            </span>
          ))}
        </p>
        <div className="footer-socials">
          <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="Instagram">
            <InstagramIcon size={16} />
          </a>
          <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
