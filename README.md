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

Website ini dibangun dengan **Next.js 15 App Router** dan dirancang untuk menghadirkan pengalaman yang mewah, cepat, dan SEO-friendly bagi calon klien perusahaan.

---

## Tech Stack

| Kategori             | Teknologi                                              |
| -------------------- | ------------------------------------------------------ |
| Framework            | [Next.js 15](https://nextjs.org) (App Router)          |
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
| Analytics            | Google Analytics 4 + Google Tag Manager + Vercel Analytics |
| Performance          | Vercel Speed Insights + ISR edge cache (revalidate=3600) |
| Deployment           | [Vercel](https://vercel.com)                           |

---

## Fitur Utama

- 📄 **Downloadable Company Profile** — PDF 5 halaman (Cover, About, Services, Packages, Contact) di-generate server-side via `@react-pdf/renderer`. Gated download: isi Nama, Perusahaan, Email → lead dikirim ke admin via Resend & Fonnte → PDF langsung terunduh. Font-safe: semua karakter Unicode non-Helvetica diganti ASCII.
- 🎨 **Hero 3D Interaktif** — Three.js di-load hanya setelah `requestIdleCallback` untuk tidak block FCP/LCP
- ✨ **Animasi Framer Motion** — transisi halaman dan animasi scroll yang halus
- 📦 **Price List Lengkap** — paket Gathering Silver/Gold/Platinum, add-on aktivitas, meeting package dengan tab interaktif
- 📬 **Form Kontak & Booking** — notifikasi via Email (Resend) dan WhatsApp (Fonnte) secara bersamaan
- 🔍 **SEO Lengkap** — metadata, Open Graph, Twitter Card, sitemap otomatis, robots.txt, JSON-LD Schema.org (LocalBusiness + FAQPage + BreadcrumbList)
- 📱 **Floating WhatsApp Button** — tombol kontak cepat di semua halaman
- 📊 **Scroll Progress Bar** — indikator progres scroll di bagian atas
- 🌐 **Marquee Klien** — animasi logo 53+ klien perusahaan
- 📰 **Blog** — halaman daftar & detail artikel dengan Open Graph image dinamis
- 🖼️ **Galeri** — 44 foto event (20 original + 24 dari Google Drive); `unoptimized` untuk bypass server-side optimization; masonry grid dengan lightbox
- 🏢 **Client Logos** — logo proxy API (`/api/logo/[domain]`): cek local file `/public/logos/{domain}.png` → Clearbit → Google Favicon → DuckDuckGo → colored initials. Upload logo PNG/SVG ke `public/logos/` untuk company yang belum ada logo-nya.
- 📍 **Schema.org Terstruktur** — LocalBusiness, AggregateRating, FAQPage, BreadcrumbList, Offers
- 🔒 **HTTP Security Headers** — CSP, HSTS, COOP, X-Frame-Options, Permissions-Policy
- 🛡️ **Rate Limiting & Input Sanitization** — API dilindungi dari spam dan XSS
- 🚨 **Error Boundary** — halaman fallback saat terjadi error runtime
- 🤖 **GitHub Actions CI** — TruffleHog secret scan, dependency audit, TypeScript check, ESLint
- 🧪 **E2E Testing** — Playwright smoke tests + GitHub Actions
- 🍪 **Cookie Consent Banner** — banner izin kustom (GA4 Consent Mode v2) sesuai brand: glass-dark design, expand detail, pilihan "Terima Semua" / "Hanya Esensial", preferensi tersimpan di localStorage, analytics default DENIED hingga user memberi izin
- 🗺️ **Process Timeline** — visualisasi 7 langkah cara kerja (Konsultasi → Survei → Proposal → Konfirmasi → Persiapan → Hari H → Evaluasi), animasi zigzag alternating desktop, vertical mobile, ditempatkan setelah WhyUs di homepage
- 🔍 **FAQ Search** — search bar real-time di halaman FAQ dengan highlight kata kunci, animasi result count, empty state, dan tombol clear (`type="text"` untuk menghindari duplikat tombol clear browser native)
- ⚡ **Skeleton Loading** — placeholder animasi pulse untuk Blog, Gallery, dan Clients page saat navigasi; komponen reusable di `src/components/ui/Skeleton.tsx`

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
NEXT_PUBLIC_GA_ID=G-1SJ8G9TVER

# ── Google Tag Manager ────────────────────────────────────────────────────────
NEXT_PUBLIC_GTM_ID=GTM-5L5LR2KW
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
├── public/
│   ├── logos/                 # Logo klien — upload {domain}.png/svg di sini
│   │   └── README.md          # Daftar 34 company yang butuh logo + naming convention
│   ├── founder.jpeg
│   └── sarau-luxury-logo.jpeg
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/contact/          # API route: form kontak & booking
│   │   ├── api/download-profile/ # API route: generate & download Company Profile PDF
│   │   ├── api/logo/[domain]/    # API route: logo proxy (local → Clearbit → Google → DDG)
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

## Bug Fixes (Juni 2026)

| Fix | Keterangan |
|---|---|
| **SEO heading hierarchy /packages & /faq** | Melengkapi hierarki heading h1–h6 tanpa skip level. `/packages`: tambah SEO block "Panduan Memilih Paket" (h2→h3→h4→h5→h6). `/faq`: perbaiki skip h1→h4 (tambah h2 sr-only sebelum accordion & kartu info, judul kartu h4→h3, blok Tentang subheading h5→h3 + tambah h4/h5/h6). Styling className dipertahankan → visual tidak berubah |
| **QA Dogfood + Cypress E2E** | 4 perbaikan: (1) `StatsSection` menampilkan `0+` di environment reduced-motion/headless → tambah `useReducedMotion()` fallback render nilai final (`100+`/`53+`/`20+`/`5.0`). (2) `AboutHero` "Pencerita Pengalaman" tak terdeteksi `cy.contains` karena `<br/>` menghapus spasi di `textContent` → tambah `{' '}` di boundary. (3) "Toyota" disebut di copy/metadata tapi tidak ada di data klien → tambah ke `ClientsPage` & `ClientsMarquee`. (4) FAQ H1 "Sering Ditanya" → "Sering Ditanyakan" (frasa FAQ standar) |
| **React hydration** | `<html>` & `<body>` di `layout.tsx` ditambah `suppressHydrationWarning` — mencegah warning dari browser extension yang inject attribute (LastPass, Grammarly, Google Translate, dll). `new Date().getFullYear()` di `Footer.tsx` dipindah ke komponen `ClientYear` (`src/components/ui/ClientYear.tsx`) agar di-render client-side dengan `suppressHydrationWarning`, aman dari edge case ISR year-transition |
| **Cypress failures: hydration #423 + opacity:0** | `PageTransition.tsx`: tambah `initial={false}` di `AnimatePresence` — halaman pertama load tanpa entry animation (tidak ada opacity:0), route-change tetap animasi. `Navbar.tsx`: hapus `opacity:0` dari `initial` — navbar selalu visible saat Cypress start. 16 section components: `useInView` ditambah `initialInView: true` — elemen langsung mulai visible tanpa menunggu IntersectionObserver fire, aman untuk headless testing |
| Homepage crash | Three.js `HeroScene` dibungkus `HeroSceneBoundary` (ErrorBoundary) — WebGL failure → graceful fallback ke gradient |
| Homepage section crash | Setiap section homepage dibungkus `SectionErrorBoundary` — jika satu section crash, sisanya tetap jalan |
| Google Maps embed | URL embed diperbaiki (encoding `+` → `%20`, timestamp valid) |
| Redirect ID route | `/paket` → `/packages`, `/tentang` → `/about`, `/layanan` → `/services`, `/kontak` → `/contact`, `/galeri` → `/gallery` |
| Price inconsistency | Contact page: "all-in mulai Rp 125.000" → "outbound & team building mulai Rp 125.000, gathering mulai Rp 525.000" |
| robots.txt unblock | Hapus `Disallow: /booking` & `/contact` — halaman konversi sekarang bisa di-crawl Google |
| Sitemap trailing slash | Homepage URL `https://sarau-luxury.com` → `https://sarau-luxury.com/` (konsistensi) |
| Gallery preview height 0 | `GalleryPreview` bento grid: `grid-rows-[…]` kurang baris → 3 foto terakhir jatuh di implicit row (tinggi 0), bikin `<Image fill>` warning & gambar tak tampil. Ganti ke `auto-rows-[220px] md:auto-rows-[260px]` agar semua baris (eksplisit + implicit) punya tinggi |

### Catatan: Source Maps (intentionally disabled)

PageSpeed Insights melaporkan *"Missing source maps for large first-party JavaScript"* sebagai item **Unscored** (tidak mempengaruhi skor). Source maps **sengaja tidak diaktifkan** di production karena:

- Source maps mengekspos kode TypeScript asli ke publik (keamanan)
- File `.js.map` berukuran 2–5× dari file JS-nya → memperberat bandwidth
- Untuk website marketing/profil perusahaan, tidak ada manfaat debugging yang sepadan

Jika di masa depan dibutuhkan (mis. integrasi Sentry private source maps), aktifkan lewat `productionBrowserSourceMaps: true` di `next.config.js` **hanya** jika source maps dikirim ke server monitoring, bukan ke browser publik.

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

## ⚡ Optimasi PageSpeed (Juni 2026)

Perbaikan berdasarkan temuan [PageSpeed Insights](https://pagespeed.web.dev/):

- **Logo navbar (`Navbar.tsx`)** — `<Image>` logo diubah dari `fill` + default `sizes="100vw"` menjadi `width={48} height={48}` + `sizes="48px"`. Sebelumnya Next.js men-generate varian 750px untuk kotak 48×48 (−24 KiB, perbaikan LCP).
- **GA4 (`layout.tsx`)** — Script `gtag.js` (`G-1SJ8G9TVER`) langsung dihapus; analytics kini **sepenuhnya via GTM** (`GTM-5L5LR2KW`) untuk menghilangkan double-tracking & menghemat ~157 KiB JS. Consent Mode v2 (consent-default → GTM) tetap dipertahankan.
- **Legacy JS (`package.json`)** — ditambahkan `browserslist` modern (Chrome/Edge/Firefox ≥111, Safari ≥16.4) agar SWC tidak meng-inject polyfill ES6+ (−12 KiB).
- **Heading order (`HeroSection.tsx`)** — label statistik diubah dari `<h4>` ke `<p>` untuk memperbaiki urutan heading (Accessibility: H1→H2→H4 menjadi runtut).
- **Render-blocking CSS (`next.config.js`)** — `experimental.optimizeCss: true` (paket `critters`) untuk inline critical CSS.
- **Main-thread (`HeroScene.tsx`)** — `<Stars count>` diturunkan 500 → 250 untuk mengurangi beban Three.js.

---

<p align="center">Made with ❤️ for <strong>Sarau Luxury</strong> — <em>Where Teams Grow Together</em></p>


## ♿ Web Interface Guidelines Audit (Juni 2026)

Audit kepatuhan terhadap [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines). 24 file diperbaiki:

| Kategori | Perubahan |
|---|---|
| ⚡ Animasi | `transition-all` → `transition` (Tailwind, daftar properti kurasi: color/bg/border/opacity/shadow/transform) di 42 lokasi — hindari memantau *semua* properti |
| ♿ Fokus keyboard | `focus:ring*` → `focus-visible:ring*` (14×) agar ring hanya muncul saat navigasi keyboard, bukan klik mouse; `.btn-sun` ditambah focus ring |
| 🎬 Reduced motion | Tambah blok global `@media (prefers-reduced-motion: reduce)` di `globals.css` — hormati preferensi pengguna (menonaktifkan animasi/transisi) |
| ✍️ Tipografi | `...` → `…` pada teks UI (`loading.tsx`, `BookingForm`, `ContactForm`, `CompanyProfileDownload`, truncation `blog/[slug]/page.tsx`) |

Catatan: spread operator JS (`...`) tidak diubah; viewport tidak menonaktifkan zoom (sudah aman).


## 🔒 Security: dependency audit (Juni 2026) — langkah C

Mitigasi cepat tanpa risiko ke production (dev/transitif saja):
- **`glob` command-injection** ([GHSA-5j98-mcp5-4vw2](https://github.com/advisories/GHSA-5j98-mcp5-4vw2)): ditambah scoped `overrides` di `package.json` memaksa `glob` di dalam `@next/eslint-plugin-next` → `10.5.0`. `rimraf` (glob 7) tidak terpengaruh.
- Ini sekaligus menutup alert turunan di `eslint-config-next` & `@next/eslint-plugin-next`.
- **Hasil:** audit turun dari 5 paket (4 high + 1 moderate) → **2** (`next` high + `postcss` nested moderate).

✅ **Langkah B (selesai, di branch `upgrade/nextjs-15` — BUKAN `main`):** upgrade **Next.js 14.2.35 → 15.5.x** (React 18 dipertahankan) + bump **postcss → 8.5.x** (via direct dep + scoped override `"postcss": "$postcss"` agar copy nested di dalam `next` ikut ter-patch). Hasil: **`npm audit` = 0 vulnerabilities**, `next build` ✅ (33 halaman ter-generate).

Perubahan breaking yang dikerjakan:
- **Async request APIs** — `params` kini Promise. Diperbaiki di `api/logo/[domain]/route.ts`, `blog/[slug]/page.tsx` (generateMetadata + page), dan `blog/[slug]/opengraph-image.tsx` (`await params`).
- **`next.config.js`** — `experimental.serverComponentsExternalPackages` dipindah ke top-level `serverExternalPackages` (Next 15).
- **`tsconfig.json`** — tambah `"target": "ES2017"` (untuk top-level await).
- **`optimizeCss`** — tetap aktif; Next 15 memakai `beasties` (fork `critters`), ditambahkan ke devDependencies.

> ⚠️ Branch ini **belum di-merge ke `main`**. Sebelum merge: jalankan `npm run test:e2e` (Playwright) terhadap deploy preview Vercel. **Hindari lompat ke Next 16** (breaking change ganda).

### 🌲 Fix: Hero 3D hilang setelah Next 15 (upgrade React 19)

Setelah Next 15, hero homepage hanya menampilkan background coklat — hutan 3D (Three.js) hilang. Penyebab: Next 15 mem-bundle **React 19**, tetapi `@react-three/fiber` **v8** (`react-reconciler` lama) membaca internal React 18 (`ReactCurrentBatchConfig`) yang tidak ada di React 19 → reconciler crash → `HeroSceneBoundary` degrade ke gradient.

**Fix (`fix/hero-react19`):** selaraskan seluruh stack ke React 19 — `react`/`react-dom` → **19.2**, `@react-three/fiber` → **9**, `@react-three/drei` → **10**, `@types/react(-dom)` → **19**, tambah `.npmrc` (`legacy-peer-deps=true`), keluarkan R3F dari `optimizePackageImports`, dan `PackagesPreview.tsx` `React.ElementType` → `LucideIcon`. Verifikasi: `next build` ✅, `npm audit` = 0, `<canvas>` hero render normal.
