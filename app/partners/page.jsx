'use client';

import { useState } from 'react';
import Link from 'next/link';
import './partners.css';
import FlowLines from '@/components/FlowLines';

const FILTERS = [
  { key: 'all', label: 'All Partners' },
  { key: 'Automation', label: 'Automation' },
  { key: 'Safety', label: 'Safety' },
  { key: 'Cooling', label: 'Cooling' },
  { key: 'Wiring', label: 'Wiring & Connectors' },
  { key: 'Sensors', label: 'Sensors' },
  { key: 'Power', label: 'Power & Energy' },
];

const CARDS = [
    {
      brand: 'mitsubishi',
      bc: '#E60012',
      cat: 'Automation',
      pcat: `Automation & Switchgear`,
      pname: `Mitsubishi Electric`,
      pdesc: `PLCs, HMIs, servo systems, inverters, switchgear, and industrial robots from Mitsubishi Electric Japan.`,
      logo: (<img src="/logos/mitsubishi.svg" alt="Mitsubishi Electric" className="psvg" style={{maxHeight: "40px", maxWidth: "140px", width: "auto", height: "auto", display: "block"}} />),
      link: (<Link href="/partners/mitsubishi" className="plink">Know More →</Link>),
    },
    {
      brand: 'abb',
      bc: '#FF000F',
      cat: 'Power',
      pcat: `Switchgear & Protection`,
      pname: `ABB`,
      pdesc: `Contactors, circuit breakers, motor starters, and switching components trusted by OEMs and panel builders worldwide.`,
      logo: (<img src="/logos/abb-card.svg" alt="ABB" className="pimg" style={{maxHeight: "36px", maxWidth: "120px", width: "auto", height: "auto"}} />),
      link: (<Link href="/partners/abb" className="plink">Know More →</Link>),
    },
    {
      brand: 'nvent',
      bc: '#C4262E',
      cat: 'Cooling',
      pcat: `Enclosures & Cooling`,
      pname: `nVent Hoffman`,
      pdesc: `Industrial enclosures, cable management, and thermal management for reliable electrical infrastructure.`,
      logo: (<img src="/logos/nvent.svg" alt="nVent Hoffman" className="psvg" style={{maxHeight: "40px", maxWidth: "150px", width: "auto", height: "auto", display: "block"}} />),
      link: (<Link href="/partners/nvent" className="plink">Know More →</Link>),
    },
    {
      brand: 'hicool',
      bc: '#1870B8',
      cat: 'Cooling',
      pcat: `Industrial Cooling Fans`,
      pname: `Hicool`,
      pdesc: `Axial fans, AC/DC fans, blowers, and enclosure cooling manufactured in India to international standards.`,
      logo: (<img src="/logos/hicool.png" alt="Hicool" className="pimg" style={{maxHeight: "44px", maxWidth: "150px", width: "auto", height: "auto"}} />),
      link: (<Link href="/partners/hicool" className="plink">Know More →</Link>),
    },
    {
      brand: 'connectwell',
      bc: '#C8252A',
      cat: 'Wiring',
      pcat: `Terminals, Relays & SMPS`,
      pname: `Connectwell`,
      pdesc: `Terminal blocks, relays, SMPS power supplies, and wiring accessories, Made in India.`,
      logo: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 623.7 113.5" className="psvg" style={{maxHeight: "40px", maxWidth: "150px", width: "auto", height: "auto", display: "block"}}>
  <g id="connectwell-logo-vector" transform="translate(-14.7 -270.699)">
    <path id="Path_221285" data-name="Path 221285" d="M100.2,294.2h17.5c1,0,1.7,1.2,1.7,2.6v22.7c0,1.4-.8,2.6-1.7,2.6H100.2c-1,0-1.8-1.2-1.8-2.6V296.8c0-1.4.8-2.6,1.8-2.6M83.9,281.5h49.9a4.848,4.848,0,0,1,5,4.8V328a4.848,4.848,0,0,1-5,4.8H83.9a4.91,4.91,0,0,1-5-4.8V286.3A4.91,4.91,0,0,1,83.9,281.5Zm143.8,0v7.8L234,284c1.7-1,4.6-2.6,7.4-2.5h18.9c5.3,0,8.9,3.6,9.2,10.6l-.1,40.8H250.9V300.1c.4-3.8-2.4-6.2-4.1-5.9h-8.1c-5.3,1.4-9.5,4.7-10.9,9.9l-.1,28.9H209l-.1-51.4h18.8Zm121.3,0h50.1v12.8l-33.7.1c-3-.2-4.8.9-4.9,3.3v21.1c.4,2.2,1.3,3.6,3.9,3.4H399v10.7H350c-6.3,0-9.6-5.3-9.6-10.7V291.4C340.4,285.1,343.7,281.5,349,281.5Zm272.1-10.8h17.3v62.1H621.1Zm-21.5,0h17.2v62.1H599.6Zm-187.7.1h17.3v10.7H437v12.8h-7.8v38.6H411.9V294.3h-8.3V281.5h8.3ZM294,294.2h18.5a2.952,2.952,0,0,1,2.8,2.9V304a2.86,2.86,0,0,1-2.8,2.8H294Zm-11.6-12.7h44.5c3.7.2,7.4,2,7.2,7.7v18.3c.5,5.2-2,8.7-7.8,8.2l-32.4-.1v6.5H334l.1,10.7H282.4c-3.8,0-7.7-4.1-7.7-9.3V289.9A7.944,7.944,0,0,1,282.4,281.5Zm-119.5,0v7.8l6.3-5.3c1.7-1,4.6-2.6,7.4-2.5h18.9c5.3,0,8.9,3.6,9.2,10.6l-.1,40.8H186V300.1c.4-3.8-2.4-6.1-4.1-5.8h-8.1c-5.3,1.4-9.5,4.6-10.9,9.8l-.1,28.9H144.2l-.1-51.4h18.8Zm367.4,43.2.1-43.3H513.3V319c.1,1.9-.5,3.3-2.7,3.1H497.8c-2.5-.1-3.1-.7-3.1-3V281.4H477.3v37.4c0,1.7-.7,2.8-3.1,3.3H464.1c-2.4.1-3.9-1.5-3.8-3.3V281.4H442.2v43.4c0,3.9,4.1,8,9.3,8H478c4.8,0,8-4.6,8.4-7.7.3,3.1,3.4,7.9,8.4,7.7h25.6C525.7,332.9,530.3,328.6,530.3,324.7Zm-507-43.2h51v12.8l-34.6.1c-3-.2-4.8.9-4.8,3.3v21.1c.4,2.2,1.3,3.7,3.9,3.5H74.3V333h-51c-6.3,0-8.6-5.3-8.6-10.7V291.5C14.7,285.1,18.1,281.5,23.3,281.5Zm531.6,12.7h18.5a2.952,2.952,0,0,1,2.8,2.9V304a2.86,2.86,0,0,1-2.8,2.8H554.9Zm-11.6-12.7h44.5c3.7.2,7.4,2,7.2,7.7v18.3c.5,5.2-2,8.7-7.8,8.2l-32.4-.1V322H595v10.8H543.4c-3.8,0-7.7-4.1-7.7-9.3V289.9A7.868,7.868,0,0,1,543.3,281.5Z" fill="#e31f24" fillRule="evenodd"/>
    <path id="Path_221286" data-name="Path 221286" d="M575.1,383.3V360.1l14.2,13.7,1.2,1.2a9.831,9.831,0,0,1,1.2,1.5V361h3.4v23.2l-14.5-13.9a11.977,11.977,0,0,1-1.1-1.2,11.314,11.314,0,0,1-1-1.3v15.5h-3.4Zm-12.2-11.1a11.3,11.3,0,0,1-.9,4.5,12.249,12.249,0,0,1-2.6,3.8,10.848,10.848,0,0,1-3.9,2.5,11.661,11.661,0,0,1-4.5.9,12.158,12.158,0,0,1-4.6-.9,12.383,12.383,0,0,1-3.9-2.5,12.25,12.25,0,0,1-2.6-3.8,11.7,11.7,0,0,1,0-9,12.249,12.249,0,0,1,2.6-3.8,10.056,10.056,0,0,1,3.9-2.5,11.791,11.791,0,0,1,4.6-.9,12.158,12.158,0,0,1,4.6.9,13.621,13.621,0,0,1,3.9,2.5,12.25,12.25,0,0,1,2.6,3.8A13.3,13.3,0,0,1,562.9,372.2Zm-3.8,0a8.663,8.663,0,0,0-.6-3.2,7.992,7.992,0,0,0-1.8-2.7,7.61,7.61,0,0,0-2.6-1.8,8.308,8.308,0,0,0-6.2,0,6.765,6.765,0,0,0-2.6,1.8,7.991,7.991,0,0,0-1.8,2.7,8.834,8.834,0,0,0,0,6.4,7.992,7.992,0,0,0,1.8,2.7,8.7,8.7,0,0,0,2.6,1.8,8.308,8.308,0,0,0,6.2,0,6.765,6.765,0,0,0,2.6-1.8,7.991,7.991,0,0,0,1.8-2.7A8.662,8.662,0,0,0,559.1,372.2Zm-36,11.1V361h3.6v22.3ZM506.3,364v19.2h-3.6V364h-5.9v-3h15.5v3.1h-6Zm-19.8,2.4a11.218,11.218,0,0,0-3.3-2,10.481,10.481,0,0,0-3.6-.7,8.642,8.642,0,0,0-6.1,14.4,7.324,7.324,0,0,0,5.6,2.3,9.857,9.857,0,0,0,3.8-.7,13.616,13.616,0,0,0,3.4-2.1v4.1a11.991,11.991,0,0,1-3.2,1.6,15.013,15.013,0,0,1-3.7.5,14.034,14.034,0,0,1-4.7-.8,11.947,11.947,0,0,1-3.8-2.5,10.936,10.936,0,0,1-2.5-3.8,12.206,12.206,0,0,1,0-9.2,11.254,11.254,0,0,1,6.3-6.3,11.734,11.734,0,0,1,4.6-.8,12.088,12.088,0,0,1,3.8.6,18.739,18.739,0,0,1,3.5,1.7Zm-42.6,16.9V361h12.5v3.1h-8.8v5.6h8.8v3.2h-8.8v7.2h8.8v3.2H443.9Zm-33.1,0V360.1L425,373.8l1.2,1.2c.4.4.8.9,1.3,1.5V361h3.4v23.2l-14.5-13.9a11.985,11.985,0,0,1-1.1-1.2,11.318,11.318,0,0,1-1-1.3v15.5h-3.5Zm-33.1,0V360.1l14.2,13.7,1.2,1.2a9.833,9.833,0,0,1,1.2,1.5V361h3.4v23.2l-14.5-13.9a11.985,11.985,0,0,1-1.1-1.2,11.318,11.318,0,0,1-1-1.3v15.5h-3.4Zm-12.2-11.1a11.3,11.3,0,0,1-.9,4.5,12.249,12.249,0,0,1-2.6,3.8,10.848,10.848,0,0,1-3.9,2.5,11.661,11.661,0,0,1-4.5.9,12.158,12.158,0,0,1-4.6-.9,12.382,12.382,0,0,1-3.9-2.5,12.25,12.25,0,0,1-2.6-3.8,11.7,11.7,0,0,1,0-9,12.249,12.249,0,0,1,2.6-3.8,10.057,10.057,0,0,1,3.9-2.5,11.791,11.791,0,0,1,4.6-.9,12.158,12.158,0,0,1,4.6.9,13.621,13.621,0,0,1,3.9,2.5,12.25,12.25,0,0,1,2.6,3.8A13.3,13.3,0,0,1,365.5,372.2Zm-3.8,0a8.662,8.662,0,0,0-.6-3.2,7.992,7.992,0,0,0-1.8-2.7,7.611,7.611,0,0,0-2.6-1.8,8.308,8.308,0,0,0-6.2,0,6.765,6.765,0,0,0-2.6,1.8,7.992,7.992,0,0,0-1.8,2.7,8.833,8.833,0,0,0,0,6.4,7.992,7.992,0,0,0,1.8,2.7,8.7,8.7,0,0,0,2.6,1.8,8.308,8.308,0,0,0,6.2,0,6.765,6.765,0,0,0,2.6-1.8,7.992,7.992,0,0,0,1.8-2.7A8.662,8.662,0,0,0,361.7,372.2ZM330,366.4a11.218,11.218,0,0,0-3.3-2,10.481,10.481,0,0,0-3.6-.7,8.642,8.642,0,0,0-6.1,14.4,7.324,7.324,0,0,0,5.6,2.3,9.857,9.857,0,0,0,3.8-.7,13.616,13.616,0,0,0,3.4-2.1v4.1a11.991,11.991,0,0,1-3.2,1.6,15.013,15.013,0,0,1-3.7.5,14.034,14.034,0,0,1-4.7-.8,11.947,11.947,0,0,1-3.8-2.5,10.936,10.936,0,0,1-2.5-3.8,12.206,12.206,0,0,1,0-9.2,11.254,11.254,0,0,1,6.3-6.3,11.734,11.734,0,0,1,4.6-.8,12.088,12.088,0,0,1,3.8.6,18.739,18.739,0,0,1,3.5,1.7ZM275.1,364v19.2h-3.6V364h-5.9v-3H281v3.1h-5.9Zm-38.6,19.3V361h3.6v8.2h11V361h3.6v22.3h-3.6V372.5h-11v10.8Zm-20.8-11.4h8.8V374c0,3.1-.9,5.6-2.7,7.3s-4.3,2.6-7.6,2.6a14.8,14.8,0,0,1-4.9-.8,11.66,11.66,0,0,1-3.8-2.4,9.475,9.475,0,0,1-2.4-3.8,13.421,13.421,0,0,1,.1-9.4,10.755,10.755,0,0,1,2.6-3.8,10.211,10.211,0,0,1,3.8-2.4,12.236,12.236,0,0,1,4.7-.8,10.534,10.534,0,0,1,8.4,3.9l-2.7,2a9.172,9.172,0,0,0-2.5-2,7.943,7.943,0,0,0-3.2-.6,8.066,8.066,0,0,0-5.9,2.3,8.47,8.47,0,0,0-2.3,6,8.379,8.379,0,0,0,2.3,6.1,7.762,7.762,0,0,0,5.9,2.4,7.928,7.928,0,0,0,4.9-1.4,4.9,4.9,0,0,0,1.8-4v-.3h-5.4v-3Zm-29.2,11.4V361h3.6v22.3Zm-22.2-10v10h-3.4V361H166a16.217,16.217,0,0,1,3.5.3,5.119,5.119,0,0,1,2.1,1,4.913,4.913,0,0,1,1.6,2.1,6.71,6.71,0,0,1,.6,2.8,6.043,6.043,0,0,1-1.3,4.2,5.707,5.707,0,0,1-3.8,1.8l7.7,10.2h-4.1l-7.4-10h-.6Zm.2-2.8h.7c1.9,0,3.2-.2,3.8-.7a2.7,2.7,0,0,0,.9-2.4,3,3,0,0,0-1-2.6,6.683,6.683,0,0,0-3.8-.8h-.7v6.5ZM116,383.3V361h12.5v3.1h-8.8v5.6h8.8v3.2h-8.8v7.2h8.8v3.2H116Zm-31.4,0V361h3.6v8.2h11V361h3.6v22.3H99.2V372.5h-11v10.8ZM67.8,364v19.2H64.2V364H58.3v-3H73.8v3.1h-6Z" fill="#2b2929"/>
  </g>
</svg>),
      link: (<Link href="/partners/connectwell" className="plink">Know More →</Link>),
    },
    {
      brand: 'schmersal',
      bc: '#133579',
      cat: 'Safety',
      pcat: `Safety Solutions`,
      pname: `Schmersal`,
      pdesc: `Safety switches, interlocks, light curtains, and safety relays for machine guarding to international standards.`,
      logo: (<img src="/logos/schmersal.svg" alt="Schmersal" className="psvg" style={{maxHeight: "40px", maxWidth: "140px", width: "auto", height: "auto", display: "block"}} />),
      link: (<Link href="/partners/schmersal" className="plink">Know More →</Link>),
    },
    {
      brand: 'unison',
      bc: '#201818',
      cat: 'Automation',
      pcat: `SSR Products`,
      pname: `Unison`,
      pdesc: `Solid state relays (SSR), thyristor power controllers, and power regulators for industrial heating, process control, and motor drive applications.`,
      logo: (<img src="/logos/unison.png" alt="Unison" className="pimg" style={{maxHeight: "32px", maxWidth: "160px", width: "auto", height: "auto"}} />),
      link: (<Link href="/partners/unison" className="plink">Know More →</Link>),
    },
    {
      brand: 'gic',
      bc: '#4E9A2E',
      cat: 'Automation',
      pcat: `PLCs & Automation`,
      pname: `GIC India`,
      pdesc: `Made-in-India PLCs, HMIs, timers, counters, and control relays for industrial automation.`,
      logo: (<img src="/logos/gic.webp" alt="GIC India" className="pimg" style={{maxHeight: "44px", maxWidth: "130px", width: "auto", height: "auto"}} />),
      link: (<Link href="/partners/gic" className="plink">Know More →</Link>),
    },
    {
      brand: 'hummel',
      bc: '#0098E0',
      cat: 'Wiring',
      pcat: `Connectors & Cable Glands`,
      pname: `Hummel`,
      pdesc: `Cable glands, connectors, and conduit systems for reliable cable entry in industrial enclosures.`,
      logo: (<img src="/logos/hummel.png" alt="Hummel" className="psvg" style={{maxHeight: "38px", maxWidth: "150px", width: "auto", height: "auto"}} />),
      link: (<Link href="/partners/hummel" className="plink">Know More →</Link>),
    },
    {
      brand: 'sensopart',
      bc: '#111111',
      cat: 'Sensors',
      pcat: `Vision & Sensors`,
      pname: `Sensopart`,
      pdesc: `Vision sensors, photoelectric sensors, and image processing for detection and quality inspection.`,
      logo: (<img src="/logos/sensopart-card.svg" alt="Sensopart" className="pimg" style={{maxHeight: "40px", maxWidth: "150px", width: "auto", height: "auto"}} />),
      link: (<a href="#" className="plink">Know More →</a>),
    },
    {
      brand: 'novotecnik',
      bc: '#0066B3',
      cat: 'Sensors',
      pcat: `Position Sensors`,
      pname: `Novotechnik`,
      pdesc: `High-precision linear and rotary position sensors and measurement systems for industrial automation.`,
      logo: (<img src="/logos/novotecnik-card.gif" alt="Novotechnik" className="pimg" style={{maxHeight: "44px", maxWidth: "150px", width: "auto", height: "auto"}} />),
      link: (<Link href="/partners/novotecnik" className="plink">Know More →</Link>),
    },
    {
      brand: 'axelon',
      bc: '#E81820',
      cat: 'Wiring',
      pcat: `Wires & Cables`,
      pname: `Axelon`,
      pdesc: `Industrial wires and cables for panel wiring, control circuits, and power distribution.`,
      logo: (<img src="/logos/axelon.png" alt="Axelon" className="psvg" style={{maxHeight: "38px", maxWidth: "150px", width: "auto", height: "auto"}} />),
      link: (<Link href="/partners/axelon" className="plink">Know More →</Link>),
    },
    {
      brand: 'secure',
      bc: '#782050',
      cat: 'Power',
      pcat: `Energy Meters`,
      pname: `Secure`,
      pdesc: `Smart energy meters, power quality analysers, and grid management solutions.`,
      logo: (<img src="/logos/secure.png" alt="Secure" className="psvg" style={{maxHeight: "38px", maxWidth: "150px", width: "auto", height: "auto"}} />),
      link: (<a href="#" className="plink">Know More →</a>),
    },
    {
      brand: 'klauke',
      bc: '#104090',
      cat: 'Wiring',
      pcat: `Lugs, Ferrules & Tools`,
      pname: `Klauke`,
      pdesc: `Copper lugs, ferrules, heat shrink terminals, and crimping & cutting tools for electrical connections.`,
      logo: (<img src="/logos/klauke.png" alt="Klauke" className="pimg" style={{maxHeight: "44px", maxWidth: "150px", width: "auto", height: "auto"}} />),
      link: (<Link href="/partners/klauke" className="plink">Know More →</Link>),
    },
    {
      brand: 'accent',
      bc: '#FF6B00',
      cat: 'Sensors',
      pcat: `Proximity Sensors`,
      pname: `Accent`,
      pdesc: `Inductive, capacitive, and magnetic proximity sensors for object detection and position sensing.`,
      logo: (<img src="/logos/accent-card.svg" alt="Accent" className="pimg" style={{maxHeight: "44px", maxWidth: "150px", width: "auto", height: "auto"}} />),
      link: (<a href="#" className="plink">Know More →</a>),
    },
    {
      brand: 'sai-system',
      bc: '#005098',
      cat: 'Automation',
      pcat: `Enclosures & Support Arms`,
      pname: `Sai System`,
      pdesc: `Aluminium die-cast swing arm systems and HMI enclosure boxes for mounting operator panels, HMIs and control stations on machines.`,
      logo: (<img src="/logos/sai-system.png" alt="Sai System" className="pimg" style={{maxHeight: "40px", maxWidth: "150px", width: "auto", height: "auto"}} />),
      link: (<a href="#" className="plink">Know More →</a>),
    },
];

export default function PartnersPage() {
  const [active, setActive] = useState('all');

  const visible = active === 'all' ? CARDS : CARDS.filter(c => c.cat === active);

  return (
    <main className="page-partners">

      <div className="hero">
        <div className="hero-tag">15+ Authorised Partnerships</div>
        <h1>Working with the<br />World's Best Brands</h1>
        <p>SSC Control is an authorised channel partner for leading global manufacturers in industrial automation, electrical distribution, safety, and cooling.</p>
        <div className="hero-stats">
          <div><div className="stat-num"><em>15</em>+</div><div className="stat-label">Brand Partners</div></div>
          <div><div className="stat-num"><em>60</em></div><div className="stat-label">Years Trust</div></div>
          <div><div className="stat-num"><em>100</em>%</div><div className="stat-label">Genuine Products</div></div>
          <div><div className="stat-num"><em>5</em>+</div><div className="stat-label">Industry Verticals</div></div>
        </div>
      </div>

      <div className="fbar">
        <span className="flabel">Filter:</span>
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`fbtn${active === f.key ? ' active' : ''}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="pwrap">
        <FlowLines className="ink" opacity={0.9} />
        <div className="slabel">Our Partners</div>
        <div className="stitle">Authorised Channel Partners</div>
        <div className="ssub">Every brand below comes with full manufacturer warranty, technical support, and genuine certification.</div>
        <div className="pgrid">
          {visible.map(c => (
            <div
              key={c.brand}
              className={`pcard brand-${c.brand}`}
              style={{ '--bc': c.bc }}
              onClick={() => {
                if (c.brand in { abb:1,axelon:1,connectwell:1,gic:1,hicool:1,hummel:1,klauke:1,mitsubishi:1,novotecnik:1,nvent:1,schmersal:1,unison:1 }) {
                  window.location.href = `/partners/${c.brand}`;
                }
              }}
            >
              <div className="plogo">{c.logo}</div>
              <div className="pbody">
                <div className="pcat">{c.pcat}</div>
                <div className="pname">{c.pname}</div>
                <div className="pdesc">{c.pdesc}</div>
                {c.link}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-inner">
          <h2>Need a specific product or brand?</h2>
          <p>Get in touch for pricing, availability, and technical guidance from our team.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn-white">Contact Sales Team</Link>
            <a href="mailto:sales@ssccontrol.com" className="btn-ow">Email Us</a>
          </div>
        </div>
      </div>

    </main>
  );
}
