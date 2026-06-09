'use client';

import { useState, useCallback, useRef } from 'react';
import './motor-starter.css';

/* ─── SELECTION DATA (preserved exactly from type2_selection_tool.html) ─── */
const DATA = {
  "MMS-DOL-NS": {
    specs: "SCPD: MMS | 400/415V | 50kA | DOL-NS | IEC Type 2 | OLR: Embedded",
    headers: ["kW","A","MMS Type","Im [A]","Setting Range [A]","Contactor"],
    rows: [
      [0.06,0.2,"MS132-0,25",2.44,"0.16-0.25","A9"],
      [0.09,0.3,"MS132-0,40",3.9,"0.25-0.40","A9"],
      [0.12,0.44,"MS132-0,63",6.14,"0.40-0.63","A9"],
      [0.18,0.6,"MS132-0,63",6.14,"0.40-0.63","A9"],
      [0.25,0.85,"MS132-1,0",11.5,"0.63-1.00","A9"],
      [0.37,1.1,"MS132-1,6",18.4,"1.00-1.60","A9"],
      [0.55,1.5,"MS132-1,6",18.4,"1.00-1.60","A9"],
      [0.75,1.9,"MS132-2,5",28.75,"1.60-2.50","A9"],
      [1.1,2.7,"MS132-4,0",50,"2.50-4.00","A16"],
      [1.5,3.6,"MS132-4,0",50,"2.50-4.00","A16"],
      [2.2,4.9,"MS132-6,3",78.75,"4.00-6.30","A26"],
      [3,6.5,"MS132-10",150,"6.30-10.00","A26"],
      [4,8.5,"MS132-10",150,"6.30-10.00","A26"],
      [5.5,11.5,"MS132-12",180,"8.00-12.00","A26"],
      [7.5,15.5,"MS132-16",240,"10.00-16.00","A30"],
      [11,22,"MS132-25",375,"20.00-25.00","A30"],
      [15,29,"MS132-32",480,"25.00-32.00","A30"],
      [18.5,35,"MS165-42",630,"30.00-42.00","A63"],
      [22,41,"MS165-54",810,"40.00-54.00","A63"],
      [25,46.6,"MS165-54",810,"40.00-54.00","A75"],
      [30,45.5,"MS165-65",975,"52.00-65.00","A75"]
    ],
    resultCols: [
      {l:"SCPD / MMS",k:2},
      {l:"Im Trip [A]",k:3},
      {l:"Setting Range",k:4},
      {l:"Contactor",k:5}
    ]
  },
  "MMS-SD-NS": {
    specs: "SCPD: MMS | 400/415V | 50kA | SD-NS | IEC Type 2 | OLR: Embedded",
    headers: ["kW","A","MMS Type","Im [A]","Setting Range [A]","Line","Delta","Star"],
    rows: [
      [0.06,0.20,"MS132-0,25",3.13,"0.16-0.25","A9","A9","A9"],
      [0.09,0.30,"MS132-0,40",5.0,"0.25-0.40","A9","A9","A9"],
      [0.12,0.44,"MS132-0,63",7.88,"0.40-0.63","A9","A9","A9"],
      [0.18,0.60,"MS132-0,63",7.88,"0.40-0.63","A9","A9","A9"],
      [0.25,0.85,"MS132-1,00",12.5,"0.63-1.00","A9","A9","A9"],
      [0.37,1.10,"MS132-1,60",20.0,"1.00-1.60","A9","A9","A9"],
      [0.55,1.50,"MS132-1,60",20.0,"1.00-1.60","A9","A9","A9"],
      [0.75,1.90,"MS132-2,50",31.25,"1.60-2.50","A9","A9","A9"],
      [1.1,2.70,"MS132-4,00",50,"2.50-4.00","A26","A26","A26"],
      [1.5,3.60,"MS132-4,00",50,"2.50-4.00","A26","A26","A26"],
      [2.2,4.90,"MS132-6,30",78.75,"4.00-6.30","A26","A26","A26"],
      [3.0,6.5,"MS132-10",150,"6.30-10.00","A26","A26","A26"],
      [4.0,8.5,"MS132-10",150,"6.30-10.00","A26","A26","A26"],
      [5.5,11.5,"MS132-16",240,"10.00-16.00","A26","A26","A26"],
      [7.5,18.5,"MS132-20",300,"16.00-20.00","A30","A26","A26"],
      [11.0,22.0,"MS132-25",375,"20.00-25.00","A30","A26","A26"],
      [15.0,29.0,"MS132-32",480,"25.00-32.00","A30","A26","A26"],
      [18.5,35.0,"MS165-42",630,"30.00-42.00","A40","A40","A40"],
      [22.0,41.0,"MS165-54",810,"40.00-54.00","A50","A40","A40"],
      [25.0,46.6,"MS165-54",810,"40.00-54.00","A63","A40","A40"],
      [30.0,55.0,"MS165-65",975,"52.00-65.00","A63","A40","A40"]
    ],
    resultCols: [
      {l:"SCPD / MMS",k:2},
      {l:"Im Trip [A]",k:3},
      {l:"Setting Range",k:4},
      {l:"Line",k:5},
      {l:"Delta",k:6},
      {l:"Star",k:7}
    ]
  },
  "MCCB-DOL-NS": {
    specs: "SCPD: MCCB | 400/415V | 50kA | DOL-NS | IEC Type 2 | OLR: TOL",
    headers: ["kW","A","MCCB Type","Im [A]","Contactor","OLR Type","Setting Range [A]"],
    rows: [
      [0.37,1.1,"XT2S160 MF 2",28,"A9","TA25DU1.4","1-1.4"],
      [0.55,1.5,"XT2S160 MF 2",28,"A9","TA25DU1.8","1.3-1.8"],
      [0.75,1.9,"XT2S160 MF 2",28,"A9","TA25DU2.4","1.7-2.4"],
      [1.1,2.7,"XT2S160 MF 4",56,"A9","TA25DU4","2.8-4"],
      [1.5,3.6,"XT2S160 MF 4",56,"A16","TA25DU5","3.5-5"],
      [2.2,4.9,"XT2S160 MF 8.5",120,"A26","TA25DU6.5","4.5-6.5"],
      [3,6.5,"XT2S160 MF 8.5",120,"A26","TA25DU8.5","6-8.5"],
      [4,8.5,"XT2S160 MF 12.5",175,"A30","TA25DU11","7.5-11"],
      [5.5,11.5,"XT2S160 MF 12.5",175,"A30","TA25DU14","10-14"],
      [7.5,15.5,"XT2S160 MA 20",210,"A30","TA25DU19","13-19"],
      [11,22,"XT2S160 MA 32",288,"A30","TA42DU25","18-25"],
      [15,29,"XT2S160 MA 52",392,"A50","TA75DU42","29-42"],
      [18.5,35,"XT2S160 MA 52",469,"A50","TA75DU42","29-42"],
      [22,41,"XT2S160 MA 52",547,"A50","TA75DU52","36-52"],
      [30,55,"XT2S160 MA 80",840,"A63","TA75DU63","45-63"],
      [37,66,"XT2S160 MA 80",960,"A75","TA75DU80","60-80"],
      [45,80,"XT2S160 MA 100",1200,"A95","TA110DU110","80-110"],
      [55,97,"XT3S250 MA 160",1440,"A110","TA110DU110","80-110"],
      [75,132,"XT3S250 MA 200",1800,"A145","TA200DU175","130-175"],
      [90,160,"XT3S250 MA 200",2400,"A185","TA200DU200","150-200"],
      [110,195,"XT5S 400 Ekip M DIP In320",2720,"AF205","EF205-210","63-210"],
      [132,230,"XT5S 400 Ekip M DIP In320",3200,"AF265","EF370-380","115-380"],
      [160,280,"XT5S 400 Ekip M DIP In400",4000,"AF305","EF370-380","115-380"],
      [200,350,"XT5S 630 Ekip M DIP In630",4725,"AF370","EF370-380","115-380"],
      [250,430,"XT5S 630 Ekip M DIP In630",5670,"AF460","EF460-500","150-500"],
      [290,520,"XT6S 800 Ekip M DIP In800",7200,"AF580","EF750-800","250-800"],
      [315,540,"XT6S 800 Ekip M DIP In800",8000,"AF580","EF750-800","250-800"],
      [400,720,"XT6S 800 Ekip M DIP In1000",10000,"AF1350","EF1250DU-1250","375-1250"]
    ],
    resultCols: [
      {l:"MCCB Type",k:2},
      {l:"Im Trip [A]",k:3},
      {l:"Contactor",k:4},
      {l:"OLR Type",k:5},
      {l:"OLR Range [A]",k:6}
    ]
  },
  "MCCB-SD-NS": {
    specs: "SCPD: MCCB | 400/415V | 50kA | SD-NS | IEC Type 2 | OLR: TOL",
    headers: ["kW","A","MCCB Type","Im [A]","Line","Delta","Star","Thermal","Range [A]"],
    rows: [
      [18.5,35,"XT2S160 MA52",469,"A50","A50","A26","TA75DU25","18-25"],
      [22,41,"XT2S160 MA52",547,"A50","A50","A26","TA75DU32","22-32"],
      [30,55,"XT2S160 MA80",720,"A63","A63","A30","TA75DU42","29-42"],
      [37,66,"XT2S160 MA80",840,"A75","A75","A30","TA75DU52","36-52"],
      [45,80,"XT2S160 MA100",1050,"A75","A75","A30","TA75DU63","45-63"],
      [55,97,"XT2S160 MA100",1200,"A75","A75","A40","TA75DU63","45-63"],
      [75,132,"XT3S250 MA160",1700,"A95","A95","A75","TA110DU90","66-90"],
      [90,160,"XT3S250 MA200",2000,"A110","A110","A95","TA110DU110","80-110"],
      [110,195,"XT3S250 MA200",2400,"A145","A145","A95","TA200DU135","100-135"],
      [132,230,"XT5S 400 EKIP M DIP In400",3200,"AF190","AF190","AF116","EF205-210","63-210"],
      [160,280,"XT5S 400 EKIP M DIP In400",4000,"AF190","AF190","AF116","EF205-210","63-210"],
      [200,350,"XT5S 630 EKIP M DIP In630",5040,"AF265","AF265","AF190","EF370-380","115-380"],
      [250,430,"XT5S 630 EKIP M DIP In630",6300,"AF265","AF265","AF190","EF370-380","115-380"],
      [290,520,"XT6S 800 EKIP M DIP In800",7200,"AF460","AF460","AF400","EF750-800","250-800"],
      [315,540,"XT6S 800 EKIP M DIP In800",8000,"AF580","AF580","AF400","EF750-800","250-800"],
      [355,610,"XT6S 800 EKIP M DIP In800",8000,"AF580","AF580","AF400","EF750-800","250-800"]
    ],
    resultCols: [
      {l:"MCCB Type",k:2},
      {l:"Im Trip [A]",k:3},
      {l:"Line",k:4},
      {l:"Delta",k:5},
      {l:"Star",k:6},
      {l:"Thermal",k:7},
      {l:"Range [A]",k:8}
    ]
  }
};

const SCPD_DESC = {
  MMS:  "MS132 / MS165 series. Embedded overload protection. 0.16A to 65A.",
  MCCB: "XT2S / XT3S / XT5S / XT6S series. Separate TOL overload relay required. Up to 400kW."
};

const START_DESC = {
  "DOL-NS": "Direct-on-line starting with non-self-protected MMS or MCCB.",
  "SD-NS":  "Star-delta starting with three contactors for reduced starting current."
};

/* ─── Helper: compute tick label indices ─── */
function getTickIndices(len) {
  return [
    0,
    Math.floor(len / 4),
    Math.floor(len / 2),
    Math.floor(3 * len / 4),
    len - 1
  ];
}

/* ─── Component ─── */
export default function MotorStarterPage() {
  const [startMode, setStartMode] = useState('DOL-NS');
  const [scpdMode,  setScpdMode]  = useState('MMS');
  const [kwIndex,   setKwIndex]   = useState(-1);
  const [showTable, setShowTable] = useState(false);

  /* Derived table for current config */
  const tableKey  = scpdMode + '-' + startMode;
  const tableData = DATA[tableKey];
  const rows      = tableData.rows;
  const tickIdx   = getTickIndices(rows.length);

  /* Slider fill % (clamped to [0,100]) */
  const sliderMax = rows.length - 1;
  const sliderPct = kwIndex < 0 ? 0 : Math.max(0, (kwIndex / sliderMax) * 100);

  /* Current result row (null if no selection) */
  const selectedRow = kwIndex >= 0 && kwIndex < rows.length ? rows[kwIndex] : null;

  /* ─── Handlers ─── */
  const handleToggleStart = useCallback(() => {
    setStartMode(prev => prev === 'DOL-NS' ? 'SD-NS' : 'DOL-NS');
    setKwIndex(-1);
  }, []);

  const handleScpdChange = useCallback((e) => {
    setScpdMode(e.target.value);
    setKwIndex(-1);
  }, []);

  const handleSlider = useCallback((e) => {
    setKwIndex(parseInt(e.target.value, 10));
  }, []);

  const handleToggleTable = useCallback((e) => {
    setShowTable(e.target.checked);
  }, []);

  const downloadReport = useCallback(() => {
    if (kwIndex < 0) { alert('Please select a motor rating first.'); return; }
    const table = DATA[scpdMode + '-' + startMode];
    const row   = table.rows[kwIndex];
    const nl    = '\n';
    let c = 'SSC CONTROL PVT LTD - MOTOR STARTER SELECTION' + nl;
    c += 'Generated: ' + new Date().toLocaleString('en-IN') + nl;
    c += '================================================' + nl;
    c += 'Tool: ABB Type 2 | 400/415V | 50kA' + nl;
    c += 'Starting: ' + startMode + nl + 'Device: ' + scpdMode + nl;
    c += 'Motor: ' + row[0] + ' kW / ' + row[1] + ' A' + nl + nl;
    c += 'RESULT' + nl;
    table.resultCols.forEach(col => { c += col.l + ': ' + row[col.k] + nl; });
    c += nl + 'SSC Control Pvt Ltd | Authorised ABB Partner' + nl;
    c += 'sales@ssccontrol.com | +91 93130 80866' + nl;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([c], { type: 'text/plain' }));
    a.download = 'SSC_Starter_Report_' + new Date().toISOString().slice(0, 10) + '.txt';
    a.click();
  }, [kwIndex, startMode, scpdMode]);

  /* ─── Badge text ─── */
  const badgeText = selectedRow
    ? selectedRow[0] + ' kW | ' + selectedRow[1] + ' A | ' + startMode + ' | ' + scpdMode
    : 'Move slider to select motor rating';

  return (
    <main className="page-motor-starter">
      {/* HERO */}
      <div className="page-hero">
        <div className="hero-tag">ABB &middot; IEC Type 2 &middot; 400/415V &middot; 50kA</div>
        <h1>Motor Starter Selection Tool</h1>
        <p>Instantly find the correct contactor, overload relay, and SCPD combination for your motor. Select your starting method, protection type, and motor rating below.</p>
      </div>

      <div className="tool-wrapper">
        <div className="steps-row">

          {/* STEP 1: TOGGLE */}
          <div className="step-card">
            <div className="step-num">Step 1</div>
            <div className="step-title">Starting Method</div>
            <div>
              <div
                className={'toggle-switch-label' + (startMode === 'SD-NS' ? ' right' : '')}
                onClick={handleToggleStart}
              >
                <div className="ts-slider"></div>
                <div className={'ts-option' + (startMode === 'DOL-NS' ? ' active' : '')}>
                  DOL-NS<br /><small style={{ fontWeight: 400, fontSize: '10px' }}>Direct On Line</small>
                </div>
                <div className={'ts-option' + (startMode === 'SD-NS' ? ' active' : '')}>
                  SD-NS<br /><small style={{ fontWeight: 400, fontSize: '10px' }}>Star Delta</small>
                </div>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--gray)', marginTop: '8px', padding: '8px 10px', background: 'var(--light)', borderRadius: '6px' }}>
                {START_DESC[startMode]}
              </div>
            </div>
          </div>

          {/* STEP 2: DROPDOWN */}
          <div className="step-card">
            <div className="step-num">Step 2</div>
            <div className="step-title">Protection Device</div>
            <div>
              <div className="custom-select-wrap">
                <select
                  className="custom-select"
                  value={scpdMode}
                  onChange={handleScpdChange}
                >
                  <option value="MMS">MMS - Manual Motor Starter</option>
                  <option value="MCCB">MCCB - Moulded Case CB</option>
                </select>
                <span className="select-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <div className="scpd-desc">{SCPD_DESC[scpdMode]}</div>
            </div>
          </div>

          {/* STEP 3: SLIDER */}
          <div className="step-card">
            <div className="step-num">Step 3</div>
            <div className="step-title">Motor Rated Power</div>
            <div className="slider-wrap">
              <div className={'slider-display' + (kwIndex >= 0 ? ' active' : '')}>
                <span className="slider-val-badge">
                  {selectedRow ? selectedRow[0] : '—'}
                </span>
                <span className="slider-unit-lbl">kW</span>
              </div>
              <input
                type="range"
                min={0}
                max={sliderMax}
                step={1}
                value={kwIndex < 0 ? 0 : kwIndex}
                onChange={handleSlider}
                style={{ '--pct': sliderPct + '%' }}
              />
              <div className="slider-minmax">
                {rows.map((r, i) => (
                  <span key={i}>{tickIdx.includes(i) ? r[0] : ''}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* RESULTS */}
        <div className="results-section">
          <div className="results-header">
            <h2>Selection Result</h2>
            <span className="results-badge">{badgeText}</span>
          </div>
          <div>
            {selectedRow ? (
              <>
                <div className="result-cards">
                  {/* Motor power card */}
                  <div className="result-card">
                    <div className="rc-label">Motor Power</div>
                    <div className="rc-value rc-motor">{selectedRow[0]} kW</div>
                    <div className="rc-sub">{selectedRow[1]} A rated current</div>
                  </div>
                  {/* Dynamic result cards */}
                  {tableData.resultCols.map((col) => (
                    <div className="result-card" key={col.l}>
                      <div className="rc-label">{col.l}</div>
                      <div className="rc-value">{selectedRow[col.k]}</div>
                    </div>
                  ))}
                </div>
                <div className="specs-bar">
                  <span className="spec-item">
                    <strong>Configuration:</strong> {tableData.specs}
                  </span>
                </div>
                <div style={{ padding: '0 24px 20px' }}>
                  <button className="btn-download" onClick={downloadReport}>
                    &#8659; Download Report
                  </button>
                </div>
              </>
            ) : (
              <div className="no-result">
                <div className="no-result-icon">&#9889;</div>
                <p>Configure steps 1 &amp; 2, then drag the slider to select motor power.</p>
              </div>
            )}
          </div>
        </div>

        {/* TABLE TOGGLE */}
        <div className="table-toggle-row">
          <label>
            <input
              type="checkbox"
              checked={showTable}
              onChange={handleToggleTable}
            />
            Show full selection chart for current configuration
          </label>
        </div>

        {/* FULL TABLE */}
        {showTable && (
          <div className="table-section">
            <table>
              <thead>
                <tr>
                  {tableData.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={i === kwIndex ? 'highlighted' : ''}>
                    {r.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
