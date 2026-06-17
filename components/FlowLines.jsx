// Animated "current flow" background — flowing contour lines (like the email
// signature) with charge pulses travelling along them. Presentational, no hooks.
// Pass `gradient` (array of [offset, color]) + a unique `gradId` to make the
// travelling charge change colour down the section — used to bridge the dark
// hero into the white solutions section as one continuous, colour-shifting stream.
function wavePath(y, amp, phase) {
  const w = 1440;
  const seg = 6;
  const step = w / seg;
  let d = `M -120 ${y.toFixed(1)}`;
  for (let i = 0; i <= seg + 1; i++) {
    const x = step * i;
    const yy = y + amp * Math.sin(i * 0.95 + phase);
    const cx = x - step / 2;
    const cy = y + amp * Math.sin((i - 0.5) * 0.95 + phase) * 1.1;
    d += ` Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x.toFixed(1)} ${yy.toFixed(1)}`;
  }
  return d;
}

export default function FlowLines({
  count = 4,
  height = 540,
  opacity = 1,
  className = '',
  gradient = null,
  gradId = 'fl',
}) {
  const lines = Array.from({ length: count }, (_, i) => ({
    d: wavePath(50 + (i * (height - 90)) / (count - 1), 9 + i * 1.4, i * 0.7),
    delay: -(i * 0.9),
    dur: 7 + (i % 3),
  }));
  const chargeStroke = gradient ? `url(#${gradId})` : undefined;
  return (
    <svg
      className={`flow-lines ${className}`}
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ opacity }}
    >
      {gradient && (
        <defs>
          <linearGradient
            id={gradId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2={height}
          >
            {gradient.map(([off, color], i) => (
              <stop key={i} offset={off} stopColor={color} />
            ))}
          </linearGradient>
        </defs>
      )}
      {lines.map((l, i) => (
        <g key={i}>
          <path className="flow-line" d={l.d} />
          <path
            className="flow-charge"
            d={l.d}
            style={{
              animationDuration: `${l.dur}s`,
              animationDelay: `${l.delay}s`,
              ...(chargeStroke ? { stroke: chargeStroke } : {}),
            }}
          />
        </g>
      ))}
    </svg>
  );
}
