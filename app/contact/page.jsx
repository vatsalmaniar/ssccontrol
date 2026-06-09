'use client';

import { useState, useEffect, useRef } from 'react';
import './contact.css';
import { CONTACT, turnstileEnabled } from '@/lib/contactConfig';

const LOCATIONS = {
  ho: {
    mapSrc:
      'https://maps.google.com/maps?q=E12+Siddhivinayak+Tower+Sarkhej+Gandhinagar+Highway+Makarba+Ahmedabad+Gujarat+380051&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapTitle: 'SSC Control Head Office Ahmedabad',
    badgeStyle: {},
    badgeText: '🏢 Head Office',
    name: (
      <>
        SSC Control Pvt. Ltd.
        <br />
        Ahmedabad, Gujarat
      </>
    ),
    address: (
      <>
        E12, Siddhivinayak Tower
        <br />
        Sarkhej–Gandhinagar Highway
        <br />
        Besides Kataria Arcade
        <br />
        Near D.A.V. School, Makarba
        <br />
        Ahmedabad, Gujarat 380051
      </>
    ),
    details: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.66 3.12 2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        ),
        label: 'Phone',
        value: <a href="tel:+919313080866">+91 93130 80866</a>,
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        ),
        label: 'Email',
        value: <a href="mailto:sales@ssccontrol.com">sales@ssccontrol.com</a>,
      },
    ],
    directionsUrl: 'https://g.co/kgs/3kUL2Wb',
    mapsUrl: 'https://g.co/kgs/3kUL2Wb',
  },
  kaveri: {
    mapSrc:
      'https://maps.google.com/maps?q=Ashwamegh+Warehouse+Sarkhej+Bavla+Highway+Sarkhej+Ahmedabad+Gujarat+382210&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapTitle: 'SSC Control Kaveri Fulfilment Centre',
    badgeStyle: { color: '#16a34a', background: 'rgba(34,197,94,0.1)' },
    badgeText: '📦 Fulfilment Centre — Kaveri',
    name: (
      <>
        SSC Control Pvt. Ltd.
        <br />
        Kaveri FC, Sarkhej
      </>
    ),
    address: (
      <>
        17(A) Ashwamegh Warehouse
        <br />
        Behind New Ujala Hotel
        <br />
        Sarkhej Bavla Highway
        <br />
        Sarkhej, Ahmedabad
        <br />
        Gujarat 382210
      </>
    ),
    details: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
        label: 'Type',
        value: 'Inventory & Fulfilment Centre',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        ),
        label: 'Email',
        value: <a href="mailto:sales@ssccontrol.com">sales@ssccontrol.com</a>,
      },
    ],
    directionsUrl: 'https://g.co/kgs/NYQtxZa',
    mapsUrl: 'https://g.co/kgs/NYQtxZa',
  },
  godawari: {
    mapSrc:
      'https://maps.google.com/maps?q=GIDC+Estate+Makarpura+Vadodara+Gujarat+390010&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapTitle: 'SSC Control Godawari Fulfilment Centre Vadodara',
    badgeStyle: { color: '#16a34a', background: 'rgba(34,197,94,0.1)' },
    badgeText: '📦 Fulfilment Centre — Godawari',
    name: (
      <>
        SSC Control Pvt. Ltd.
        <br />
        Godawari FC, Vadodara
      </>
    ),
    address: (
      <>
        31, GIDC Estate
        <br />
        B/h Bank of Baroda
        <br />
        Makarpura
        <br />
        Vadodara, Gujarat 390010
      </>
    ),
    details: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
        label: 'Type',
        value: 'Inventory & Fulfilment Centre',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        ),
        label: 'Email',
        value: <a href="mailto:sales@ssccontrol.com">sales@ssccontrol.com</a>,
      },
    ],
    directionsUrl:
      'https://www.google.com/maps/search/31+GIDC+Estate+Makarpura+Vadodara+390010',
    mapsUrl: null,
  },
};

const EMPTY_FORM = {
  inquiryType: 'product',
  fname: '',
  lname: '',
  company: '',
  phone: '',
  email: '',
  product: '',
  quantity: '',
  city: '',
  message: '',
  company_website: '', // honeypot — must stay empty for real users
};

export default function ContactPage() {
  const [activeLoc, setActiveLoc] = useState('ho');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState(EMPTY_FORM);
  const turnstileRef = useRef(null);

  const isProduct = form.inquiryType === 'product';

  // Load the Cloudflare Turnstile widget (only if a site key is configured).
  useEffect(() => {
    if (!turnstileEnabled() || submitted) return;
    const SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    if (!document.querySelector(`script[src="${SRC}"]`)) {
      const s = document.createElement('script');
      s.src = SRC;
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }
    const render = () => {
      if (window.turnstile && turnstileRef.current && !turnstileRef.current.dataset.rendered) {
        window.turnstile.render(turnstileRef.current, { sitekey: CONTACT.TURNSTILE_SITE_KEY });
        turnstileRef.current.dataset.rendered = '1';
      }
    };
    const t = setInterval(render, 300);
    render();
    return () => clearInterval(t);
  }, [submitted]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const setType = (inquiryType) => setForm((prev) => ({ ...prev, inquiryType }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Honeypot: a bot that fills the hidden field gets silently "accepted".
    if (form.company_website) {
      setSubmitted(true);
      return;
    }

    const token =
      turnstileEnabled() && typeof window !== 'undefined' && window.turnstile
        ? window.turnstile.getResponse(turnstileRef.current)
        : '';
    if (turnstileEnabled() && !token) {
      setError('Please complete the verification challenge.');
      return;
    }

    setSending(true);
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: form.inquiryType,
          name: `${form.fname} ${form.lname}`.trim(),
          email: form.email,
          phone: form.phone,
          company: isProduct ? form.company : '',
          product: isProduct ? form.product : '',
          quantity: isProduct ? form.quantity : '',
          city: isProduct ? form.city : '',
          message: form.message,
          captchaToken: token,
          company_website: form.company_website, // honeypot
        }),
      });
      const data = await res.json().catch(() => ({}));
      setSending(false);
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Something went wrong. Please email sales@ssccontrol.com.');
      }
    } catch {
      setSending(false);
      setError('Network error. Please try again or email sales@ssccontrol.com.');
    }
  };

  const loc = LOCATIONS[activeLoc];

  return (
    <main className="page-contact">
      {/* HERO */}
      <div className="page-hero">
        <div className="hero-tag">3 Locations across Gujarat</div>
        <h1>Get in Touch with SSC Control</h1>
        <p>
          Reach our sales, technical, and support teams across our Head Office in
          Ahmedabad and fulfilment centres in Sarkhej and Vadodara. We typically
          respond within 2 business hours.
        </p>
      </div>

      {/* QUICK CONTACT STRIP */}
      <div className="quick-strip">
        <div className="quick-inner">
          <div className="quick-item">
            <div className="quick-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.66 3.12 2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="quick-label">Call Us</div>
              <div className="quick-value">
                <a href="tel:+919313080866">+91 93130 80866</a>
              </div>
            </div>
          </div>
          <div className="quick-item">
            <div className="quick-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <div className="quick-label">Email Sales</div>
              <div className="quick-value">
                <a href="mailto:sales@ssccontrol.com">sales@ssccontrol.com</a>
              </div>
            </div>
          </div>
          <div className="quick-item">
            <div className="quick-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <div className="quick-label">Working Hours</div>
              <div className="quick-value">Mon – Sat &nbsp;·&nbsp; 10:00 AM – 6:30 PM</div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="contact-wrapper">
        {/* LOCATIONS */}
        <div className="section-label">Our Locations</div>
        <div className="section-title">Find Us Across Gujarat</div>

        <div className="loc-tabs">
          <button
            className={`loc-tab${activeLoc === 'ho' ? ' active' : ''}`}
            onClick={() => setActiveLoc('ho')}
          >
            🏢 Head Office
          </button>
          <button
            className={`loc-tab${activeLoc === 'kaveri' ? ' active' : ''}`}
            onClick={() => setActiveLoc('kaveri')}
          >
            📦 Kaveri FC — Sarkhej
          </button>
          <button
            className={`loc-tab${activeLoc === 'godawari' ? ' active' : ''}`}
            onClick={() => setActiveLoc('godawari')}
          >
            📦 Godawari FC — Vadodara
          </button>
        </div>

        <div className="loc-panel active">
          <div className="loc-map">
            <iframe
              src={loc.mapSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={loc.mapTitle}
              frameBorder="0"
            />
          </div>
          <div className="loc-info">
            <div>
              <div className="loc-badge" style={loc.badgeStyle}>
                {loc.badgeText}
              </div>
              <div className="loc-name" style={{ marginTop: '10px' }}>
                {loc.name}
              </div>
              <div className="loc-address" style={{ marginTop: '8px' }}>
                {loc.address}
              </div>
            </div>
            <hr className="loc-divider" />
            {loc.details.map((d, i) => (
              <div className="loc-detail" key={i}>
                <div className="loc-detail-icon">{d.icon}</div>
                <div className="loc-detail-text">
                  <div className="label">{d.label}</div>
                  <div className="value">{d.value}</div>
                </div>
              </div>
            ))}
            <div className="loc-actions">
              <a
                href={loc.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-map btn-directions"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Get Directions
              </a>
              {loc.mapsUrl && (
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-map btn-share"
                >
                  View on Maps
                </a>
              )}
            </div>
          </div>
        </div>

        {/* CONTACT FORM + SIDEBAR */}
        <div className="contact-grid">
          {/* FORM */}
          <div className="form-card">
            <div className="form-title">Send Us a Message</div>
            <div className="form-sub">
              Fill in your details and we&apos;ll get back to you within 2 business hours.
            </div>

            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✅</div>
                <h3>{isProduct ? 'Inquiry Received!' : 'Message Sent!'}</h3>
                <p>
                  Thank you for reaching out. Our team will get back to you at your
                  provided email within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Inquiry type selector */}
                <div className="inq-toggle" role="tablist" aria-label="Inquiry type">
                  <button
                    type="button"
                    className={`inq-btn${isProduct ? ' active' : ''}`}
                    aria-pressed={isProduct}
                    onClick={() => setType('product')}
                  >
                    Product Inquiry
                  </button>
                  <button
                    type="button"
                    className={`inq-btn${!isProduct ? ' active' : ''}`}
                    aria-pressed={!isProduct}
                    onClick={() => setType('general')}
                  >
                    General Inquiry
                  </button>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="fname">
                      First Name <span>*</span>
                    </label>
                    <input type="text" id="fname" name="fname" className="form-input" placeholder="Rajesh" required value={form.fname} onChange={handleChange} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lname">
                      Last Name <span>*</span>
                    </label>
                    <input type="text" id="lname" name="lname" className="form-input" placeholder="Patel" required value={form.lname} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">
                      Email Address <span>*</span>
                    </label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="rajesh@company.com" required value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">
                      Phone Number {isProduct && <span>*</span>}
                    </label>
                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="+91 98765 43210" required={isProduct} value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                {/* Product-inquiry-only fields (mirror the CRM lead form) */}
                {isProduct && (
                  <>
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" name="company" className="form-input" placeholder="Patel Industries Pvt Ltd" value={form.company} onChange={handleChange} />
                      </div>
                      <div className="form-field">
                        <label htmlFor="product">
                          Product / Brand of Interest <span>*</span>
                        </label>
                        <input type="text" id="product" name="product" className="form-input" placeholder="e.g. ABB Contactors, Mitsubishi VFD" required value={form.product} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="text" id="quantity" name="quantity" className="form-input" placeholder="e.g. 25 nos" value={form.quantity} onChange={handleChange} />
                      </div>
                      <div className="form-field">
                        <label htmlFor="city">City / Location</label>
                        <input type="text" id="city" name="city" className="form-input" placeholder="Ahmedabad" value={form.city} onChange={handleChange} />
                      </div>
                    </div>
                  </>
                )}

                <div className="form-field">
                  <label htmlFor="message">
                    {isProduct ? 'Requirement Details' : 'Message'} <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder={isProduct ? 'Specs, application, ratings, timeline…' : 'How can we help you?'}
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Honeypot — hidden from real users; bots that fill it are dropped */}
                <input
                  type="text"
                  name="company_website"
                  value={form.company_website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                  aria-hidden="true"
                />

                {turnstileEnabled() && <div ref={turnstileRef} className="cf-turnstile" style={{ marginBottom: 14 }} />}

                {error && <div className="form-error">{error}</div>}

                <button type="submit" className="form-submit" disabled={sending}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {sending ? 'Sending…' : isProduct ? 'Send Inquiry' : 'Send Message'}
                </button>
                <div className="form-note">
                  By submitting you agree to be contacted by SSC Control. We never spam.
                </div>
              </form>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="info-col">
            {/* Contact Details */}
            <div className="info-card">
              <div className="info-card-header">
                <div className="info-card-icon blue">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1e5faa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.66 3.12 2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="info-card-title">Contact Details</div>
                  <div className="info-card-sub">Multiple ways to reach us</div>
                </div>
              </div>
              <div className="info-list">
                <div className="info-list-item">
                  <span className="info-list-label">📞 Sales</span>
                  <span className="info-list-value">
                    <a href="tel:+919313080866">+91 93130 80866</a>
                  </span>
                </div>
                <div className="info-list-item">
                  <span className="info-list-label">✉️ Sales Email</span>
                  <span className="info-list-value">
                    <a href="mailto:sales@ssccontrol.com">sales@ssccontrol.com</a>
                  </span>
                </div>
                <div className="info-list-item">
                  <span className="info-list-label">💼 Careers</span>
                  <span className="info-list-value">
                    <a href="mailto:people@ssccontrol.com">people@ssccontrol.com</a>
                  </span>
                </div>
                <div className="info-list-item">
                  <span className="info-list-label">🌐 Website</span>
                  <span className="info-list-value">
                    <a href="https://ssccontrol.com">ssccontrol.com</a>
                  </span>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="info-card">
              <div className="info-card-header">
                <div
                  className="info-card-icon"
                  style={{ background: 'rgba(225,48,108,0.1)' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e1306c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <div className="info-card-title">Follow Us</div>
                  <div className="info-card-sub">
                    Stay updated on LinkedIn &amp; Instagram
                  </div>
                </div>
              </div>
              <div className="social-row">
                <a
                  href="https://www.linkedin.com/company/ssc-control/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc-btn soc-linkedin"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="http://instagram.com/ssc.control"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc-btn soc-instagram"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
