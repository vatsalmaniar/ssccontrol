'use client';

import { useState, useEffect } from 'react';

// The six "Our Business Solutions" images, rotated in the home hero.
const SLIDES = [
  '/hero/automation.jpg',
  '/hero/distribution.jpg',
  '/hero/safety.jpg',
  '/hero/panel.jpg',
  '/hero/software.webp',
  '/hero/robotics.jpg',
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      setActive((v) => (v + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-slideshow" aria-hidden="true">
      {SLIDES.map((src, idx) => (
        <div
          key={src}
          className={`hero-slide${idx === active ? ' active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="hero-slide-mask" />
    </div>
  );
}
