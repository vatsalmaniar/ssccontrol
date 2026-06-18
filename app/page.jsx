import './home.css';
import Link from 'next/link';
import { CLIENTS, TESTIMONIALS, REEL, toEmbedSrc } from '@/data/home';
import { ALL_AWARDS } from '@/data/awards';
import { AwardGrid } from '@/components/Awards';
import FlowLines from '@/components/FlowLines';
import HeroSlideshow from '@/components/HeroSlideshow';

export const metadata = {
  title: { absolute: 'Industrial Automation & Electrical Solutions | SSC Control' },
  description:
    'SSC Control Pvt Ltd, 60 years in industrial automation, electrical distribution, machine safety, industrial software and panel manufacturing. Authorised partner for Mitsubishi Electric, ABB, Schmersal and more, serving OEMs, panel builders and industry from Ahmedabad and Baroda (Vadodara), across India.',
};

export default function HomePage() {
  return (
    <main className="page-home">
      {/* Preload the first hero slide — it's the LCP element but set as a CSS
          background by a client component, so it isn't otherwise discoverable early. */}
      <link rel="preload" as="image" href="/hero/automation.jpg" fetchPriority="high" />

      {/* HERO */}
      <div className="hero">
        <HeroSlideshow />
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-tag">60 Years of Excellence</div>
          <h1>Empowering Industries with <span>Electrical Automation</span> Solutions</h1>
          <div className="hero-sub">Powering Progress.</div>
          <p>At SSC Control Pvt Ltd, we specialize in providing cutting-edge industrial automation, safety solutions, and AI-driven technologies to enhance productivity, efficiency, and safety for businesses.</p>
          <div className="hero-btns">
            <a href="#solutions" className="btn-primary">Explore Solutions</a>
            <Link href="/about" className="btn-outline">Learn More</Link>
          </div>
        </div>
      </div>

      {/* SOLUTIONS */}
      <div className="solutions-section" id="solutions">
        <FlowLines className="ink" opacity={0.9} />
        <div className="two-col-header">
          <div>
            <div className="tcl-label">Businesses</div>
            <h2 className="tcl-h2">Our Business Solutions</h2>
          </div>
          <div className="tcr">We deliver expertise and innovation to optimise your operations with tailored solutions, combining conventional and advanced technology to help you achieve your utmost potential.</div>
        </div>
        <div className="sol-grid">
          <div className="sol-img-card"><Link href="/solutions/industrial-automation" className="sol-card-link" aria-label="Industrial Automation"></Link>
            <img className="sol-bg" src="/solution-industrial-automation.jpg" alt="Industrial Automation" loading="lazy" decoding="async" />
            <div className="sol-overlay"></div>
            <div className="sol-card-body">
              <h3>Industrial Automation</h3>
              <p>SSC&rsquo;s Industrial Automation Solutions bring advanced technology to manufacturing, making processes smarter and more efficient. By integrating PLCs, Drives, and HMI, we help industries improve productivity, accuracy, and real-time monitoring.</p>
              <div className="sol-card-row">
                <span className="sol-read">Read More</span>
                <div className="sol-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              </div>
            </div>
          </div>
          <div className="sol-img-card"><Link href="/solutions/product-distribution" className="sol-card-link" aria-label="Product Distribution"></Link>
            <img className="sol-bg" src="/solution-product-distribution.jpg" alt="Product Distribution" loading="lazy" decoding="async" />
            <div className="sol-overlay"></div>
            <div className="sol-card-body">
              <h3>Product Distribution</h3>
              <p>SSC understands what the industry needs. As a trusted partner, we work with leading MNCs including ABB, Mitsubishi, Connectwell, Hicool, and more, committed to top-quality products and reliable service for OEMs, Panel Builders, and End Users.</p>
              <div className="sol-card-row">
                <span className="sol-read">Read More</span>
                <div className="sol-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              </div>
            </div>
          </div>
          <div className="sol-img-card"><Link href="/solutions/industrial-safety" className="sol-card-link" aria-label="Safety Solutions"></Link>
            <img className="sol-bg" src="/solution-industrial-safety.jpg" alt="Safety Solutions" loading="lazy" decoding="async" />
            <div className="sol-overlay"></div>
            <div className="sol-card-body">
              <h3>Safety Solutions</h3>
              <p>We work closely with OEMs &amp; End Users to ensure man-machine safety. We provide electromechanical safety solutions from Schmersal, helping achieve PLe compliance, CE certification, and international safety regulations.</p>
              <div className="sol-card-row">
                <span className="sol-read">Read More</span>
                <div className="sol-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              </div>
            </div>
          </div>
          <div className="sol-img-card"><a href="https://sscautomation.com" target="_blank" rel="noopener noreferrer" className="sol-card-link" aria-label="Panel Manufacturing"></a>
            <img className="sol-bg" src="/solution-panel-manufacturing.jpg" alt="Panel Manufacturing" loading="lazy" decoding="async" />
            <div className="sol-overlay"></div>
            <div className="sol-card-body">
              <h3>Panel Manufacturing</h3>
              <p>SSC Automation delivers high-quality control panels for robust industrial applications. Our panels integrate advanced technology, ensuring seamless operation, safety, and efficiency with expert engineering and customised solutions.</p>
              <div className="sol-card-row">
                <span className="sol-read">Read More</span>
                <div className="sol-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              </div>
            </div>
          </div>
          <div className="sol-img-card"><Link href="/solutions/industrial-software" className="sol-card-link" aria-label="Industrial Software"></Link>
            <img className="sol-bg" src="/solution-industrial-software.webp" alt="Industrial software solutions" loading="lazy" decoding="async" />
            <div className="sol-overlay"></div>
            <div className="sol-card-body">
              <h3>Industrial Software</h3>
              <p>SSC AI Labs specialises in SCADA, MES, and IIoT platforms from Mitsubishi and ICONICS, enhancing real-time monitoring, process optimisation, and data-driven decision-making for smart manufacturing.</p>
              <div className="sol-card-row">
                <span className="sol-read">Read More</span>
                <div className="sol-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              </div>
            </div>
          </div>
          <div className="sol-img-card"><Link href="/solutions/robotics" className="sol-card-link" aria-label="Robotics"></Link>
            <img className="sol-bg" src="/solution-robotics.jpg" alt="Robotics solutions" loading="lazy" decoding="async" />
            <div className="sol-overlay"></div>
            <div className="sol-card-body">
              <h3>Robotics</h3>
              <p>SSC is a trusted partner of Mitsubishi Robotics, offering advanced pick-and-place solutions and vision system integration to enhance precision, efficiency, and productivity across industrial operations.</p>
              <div className="sol-card-row">
                <span className="sol-read">Read More</span>
                <div className="sol-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <div className="partners-section" id="partners">
        <div className="two-col-header">
          <div>
            <div className="tcl-label">Trusted since 1966 &middot; 60 Years</div>
            <h2 className="tcl-h2">Working with the Best Partners</h2>
          </div>
          <div className="tcr">Our specializations are tailored to assist you in innovation with a mix of conventional and non-conventional technology to help you achieve your utmost potential.</div>
        </div>
        <div className="partners-grid">
          <Link href="/partners/mitsubishi" className="partner-card brand-mitsubishi">
            <div className="pc-logo">
              <img src="/logos/mitsubishi.svg" alt="Mitsubishi Electric" className="partner-svg" style={{width: '140px', height: 'auto'}} />
            </div>
            <div className="pc-body">
              <div className="pc-name">Mitsubishi Electric</div>
              <div className="pc-desc">PLCs, HMIs, servo motors, VFDs, and robotics, complete factory automation solutions across India.</div>
              <span className="pc-link">Know More &rarr;</span>
            </div>
          </Link>
          <Link href="/partners/abb" className="partner-card brand-abb">
            <div className="pc-logo">
              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMC4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iRWJlbmVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA4Ni4yIDMzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4Ni4yIDMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkYwMDBGO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDcsMzNoMmwwLDBjNi0wLjMsMTAuMi01LDEwLjItMTAuNmMwLTEuOS0wLjQtMy44LTEuMy01LjNINDdWMzN6Ii8+DQoJPHJlY3QgeD0iMzYiIHk9IjE3IiBjbGFzcz0ic3QwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTYiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTcuMywxNmMtMS0xLjQtMi40LTIuNS0zLjktMy4zYzEuOC0xLjMsMy0zLjQsMy01LjdjMC0zLjktMy4xLTctNy03SDQ3djE2SDU3LjN6Ii8+DQoJPHJlY3QgeD0iMzYiIGNsYXNzPSJzdDAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03NCwzM2gybDAsMGM2LTAuMywxMC4yLTUsMTAuMi0xMC42YzAtMS45LTAuNC0zLjgtMS4zLTUuM0g3NFYzM3oiLz4NCgk8cmVjdCB4PSI2MyIgeT0iMTciIGNsYXNzPSJzdDAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04NC4zLDE2Yy0xLTEuNC0yLjQtMi41LTMuOS0zLjNjMS44LTEuMywzLTMuNCwzLTUuN2MwLTMuOS0zLjEtNy03LTdINzR2MTZIODQuM3oiLz4NCgk8cmVjdCB4PSI2MyIgY2xhc3M9InN0MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjE2Ii8+DQoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI1LjcsMTcgMCwzMyA4LjMsMzMgMTAuNywyNiAxNiwyNiAxNiwxNyAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNiwwIDExLjcsMCA2LDE2IDE2LDE2IAkiLz4NCgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE3LDI2IDIyLjMsMjYgMjQuNywzMyAzMywzMyAyNy4zLDE3IDE3LDE3IAkiLz4NCgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjI3LDE2IDIxLjMsMCAxNywwIDE3LDE2IAkiLz4NCjwvZz4NCjwvc3ZnPg0K" alt="ABB" className="partner-svg-img" style={{height: '38px', width: 'auto', maxWidth: '130px'}} />
            </div>
            <div className="pc-body">
              <div className="pc-name">ABB</div>
              <div className="pc-desc">Switchgear, drives, contactors and automation components for OEMs and panel builders across Gujarat.</div>
              <span className="pc-link">Know More &rarr;</span>
            </div>
          </Link>
          <Link href="/partners/nvent" className="partner-card brand-nvent">
            <div className="pc-logo">
              <img src="/logos/nvent.svg" alt="nVent Hoffman" className="partner-svg" style={{width: '150px', height: 'auto'}} />
            </div>
            <div className="pc-body">
              <div className="pc-name">nVent Hoffman</div>
              <div className="pc-desc">Enclosures, cable management, and thermal management solutions for industrial electrical infrastructure.</div>
              <span className="pc-link">Know More &rarr;</span>
            </div>
          </Link>
          <Link href="/partners/hicool" className="partner-card brand-hicool">
            <div className="pc-logo">
              <img src="/logos/hicool.png" alt="Hicool" className="partner-svg-img" style={{height: '48px', width: 'auto', maxWidth: '150px'}} />
            </div>
            <div className="pc-body">
              <div className="pc-name">Hicool</div>
              <div className="pc-desc">Industrial cooling fans, axial fans, compact fans, blowers and enclosure thermal management solutions.</div>
              <span className="pc-link">Know More &rarr;</span>
            </div>
          </Link>
          <Link href="/partners/connectwell" className="partner-card brand-connectwell">
            <div className="pc-logo">
              <svg className="partner-svg" style={{width: '150px', height: 'auto'}} xmlns="http://www.w3.org/2000/svg" width="623.7" height="113.5" viewBox="0 0 623.7 113.5">
  <g id="connectwell-logo-vector" transform="translate(-14.7 -270.699)">
    <path id="Path_221285" data-name="Path 221285" d="M100.2,294.2h17.5c1,0,1.7,1.2,1.7,2.6v22.7c0,1.4-.8,2.6-1.7,2.6H100.2c-1,0-1.8-1.2-1.8-2.6V296.8c0-1.4.8-2.6,1.8-2.6M83.9,281.5h49.9a4.848,4.848,0,0,1,5,4.8V328a4.848,4.848,0,0,1-5,4.8H83.9a4.91,4.91,0,0,1-5-4.8V286.3A4.91,4.91,0,0,1,83.9,281.5Zm143.8,0v7.8L234,284c1.7-1,4.6-2.6,7.4-2.5h18.9c5.3,0,8.9,3.6,9.2,10.6l-.1,40.8H250.9V300.1c.4-3.8-2.4-6.2-4.1-5.9h-8.1c-5.3,1.4-9.5,4.7-10.9,9.9l-.1,28.9H209l-.1-51.4h18.8Zm121.3,0h50.1v12.8l-33.7.1c-3-.2-4.8.9-4.9,3.3v21.1c.4,2.2,1.3,3.6,3.9,3.4H399v10.7H350c-6.3,0-9.6-5.3-9.6-10.7V291.4C340.4,285.1,343.7,281.5,349,281.5Zm272.1-10.8h17.3v62.1H621.1Zm-21.5,0h17.2v62.1H599.6Zm-187.7.1h17.3v10.7H437v12.8h-7.8v38.6H411.9V294.3h-8.3V281.5h8.3ZM294,294.2h18.5a2.952,2.952,0,0,1,2.8,2.9V304a2.86,2.86,0,0,1-2.8,2.8H294Zm-11.6-12.7h44.5c3.7.2,7.4,2,7.2,7.7v18.3c.5,5.2-2,8.7-7.8,8.2l-32.4-.1v6.5H334l.1,10.7H282.4c-3.8,0-7.7-4.1-7.7-9.3V289.9A7.944,7.944,0,0,1,282.4,281.5Zm-119.5,0v7.8l6.3-5.3c1.7-1,4.6-2.6,7.4-2.5h18.9c5.3,0,8.9,3.6,9.2,10.6l-.1,40.8H186V300.1c.4-3.8-2.4-6.1-4.1-5.8h-8.1c-5.3,1.4-9.5,4.6-10.9,9.8l-.1,28.9H144.2l-.1-51.4h18.8Zm367.4,43.2.1-43.3H513.3V319c.1,1.9-.5,3.3-2.7,3.1H497.8c-2.5-.1-3.1-.7-3.1-3V281.4H477.3v37.4c0,1.7-.7,2.8-3.1,3.3H464.1c-2.4.1-3.9-1.5-3.8-3.3V281.4H442.2v43.4c0,3.9,4.1,8,9.3,8H478c4.8,0,8-4.6,8.4-7.7.3,3.1,3.4,7.9,8.4,7.7h25.6C525.7,332.9,530.3,328.6,530.3,324.7Zm-507-43.2h51v12.8l-34.6.1c-3-.2-4.8.9-4.8,3.3v21.1c.4,2.2,1.3,3.7,3.9,3.5H74.3V333h-51c-6.3,0-8.6-5.3-8.6-10.7V291.5C14.7,285.1,18.1,281.5,23.3,281.5Zm531.6,12.7h18.5a2.952,2.952,0,0,1,2.8,2.9V304a2.86,2.86,0,0,1-2.8,2.8H554.9Zm-11.6-12.7h44.5c3.7.2,7.4,2,7.2,7.7v18.3c.5,5.2-2,8.7-7.8,8.2l-32.4-.1V322H595v10.8H543.4c-3.8,0-7.7-4.1-7.7-9.3V289.9A7.868,7.868,0,0,1,543.3,281.5Z" fill="#e31f24" fillRule="evenodd"/>
    <path id="Path_221286" data-name="Path 221286" d="M575.1,383.3V360.1l14.2,13.7,1.2,1.2a9.831,9.831,0,0,1,1.2,1.5V361h3.4v23.2l-14.5-13.9a11.977,11.977,0,0,1-1.1-1.2,11.314,11.314,0,0,1-1-1.3v15.5h-3.4Zm-12.2-11.1a11.3,11.3,0,0,1-.9,4.5,12.249,12.249,0,0,1-2.6,3.8,10.848,10.848,0,0,1-3.9,2.5,11.661,11.661,0,0,1-4.5.9,12.158,12.158,0,0,1-4.6-.9,12.383,12.383,0,0,1-3.9-2.5,12.25,12.25,0,0,1-2.6-3.8,11.7,11.7,0,0,1,0-9,12.249,12.249,0,0,1,2.6-3.8,10.056,10.056,0,0,1,3.9-2.5,11.791,11.791,0,0,1,4.6-.9,12.158,12.158,0,0,1,4.6.9,13.621,13.621,0,0,1,3.9,2.5,12.25,12.25,0,0,1,2.6,3.8A13.3,13.3,0,0,1,562.9,372.2Zm-3.8,0a8.663,8.663,0,0,0-.6-3.2,7.992,7.992,0,0,0-1.8-2.7,7.61,7.61,0,0,0-2.6-1.8,8.308,8.308,0,0,0-6.2,0,6.765,6.765,0,0,0-2.6,1.8,7.991,7.991,0,0,0-1.8,2.7,8.834,8.834,0,0,0,0,6.4,7.992,7.992,0,0,0,1.8,2.7,8.7,8.7,0,0,0,2.6,1.8,8.308,8.308,0,0,0,6.2,0,6.765,6.765,0,0,0,2.6-1.8,7.991,7.991,0,0,0,1.8-2.7A8.662,8.662,0,0,0,559.1,372.2Zm-36,11.1V361h3.6v22.3ZM506.3,364v19.2h-3.6V364h-5.9v-3h15.5v3.1h-6Zm-19.8,2.4a11.218,11.218,0,0,0-3.3-2,10.481,10.481,0,0,0-3.6-.7,8.642,8.642,0,0,0-6.1,14.4,7.324,7.324,0,0,0,5.6,2.3,9.857,9.857,0,0,0,3.8-.7,13.616,13.616,0,0,0,3.4-2.1v4.1a11.991,11.991,0,0,1-3.2,1.6,15.013,15.013,0,0,1-3.7.5,14.034,14.034,0,0,1-4.7-.8,11.947,11.947,0,0,1-3.8-2.5,10.936,10.936,0,0,1-2.5-3.8,12.206,12.206,0,0,1,0-9.2,11.254,11.254,0,0,1,6.3-6.3,11.734,11.734,0,0,1,4.6-.8,12.088,12.088,0,0,1,3.8.6,18.739,18.739,0,0,1,3.5,1.7Zm-42.6,16.9V361h12.5v3.1h-8.8v5.6h8.8v3.2h-8.8v7.2h8.8v3.2H443.9Zm-33.1,0V360.1L425,373.8l1.2,1.2c.4.4.8.9,1.3,1.5V361h3.4v23.2l-14.5-13.9a11.985,11.985,0,0,1-1.1-1.2,11.318,11.318,0,0,1-1-1.3v15.5h-3.5Zm-33.1,0V360.1l14.2,13.7,1.2,1.2a9.833,9.833,0,0,1,1.2,1.5V361h3.4v23.2l-14.5-13.9a11.985,11.985,0,0,1-1.1-1.2,11.318,11.318,0,0,1-1-1.3v15.5h-3.4Zm-12.2-11.1a11.3,11.3,0,0,1-.9,4.5,12.249,12.249,0,0,1-2.6,3.8,10.848,10.848,0,0,1-3.9,2.5,11.661,11.661,0,0,1-4.5.9,12.158,12.158,0,0,1-4.6-.9,12.382,12.382,0,0,1-3.9-2.5,12.25,12.25,0,0,1-2.6-3.8,11.7,11.7,0,0,1,0-9,12.249,12.249,0,0,1,2.6-3.8,10.057,10.057,0,0,1,3.9-2.5,11.791,11.791,0,0,1,4.6-.9,12.158,12.158,0,0,1,4.6.9,13.621,13.621,0,0,1,3.9,2.5,12.25,12.25,0,0,1,2.6,3.8A13.3,13.3,0,0,1,365.5,372.2Zm-3.8,0a8.662,8.662,0,0,0-.6-3.2,7.992,7.992,0,0,0-1.8-2.7,7.611,7.611,0,0,0-2.6-1.8,8.308,8.308,0,0,0-6.2,0,6.765,6.765,0,0,0-2.6,1.8,7.992,7.992,0,0,0-1.8,2.7,8.833,8.833,0,0,0,0,6.4,7.992,7.992,0,0,0,1.8,2.7,8.7,8.7,0,0,0,2.6,1.8,8.308,8.308,0,0,0,6.2,0,6.765,6.765,0,0,0,2.6-1.8,7.992,7.992,0,0,0,1.8-2.7A8.662,8.662,0,0,0,361.7,372.2ZM330,366.4a11.218,11.218,0,0,0-3.3-2,10.481,10.481,0,0,0-3.6-.7,8.642,8.642,0,0,0-6.1,14.4,7.324,7.324,0,0,0,5.6,2.3,9.857,9.857,0,0,0,3.8-.7,13.616,13.616,0,0,0,3.4-2.1v4.1a11.991,11.991,0,0,1-3.2,1.6,15.013,15.013,0,0,1-3.7.5,14.034,14.034,0,0,1-4.7-.8,11.947,11.947,0,0,1-3.8-2.5,10.936,10.936,0,0,1-2.5-3.8,12.206,12.206,0,0,1,0-9.2,11.254,11.254,0,0,1,6.3-6.3,11.734,11.734,0,0,1,4.6-.8,12.088,12.088,0,0,1,3.8.6,18.739,18.739,0,0,1,3.5,1.7ZM275.1,364v19.2h-3.6V364h-5.9v-3H281v3.1h-5.9Zm-38.6,19.3V361h3.6v8.2h11V361h3.6v22.3h-3.6V372.5h-11v10.8Zm-20.8-11.4h8.8V374c0,3.1-.9,5.6-2.7,7.3s-4.3,2.6-7.6,2.6a14.8,14.8,0,0,1-4.9-.8,11.66,11.66,0,0,1-3.8-2.4,9.475,9.475,0,0,1-2.4-3.8,13.421,13.421,0,0,1,.1-9.4,10.755,10.755,0,0,1,2.6-3.8,10.211,10.211,0,0,1,3.8-2.4,12.236,12.236,0,0,1,4.7-.8,10.534,10.534,0,0,1,8.4,3.9l-2.7,2a9.172,9.172,0,0,0-2.5-2,7.943,7.943,0,0,0-3.2-.6,8.066,8.066,0,0,0-5.9,2.3,8.47,8.47,0,0,0-2.3,6,8.379,8.379,0,0,0,2.3,6.1,7.762,7.762,0,0,0,5.9,2.4,7.928,7.928,0,0,0,4.9-1.4,4.9,4.9,0,0,0,1.8-4v-.3h-5.4v-3Zm-29.2,11.4V361h3.6v22.3Zm-22.2-10v10h-3.4V361H166a16.217,16.217,0,0,1,3.5.3,5.119,5.119,0,0,1,2.1,1,4.913,4.913,0,0,1,1.6,2.1,6.71,6.71,0,0,1,.6,2.8,6.043,6.043,0,0,1-1.3,4.2,5.707,5.707,0,0,1-3.8,1.8l7.7,10.2h-4.1l-7.4-10h-.6Zm.2-2.8h.7c1.9,0,3.2-.2,3.8-.7a2.7,2.7,0,0,0,.9-2.4,3,3,0,0,0-1-2.6,6.683,6.683,0,0,0-3.8-.8h-.7v6.5ZM116,383.3V361h12.5v3.1h-8.8v5.6h8.8v3.2h-8.8v7.2h8.8v3.2H116Zm-31.4,0V361h3.6v8.2h11V361h3.6v22.3H99.2V372.5h-11v10.8ZM67.8,364v19.2H64.2V364H58.3v-3H73.8v3.1h-6Z" fill="#2b2929"/>
  </g>
</svg>
            </div>
            <div className="pc-body">
              <div className="pc-name">Connectwell</div>
              <div className="pc-desc">India&rsquo;s leading terminal block and wiring accessories manufacturer for industrial panel applications.</div>
              <span className="pc-link">Know More &rarr;</span>
            </div>
          </Link>
          <Link href="/partners/schmersal" className="partner-card brand-schmersal">
            <div className="pc-logo">
              <svg className="partner-svg" style={{width: '140px', height: 'auto'}} viewBox="0 0 416 83" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>SSC Control | Leading Industrial Automation Solution Provider</title>
    <g id="elements/logo_subline" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group-3" fill="#133579">
            <path d="M388.91529,45.3340845 L415.410453,45.3340845 L415.410453,38.064115 L396.866973,38.064115 L396.866973,4.48474537 L388.91529,4.48474537 L388.91529,45.3340845 Z M372.822027,45.3285546 L380.80874,45.3285546 L380.80874,8.50129291 C380.80874,6.2266625 379.171574,4.49027527 377.023717,4.49027527 L352.999051,4.49027527 C350.906503,4.49027527 349.269337,6.2266625 349.269337,8.50129291 L349.269337,45.3285546 L357.221021,45.3285546 L357.221021,28.5766574 L372.822027,28.5766574 L372.822027,45.3285546 Z M357.204428,20.7315788 L372.807278,20.7315788 L372.807278,12.3077044 L357.204428,12.3077044 L357.204428,20.7315788 Z M341.738008,41.385739 L341.738008,25.2679365 C341.738008,23.0522917 340.097155,21.2532323 337.951141,21.2532323 L317.755746,21.2532323 L317.755746,12.3795931 L341.738008,12.3795931 L341.738008,8.50129291 C341.738008,6.2285058 340.097155,4.49027527 337.951141,4.49027527 L313.596461,4.49027527 C311.505756,4.49027527 309.866747,6.2285058 309.866747,8.50129291 L309.866747,25.0872933 C309.866747,27.3029381 311.505756,29.1314903 313.596461,29.1314903 L333.718109,29.1314903 L333.718109,37.4152739 L309.866747,37.4152739 L309.866747,41.385739 C309.866747,43.5995406 311.505756,45.3359278 313.596461,45.3359278 L337.951141,45.3359278 C340.097155,45.3359278 341.738008,43.5995406 341.738008,41.385739 L341.738008,41.385739 Z M296.078053,67.2896135 C296.078053,65.9200427 297.051503,65.0997749 298.937562,65.0997749 C300.915803,65.0997749 301.857911,66.0103643 301.857911,67.8057371 L306.299275,67.8057371 C306.299275,63.4573959 303.89515,61.3892149 299.029745,61.3892149 C294.101655,61.3892149 291.515008,63.5163814 291.515008,67.7449083 C291.515008,71.5162971 293.249887,73.219505 297.842431,73.9494512 C300.915803,74.436082 302.010934,75.1660282 302.010934,76.8692361 C302.010934,78.3604646 301.006142,79.0885675 298.998402,79.0885675 C296.778642,79.0885675 295.652169,78.2074708 295.652169,76.2001187 L291.210805,76.2001187 C291.210805,80.7327899 293.61493,82.8009708 298.876721,82.8009708 C304.048173,82.8009708 306.57398,80.7014538 306.57398,76.4139414 C306.57398,72.5208948 304.899941,70.6646932 300.064035,69.966083 C297.143686,69.5402811 296.078053,68.8398276 296.078053,67.2896135 L296.078053,67.2896135 Z M294.324738,45.3285546 L302.31145,45.3285546 L302.31145,28.6374863 C302.31145,26.3075569 298.786382,24.6836109 296.638524,24.6872975 C298.786382,24.6872975 302.31145,23.1112772 302.31145,20.6725932 L302.31145,8.50129291 C302.31145,6.2229759 300.672441,4.48658867 298.52827,4.48658867 L269.110915,4.48658867 L269.110915,45.3285546 L277.095784,45.3285546 L277.095784,28.5766574 L294.324738,28.5766574 L294.324738,45.3285546 Z M277.097627,20.7315788 L294.258366,20.7315788 L294.258366,12.3058611 L277.097627,12.3058611 L277.097627,20.7315788 Z M232.287598,45.3340845 L261.653331,45.3340845 L261.653331,37.44661 L240.237437,37.44661 L240.237437,28.5766574 L260.298245,28.5766574 L260.298245,20.6965561 L240.237437,20.6965561 L240.237437,12.3390405 L261.653331,12.3390405 L261.653331,4.48658867 L232.287598,4.48658867 L232.287598,45.3340845 Z M216.675529,45.3340845 L224.653023,45.3340845 L224.653023,8.27456719 C224.653023,5.9722873 222.995577,4.21193718 220.821908,4.21193718 L186.618425,4.21193718 C184.501909,4.21193718 182.84262,5.9722873 182.84262,8.27456719 L182.844464,45.3340845 L190.880955,45.3340845 L190.880955,12.0607024 L199.713905,12.0607024 L199.713905,45.3377711 L207.859172,45.3377711 L207.859172,12.0809787 L216.675529,12.0809787 L216.675529,45.3340845 Z M187.661933,74.8010551 L180.635765,61.754188 L175.798015,61.754188 L175.798015,82.4359977 L180.117698,82.4359977 L180.117698,68.5061906 L187.632435,82.4359977 L191.981617,82.4359977 L191.981617,61.754188 L187.661933,61.754188 L187.661933,74.8010551 Z M167.123619,45.3377711 L175.141674,45.3377711 L175.141674,4.48843197 L167.123619,4.48843197 L167.123619,20.6615334 L151.391713,20.6615334 L151.391713,4.48843197 L143.421593,4.48843197 L143.421593,45.3377711 L151.391713,45.3377711 L151.391713,28.5766574 L167.123619,28.5766574 L167.123619,45.3377711 Z M112.735803,45.3377711 L137.118137,45.3377711 L137.118137,37.4502966 L116.996489,37.4502966 L116.996489,12.3574735 L137.118137,12.3574735 L137.118137,4.48658867 L112.735803,4.48658867 C110.646942,4.48658867 109.007933,6.2229759 109.007933,8.49944961 L109.007933,41.3838957 C109.007933,43.5995406 110.646942,45.3377711 112.735803,45.3377711 L112.735803,45.3377711 Z M104.585005,61.754188 L104.585005,69.934747 L97.466654,69.934747 L97.466654,61.754188 L92.9036084,61.754188 L92.9036084,82.4359977 L97.466654,82.4359977 L97.466654,73.8886223 L104.585005,73.8886223 L104.585005,82.4359977 L109.148051,82.4359977 L109.148051,61.754188 L104.585005,61.754188 Z M102.324684,41.3820524 L102.324684,25.2495035 C102.324684,23.0338587 100.685675,21.2366426 98.5396611,21.2366426 L78.4770097,21.2366426 L78.4770097,12.3759065 L102.324684,12.3759065 L102.324684,8.50129291 C102.324684,6.2266625 100.685675,4.48843197 98.5396611,4.48843197 L74.1831377,4.48843197 C72.0942768,4.48843197 70.4552677,6.2266625 70.4552677,8.50129291 L70.4552677,25.067017 C70.4552677,27.2863484 72.0942768,29.1167439 74.1831377,29.1167439 L94.304786,29.1167439 L94.304786,37.4355502 L70.4552677,37.4355502 L70.4552677,41.3820524 C70.4552677,43.5995406 72.0942768,45.3377711 74.1831377,45.3377711 L98.5396611,45.3377711 C100.685675,45.3377711 102.324684,43.5995406 102.324684,41.3820524 L102.324684,41.3820524 Z M86.0894603,61.754188 L70.453424,61.754188 L70.453424,65.7375562 L75.9899194,65.7375562 L75.9899194,82.4359977 L80.552965,82.4359977 L80.552965,65.7375562 L86.0894603,65.7375562 L86.0894603,61.754188 Z M42.0150489,37.396841 L42.0150489,12.1934199 C42.0150489,5.4616936 36.5559871,0 29.8211162,0 L12.1957764,0 C5.46090548,0 0,5.4616936 0,12.1934199 L0,37.396841 C0,44.1304106 5.46090548,49.5902609 12.1957764,49.5902609 L29.8211162,49.5902609 C36.5559871,49.5902609 42.0150489,44.1304106 42.0150489,37.396841 L42.0150489,37.396841 Z M40.2598896,37.1774884 C40.2598896,43.0152149 35.5272277,47.745119 29.688373,47.745119 L12.3451125,47.745119 C6.5081014,47.745119 1.77543956,43.0152149 1.77543956,37.1774884 L1.77543956,12.4053992 C1.77543956,6.56951603 6.5081014,1.83961195 12.3451125,1.83961195 L29.688373,1.83961195 C35.5272277,1.83961195 40.2598896,6.56951603 40.2598896,12.4053992 L40.2598896,37.1774884 Z M19.1518859,11.9943437 L19.1518859,14.009069 C18.4476098,14.5583719 17.9940707,15.4173491 17.9940707,16.3777076 C17.9940707,18.0403629 19.3399387,19.3822842 20.999228,19.3822842 C22.6585173,19.3822842 24.006229,18.0403629 24.006229,16.3777076 C24.006229,15.4173491 23.5508462,14.5583719 22.8447265,14.009069 L22.8447265,11.9943437 L19.1518859,11.9943437 Z M29.5722228,21.9463125 L28.2742898,21.9463125 L30.5622654,17.2956703 L27.2455304,15.6569779 L24.2422168,21.9463125 L12.2787409,21.9463125 C10.9328729,21.9463125 9.8395856,20.3629191 9.8395856,19.0154678 L9.8395856,12.1325911 C9.8395856,10.7851398 10.9328729,9.69390707 12.2787409,9.69390707 L29.6238451,9.69390707 C30.9697131,9.69390707 32.0648441,10.7851398 32.0648441,12.1325911 L32.0630004,16.1933778 L37.9756013,16.213654 L37.9645394,12.6100054 C37.9645394,7.97042293 34.2053273,4.20640729 29.5648482,4.20640729 L12.4907612,4.20640729 C7.85212574,4.20640729 4.09106997,7.97042293 4.09106997,12.6100054 L4.09106997,18.5693896 C4.09106997,23.208972 7.85396939,27.4633051 12.4944485,27.4633051 L21.5560118,27.4633051 L20.2064565,30.1342447 C18.991488,30.488158 17.9737905,31.5296217 17.9737905,32.9784543 C17.9737905,33.9203799 18.4125804,34.7572374 19.1002636,35.3046971 L19.1002636,37.2198843 L22.761762,37.2198843 L22.761762,35.254928 C23.4199468,34.7148416 23.8403001,33.8890438 23.8403001,32.9710811 C23.8403001,32.4973534 23.7315244,32.0568051 23.536097,31.6604959 L25.6009904,27.4633051 L29.6238451,27.4633051 C30.9697131,27.4633051 32.0648441,28.5324182 32.0648441,29.8927726 L32.0648441,37.3544451 C32.0648441,38.7129561 30.9697131,39.817092 29.6238451,39.817092 L12.2787409,39.817092 C10.9328729,39.817092 9.8395856,38.7129561 9.8395856,37.3544451 L9.8395856,33.5056377 L4.09106997,33.4595553 L4.09106997,36.9304864 C4.09106997,41.5700689 7.85212574,45.3303979 12.4907612,45.3303979 L29.5648482,45.3303979 C34.2053273,45.3303979 37.9645394,41.5700689 37.9645394,36.9304864 L37.9645394,30.3425374 C37.9645394,25.7047983 34.2108582,21.9463125 29.5722228,21.9463125 L29.5722228,21.9463125 Z M132.23614,61.754188 L118.060278,61.754188 L118.060278,82.4359977 L132.540343,82.4359977 L132.540343,78.5116151 L122.623324,78.5116151 L122.623324,73.8572863 L130.715124,73.8572863 L130.715124,69.966083 L122.623324,69.966083 L122.623324,65.6767273 L132.23614,65.6767273 L132.23614,61.754188 Z M159.614413,61.754188 L151.918998,61.754188 L151.918998,82.4359977 L159.614413,82.4359977 C165.182251,82.4359977 167.645373,79.9106787 167.645373,74.2849315 L167.645373,69.9034109 C167.645373,64.3089998 165.182251,61.754188 159.614413,61.754188 L159.614413,61.754188 Z M158.976509,65.6472345 C162.048038,65.6472345 163.082328,66.7716466 163.082328,69.9955758 L163.082328,74.1927666 C163.082328,77.4166958 162.048038,78.5429512 158.976509,78.5429512 L156.482044,78.5429512 L156.482044,65.6472345 L158.976509,65.6472345 Z M205.609913,61.754188 L198.674084,82.4359977 L203.29797,82.4359977 L204.605121,78.2682997 L211.115066,78.2682997 L212.424061,82.4359977 L217.259967,82.4359977 L210.324138,61.754188 L205.609913,61.754188 Z M205.731594,74.4674181 L207.861015,66.9246404 L209.990437,74.4674181 L205.731594,74.4674181 Z M234.874245,69.8130892 L234.874245,74.3752532 C234.874245,80.1539941 237.51989,82.8009708 243.238907,82.8009708 C248.957924,82.8009708 251.605412,80.1539941 251.605412,74.3752532 L251.605412,69.8130892 C251.605412,64.0343483 248.957924,61.3892149 243.238907,61.3892149 C237.51989,61.3892149 234.874245,64.0343483 234.874245,69.8130892 L234.874245,69.8130892 Z M239.437291,69.8739181 C239.437291,66.6204962 240.50108,65.3117542 243.238907,65.3117542 C245.976734,65.3117542 247.042367,66.6204962 247.042367,69.8739181 L247.042367,74.3144243 C247.042367,77.5696895 245.976734,78.8765882 243.238907,78.8765882 C240.50108,78.8765882 239.437291,77.5696895 239.437291,74.3144243 L239.437291,69.8739181 Z M273.720052,61.754188 L259.787552,61.754188 L259.787552,82.4359977 L264.350598,82.4359977 L264.350598,74.0711089 L272.199036,74.0711089 L272.199036,70.1485696 L264.350598,70.1485696 L264.350598,65.6767273 L273.720052,65.6767273 L273.720052,61.754188 Z M318.832441,61.754188 L311.896611,82.4359977 L316.520497,82.4359977 L317.827649,78.2682997 L324.337594,78.2682997 L325.646589,82.4359977 L330.482495,82.4359977 L323.546666,61.754188 L318.832441,61.754188 Z M318.954122,74.4674181 L321.083543,66.9246404 L323.212964,74.4674181 L318.954122,74.4674181 Z M351.107461,61.754188 L337.174962,61.754188 L337.174962,82.4359977 L341.738008,82.4359977 L341.738008,74.0711089 L349.586446,74.0711089 L349.586446,70.1485696 L341.738008,70.1485696 L341.738008,65.6767273 L351.107461,65.6767273 L351.107461,61.754188 Z M372.552854,61.754188 L358.376992,61.754188 L358.376992,82.4359977 L372.857057,82.4359977 L372.857057,78.5116151 L362.940038,78.5116151 L362.940038,73.8572863 L371.031839,73.8572863 L371.031839,69.966083 L362.940038,69.966083 L362.940038,65.6767273 L372.552854,65.6767273 L372.552854,61.754188 Z M394.121771,61.754188 L378.485735,61.754188 L378.485735,65.7375562 L384.02223,65.7375562 L384.02223,82.4359977 L388.585276,82.4359977 L388.585276,65.7375562 L394.121771,65.7375562 L394.121771,61.754188 Z M403.187022,61.754188 L397.984228,61.754188 L404.737535,73.8277935 L404.737535,82.4359977 L409.300581,82.4359977 L409.300581,73.7374719 L416.02439,61.754188 L411.217982,61.754188 L407.202502,69.2361368 L403.187022,61.754188 Z" id="Fill-1"></path>
        </g>
    </g>
</svg>
            </div>
            <div className="pc-body">
              <div className="pc-name">Schmersal</div>
              <div className="pc-desc">Safety switches, interlocks and relays for machine guarding and PLe compliance worldwide.</div>
              <span className="pc-link">Know More &rarr;</span>
            </div>
          </Link>
          <Link href="/partners/unison" className="partner-card brand-unison">
            <div className="pc-logo">
              <img src="/logos/unison.png" alt="Unison" className="partner-svg-img" style={{maxHeight: '26px', maxWidth: '150px', width: 'auto', height: 'auto'}} />
            </div>
            <div className="pc-body">
              <div className="pc-name">Unison</div>
              <div className="pc-desc">Thyristor power controllers, solid state relays and power regulators for industrial heating applications.</div>
              <span className="pc-link">Know More &rarr;</span>
            </div>
          </Link>
          <Link href="/partners/gic" className="partner-card brand-gic">
            <div className="pc-logo">
              <img src="/logos/gic.webp" alt="GIC India" className="partner-svg-img" style={{height: '44px', width: 'auto', maxWidth: '130px'}} />
            </div>
            <div className="pc-body">
              <div className="pc-name">GIC India</div>
              <div className="pc-desc">PLCs, HMIs, timers, counters and control relays for industrial automation and process control.</div>
              <span className="pc-link">Know More &rarr;</span>
            </div>
          </Link>
        </div>
      </div>

      {/* 60 YEARS REEL */}
      {REEL.url && (
        <div className="reel-section">
          <FlowLines opacity={0.5} />
          <div className="reel-inner">
            <div className="reel-label">Since 1966</div>
            <h2 className="reel-title">Celebrating 60 Years of Excellence</h2>
            <p className="reel-text">
              From our beginnings in 1966 to becoming one of India&apos;s most trusted names in
              industrial automation and electrical distribution, a look back at six decades of
              powering progress.
            </p>
            <div className="reel-frame">
              <iframe
                className="reel-video"
                src={toEmbedSrc(REEL.url)}
                title={REEL.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* TRUSTED BY */}
      <div className="clients-section">
        <div className="clients-inner">
          <div className="clients-label">Trusted by leading manufacturers &amp; industries</div>
          <div className="clients-grid">
            {CLIENTS.map((c) => (
              <div className="client-logo" key={c.name} title={c.name}>
                {c.logo ? <img src={c.logo} alt={c.name} /> : <span>{c.name}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-section">
        <FlowLines opacity={0.6} />
        <div className="stats-tagline">
          <div className="stats-tagline-title">Quality, Performance, Reliability</div>
          <div className="stats-tagline-desc">Delivering best-in-class products and solutions with precision engineering, superior functionality, and long-term dependability to empower industries with seamless automation and electrical innovations.</div>
        </div>
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-num"><em>2000</em>+</div><div className="stat-label">Orders Processed</div><div className="stat-sub">And growing every year</div></div>
          <div className="stat-item"><div className="stat-num"><em>60</em></div><div className="stat-label">Years of Legacy</div><div className="stat-sub">Trusted since 1966</div></div>
          <div className="stat-item"><div className="stat-num"><em>50</em>+</div><div className="stat-label">Team Members</div><div className="stat-sub">Experts across automation</div></div>
          <div className="stat-item"><div className="stat-num"><em>5</em>+</div><div className="stat-label">Industry Verticals</div><div className="stat-sub">Automotive, pharma &amp; more</div></div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="testi-section">
        <div className="testi-inner">
          <div className="testi-label">In their words</div>
          <h2 className="testi-title">Relationships built over six decades</h2>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <figure className="testi-card" key={i}>
                <div className="testi-mark">&ldquo;</div>
                <blockquote className="testi-quote">{t.quote}</blockquote>
                <figcaption className="testi-foot">
                  <div className="testi-avatar">
                    {t.image ? <img src={t.image} alt={t.author} /> : t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="testi-author">{t.author}</div>
                    <div className="testi-role">
                      {t.role}
                      {t.company ? `, ${t.company}` : ''}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* AWARDS */}
      <div className="awards-home">
        <FlowLines className="ink" opacity={0.9} />
        <div className="awards-home-inner">
          <div className="awards-home-head">
            <div className="testi-label">Awards &amp; Recognition</div>
            <h2 className="testi-title">Recognised by the brands we represent</h2>
          </div>
          <AwardGrid items={ALL_AWARDS} showBrand />
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section" id="contact">
        <div className="cta-inner">
          <h2>Ready to Enhance Your Operations?</h2>
          <p>Discover how our industrial automation solutions can elevate your business performance and safety standards. Contact us today to schedule a consultation.</p>
          <div className="cta-btns">
            <a href="mailto:sales@ssccontrol.com" className="btn-white">Schedule Consultation</a>
            <Link href="/contact" className="btn-ow">Contact Sales</Link>
          </div>
        </div>
      </div>

    </main>
  );
}
