/** @type {import('next').NextConfig} */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

// ─── HTTP Security Headers ────────────────────────────────────────────────────
const securityHeaders = [
  // Cegah clickjacking — hanya izinkan iframe dari domain sendiri
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // Cegah MIME-type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Paksa HTTPS selama 2 tahun, termasuk subdomain
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Batasi info referrer — hanya kirim origin saat cross-origin
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Nonaktifkan fitur browser yang tidak diperlukan
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Cross-Origin Opener Policy — cegah cross-origin window attacks
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin-allow-popups',
  },
  // Cross-Origin Resource Policy
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'cross-origin',
  },
  // Content Security Policy — strict tapi tidak blokir Three.js & GA
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Next.js butuh 'unsafe-inline' & 'unsafe-eval' untuk runtime & Three.js
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://va.vercel-scripts.com https://vercel.live https://static.cloudflareinsights.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https://lh3.googleusercontent.com https://drive.google.com https://www.google-analytics.com https://www.googletagmanager.com https://logo.clearbit.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://region1.google-analytics.com https://region1.analytics.google.com https://api.fonnte.com https://api.resend.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://cloudflareinsights.com",
      "frame-src https://www.google.com https://www.googletagmanager.com https://vercel.live",
      "worker-src 'self' blob:",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      // Upgrade HTTP ke HTTPS otomatis
      "upgrade-insecure-requests",
    ].join('; '),
  },
]

const nextConfig = {
  // ── Redirects for Indonesian URL aliases ──────────────────────────────
  async redirects() {
    return [
      { source: '/paket',    destination: '/packages',  permanent: true },
      { source: '/tentang',  destination: '/about',     permanent: true },
      { source: '/layanan',  destination: '/services',  permanent: true },
      { source: '/kontak',   destination: '/contact',   permanent: true },
      { source: '/galeri',   destination: '/gallery',   permanent: true },
    ]
  },

  // Source maps production dimatikan — file .map terlalu besar & timeout di Lighthouse
  productionBrowserSourceMaps: false,

  // ─── Security Headers ───────────────────────────────────────────────────────
  async headers() {
    return [
      {
        // Terapkan ke semua route
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  // ─── Image Optimization ─────────────────────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 hari
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/d/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
    ],
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@react-three/fiber', '@react-three/drei'],
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  },
}

module.exports = nextConfig
