/** @type {import('next').NextConfig} */
const nextConfig = {
  // Runs on Vercel's Next.js runtime (serverless) so the contact form can use a
  // real API route (app/api/contact) to send email via Resend.
  // Each page route still keeps a trailing slash (/about/, /contact/) to match the sitemap.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
