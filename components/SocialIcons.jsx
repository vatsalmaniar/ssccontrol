export function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 9.5H5.67V18h2.67V9.5zM7 6a1.54 1.54 0 1 0 0 3.08A1.54 1.54 0 0 0 7 6zm11 6.28c0-2.3-1.5-3.18-2.96-3.18a2.6 2.6 0 0 0-2.3 1.18h-.04V9.5H10.1V18h2.67v-4.2c0-1.1.2-2.18 1.57-2.18 1.34 0 1.36 1.26 1.36 2.25V18H18v-5.72z" />
    </svg>
  );
}
