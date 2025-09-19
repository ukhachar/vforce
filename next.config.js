/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' to enable full Next.js features on Vercel
  trailingSlash: true,
  images: {
    // Enable Vercel's image optimization
    formats: ['image/webp', 'image/avif'],
  },
 }

module.exports = nextConfig
