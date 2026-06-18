import { ImageResponse } from 'next/og';
import { brands } from '@/data/brands';
import { PRODUCT_PAGES } from '@/data/products';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SSC Control — Authorised Channel Partner';

export function generateStaticParams() {
  return Object.values(PRODUCT_PAGES).map((p) => ({ brand: p.brandSlug, product: p.slug }));
}

export default function Image({ params }) {
  const product = PRODUCT_PAGES[`${params.brand}/${params.product}`];
  const b = brands[params.brand];
  const brandName = b?.name || 'SSC Control';
  const category = product?.category || 'Industrial Products';
  const accent = b?.accent || '#4d9be6';
  const series = product?.series?.map((s) => s.name).join(' · ') || '';
  const seriesShort = series.length > 80 ? series.slice(0, 77) + '…' : series;

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
        <div style={{ display: 'flex', width: 120, height: 10, background: accent, borderRadius: 6 }} />

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
            {`${brandName} · Authorised Partner`}
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, color: '#fff', lineHeight: 1.08 }}>{category}</div>
          {seriesShort ? (
            <div style={{ fontSize: 32, color: '#9ec4f0', marginTop: 18 }}>{seriesShort}</div>
          ) : null}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 30, fontWeight: 700, color: '#fff' }}>SSC Control Pvt Ltd</div>
          <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.65)' }}>Genuine · Warranty · Ahmedabad, Gujarat</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
