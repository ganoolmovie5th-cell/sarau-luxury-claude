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
- [CMS & Integrasi](#cms--integrasi)
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

- 🎨 **Hero 3D Interaktif** — latar belakang Three.js yang berjalan di browser
- ✨ **Animasi Framer Motion** — transisi halaman dan animasi scroll yang halus
- 📦 **Price List Lengkap** — paket Gathering Silver/Gold/Platinum, add-on aktivitas, dan meeting package dengan tab interaktif
- 📬 **Form Kontak & Booking** — mengirim notifikasi via Email (Resend) dan WhatsApp (Fonnte) secara bersamaan
- 🔍 **SEO Lengkap** — metadata, Open Graph, Twitter Card, sitemap otomatis, robots.txt, dan JSON-LD Schema.org (LocalBusiness)
- 📱 **Floating WhatsApp Button** — tombol kontak cepat di semua halaman
- 📊 **Scroll Progress Bar** — indikator progres scroll di bagian atas
- 🌐 **Marquee Klien** — animasi logo klien yang berjalan terus
- 📰 **Blog** — halaman daftar & detail artikel dengan Open Graph image dinamis
- 🖼️ **Galeri** — galeri foto event perusahaan
- 📍 **Schema.org Terstruktur** — rating agregat, jam buka, lokasi, dan penawaran harga untuk rich snippet Google
- 🔒 **HTTP Security Headers** — CSP, HSTS, X-Frame-Options, Permissions-Policy via `next.config.js`
- 🛡️ **Rate Limiting & Input Sanitization** — API route dilindungi dari spam dan XSS
- 🤖 **GitHub Actions CI** — secret scanning (TruffleHog), dependency audit, build check otomatis

---

## Struktur Halaman

| Route           | Deskripsi                                           |
| --------------- | --------------------------------------------------- |
| `/`             | Homepage — hero, statistik, layanan, paket, klien, testimoni, galeri, blog |
| `/about`        | Profil perusahaan, misi & visi, founder, tim        |
| `/services`     | Halaman lengkap semua layanan                       |
| `/packages`     | Price list dan paket lengkap                        |
| `/gallery`      | Galeri foto event                                   |
| `/clients`      | Daftar klien perusahaan                             |
| `/blog`         | Daftar artikel blog                                 |
| `/blog/[slug]`  | Detail artikel blog                                 |
| `/faq`          | Pertanyaan yang sering diajukan                     |
| `/contact`      | Form kontak                                         |
| `/booking`      | Form booking / inquiry event                        |

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

| Script        | Fungsi                              |
| ------------- | ----------------------------------- |
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
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@sarau-luxury.com   # domain terverifikasi di Resend (opsional)
CONTACT_EMAIL=bandungindonesiasinergi@gmail.com

# ── WhatsApp via Fonnte ───────────────────────────────────────────────────────
# Server-only (tidak ter-expose ke browser)
WHATSAPP_ADMIN_NUMBER=6285711786561
FONNTE_TOKEN=your_fonnte_token

# Nomor WA publik untuk tombol floating (boleh public)
NEXT_PUBLIC_WHATSAPP_NUMBER=6285711786561

# ── Google Maps ───────────────────────────────────────────────────────────────
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

# ── Site URL ──────────────────────────────────────────────────────────────────
NEXT_PUBLIC_SITE_URL=https://sarau-luxury.com

# ── Google Analytics ──────────────────────────────────────────────────────────
NEXT_PUBLIC_GA_ID=G-DFKHWJ3TJZ
```

> **Catatan:** Variabel `RESEND_API_KEY` dan `FONNTE_TOKEN` **opsional** — jika tidak diset, fitur notifikasi email/WhatsApp akan dilewati tanpa error.
> Strapi juga **opsional** — jika tidak dikonfigurasi, data paket dan layanan menggunakan data statis di komponen.

---

## Struktur Folder

```
sarau-luxury-claude/
├── .github/
│   └── workflows/
│       └── security.yml       # CI: secret scan, dependency audit, build check
├── public/                    # Aset statis (logo, foto founder)
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/contact/       # API route: form kontak & booking
│   │   ├── about/             # Halaman About
│   │   ├── blog/              # Halaman Blog + [slug]
│   │   ├── booking/           # Halaman Booking
│   │   ├── clients/           # Halaman Klien
│   │   ├── contact/           # Halaman Kontak
│   │   ├── faq/               # Halaman FAQ
│   │   ├── gallery/           # Halaman Galeri
│   │   ├── packages/          # Halaman Paket & Harga
│   │   ├── services/          # Halaman Layanan
│   │   ├── layout.tsx         # Root layout (Navbar, Footer, metadata, GA tag)
│   │   ├── page.tsx           # Homepage
│   │   ├── sitemap.ts         # Sitemap otomatis
│   │   └── robots.ts          # robots.txt
│   ├── components/
│   │   ├── 3d/                # Komponen Three.js (HeroScene)
│   │   ├── layout/            # Navbar & Footer
│   │   ├── sections/          # Section komponen per halaman
│   │   └── ui/                # Komponen UI kecil (WhatsApp, Progress Bar, dll)
│   ├── hooks/                 # Custom React hooks
│   ├── lib/
│   │   ├── constants.ts       # Sumber data terpusat (stats, kontak, sosial)
│   │   ├── security.ts        # Rate limiter, sanitizer, validator input
│   │   ├── strapi.ts          # Klien Strapi CMS
│   │   └── sanity.ts          # Placeholder Sanity (belum aktif)
│   ├── styles/
│   │   └── globals.css        # Global CSS & Tailwind directives
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── .env.example               # Contoh environment variables
├── next.config.js             # Konfigurasi Next.js + HTTP Security Headers
├── tailwind.config.js         # Konfigurasi Tailwind CSS
└── tsconfig.json              # Konfigurasi TypeScript
```

---

## 🔒 Security

| Lapisan | Implementasi |
|---------|-------------|
| **Rate Limiting** | Maks 5 request/menit per IP di `/api/contact` |
| **Input Sanitization** | Escape HTML (`&`, `<`, `>`, `"`, `'`) — cegah XSS di email |
| **Input Validation** | Validasi format email, nomor HP, panjang field |
| **HTTP Headers** | CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Permissions-Policy |
| **Secret Exposure** | `WHATSAPP_ADMIN_NUMBER` & `FONNTE_TOKEN` server-only (tanpa `NEXT_PUBLIC_`) |
| **Image Proxy** | `remotePatterns` ketat — hanya path `/d/**` dari `lh3.googleusercontent.com` |
| **CI Secret Scan** | TruffleHog scan setiap push + jadwal mingguan via GitHub Actions |
| **Dependency Audit** | `npm audit --audit-level=high` otomatis di setiap PR |

---

## CMS & Integrasi

### Strapi (Opsional)
Digunakan untuk data **paket** dan **layanan** yang dapat dikelola dari dashboard. Jika tidak dikonfigurasi, website tetap berjalan menggunakan data statis di komponen.

### Sanity (Placeholder)
Direncanakan untuk mengelola **blog**, **galeri**, **testimoni**, dan **klien**. Saat ini file `src/lib/sanity.ts` merupakan placeholder — data menggunakan static data.

### Resend (Email)
Notifikasi email saat ada submission form kontak/booking. Membutuhkan `RESEND_API_KEY`.

### Fonnte (WhatsApp)
Notifikasi WhatsApp ke nomor admin saat ada submission form. Membutuhkan `FONNTE_TOKEN`.

---

## Deployment

Website di-deploy ke **Vercel**. Setiap push ke branch `main` akan otomatis trigger deployment.

```bash
# Build manual untuk cek error sebelum deploy
npm run build
```

Pastikan semua environment variables sudah dikonfigurasi di dashboard Vercel sebelum deploy ke production.

---

## Kontak

| Channel   | Info                                                                 |
| --------- | -------------------------------------------------------------------- |
| Website   | [sarau-luxury.com](https://sarau-luxury.com)                         |
| Instagram | [@sarauluxury](https://instagram.com/sarauluxury)                    |
| WhatsApp  | [+62 857-1178-6561](https://wa.me/6285711786561)                     |
| Email     | bandungindonesiasinergi@gmail.com                                    |
| Alamat    | Binong Permai Blok R-10/14, Curug, Banten                            |

---

<p align="center">Made with ❤️ for <strong>Sarau Luxury</strong> — <em>Where Teams Grow Together</em></p>
