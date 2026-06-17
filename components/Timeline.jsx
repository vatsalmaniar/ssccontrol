'use client';

import { useEffect, useRef } from 'react';

const ITEMS = [
  { year: '1966', color: '#E60012', event: 'Founded, Ludhiana, Punjab', detail: 'SSC Control was established by Jayant Maniar and Sushila Maniar. Jayant led sales while Sushila managed accounts and operations, a partnership that would define SSC for decades.' },
  { year: '1967', color: '#1e5faa', event: 'Shift to Vadodara', detail: 'The family relocated to Vadodara to stay close to family roots and build the business. Arvind Maniar, meanwhile, worked as Sales Manager at Batliboi, supporting the family while SSC found its footing.' },
  { year: '1970', color: '#009444', event: 'Vadodara Office Opened', detail: 'SSC formally opened its first dedicated office in Vadodara, establishing a proper base for sales and operations in Gujarat.' },
  { year: '1971', color: '#C4262E', event: 'First Authorised Dealerships', detail: "Became the first authorised dealer for RGK and ICE switches in the region, SSC's first official brand partnerships, setting the foundation for what would become a multi-brand distribution powerhouse." },
  { year: '1978', color: '#133579', event: 'Ahmedabad Expansion', detail: "Arvind Maniar left his job at Batliboi and joined the business full-time. He and Sushila Maniar shifted to Ahmedabad, opening the first Ahmedabad branch, expanding SSC's geographic reach significantly." },
  { year: '1984', color: '#1466c4', event: 'First Dedicated Ahmedabad Office', detail: "SSC opened its first proper office in Ahmedabad, having operated from home until then. A major milestone marking the company's growing professional presence in the city." },
  { year: '1986', color: '#FF000F', event: 'Accent Sensors Partnership', detail: "Onboarded Accent Sensors, became their authorised partner for Gujarat. SSC's first foray into the sensors and automation space." },
  { year: '1988', color: '#1e5faa', event: 'Second Generation Joins', detail: "Mehul Maniar, son of Arvind and Sushila Maniar, joined with a BE Electrical engineering background. His arrival transformed SSC's direction towards sensors and automation, reshaping the business for the future." },
  { year: '1992', color: '#009444', event: 'Mayank Maniar Joins', detail: "Mayank Maniar, son of Jayant Maniar, joined the Baroda office, bringing fresh energy and strengthening SSC's presence across Gujarat." },
  { year: '1993', color: '#1466c4', event: 'Symphony Air Cooler, Landmark Order', detail: "One of SSC's biggest early orders: 1,00,000 switches supplied to Symphony Air Coolers. A transformative win that cemented SSC's reputation as a reliable large-scale supplier." },
  { year: '1995', color: '#C4262E', event: 'Ajanta Order, Bare Copper Winding Wire', detail: "Secured one of the biggest orders at the time, bare copper winding wire supply for Ajanta, Morbi. A testament to SSC's growing reach across product categories." },
  { year: '1998', color: '#133579', event: 'Jital Maniar Joins', detail: "Jital Maniar, son of Jitendra Maniar, joined SSC, further strengthening the family leadership team and expanding the organisation's capacity." },
  { year: '2001', color: '#0066B3', event: 'Photo & Linear Sensors Onboarded', detail: 'Introduced complex, industry-new products, photo sensors and linear/rotary sensors from Wangler and Novotechnik. SSC was among the first to bring these technologies to the Indian industrial market.' },
  { year: '2004', color: '#005BAA', event: 'Hicool Cooling Products', detail: "Added Hicool industrial cooling fans to the portfolio. At the time, these products were largely unknown in Indian industries, SSC's early adoption made them the No. 1 Hicool partner, a position held ever since." },
  { year: '2008', color: '#133579', event: 'Three New Strategic Partnerships', detail: 'Partnered with Schmersal (Germany) for machine safety, Eldon (now nVent Hoffman) for enclosures, and Unison for SSR products. Fresh products, fresh vision, and broader market reach, a pivotal year.' },
  { year: '2010', color: '#1e5faa', event: 'Wago & Hummel Products Added', detail: '2010: Wago products added to the basket. 2011: Hummel cable glands and connectors onboarded. The product portfolio was expanding rapidly across all segments of panel building.' },
  { year: '2013', color: '#1466c4', event: 'Bigger Ahmedabad Office', detail: "Shifted the Ahmedabad office to a larger space to accommodate the growing team and broader vision, a physical reflection of SSC's expanding ambitions." },
  { year: '2015', color: '#009444', event: 'Baroda Upgrade', detail: 'Shifted to a bigger space at the Baroda location, better positioned to serve businesses across Central Gujarat with greater reach and capability.' },
  { year: '2016', color: '#E60012', event: 'Mitsubishi Electric LVS Portfolio', detail: 'Added Mitsubishi Electric Low Voltage Switchgear (LVS) portfolio, a marquee partnership that opened doors to the premium switchgear market.' },
  { year: '2020', color: '#1e5faa', event: 'Third Generation & New Warehouse', detail: 'Vatsal Maniar, son of Mehul Maniar, joined with greater vision and zeal to grow. SSC shifted the Ahmedabad warehouse to a 6,000 sq ft facility, enabling better service and faster fulfilment.' },
  { year: '2021', color: '#009444', event: 'Control Panels & Pvt Ltd', detail: 'Started manufacturing control panels, entering the industrial automation market for the first time. The same year, converted the legacy Sales & Service Corporation into SSC Control Pvt Ltd, a new chapter began.' },
  { year: '2022', color: '#C4262E', event: 'No. 1 Mitsubishi LVS Partner + New Additions', detail: 'Became the No. 1 LVS partner for Mitsubishi Electric, awarded at the CP Meet. Also added a cable company and Sensopart for vision cameras to the product lineup.' },
  { year: '2023', color: '#E60012', event: 'Mitsubishi Automation + Record Breaker Sales', detail: 'Added Mitsubishi Automation, completing the full automation portfolio. Sold the highest number of breakers in Mitsubishi history. nVent Hoffman awarded SSC the No. 1 Sales Champion, Platinum Partner since inception.' },
  { year: '2024', color: '#133579', event: 'ABB & Connectwell + Awards', detail: 'Onboarded ABB Switchgear and Connectwell, massively expanding the switchgear and terminal offerings. Again achieved the highest LVS product sales in Mitsubishi. Schmersal awarded SSC No. 1 Sales Partner.' },
  { year: '2025', color: '#1466c4', event: 'FA+ Partner, Industry Recognition', detail: 'Achieved FA+ LVS Partner status with Mitsubishi, the highest sales tier in LVS products. Continued as No. 1 partner for Hicool (since inception) and Schmersal (No. 1 since forever). 60 years of trust, and still accelerating.' },
];

export default function Timeline() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.classList.add('tl-ready');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      track.querySelectorAll('.tl-item').forEach((el) => el.classList.add('tl-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('tl-in');
            io.unobserve(e.target);
          }
        });
      },
      { root: track, threshold: 0.35 }
    );
    track.querySelectorAll('.tl-item').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: dir * Math.min(track.clientWidth * 0.8, 640), behavior: 'smooth' });
  };

  return (
    <div className="tl-wrap">
      <div className="tl-hint">
        <span>Scroll to explore six decades</span>
        <div className="tl-arrows">
          <button type="button" aria-label="Scroll timeline left" onClick={() => scrollBy(-1)}>&larr;</button>
          <button type="button" aria-label="Scroll timeline right" onClick={() => scrollBy(1)}>&rarr;</button>
        </div>
      </div>
      <div className="timeline-h" ref={trackRef}>
        {ITEMS.map((it, i) => (
          <div className={`tl-item${i % 2 === 0 ? ' tl-up' : ' tl-down'}`} key={`${it.year}-${i}`} style={{ '--tl-color': it.color }}>
            <div className="tl-rail" />
            <div className="tl-dot" />
            <div className="tl-card">
              <div className="tl-year">{it.year}</div>
              <div className="tl-event">{it.event}</div>
              <div className="tl-detail">{it.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
