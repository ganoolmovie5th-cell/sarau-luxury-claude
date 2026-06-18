# 🌿 Sarau Luxury — Official Website

> **Where Teams Grow Together**
>
> Website resmi Sarau Luxury, event organizer profesional untuk outing, outbound, team building, dan company gathering di Indonesia.

---

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Tech Stack](#tech-stack)
- [Fitur Utama](#fitur-utama)
- [Struktur Halaman](#struktur-halaman)
- [Prasyarat](#prasyarat)
- [Instalasi & Menjalankan Lokal](#instalasi--menjalankan-lokal)
- [Environment Variables](#environment-variables)
- [Struktur Folder](#struktur-folder)
- [Security](#-security)
- [Performance & SEO](#-performance--seo)
- [CMS & Integrasi](#cms--integrasi)
- [CI/CD](#-cicd)
- [Deployment](#deployment)

---

## Tentang Proyek

Sarau Luxury didirikan tahun 2018 dan telah menangani **100+ event** untuk **53+ perusahaan** di **19+ industri** dengan destinasi mencakup **20+ lokasi** di seluruh Indonesia.

Website ini dibangun dengan **Next.js 14 App Router** dan dirancang untuk menghadirkan pengalaman yang mewah, cepat, dan SEO-friendly bagi calon klien perusahaan.

---

## Tech Stack

| Kategori             | Teknologi                                              |
| -------------------- | ------------------------------------------------------ |
| Framework            | [Next.js 14](https://nextjs.org) (App Router)          |
| Bahasa               | TypeScript 5                                           |
| Styling              | Tailwind CSS 3                                         |
| Animasi              | Framer Motion 11                                       |
| 3D / WebGL           | Three.js + React Three Fiber + Drei                    |
| Ikon                 | Lucide React                                           |
| PDF Generation       | [@react-pdf/renderer](https://react-pdf.org) v4        |
| Email                | [Resend](https://resend.com)                           |
| WhatsApp Notif       | [Fonnte API](https://fonnte.com)                       |
| CMS (Paket/Layanan)  | Strapi (opsional)                                      |
| CMS (Blog/Galeri)    | Sanity (placeholder, belum aktif)                      |
| Analytics            | Google Analytics 4 + Vercel Analytics                  |
| Performance          | Vercel Speed Insights                                  |
| Deployment           | [Vercel](https://vercel.com)                           |

---

## Fitur Utama

- 📄 **Downloadable Company Profile** — PDF 5 halaman (Cover, About, Services, Packages, Contact) di-generate server-side via `@react-pdf/renderer`. Gated download: isi Nama, Perusahaan, Email → lead dikirim ke admin via Resend & Fonnte → PDF langsung terunduh
- 🎨 **Hero 3D Interaktif** — Three.js di-load hanya setelah `requestIdleCallback` untuk tidak block FCP/LCP
- ✨ **Animasi Framer Motion** — transisi halaman dan animasi scroll yang halus
- 📦 **Price List Lengkap** — paket Gathering Silver/Gold/Platinum, add-on aktivitas, meeting package dengan tab interaktif
- 📬 **Form Kontak & Booking** — notifikasi via Email (Resend) dan WhatsApp (Fonnte) secara bersamaan
- 🔍 **SEO Lengkap** — metadata, Open Graph, Twitter Card, sitemap otomatis, robots.txt, JSON-LD Schema.org (LocalBusiness + FAQPage + BreadcrumbList)
- 📱 **Floating WhatsApp Button** — tombol kontak cepat di semua halaman
- 📊 **Scroll Progress Bar** — indikator progres scroll di bagian atas
- 🌐 **Marquee Klien** — animasi logo 53+ klien perusahaan
- 📰 **Blog** — halaman daftar & detail artikel dengan Open Graph image dinamis
- 🖼️ **Galeri** — galeri foto dokumentasi event
- 📍 **Schema.org Terstruktur** — LocalBusiness, AggregateRating, FAQPage, BreadcrumbList, Offers
- 🔒 **HTTP Security Headers** — CSP, HSTS, COOP, X-Frame-Options, Permissions-Policy
- 🛡️ **Rate Limiting & Input Sanitization** — API dilindungi dari spam dan XSS
- 🚨 **Error Boundary** — halaman fallback saat terjadi error runtime
- 🤖 **GitHub Actions CI** — TruffleHog secret scan, dependency audit, TypeScript check, ESLint
- 🧪 **E2E Testing** — Playwright smoke tests + GitHub Actions

---

## 🧪 E2E (Playwright)

Jalankan smoke test ke production:

```bash
npm install
npm run test:e2e
```

---

## Struktur Halaman

| Route           | Deskripsi                                                            |
| --------------- | -------------------------------------------------------------------- |
| `/`             | Homepage — hero, statistik, layanan, paket, klien, testimoni, galeri, blog |
| `/about`        | Profil perusahaan, misi & visi, founder, tim                         |
| `/services`     | Halaman lengkap semua layanan                                        |
| `/packages`     | Price list dan paket lengkap                                         |
| `/gallery`      | Galeri foto event                                                    |
| `/clients`      | Daftar 53+ klien perusahaan                                          |
| `/blog`         | Daftar artikel blog                                                  |
| `/blog/[slug]`  | Detail artikel blog                                                  |
| `/faq`          | Pertanyaan yang sering diajukan (FAQPage Schema)                     |
| `/contact`      | Form kontak *(tidak diindex Google)*                                 |
| `/booking`      | Form booking / inquiry event *(tidak diindex Google)*                |

---

## Prasyarat

- **Node.js** >= 18.x
- **npm** >= 9.x (atau yarn / pnpm)

---

## Instalasi & Menjalankan Lokal

```bash
# 1. Clone repository
git clone https://github.com/ganoolmovie5th-cell/sarau-luxury-claude.git
cd sarau-luxury-claude

# 2. Install dependencies
npm install

# 3. Salin file environment dan isi nilai yang diperlukan
cp .env.example .env.local

# 4. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Script Tersedia

| Script          | Fungsi                              |
| --------------- | ----------------------------------- |
| `npm run dev`   | Jalankan dev server (hot reload)    |
| `npm run build` | Build untuk production              |
| `npm run start` | Jalankan production server lokal    |
| `npm run lint`  | Cek linting ESLint                  |
| `npm run test:e2e` | Run Playwright E2E smoke tests   |

---

## Environment Variables

Salin `.env.example` menjadi `.env.local` dan isi variabel berikut:

```env
# ── Strapi CMS (opsional) ─────────────────────────────────────────────────────
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token

# ── Email via Resend ──────────────────────────────────────────────────────────
RESEND_API_KEY=re_Rp8yVY7x_MDE4zZWfy4xFmhg2RwZWmSca
RESEND_FROM_EMAIL=no-reply@sarau-luxury.com
CONTACT_EMAIL=sarauluxury@gmail.com

# ── WhatsApp via Fonnte ───────────────────────────────────────────────────────
WHATSAPP_ADMIN_NUMBER=6285711786561          # server-only, tidak ter-expose ke browser
FONNTE_TOKEN=your_fonnte_token
NEXT_PUBLIC_WHATSAPP_NUMBER=6285711786561    # untuk tombol floating (boleh public)

# ── Site URL ──────────────────────────────────────────────────────────────────
NEXT_PUBLIC_SITE_URL=https://sarau-luxury.com

# ── Google Analytics ──────────────────────────────────────────────────────────
NEXT_PUBLIC_GA_ID=G-DFKHWJ3TJZ
```

> **Catatan:** `RESEND_API_KEY`, `FONNTE_TOKEN`, dan `STRAPI_API_TOKEN` **opsional** — jika tidak diset, fitur terkait dilewati tanpa error.

---

## Struktur Folder

```
sarau-luxury-claude/
├── .github/
│   └── workflows/
│       ├── security.yml       # CI: TruffleHog, npm audit, tsc, eslint
│       └── e2e.yml            # CI: Playwright E2E
├── public/                    # Aset statis (logo, foto founder)
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/contact/       # API route: form kontak & booking
│   │   ├── api/download-profile/ # API route: generate & download Company Profile PDF
│   │   ├── about/             # Halaman About
│   │   ├── blog/[slug]/       # Halaman Blog + detail
│   │   ├── booking/           # Halaman Booking (disallow robots)
│   │   ├── clients/           # Halaman Klien
│   │   ├── contact/           # Halaman Kontak (disallow robots)
│   │   ├── faq/               # Halaman FAQ (FAQPage schema)
│   │   ├── gallery/           # Halaman Galeri
│   │   ├── packages/          # Halaman Paket & Harga
│   │   ├── services/          # Halaman Layanan
│   │   ├── error.tsx          # Error boundary halaman
│   │   ├── global-error.tsx   # Error boundary global
│   │   ├── layout.tsx         # Root layout + metadata global + GA
│   │   ├── page.tsx           # Homepage
│   │   ├── sitemap.ts         # Sitemap otomatis (27 URL)
│   │   └── robots.ts          # robots.txt
│   ├── components/
│   │   ├── 3d/                # HeroScene — Three.js, idle-loaded
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # 20 section components (+ CompanyProfileDownload)
│   │   └── ui/                # WhatsApp button, Progress bar, dll
│   ├── hooks/                 # useScrollProgress, useMediaQuery
│   ├── lib/
│   │   ├── constants.ts       # Single source of truth (stats, kontak, sosial)
│   │   ├── pdf/               # CompanyProfileDocument — @react-pdf/renderer
│   │   ├── security.ts        # Rate limiter, sanitizer HTML/plain, validators
│   │   ├── strapi.ts          # Klien Strapi CMS (opsional)
│   │   └── sanity.ts          # Placeholder Sanity (belum aktif)
│   ├── styles/
│   │   └── globals.css        # Design system + Tailwind custom utilities
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── playwright.config.ts       # Playwright config (prod baseURL)
├── tests/                     # Playwright E2E tests
├── .env.example               # Contoh environment variables
├── next.config.js             # Next.js config + HTTP security headers
├── tailwind.config.js         # Tailwind config
└── tsconfig.json              # TypeScript config
```

---

## Deployment

Website di-deploy ke **Vercel**. Push ke `main` otomatis trigger production deployment.

```bash
# Build lokal sebelum push
npm run build
```

Pastikan semua environment variables sudah dikonfigurasi di **Vercel Dashboard → Settings → Environment Variables**.

---

## Kontak

| Channel   | Info                                                              |
| --------- | ----------------------------------------------------------------- |
| Website   | [sarau-luxury.com](https://sarau-luxury.com)                      |
| Instagram | [@sarauluxury](https://instagram.com/sarauluxury)                 |
| WhatsApp  | [+62 857-1178-6561](https://wa.me/6285711786561)                  |
| Email     | sarauluxury@gmail.com                                             |
| Alamat    | Binong Permai Blok R-10/14, Curug, Banten                         |

---

<p align="center">Made with ❤️ for <strong>Sarau Luxury</strong> — <em>Where Teams Grow Together</em></p>
