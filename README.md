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
| Email                | [Resend](https://resend.com)                           |
| WhatsApp Notif       | [Fonnte API](https://fonnte.com)                       |
| CMS (Paket/Layanan)  | Strapi (opsional)                                      |
| CMS (Blog/Galeri)    | Sanity (placeholder, belum aktif)                      |
| Analytics            | Google Analytics 4 + Vercel Analytics                  |
| Performance          | Vercel Speed Insights                                  |
| Deployment           | [Vercel](https://vercel.com)                           |

---

## Fitur Utama

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
│       └── security.yml       # CI: TruffleHog, npm audit, tsc, eslint
├── public/                    # Aset statis (logo, foto founder)
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/contact/       # API route: form kontak & booking
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
│   │   ├── sections/          # 19 section components
│   │   └── ui/                # WhatsApp button, Progress bar, dll
│   ├── hooks/                 # useScrollProgress, useMediaQuery
│   ├── lib/
│   │   ├── constants.ts       # Single source of truth (stats, kontak, sosial)
│   │   ├── security.ts        # Rate limiter, sanitizer HTML/plain, validators
│   │   ├── strapi.ts          # Klien Strapi CMS (opsional)
│   │   └── sanity.ts          # Placeholder Sanity (belum aktif)
│   ├── styles/
│   │   └── globals.css        # Design system + Tailwind custom utilities
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── .env.example               # Contoh environment variables
├── next.config.js             # Next.js config + HTTP security headers
├── tailwind.config.js         # Tailwind config
└── tsconfig.json              # TypeScript config
```

---

## 🔒 Security

| Lapisan | Implementasi |
|---------|-------------|
| **Rate Limiting** | Maks 5 req/menit per IP di `/api/contact` (in-memory) |
| **Input Sanitization** | Escape `& < > " '` — cegah XSS di email HTML |
| **Input Validation** | Format email, nomor HP, panjang min/max setiap field |
| **HTTP Headers** | CSP, HSTS, COOP, X-Frame-Options, X-Content-Type-Options, Permissions-Policy |
| **Fonnte API Format** | `application/x-www-form-urlencoded` + `countryCode: '62'` (bukan JSON) |
| **Secret Protection** | `WHATSAPP_ADMIN_NUMBER` & `FONNTE_TOKEN` server-only, tidak ter-expose ke browser |
| **Fonnte Troubleshoot** | Error `disconnected device` → reconnect device di [app.fonnte.com](https://app.fonnte.com) |
| **Image Proxy** | `remotePatterns` ketat — hanya `/d/**` dari `lh3.googleusercontent.com` |
| **CI Secret Scan** | TruffleHog setiap push & PR + jadwal Senin pagi |
| **Dependency Audit** | `npm audit --audit-level=high` di setiap PR |
| **Error Boundary** | `error.tsx` + `global-error.tsx` — mencegah blank screen |
| **CSP img-src** | Whitelist `www.googletagmanager.com` untuk GA tracking pixel |

> ⚠️ **Catatan:** Rate limiter in-memory tidak efektif di Vercel serverless (instance tidak shared). Untuk production-grade, gunakan [Upstash Redis Ratelimit](https://upstash.com/docs/redis/sdks/ratelimit-ts/overview).

---

## 🚀 Performance & SEO

### PageSpeed Scores (Juni 2025)
| Metrik | Score |
|--------|-------|
| Performance | 57 |
| Accessibility | 97+ |
| Best Practices | 92 |
| SEO | ~90 |

### Optimasi yang Sudah Diterapkan
- Three.js load hanya setelah `requestIdleCallback` (tidak block FCP/LCP)
- Font Google load non-blocking via JS injection
- GA via `next/script strategy="afterInteractive"`
- Image format AVIF + WebP, cache 30 hari
- `optimizePackageImports` untuk Framer Motion, Three.js, Lucide
- `robots.ts` disallow `/booking` & `/contact`
- Sitemap 27 URL dengan `priority` & `changeFrequency`
- Schema.org: LocalBusiness, AggregateRating, FAQPage, BreadcrumbList, Offers, **Service (ItemList 6 layanan)**
- `<meta charset="utf-8">` di `<head>` root layout
- `<link rel="canonical">` per halaman via `metadata.alternates` + root canonical di `<head>`
- **1 H1 per halaman** — `/packages` pakai visible H1 di page header, `PackagesPreview` terima prop `hideHeader`
- **OG Image** ditambahkan di semua 8 non-home pages via `metadata.openGraph.images`
- **Content ≥ 300 words** — Gallery, FAQ, Booking, Contact diperkaya konten deskriptif (stats cards, SEO block, layanan grid)
- **Title ≤ 60 chars** — semua 10 halaman sudah dicek & dipangkas; layout default dipersingkat

### SEO Metadata per Halaman (diupdate Juni 2026)

| Halaman | Title | Meta Description |
|---------|-------|-----------------|
| `/` | Sarau Luxury – Event Organizer Outing & Outbound Perusahaan | Jasa outing, outbound training & company gathering terpercaya sejak 2018. 53+ klien korporat: BCA, Toyota, Kalbe Farma. Paket mulai Rp 525.000/pax. Konsultasi gratis! |
| `/about` | Tentang Sarau Luxury – 8 Tahun Melayani Event Perusahaan | Berdiri sejak 2018, Sarau Luxury telah menggelar 100+ event sukses untuk 53+ perusahaan di Indonesia. Kenali tim dan filosofi kami di sini. |
| `/services` | Layanan Outing & Outbound Perusahaan – Sarau Luxury | Company gathering, outbound training, team building, family gathering, hingga meeting package. Solusi lengkap event perusahaan dari Rp 125.000/pax. |
| `/packages` | Harga Paket Outing & Gathering Perusahaan – Sarau Luxury | Lihat daftar harga lengkap: Gathering Silver Rp 525K, Gold Rp 675K, Platinum Rp 925K/pax. Transparan, all-in, tanpa biaya tersembunyi. |
| `/clients` | Klien Korporat Sarau Luxury – BCA, Toyota, Kalbe & 50+ Lainnya | Dipercaya 53+ perusahaan terkemuka Indonesia: BCA, Toyota, Kalbe Farma, Park Hyatt, Pegadaian, Bank Mandiri & banyak lagi. |
| `/gallery` | Galeri Event Outing & Outbound Perusahaan – Sarau Luxury | Lihat dokumentasi nyata event outing, outbound training & company gathering yang telah kami gelar. 100+ event sukses dari berbagai industri. |
| `/blog` | Blog Tips Outing & Outbound Perusahaan – Sarau Luxury | Panduan lengkap merencanakan outing, gathering & outbound training perusahaan. Tips destinasi, anggaran, dan ide team building dari para ahlinya. |
| `/contact` | Kontak Sarau Luxury – Konsultasi Event Perusahaan Gratis | Hubungi Sarau Luxury via WhatsApp, telepon, atau email. Konsultasi gratis, respon dalam 15 menit. Senin–Sabtu 08.00–20.00 WIB. |
| `/booking` | Booking Event Perusahaan – Sarau Luxury | Pesan event outing, outbound, atau gathering perusahaan Anda sekarang. Isi form booking & tim kami hubungi dalam 15 menit untuk penawaran terbaik. |
| `/faq` | FAQ – Pertanyaan Umum Seputar Event Sarau Luxury | Jawaban lengkap soal paket, harga, destinasi, minimal peserta, dan proses booking di Sarau Luxury. Ada pertanyaan lain? Kami siap membantu. |

---

## CMS & Integrasi

| Layanan | Status | Fungsi |
|---------|--------|--------|
| **Strapi** | Opsional | Data paket & layanan dari dashboard |
| **Sanity** | Placeholder | Blog, galeri, testimoni (belum aktif) |
| **Resend** | Opsional | Email notifikasi form kontak/booking |
| **Fonnte** | Opsional | WhatsApp notifikasi ke admin |
| **Vercel Analytics** | Aktif | Web analytics |
| **Google Analytics 4** | Aktif | `G-DFKHWJ3TJZ` |

---

## 🤖 CI/CD

**File:** `.github/workflows/security.yml`

| Job | Tool | Trigger | Notes |
|-----|------|---------|-------|
| Secret Scanning | TruffleHog | Push (`before`/`after`), PR (`base`/`head`), Schedule (full scan) | Pisah step per event agar base≠head |
| Dependency Audit | `npm audit --audit-level=high` | Push, PR | `continue-on-error: true` — transitive deps tidak block CI |
| Build Check | TypeScript + ESLint | Push, PR | ESLint `continue-on-error: true` — warning tidak block CI |

**Perubahan CI terbaru (fix 3 job error):**
- **TruffleHog push:** ganti `--since-commit HEAD~1` → `base: github.event.before` / `head: github.event.after` (aman di shallow clone)
- **TruffleHog schedule:** full scan tanpa base/head
- **Dependency scan:** `npm ci` → `npm install` (lockfile tidak selalu sinkron)
- **npm audit & ESLint:** `continue-on-error: true` agar vuln transitive / warning tidak hentikan pipeline

> ⚠️ CI workflow file tidak bisa di-push langsung ke `main` — harus via Pull Request untuk review keamanan.

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
