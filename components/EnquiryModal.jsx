'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { COMPANY } from '@/data/site';

const EnquiryContext = createContext({ open: () => {} });

export function useEnquiry() {
  return useContext(EnquiryContext);
}

export function EnquiryProvider({ children }) {
  const [state, setState] = useState({ open: false, product: '' });

  const open = useCallback((product = '') => setState({ open: true, product }), []);
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const lines = [
      `Product / Category: ${state.product || '—'}`,
      `Name: ${f.name.value}`,
      `Company: ${f.company.value}`,
      `Email: ${f.email.value}`,
      `Phone: ${f.phone.value}`,
      '',
      f.message.value,
    ];
    const subject = `Enquiry${state.product ? `: ${state.product}` : ''}`;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join('\n'))}`;
    close();
  };

  return (
    <EnquiryContext.Provider value={{ open }}>
      {children}
      {state.open && (
        <div className="enq-overlay" onClick={close} role="dialog" aria-modal="true">
          <div className="enq-modal" onClick={(e) => e.stopPropagation()}>
            <button className="enq-close" aria-label="Close" onClick={close}>
              ×
            </button>
            <div className="enq-head">
              <div className="enq-label">Product Enquiry</div>
              <h3 className="enq-title">{state.product || 'Get in Touch'}</h3>
              <p className="enq-sub">
                Share a few details and our team will respond within 2 business hours.
              </p>
            </div>
            <form className="enq-form" onSubmit={onSubmit}>
              <div className="enq-row">
                <input name="name" placeholder="Full Name *" required />
                <input name="company" placeholder="Company" />
              </div>
              <div className="enq-row">
                <input name="email" type="email" placeholder="Email *" required />
                <input name="phone" placeholder="Phone" />
              </div>
              <textarea name="message" rows={4} placeholder="Tell us about your requirement…" />
              <button type="submit" className="enq-submit">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </EnquiryContext.Provider>
  );
}
