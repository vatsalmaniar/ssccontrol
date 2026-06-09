'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const KEY = 'ssc-cookie-consent';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(KEY, 'accepted');
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-bar" role="dialog" aria-label="Cookie notice">
      <p>
        We use cookies and embedded services (maps, analytics) to improve your experience. By using
        this site you agree to our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <div className="cookie-actions">
        <button className="cookie-accept" onClick={accept}>
          Got it
        </button>
      </div>
    </div>
  );
}
