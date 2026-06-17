'use client';

import { useEffect } from 'react';

// Subtle, enterprise-style "fade up on scroll" for major content blocks.
// Only hides elements that start BELOW the fold (no flash for above-the-fold content).
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const selector =
      'main > section, main > div, .cap-card, .award-card, .dl-card, .seg-card, .range-item, .ind-item, .proc-step, .testi-card, .vm-card, .value-card, .lead-card';
    const els = Array.from(document.querySelectorAll(selector));
    const vh = window.innerHeight || 800;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );

    let staggerGroup = null;
    els.forEach((el) => {
      // Only animate things that are currently below the fold.
      if (el.getBoundingClientRect().top > vh * 0.82) {
        el.classList.add('reveal');
        obs.observe(el);
      }
    });

    return () => obs.disconnect();
  }, []);

  return null;
}
