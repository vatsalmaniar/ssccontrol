'use client';

import { useState, useCallback } from 'react';
import './panel-ac.css';

/* ─── Constants (copied exactly from original) ─── */
const MATERIAL_DESC = {
  '5.5':  'Painted Steel: standard industrial panel. Good balance of cost and thermal performance.',
  '3.7':  'Stainless Steel: lower conductivity, better for outdoor / washdown environments.',
  '12.0': 'Aluminium: high conductivity, requires larger AC unit for same conditions.',
  '3.5':  'Fibreglass / Polycarbonate: low conductivity, good insulation properties.',
};

const AC_SIZES = [
  { w: 0,     label: 'No AC Required',    wLabel: '0 W',     note: 'Natural convection sufficient' },
  { w: 400,   label: '400 W AC Unit',     wLabel: '400 W',   note: 'Small enclosure / low heat load' },
  { w: 550,   label: '550 W AC Unit',     wLabel: '550 W',   note: 'Small panel cooling' },
  { w: 850,   label: '850 W AC Unit',     wLabel: '850 W',   note: 'Standard panel cooling' },
  { w: 1200,  label: '1.2 kW AC Unit',    wLabel: '1200 W',  note: 'Medium panel' },
  { w: 1800,  label: '1.8 kW AC Unit',    wLabel: '1800 W',  note: 'Medium-large panel' },
  { w: 2500,  label: '2.5 kW AC Unit',    wLabel: '2500 W',  note: 'Large panel' },
  { w: 3500,  label: '3.5 kW AC Unit',    wLabel: '3500 W',  note: 'Large industrial panel' },
  { w: 5000,  label: '5.0 kW AC Unit',    wLabel: '5000 W',  note: 'Extra-large enclosure' },
  { w: 7000,  label: '7.0 kW AC Unit',    wLabel: '7000 W',  note: 'Heavy-duty application' },
  { w: 10000, label: '10 kW AC Unit',     wLabel: '10000 W', note: 'Very high heat load' },
  { w: 99999, label: 'Multiple / Custom', wLabel: 'Custom',  note: 'Multiple units or consult engineer' },
];

const MATERIAL_OPTIONS = [
  { value: '5.5',  label: 'Painted Steel · k = 5.5 W/m²·°C' },
  { value: '3.7',  label: 'Stainless Steel · k = 3.7 W/m²·°C' },
  { value: '12.0', label: 'Aluminium · k = 12.0 W/m²·°C' },
  { value: '3.5',  label: 'Fibreglass / Polycarbonate · k = 3.5 W/m²·°C' },
];

const ALT_OPTIONS = [
  { value: '1.00', label: '0 – 1000 m · factor ×1.00' },
  { value: '1.07', label: '1000 – 2000 m · ×1.07' },
  { value: '1.14', label: '2000 – 3000 m · ×1.14' },
  { value: '1.22', label: '3000 – 4000 m · ×1.22' },
  { value: '1.30', label: '4000 – 5000 m · ×1.30' },
];

/* ─── SVG icons ─── */
const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const IconMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconDownload = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconPhone = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.66 3.12 2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

/* ─── Compute results (pure function, mirrors calc() exactly) ─── */
function computeResults({ material, mountMode, dimW, dimH, dimD, tempInside, tempOutside, heatLoad, altitude, safetyFactor }) {
  const k   = parseFloat(material);
  const W   = parseFloat(dimW) / 1000;
  const H   = parseFloat(dimH) / 1000;
  const D   = parseFloat(dimD) / 1000;
  const tIn  = parseFloat(tempInside)  || 35;
  const tOut = parseFloat(tempOutside) || 45;
  const Qi   = parseFloat(heatLoad);
  const alt  = parseFloat(altitude);
  const sf   = parseFloat(safetyFactor);

  const dT = tOut - tIn;

  if (!W || !H || !D) return null;

  // Surface area
  const totalArea = 2 * (W * H + D * H + W * D);
  const wallArea  = mountMode === 'wall' ? totalArea - (W * D) : totalArea;

  // Heat calc, ΔT must be positive (cooling required when outside > inside)
  const effectiveDT = Math.max(0, dT);
  const Qs = k * wallArea * effectiveDT;
  const Qtotal = (Qs + Qi) * alt * (1 + sf / 100);

  // Find recommended AC
  const rec = AC_SIZES.find(s => s.w >= Qtotal) || AC_SIZES[AC_SIZES.length - 1];

  return { k, W, H, D, tIn, tOut, dT, Qi, alt, sf, wallArea, Qs, Qtotal, rec, effectiveDT };
}

/* ─── buildEmailBody (mirrors original exactly) ─── */
function buildEmailBody(res, material, mountMode) {
  if (!res) return 'Please find my panel AC selection enquiry attached.';
  const r = res;
  const matLabel = MATERIAL_OPTIONS.find(o => o.value === material)?.label || material;
  return `Panel AC Selection Enquiry
===========================

Enclosure Details:
  Material       : ${matLabel}
  Type           : ${mountMode === 'wall' ? 'Wall Mount' : 'Floor Standing'}
  Dimensions     : ${r.W * 1000} × ${r.H * 1000} × ${r.D * 1000} mm
  Surface Area   : ${r.wallArea.toFixed(3)} m²

Temperature Settings:
  Desired Inside : ${r.tIn}°C
  Outside Field  : ${r.tOut}°C
  ΔT             : ${r.dT.toFixed(1)}°C

Heat Load:
  Surface        : ${r.Qs.toFixed(0)} W
  Internal       : ${r.Qi} W
  Altitude Factor: ×${r.alt}
  Safety Factor  : +${r.sf}%
  Total Required : ${r.Qtotal.toFixed(0)} W (${(r.Qtotal / 1000).toFixed(2)} kW)

Recommendation:
  ${r.rec.label} (${r.rec.wLabel})
  nVent Hoffman Panel AC

Please recommend the exact model and pricing.
Thank you.`;
}

/* ─── downloadReport (mirrors original exactly) ─── */
function downloadReport(res, material, mountMode) {
  if (!res) return;
  const r = res;
  const matLabel = MATERIAL_OPTIONS.find(o => o.value === material)?.label || material;
  let content = 'SSC CONTROL PVT LTD, PANEL AC SELECTION REPORT\n';
  content += 'Generated: ' + new Date().toLocaleString('en-IN') + '\n';
  content += '================================================\n';
  content += 'Enclosure: ' + (matLabel ? matLabel.split('·')[0].trim() : '') + '\n';
  content += 'Type: ' + (mountMode === 'wall' ? 'Wall Mount' : 'Floor Standing') + '\n';
  content += 'Dimensions: ' + (r.W * 1000).toFixed(0) + ' x ' + (r.H * 1000).toFixed(0) + ' x ' + (r.D * 1000).toFixed(0) + ' mm\n';
  content += 'Surface Area: ' + r.wallArea.toFixed(3) + ' m2\n\n';
  content += 'TEMPERATURE\n';
  content += 'Inside: ' + r.tIn + 'C | Outside: ' + r.tOut + 'C | dT: ' + r.dT.toFixed(1) + 'C\n\n';
  content += 'HEAT LOAD\n';
  content += 'Surface Q: ' + r.Qs.toFixed(0) + ' W\n';
  content += 'Internal Q: ' + r.Qi + ' W\n';
  content += 'Altitude: x' + r.alt + ' | Safety: +' + r.sf + '%\n';
  content += 'Total Required: ' + r.Qtotal.toFixed(0) + ' W (' + (r.Qtotal / 1000).toFixed(2) + ' kW)\n\n';
  content += 'RECOMMENDATION\n';
  content += r.rec.label + ' (' + r.rec.wLabel + ')\n';
  content += 'nVent Hoffman Panel Air Conditioning\n\n';
  content += 'SSC Control Pvt Ltd | sales@ssccontrol.com | +91 93130 80866\n';

  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
  a.download = 'SSC_Panel_AC_Report_' + new Date().toISOString().slice(0, 10) + '.txt';
  a.click();
}

/* ─── Slider fill helper ─── */
function sliderStyle(value, min, max) {
  const pct = ((value - min) / (max - min)) * 100;
  return { '--pct': pct + '%' };
}

/* ─── Main component ─── */
export default function PanelACPage() {
  /* Controlled state */
  const [material, setMaterial] = useState('5.5');
  const [mountMode, setMountMode] = useState('floor'); /* 'floor' | 'wall' */
  const [dimW, setDimW] = useState('600');
  const [dimH, setDimH] = useState('1200');
  const [dimD, setDimD] = useState('400');
  const [tempInside, setTempInside] = useState('35');
  const [tempOutside, setTempOutside] = useState('45');
  const [heatLoad, setHeatLoad] = useState(500);
  const [altitude, setAltitude] = useState('1.00');
  const [safetyFactor, setSafetyFactor] = useState(20);

  const toggleMount = useCallback(() => {
    setMountMode(prev => prev === 'floor' ? 'wall' : 'floor');
  }, []);

  /* Derived results, computed inline (equivalent to calc()) */
  const res = computeResults({
    material, mountMode, dimW, dimH, dimD,
    tempInside, tempOutside, heatLoad, altitude, safetyFactor,
  });

  /* dT display */
  const dT = parseFloat(tempOutside) - parseFloat(tempInside);
  const dTColor = dT < 0 ? '#16a34a' : dT < 10 ? '#2471cc' : dT < 20 ? '#d97706' : '#dc2626';

  /* For email: build href */
  const emailBody = buildEmailBody(res, material, mountMode);
  const emailSubject = res
    ? `Panel AC Enquiry, ${res.Qtotal.toFixed(0)}W Required`
    : 'Panel AC Enquiry';
  const mailtoHref = `mailto:sales@ssccontrol.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  /* Results badge text */
  const badgeText = res
    ? `${res.Qtotal.toFixed(0)} W required · Recommend: ${res.rec.label}`
    : 'Calculating...';

  /* Wall area display */
  const areaDisplay = res
    ? `Surface area: ${res.wallArea.toFixed(3)} m² (${mountMode === 'wall' ? '5 faces, back excluded' : '6 faces, all exposed'})`
    : 'Surface area:, m²';

  /* valClass for total required */
  const valClass = res
    ? (res.Qtotal / 1000 < 1 ? 'green' : res.Qtotal / 1000 < 3 ? 'warn' : 'danger')
    : '';

  return (
    <main className="page-panel-ac">
      {/* Hero */}
      <div className="page-hero">
        <div className="hero-tag">Panel Thermal Management</div>
        <h1>Panel AC Selection Tool</h1>
        <p>
          Calculate the exact heat load inside your electrical enclosure and get the right nVent Hoffman
          air conditioning unit, based on material, dimensions, internal equipment heat, altitude, and
          temperature requirements.
        </p>
      </div>

      <div className="tool-wrapper">
        {/* ROW 1 */}
        <div className="row-label">Enclosure Configuration</div>
        <div className="steps-row">

          {/* Step 1: Material */}
          <div className="step-card">
            <div className="step-num">Step 1</div>
            <div className="step-title">Enclosure Material</div>
            <div className="custom-select-wrap">
              <select
                className="custom-select"
                value={material}
                onChange={e => setMaterial(e.target.value)}
              >
                {MATERIAL_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <span className="select-arrow"><ChevronDown /></span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--gray)', background: 'var(--light)', padding: '8px 10px', borderRadius: '6px' }}>
              {MATERIAL_DESC[material]}
            </div>
          </div>

          {/* Step 2: Enclosure Type (toggle) */}
          <div className="step-card">
            <div className="step-num">Step 2</div>
            <div className="step-title">Enclosure Type</div>
            <div
              className={`toggle-switch-label${mountMode === 'wall' ? ' right' : ''}`}
              onClick={toggleMount}
            >
              <div className="ts-slider"></div>
              <div className={`ts-option${mountMode === 'floor' ? ' active' : ''}`}>
                Floor Standing<br />
                <small style={{ fontWeight: '400', fontSize: '10px' }}>All 6 faces exposed</small>
              </div>
              <div className={`ts-option${mountMode === 'wall' ? ' active' : ''}`}>
                Wall Mount<br />
                <small style={{ fontWeight: '400', fontSize: '10px' }}>5 faces exposed</small>
              </div>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--gray)', background: 'var(--light)', padding: '8px 10px', borderRadius: '6px' }}>
              {mountMode === 'floor'
                ? 'Floor Standing: all six surfaces exposed to ambient air, maximum heat transfer area.'
                : 'Wall Mount: back face against wall, 5 faces contribute to heat transfer.'}
            </div>
          </div>

          {/* Step 3: Dimensions */}
          <div className="step-card">
            <div className="step-num">Step 3</div>
            <div className="step-title">Enclosure Dimensions</div>
            <div className="dim-grid">
              <div className="dim-field">
                <label htmlFor="dimW">Width</label>
                <input
                  type="number"
                  id="dimW"
                  className="dim-input"
                  value={dimW}
                  min="100"
                  max="3000"
                  onChange={e => setDimW(e.target.value)}
                />
                <div className="dim-unit">mm</div>
              </div>
              <div className="dim-field">
                <label htmlFor="dimH">Height</label>
                <input
                  type="number"
                  id="dimH"
                  className="dim-input"
                  value={dimH}
                  min="100"
                  max="3000"
                  onChange={e => setDimH(e.target.value)}
                />
                <div className="dim-unit">mm</div>
              </div>
              <div className="dim-field">
                <label htmlFor="dimD">Depth</label>
                <input
                  type="number"
                  id="dimD"
                  className="dim-input"
                  value={dimD}
                  min="100"
                  max="2000"
                  onChange={e => setDimD(e.target.value)}
                />
                <div className="dim-unit">mm</div>
              </div>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--gray)' }}>{areaDisplay}</div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row-label" style={{ marginTop: '8px' }}>Thermal &amp; Site Parameters</div>
        <div className="steps-row">

          {/* Step 4: Temperature */}
          <div className="step-card">
            <div className="step-num">Step 4</div>
            <div className="step-title">Temperature Settings</div>
            <div className="temp-grid">
              <div>
                <div className="temp-field"><label htmlFor="tempInside">Desired Inside Temp</label></div>
                <div className="temp-input-wrap">
                  <input
                    type="number"
                    id="tempInside"
                    className="temp-input"
                    value={tempInside}
                    min="20"
                    max="60"
                    onChange={e => setTempInside(e.target.value)}
                  />
                  <span className="temp-unit">&deg;C</span>
                </div>
              </div>
              <div>
                <div className="temp-field"><label htmlFor="tempOutside">Outside Field Temp</label></div>
                <div className="temp-input-wrap">
                  <input
                    type="number"
                    id="tempOutside"
                    className="temp-input"
                    value={tempOutside}
                    min="10"
                    max="70"
                    onChange={e => setTempOutside(e.target.value)}
                  />
                  <span className="temp-unit">&deg;C</span>
                </div>
              </div>
            </div>
            <div className="dt-badge">
              <div className="dt-badge-label">&Delta;T &nbsp;(Outside &minus; Inside)</div>
              <div className="dt-badge-val" style={{ color: dTColor }}>
                {isNaN(dT) ? ', °C' : `${dT.toFixed(1)} °C`}
              </div>
            </div>
          </div>

          {/* Step 5: Internal Heat Load */}
          <div className="step-card">
            <div className="step-num">Step 5</div>
            <div className="step-title">Internal Heat Load</div>
            <div className="slider-wrap">
              <div className="slider-row">
                <div>
                  <span className="slider-val-badge">{heatLoad}</span>
                  <span className="slider-unit-lbl"> W</span>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--gray)', textAlign: 'right' }}>
                  Total equipment<br />heat dissipation
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="8000"
                step="50"
                value={heatLoad}
                style={sliderStyle(heatLoad, 0, 8000)}
                onChange={e => setHeatLoad(Number(e.target.value))}
              />
              <div className="slider-minmax">
                <span>0 W</span><span>4000 W</span><span>8000 W</span>
              </div>
            </div>
          </div>

          {/* Step 6: Altitude + Safety */}
          <div className="step-card">
            <div className="step-num">Step 6</div>
            <div className="step-title">Altitude &amp; Safety Factor</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  Installation Altitude
                </div>
                <div className="custom-select-wrap">
                  <select
                    className="custom-select"
                    value={altitude}
                    style={{ paddingTop: '8px', paddingBottom: '8px', fontSize: '13px' }}
                    onChange={e => setAltitude(e.target.value)}
                  >
                    {ALT_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <span className="select-arrow"><ChevronDown /></span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                  Safety Factor: {safetyFactor}%
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={safetyFactor}
                  style={sliderStyle(safetyFactor, 10, 50)}
                  onChange={e => setSafetyFactor(Number(e.target.value))}
                />
                <div className="slider-minmax">
                  <span>10%</span><span>30%</span><span>50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div className="results-section">
          <div className="results-header">
            <h2>Heat Load Calculation</h2>
            <span className="results-badge">{badgeText}</span>
          </div>

          {!res ? (
            <div className="results-empty">Enter parameters above to calculate.</div>
          ) : (
            <>
              <div className="result-cards">
                <div className="result-card">
                  <div className="rc-label">Surface Area</div>
                  <div className="rc-value">{res.wallArea.toFixed(3)}</div>
                  <div className="rc-sub">m&sup2; &middot; {mountMode === 'wall' ? '5 faces' : '6 faces'}</div>
                </div>
                <div className="result-card">
                  <div className="rc-label">Surface Heat Transfer</div>
                  <div className="rc-value">{res.Qs.toFixed(0)}</div>
                  <div className="rc-sub">W &nbsp;(&Delta;T={res.effectiveDT.toFixed(1)}&deg;C)</div>
                </div>
                <div className="result-card">
                  <div className="rc-label">Internal Heat Load</div>
                  <div className="rc-value">{res.Qi.toFixed(0)}</div>
                  <div className="rc-sub">W (equipment)</div>
                </div>
                <div className="result-card">
                  <div className="rc-label">Alt &times; Safety</div>
                  <div className="rc-value">{(res.alt * (1 + res.sf / 100)).toFixed(3)}</div>
                  <div className="rc-sub">combined multiplier</div>
                </div>
                <div className="result-card">
                  <div className="rc-label">Total Required</div>
                  <div className={`rc-value ${valClass}`}>{res.Qtotal.toFixed(0)} W</div>
                  <div className="rc-sub">{(res.Qtotal / 1000).toFixed(2)} kW</div>
                </div>
              </div>

              <div className="rec-box">
                <div className="rec-grid">
                  <div className="rec-left">
                    <div className="rec-header">
                      <span className="rec-partner-badge">nVent Hoffman &middot; Recommended Partner</span>
                    </div>
                    <div className="rec-title">Recommended AC Unit</div>
                    <div className="rec-product">{res.rec.label}</div>
                    <span className="rec-wattage">
                      Required: {res.Qtotal.toFixed(0)} W &nbsp;&middot;&nbsp; Unit: {res.rec.wLabel}
                    </span>
                    <div className="rec-note">
                      SSC Control recommends <strong style={{ color: '#fff' }}>nVent Hoffman</strong> Panel Air
                      Conditioning units for reliable enclosure cooling.{' '}
                      {res.rec.w > 0 && res.rec.w < 99999
                        ? `This ${res.rec.label} provides ${(res.rec.w - res.Qtotal).toFixed(0)} W headroom above your calculated load.`
                        : ''}
                      {' '}Contact our sales team for exact model number, pricing, and availability.
                    </div>
                  </div>
                  <div className="rec-actions">
                    <a href={mailtoHref} className="btn-action btn-enquiry">
                      <IconMail />
                      Send Enquiry with Report
                    </a>
                    <button
                      className="btn-action btn-download"
                      onClick={() => downloadReport(res, material, mountMode)}
                    >
                      <IconDownload />
                      Download Report
                    </button>
                    <a href="tel:+919313080866" className="btn-action btn-primary-action">
                      <IconPhone />
                      Contact Sales Team
                    </a>
                  </div>
                </div>
              </div>

              <div className="specs-bar">
                <span className="spec-item">
                  <strong>Enclosure:</strong>{' '}
                  {(res.W * 1000).toFixed(0)}&times;{(res.H * 1000).toFixed(0)}&times;{(res.D * 1000).toFixed(0)} mm
                  &middot; {mountMode === 'wall' ? 'Wall Mount' : 'Floor Standing'}
                </span>
                <span className="spec-item">
                  <strong>Material:</strong> k={res.k} W/m&sup2;&middot;&deg;C
                </span>
                <span className="spec-item">
                  <strong>Temp:</strong> Inside {res.tIn}&deg;C / Outside {res.tOut}&deg;C / &Delta;T {res.dT.toFixed(1)}&deg;C
                </span>
                <span className="spec-item">
                  <strong>Alt:</strong> &times;{res.alt} &nbsp;|&nbsp; <strong>Safety:</strong> +{res.sf}%
                </span>
              </div>
            </>
          )}
        </div>

        {/* FORMULA */}
        <div className="formula-card">
          <h4>Calculation Methodology</h4>
          <div className="formula-text">
            Q_surface  =  k-factor  &times;  Surface Area (m&sup2;)  &times;  &Delta;T (Outside &minus; Inside, &deg;C)<br />
            Q_total    =  (Q_surface + Q_internal)  &times;  Altitude Correction  &times;  (1 + Safety Factor / 100)<br />
            <br />
            Recommended AC Capacity  =  next standard unit above Q_total<br />
            Reference: IEC 890 / Thermal Management of Electrical Enclosures
          </div>
        </div>
      </div>
    </main>
  );
}
