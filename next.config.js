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
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: [
      // Default hanya dari origin sendiri
      "default-src 'self'",
      // Script: self + Google Analytics + Vercel Analytics + inline (Next.js requirement)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://va.vercel-scripts.com",
      // Style: self + Google Fonts + inline (Tailwind/Framer Motion)
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Font: self + Google Fonts CDN
      "font-src 'self' https://fonts.gstatic.com",
      // Gambar: self + Google user content + data URI + blob
      "img-src 'self' data: blob: https://lh3.googleusercontent.com https://drive.google.com",
      // Koneksi: self + GA + Fonnte + Resend + Vercel
      `connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://api.fonnte.com https://api.resend.com https://vitals.vercel-insights.com`,
      // Frame: hanya Google Maps embed
      "frame-src https://www.google.com",
      // Worker: self + blob (Three.js)
      "worker-src 'self' blob:",
      // Media dari origin sendiri
      "media-src 'self'",
      // Object: tidak ada
      "object-src 'none'",
      // Base URI hanya self
      "base-uri 'self'",
      // Form action hanya ke self dan Fonnte
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig = {
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
    ],
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@react-three/fiber', '@react-three/drei'],
  },
}

module.exports = nextConfig
