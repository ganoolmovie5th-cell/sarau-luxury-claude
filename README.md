# Sarau Luxury

Website resmi Sarau Luxury, event organizer profesional untuk outing, outbound, team building, dan company gathering di Indonesia. Dibangun dengan Next.js 15 App Router, 3D hero interaktif, dan fitur lead generation.

**Tech Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Three.js · Resend · Fonnte

**Live:** [sarau-luxury.com](https://www.sarau-luxury.com)

## Features

- Hero 3D interaktif (Three.js, idle-loaded)
- Animasi Framer Motion (transisi halaman + scroll)
- Price list lengkap (Gathering Silver/Gold/Platinum, add-on, meeting package)
- Downloadable Company Profile PDF (gated: nama + perusahaan + email)
- Form kontak & booking (notifikasi via Resend email + Fonnte WhatsApp)
- Blog dengan Open Graph image dinamis
- Galeri foto event (masonry grid + lightbox)
- Client logos (53+ perusahaan, logo proxy API)
- FAQ dengan search real-time
- Process timeline (7 langkah cara kerja)
- Cookie consent banner (GA4 Consent Mode v2)
- Floating WhatsApp button
- Scroll progress bar
- Marquee klien animasi
- SEO (metadata, Open Graph, sitemap, robots.txt, JSON-LD)
- HTTP security headers (CSP, HSTS, COOP)
- Rate limiting & input sanitization
- Error boundary (halaman fallback)
- E2E testing (Playwright)
- GitHub Actions CI (TruffleHog, audit, tsc, eslint)
- Skeleton loading (Blog, Gallery, Clients)

## Pages

| Route | Deskripsi |
|-------|-----------|
| `/` | Homepage |
| `/about` | Profil perusahaan |
| `/services` | Semua layanan |
| `/packages` | Price list & paket |
| `/gallery` | Galeri foto event |
| `/clients` | Daftar 53+ klien |
| `/blog` | Artikel blog |
| `/faq` | FAQ (FAQPage Schema) |
| `/contact` | Form kontak |
| `/booking` | Form booking/inquiry |

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    api/contact/            → Form handler (Resend + Fonnte)
    api/download-profile/   → PDF generation
    api/logo/[domain]/      → Logo proxy (local/Clearbit/Google/DDG)
    about/gallery/packages/services/blog/faq/contact/booking/clients/
  components/
    3d/                     → HeroScene (Three.js)
    layout/                 → Navbar, Footer
    sections/               → 20 section components
    ui/                     → WhatsApp button, Progress bar, Skeleton
  hooks/                    → useScrollProgress
  lib/
    constants.ts            → Single source of truth
    pdf/                    → Company Profile PDF (@react-pdf/renderer)
    security.ts             → Rate limiter, sanitizer, validators
```

## Testing

```bash
npm run lint
npm run test:e2e
```

## License

MIT
