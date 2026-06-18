import { ImageResponse } from 'next/og';
import { brands, brandSlugs } from '@/data/brands';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SSC Control — Authorised Channel Partner';

export function generateStaticParams() {
  return brandSlugs.map((brand) => ({ brand }));
}

export default function Image({ params }) {
  const b = brands[params.brand];
  const name = b?.name || 'SSC Control';
  const sub = b?.titleEm || 'Industrial Automation & Electrical Solutions';
  const accent = b?.accent || '#4d9be6';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0a1f44 0%, #00489c 100%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* accent bar */}
        <div style={{ display: 'flex', width: 120, height: 10, background: accent, borderRadius: 6 }} />

        {/* main */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              color: 'rgba(255,255,255,0.7)',
              textTransform: 'uppercase',
              marginBottom: 18,
            }}
          >
            {'Authorised Channel Partner & Distributor'}
          </div>
          <div style={{ fontSize: 96, fontWeight: 800, color: '#fff', lineHeight: 1.05 }}>{name}</div>
          <div style={{ fontSize: 40, color: '#9ec4f0', marginTop: 14 }}>{sub}</div>
        </div>

        {/* footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 30, fontWeight: 700, color: '#fff' }}>SSC Control Pvt Ltd</div>
          <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.65)' }}>60 Years · Ahmedabad, Gujarat, India</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
