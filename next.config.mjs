/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out — same static-file hosting as before.
  output: 'export',
  // Each route becomes a folder with index.html (e.g. /about/ -> /about/index.html),
  // which matches the sitemap URLs and works on plain static hosts.
  trailingSlash: true,
  images: {
    // Static export can't use the Next.js image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
