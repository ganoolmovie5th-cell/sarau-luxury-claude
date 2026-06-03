# 🌿 Sarau Luxury — Company Profile Website

> **Where Teams Grow Together**  
> Website company profile modern untuk event organizer outing & outbound perusahaan.

---

## 🚀 Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| 3D Graphics | Three.js + React Three Fiber + Drei |
| CMS Konten | Sanity (gallery, blog, testimonials, clients) |
| CMS Backend | Strapi (packages, bookings, contact forms) |
| Email | Resend |
| Deploy | Vercel |
| Repo | GitHub |

---

## 📁 Struktur Folder

```
sarau-luxury/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Beranda
│   │   ├── about/              # Tentang Kami
│   │   ├── services/           # Layanan
│   │   ├── packages/           # Paket
│   │   ├── clients/            # Klien
│   │   ├── gallery/            # Galeri
│   │   ├── blog/               # Blog & Tips
│   │   ├── faq/                # FAQ
│   │   ├── contact/            # Kontak
│   │   ├── booking/            # Booking & Inquiry
│   │   └── api/
│   │       └── contact/        # API route: form kontak + email
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Semua section per halaman
│   │   ├── 3d/                 # Three.js / R3F scenes
│   │   └── ui/                 # Reusable UI (WhatsAppButton, PageTransition, dll)
│   ├── lib/
│   │   ├── sanity.ts           # Sanity client + GROQ queries
│   │   └── strapi.ts           # Strapi API helpers
│   └── styles/
│       └── globals.css         # Global styles + Tailwind layers
├── public/
│   └── images/                 # Static assets
├── .env.example                # Template environment variables
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## ⚙️ Setup Lokal

### 1. Clone & Install

```bash
git clone https://github.com/USERNAME/sarau-luxury.git
cd sarau-luxury
npm install
```

### 2. Buat file `.env.local` dari template

```bash
cp .env.example .env.local
```

Lalu isi semua nilai di `.env.local` (lihat bagian Environment Variables di bawah).

### 3. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

```env
# ── Sanity CMS ─────────────────────────────────────────
NEXT_PUBLIC_SANITY_PROJECT_ID=       # dari sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=                    # Read token dari Sanity

# ── Strapi CMS ─────────────────────────────────────────
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=                    # API token dari Strapi admin

# ── Email (Resend) ──────────────────────────────────────
RESEND_API_KEY=                      # dari resend.com
CONTACT_EMAIL=info@sarau-luxury.com

# ── WhatsApp ────────────────────────────────────────────
NEXT_PUBLIC_WHATSAPP_NUMBER=628xxxxxxxxxx

# ── Site ────────────────────────────────────────────────
NEXT_PUBLIC_SITE_URL=https://sarau-luxury.com
```

---

## 📦 Setup Sanity CMS

### 1. Install Sanity CLI & buat project

```bash
npm install -g @sanity/cli
sanity init --project sarau-luxury-cms
```

### 2. Schema types yang dibutuhkan

Buat schema di Sanity Studio untuk:

**`gallery.ts`**
```ts
export default {
  name: 'gallery',
  title: 'Galeri',
  type: 'document',
  fields: [
    { name: 'title',       type: 'string',   title: 'Judul' },
    { name: 'image',       type: 'image',    title: 'Foto', options: { hotspot: true } },
    { name: 'category',    type: 'string',   title: 'Kategori',
      options: { list: ['Outbound','Outing','Team Building','Gathering','MICE'] } },
    { name: 'publishedAt', type: 'datetime', title: 'Tanggal' },
  ],
}
```

**`post.ts`** (Blog)
```ts
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title',       type: 'string',   title: 'Judul' },
    { name: 'slug',        type: 'slug',     title: 'Slug', options: { source: 'title' } },
    { name: 'excerpt',     type: 'text',     title: 'Ringkasan' },
    { name: 'body',        type: 'array',    title: 'Konten',
      of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'cover',       type: 'image',    title: 'Cover' },
    { name: 'category',    type: 'reference', to: [{ type: 'category' }] },
    { name: 'author',      type: 'reference', to: [{ type: 'author' }] },
    { name: 'readTime',    type: 'number',   title: 'Waktu Baca (menit)' },
    { name: 'publishedAt', type: 'datetime', title: 'Tanggal Publish' },
  ],
}
```

**`testimonial.ts`**
```ts
export default {
  name: 'testimonial',
  title: 'Testimoni',
  type: 'document',
  fields: [
    { name: 'name',    type: 'string', title: 'Nama' },
    { name: 'role',    type: 'string', title: 'Jabatan' },
    { name: 'company', type: 'string', title: 'Perusahaan' },
    { name: 'rating',  type: 'number', title: 'Rating (1-5)' },
    { name: 'text',    type: 'text',   title: 'Testimoni' },
    { name: 'avatar',  type: 'image',  title: 'Foto' },
  ],
}
```

**`client.ts`**
```ts
export default {
  name: 'client',
  title: 'Klien',
  type: 'document',
  fields: [
    { name: 'name',    type: 'string', title: 'Nama Perusahaan' },
    { name: 'logo',    type: 'image',  title: 'Logo' },
    { name: 'website', type: 'url',    title: 'Website' },
    { name: 'order',   type: 'number', title: 'Urutan Tampil' },
  ],
}
```

### 3. Deploy Sanity Studio

```bash
cd sanity-studio
sanity deploy
```

---

## 🛠️ Setup Strapi CMS

### 1. Buat project Strapi baru

```bash
npx create-strapi-app@latest sarau-strapi --quickstart
```

### 2. Content Types yang dibutuhkan

Buat via Strapi Admin (Content-Type Builder):

**`packages`** — Paket event
- `name` (Text), `tagline` (Text), `price` (Number), `unit` (Text)
- `minPax` (Text), `features` (JSON), `popular` (Boolean), `order` (Integer)

**`services`** — Layanan
- `title` (Text), `slug` (UID), `description` (Rich Text)
- `features` (JSON), `order` (Integer), `icon` (Text)

**`bookings`** — Form booking/inquiry
- `companyName` (Text), `picName` (Text), `email` (Email), `phone` (Text)
- `service` (Text), `eventDate` (Date), `duration` (Text)
- `destination` (Text), `budget` (Text), `participants` (Text)
- `notes` (Long Text), `status` (Enumeration: pending/reviewed/quoted/confirmed)

**`contacts`** — Form kontak
- `name` (Text), `company` (Text), `email` (Email), `phone` (Text)
- `service` (Text), `participants` (Text), `message` (Long Text)

### 3. Generate API Token

Buka Strapi Admin → Settings → API Tokens → Buat token baru (Full access).
Masukkan ke `.env.local` sebagai `STRAPI_API_TOKEN`.

---

## 📧 Setup Resend (Email)

1. Daftar di [resend.com](https://resend.com)
2. Tambahkan dan verifikasi domain (`sarau-luxury.com`)
3. Buat API Key → masukkan ke `RESEND_API_KEY`
4. Email notifikasi dari form kontak akan masuk ke `CONTACT_EMAIL`

---

## 🌐 Deploy ke Vercel

### Via GitHub (Recommended)

```bash
# 1. Push ke GitHub
git init
git add .
git commit -m "feat: initial Sarau Luxury website"
git remote add origin https://github.com/USERNAME/sarau-luxury.git
git push -u origin main

# 2. Buka vercel.com → New Project → Import dari GitHub
# 3. Isi semua Environment Variables dari .env.local
# 4. Deploy!
```

### Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🎨 Customization Guide

### Warna Brand
Edit `tailwind.config.js` → `theme.extend.colors`:
```js
forest: { DEFAULT: '#2D6A4F', ... },  // Hijau utama
earth:  { DEFAULT: '#8B5E3C', ... },  // Coklat earthy
sun:    { DEFAULT: '#F4A261', ... },  // Aksen oranye/kuning
```

### Konten Statis
- **Navbar links** → `src/components/layout/Navbar.tsx`
- **Services** → `src/components/sections/ServicesPage.tsx`
- **Packages** → `src/components/sections/PackagesPreview.tsx`
- **Testimonials** → `src/components/sections/TestimonialsSection.tsx`
- **Team** → `src/components/sections/TeamSection.tsx`
- **Clients** → `src/components/sections/ClientsPage.tsx`
- **FAQ** → `src/app/faq/page.tsx`

### Nomor WhatsApp
Ubah di `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=628xxxxxxxxxx
```

---

## 📱 Halaman Website

| Route | Halaman |
|-------|---------|
| `/` | Beranda (Hero 3D, Stats, Services, Packages, Clients, Testimonials, Gallery, Blog, CTA) |
| `/about` | Tentang Kami (Hero, Misi & Visi, Nilai, Tim) |
| `/services` | Layanan Lengkap |
| `/packages` | Paket & Harga |
| `/clients` | Klien & Testimonial |
| `/gallery` | Galeri Foto |
| `/blog` | Blog & Tips |
| `/faq` | FAQ |
| `/contact` | Kontak |
| `/booking` | Booking & Inquiry (multi-step form) |
| `/api/contact` | API: form submission + email |

---

## ✅ Checklist Sebelum Go Live

- [ ] Ganti semua placeholder konten (nama tim, foto, deskripsi)
- [ ] Upload foto/logo klien ke Sanity
- [ ] Konfigurasi Strapi content types & API token
- [ ] Verifikasi domain di Resend
- [ ] Set nomor WhatsApp yang benar di `.env`
- [ ] Upload OG image (`/public/images/og-image.jpg`)
- [ ] Tes semua form (kontak & booking)
- [ ] Set up Google Analytics / Vercel Analytics
- [ ] Cek SEO metadata tiap halaman
- [ ] Tes responsive di mobile & tablet

---

## 🤝 Support

Butuh bantuan setup atau customization? Hubungi tim developer kami.

---

**Sarau Luxury** · *Where Teams Grow Together* 🌿
