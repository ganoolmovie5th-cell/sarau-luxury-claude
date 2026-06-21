# Sarau Luxury — Project Steering

## Info Proyek
- **Nama:** Sarau Luxury
- **Tagline:** Where Teams Grow Together
- **Website:** https://sarau-luxury.com
- **Framework:** Next.js 14 App Router + TypeScript + Tailwind CSS
- **Deployment:** Vercel (push ke `main` = auto deploy)

## Aturan Commit
- Setiap commit **WAJIB** include update `README.md` dan `.kiro/steering/sarau-luxury.md`
- Update README harus refleksikan perubahan yang dilakukan
- Update steering file jika ada info baru yang relevan
- **Jangan buat commit terpisah** — satukan dalam 1 commit bersama perubahan kode
- **Selalu push langsung ke `main`**, jangan buat PR

## Bug Fixes (Juni 2026)
- **Homepage crash fix:** Three.js HeroScene dibungkus `HeroSceneBoundary` (ErrorBoundary) — jika WebGL gagal, hero degrade ke gradient background instead of crash seluruh halaman
- **Homepage section crash fix:** Setiap section homepage dibungkus `SectionErrorBoundary` (`src/components/3d/SectionErrorBoundary.tsx`) — jika satu section crash (Google Drive image, Three.js, dll), sisanya tetap jalan
- **Google Maps embed fix:** URL embed diperbaiki (encoding `+` → `%20`, timestamp valid)
- **Redirect ID route:** Tambah redirect `/paket` → `/packages`, `/tentang` → `/about`, `/layanan` → `/services`, `/kontak` → `/contact`, `/galeri` → `/gallery` di `next.config.js`
- **Price inconsistency fix:** Contact page "Paket all-in mulai Rp 125.000/pax" → "Paket outbound & team building mulai Rp 125.000/pax, gathering mulai Rp 525.000/pax"
- **SEO: robots.txt unblock:** Hapus `Disallow: /booking` & `/contact` dari `robots.ts` — halaman konversi sekarang bisa di-crawl & diindex Google
- **SEO: sitemap trailing slash:** Homepage URL di sitemap `https://sarau-luxury.com` → `https://sarau-luxury.com/` untuk konsistensi
- **Gallery preview height 0 fix:** `GalleryPreview.tsx` bento grid memakai `grid-rows-[220px_220px_220px] md:grid-rows-[260px_260px]` yang jumlah barisnya kurang dari kebutuhan layout (mobile butuh 5 baris, desktop 3 baris). Akibatnya 3 foto terakhir (foto 5/6/7) jatuh di *implicit row* tanpa tinggi → tinggi ter-render 0 → Next.js warning `Image ... has "fill" and a height value of 0` + gambar berpotensi tidak tampil. **Fix:** ganti ke `auto-rows-[220px] md:auto-rows-[260px]` supaya semua baris (eksplisit + implicit) punya tinggi tetap; kartu `row-span-2` otomatis = 2× tinggi baris. **Catatan:** kalau menambah/mengurangi jumlah foto di bento grid, jangan kembali ke `grid-rows-[…]` dengan jumlah baris hardcoded — pakai `auto-rows` agar tidak terulang. `GalleryPage.tsx` tidak terdampak (pakai CSS columns + tinggi eksplisit `h-80`/`h-52`).

## Konfigurasi GTM
- **GTM Container ID:** `GTM-5L5LR2KW`
- **Posisi script:** inline di `<head>` setelah consent default, noscript sebagai elemen pertama `<body>`
- **Urutan wajib di `<head>`:** (1) consent default → (2) GTM script
- **GA4 direct (gtag.js):** tetap aktif di body. Jika GA4 tag dikonfigurasi di dalam GTM, hapus dua Script GA4 di body layout.tsx untuk menghindari double-tracking
- **Jangan pindahkan GTM script ke bawah consent default** — Consent Mode v2 harus sudah di dataLayer sebelum GTM ter-inisialisasi

## Konfigurasi Email (Resend)
- **RESEND_API_KEY:** `re_Rp8yVY7x_MDE4zZWfy4xFmhg2RwZWmSca`
- **RESEND_FROM_EMAIL:** `no-reply@sarau-luxury.com`
- **CONTACT_EMAIL (penerima notifikasi):** `sarauluxury@gmail.com`
- **Fallback from/to:** `no-reply@sarau-luxury.com` (domain sudah terverifikasi di Resend)
- Email admin (penerima form kontak & booking): `sarauluxury@gmail.com`
- Email pengirim (sender): `sarauluxury@gmail.com`

## Konfigurasi WhatsApp (Fonnte)
- **WHATSAPP_ADMIN_NUMBER:** `6285711786561` (server-only, penerima notifikasi dari form)
- **NEXT_PUBLIC_WHATSAPP_NUMBER:** `6285711786561` (publik, untuk tombol floating chat di website)
- **FONNTE_TOKEN:** set via env
- **Format API:** `application/x-www-form-urlencoded` + `countryCode: '62'` (bukan JSON)
- **Catatan:** Device di Fonnte harus statusnya **Connected** (QR scan aktif). Jika "disconnected device" → masuk app.fonnte.com → reconnect device.

## Third-Party Services
| Service | Status | Fungsi |
|---------|--------|--------|
| Resend | Aktif | Email notifikasi form kontak, booking & lead company profile |
| Fonnte | Opsional | WhatsApp notifikasi ke admin |
| Strapi | Opsional | Simpan data kontak ke CMS (skip jika tidak ada token) |
| Sanity | Placeholder | Blog/galeri (belum aktif) |
| Vercel Analytics | Aktif | Web analytics |
| Google Analytics 4 | Aktif | `G-1SJ8G9TVER` |
| Google Tag Manager | Aktif | `GTM-5L5LR2KW` |
| @react-pdf/renderer | Aktif | Generate PDF Company Profile server-side (v4.5.1) |

## Catatan Strapi
Strapi **tidak wajib** — hanya aktif jika `NEXT_PUBLIC_STRAPI_URL` dan `STRAPI_API_TOKEN` keduanya diset di env. Jika tidak diset, step save ke Strapi di-skip tanpa error.

## Kontak & Sosial
- **Email:** sarauluxury@gmail.com
- **WA 1:** +62 857-1178-6561
- **WA 2:** +62 858-1062-9838
- **Instagram:** https://instagram.com/sarauluxury
- **TikTok:** https://www.tiktok.com/@sarauluxury
- **Facebook:** https://www.facebook.com/share/1H86Hap6Y7/
- **YouTube:** https://www.youtube.com/@Sarauluxury
- **Threads:** https://www.threads.com/@sarauluxury
- **Alamat:** Binong Permai Blok R-10/14, Curug, Banten

## SEO Metadata
- Title max 60 karakter, meta description max 155 karakter
- Semua halaman sudah diupdate Juni 2026 sesuai dokumen SEO B2B korporat
- Setiap halaman pakai `export const metadata` dengan `title`, `description`, dan `openGraph`
- Keywords & alternates dipertahankan dari versi sebelumnya
- **Jangan ubah title/desc tanpa referensi dokumen SEO** — sudah dikurasi untuk intent B2B

## SEO Technical (update Juni 2026)
- `<meta charset="utf-8">` di root `layout.tsx` `<head>`
- `<link rel="canonical">` per halaman via `metadata.alternates` + root di `<head>`
- **Title template** diubah ke `'%s'` — semua page title sudah include brand, tidak perlu suffix `| Sarau Luxury`
- **Title ≤ 60 chars** — semua halaman dicek & dipangkas; `clients` dipangkas, `blog/[slug]` auto-truncate ke 60 chars
- **OG Image** — semua 8 non-home pages punya `openGraph.images` (1200×630, `/opengraph-image`)
- **Double H1 fix** — Navbar & Footer: teks brand diubah ke `<p>` + `aria-hidden="true"` agar tidak terdeteksi audit tool sebagai heading
- **H1 per halaman** — `HeroSection` sub-headline diubah `p→h2`; `AboutHero` paragraf bawah H1 diubah `p→h2`; `/packages` punya visible H1 di page header
- **H2 missing** — `HeroSection`, `AboutHero` kini punya H2 visible langsung di bawah H1
- **H3/H4/H5/H6 structure** — `StatsSection` label→`h3`; `ClientsPage` industry→`h3`, stats→`h4`, client name→`h5`, industry tag→`h6`; `ServicesPage` subtitle→`h4`, features label→`h5`; `PackagesPreview` card name→`h4`, notes→`h6`, features label→`h5`, add-on name→`h4`; `ContactForm` label→`h6`; `BookingForm` step→`h4/h6`, layanan→`h5/h6`; `GalleryPage` stats→`h4/h6`, filter→`h5`; `FAQClient` info→`h4/h6`; `MissionVision` value→`h6`; `HeroSection` stat label→`h4`
- **Blog H2** — `BlogListPage` dynamic `sr-only` H2 per kategori; card read-more `span→h5`
- **Service JSON-LD** di `services/page.tsx` — `ItemList` 6 Service schema
- **Content ≥ 300 words** — Gallery (stats cards + SEO block), FAQ (3 info cards + about block), Booking (3 SEO blocks: proses 4 steps + 6 layanan + kenapa Sarau Luxury), Contact (kenapa pilih + layanan grid)
- **Blog meta description** — `generateMetadata` di `blog/[slug]/page.tsx` pakai `post.excerpt` sebagai desc + OG image + canonical; semua excerpt diperluas ke 130–170 chars
- **Blog H2** — setiap post page kini punya H2 (excerpt sebagai subheading di bawah H1); BlogListPage card title `h2→h3`; `renderContent` support `h3` dan `h4`; `Section` type diupdate
- **Blog posts** — 3 post baru ditambahkan ke `posts` record (`perbedaan-outing-outbound`, `10-ide-team-building-kreatif`, `destinasi-outing-terbaik-jawa-bali`) agar tidak thin/missing content
- **Jangan hapus konten SEO block** di komponen Gallery, FAQ, Booking, Contact — ini penting untuk word count crawler

## Single Source of Truth
- Semua data kontak, statistik, sosial media → `src/lib/constants.ts`
- Jangan hardcode email/telepon di komponen — selalu import dari `CONTACT` constant

## Fix: Gallery & Client Logos v2 (Juni 2025)
- **Gallery broken fix:** tambah `unoptimized` di semua `<Image>` GalleryPage & GalleryPreview → bypass Next.js server-side optimization yang gagal fetch Google Drive
- **Gallery +24 foto:** dari Google Drive folder `1Y5lysdoLbWqh1wL0kHx5We0mTXlzXd5O`; 12 portrait (tall:true) + 12 landscape; Outbound 6, Team Building 6, Gathering 6, Outing 6. **Total galeri: 44 foto**
- **Gallery duplikat:** dicek — 0 duplikat

## Performance (Juni 2026)
- **Fonts:** `next/font/google` — self-hosted di Vercel, tidak ada HTTP request ke Google Fonts runtime → FCP lebih cepat
- **Hero LCP:** H1 tidak start di `opacity:0` (pakai `h1Variants` y-only); stagger dikurangi 0.15→0.07; duration 0.8→0.5s
- **ISR:** `export const revalidate = 3600` di 8 halaman statis (homepage, about, services, packages, gallery, clients, faq, blog) → TTFB dari edge cache setelah request pertama

## Feature: Cookie Consent Banner (Juni 2026)
- **Komponen:** `src/components/ui/CookieConsent.tsx` — banner kustom GA4 Consent Mode v2
- **Desain:** glass-dark background, accent line gradient (forest→sun→leaf), animasi slide-up Framer Motion, expand detail cookie types
- **Pilihan user:** "Terima Semua" (grant analytics_storage) | "Hanya Esensial" (keep denied)
- **Storage:** localStorage key `sarau_cookie_consent` = `'all'` | `'essential'`
- **Integrasi GA4:** `gtag('consent','update',{...})` dipanggil saat user memilih; pada page reload preferensi lama di-re-apply
- **Default GA4:** `analytics_storage: 'denied'` — set via `ga-consent-default` script di `layout.tsx` sebelum GA library load
- **Urutan scripts di layout.tsx:** `ga-consent-default` → `gtag.js` → `ga-init` (urutan ini WAJIB)
- **Jangan ubah urutan GA scripts** — consent default harus dikirim ke dataLayer sebelum library GA4 ter-load
- **`ad_storage`, `ad_user_data`, `ad_personalization`:** selalu `denied` (tidak ada iklan)

## Feature: Downloadable Company Profile (Juni 2025)
- **PDF Generator:** `src/lib/pdf/CompanyProfileDocument.tsx` — 5 halaman (Cover, About, Services, Packages, Contact) menggunakan `@react-pdf/renderer` v4.5.1
- **API Route:** `POST /api/download-profile` — validasi (name, company, email) → kirim lead notif ke admin via Resend + Fonnte → return PDF binary
- **Section Component:** `src/components/sections/CompanyProfileDownload.tsx` — gated download, modal form 3 field, trigger download via fetch + Blob
- **Posisi di Homepage:** ditambahkan sebelum `CtaSection`
- **next.config.js:** `experimental.serverComponentsExternalPackages: ['@react-pdf/renderer']`
- **PDF Response:** `renderToBuffer` → `.buffer.slice()` → `ArrayBuffer` untuk kompatibilitas `NextResponse`
- **Lead capture:** setiap download tercatat di email admin (subject: `📥 Download Company Profile`) dan WA notif via Fonnte
- **Unicode fix:** `✦`, `★`, `→` bukan bagian dari Helvetica → diganti ASCII (`-`, `*`, `>`) agar tidak muncul sebagai `&`
- **PackagesPage overflow fix:** `pkgCard` padding 18→12, marginBottom 12→6 agar tidak overflow ke halaman kosong

## Feature: Client Logo Proxy (Juni 2025)
- **API Route:** `GET /api/logo/[domain]` — fallback chain 4 tier:
  1. **Local file** `/public/logos/{domain}.{ext}` (png/svg/jpg/webp) — prioritas tertinggi
  2. **Clearbit** `logo.clearbit.com/{domain}` — kualitas terbaik, international brands
  3. **Google Favicon v2** `t2.gstatic.com/faviconV2` — hanya HTTP 200 diterima (skip 404 placeholder)
  4. **DuckDuckGo** `icons.duckduckgo.com/ip3/{domain}.ico` — last resort
- **Cache:** `Cache-Control: public, max-age=604800, stale-while-revalidate=2592000` (7 hari)
- **Fallback akhir:** colored initials di component (onError handler)
- **CSP:** tidak perlu update — request dari `'self'` (`/api/logo/...`)
- **Client names:** semua prefix `PT.`, `RS.` sudah dihapus; nama pakai Capitalize
- **Status logo (Juni 2025):** 18 company tampil logo, **34 company masih inisial** menunggu upload

## Logo Upload — Cara & Status (TODO)
**Folder:** `public/logos/`
**Naming:** `{domain}.png` (atau `.svg`, `.jpg`, `.webp`)
**Ukuran ideal:** 128×128 px atau 256×256 px, transparan, < 100 KB

**7 company yang masih inisial (belum ada logo):**
`trisakti.co.id` · `mahawira.co.id` · `mayham.co.id` · `aulychelly.com` · `notarislola.co.id` · `sdndayabersama.sch.id` · `takprime.co.id`

**Status Juni 2026:** 45 logo tampil (18 via Clearbit/API + 9 via Google Favicon/DDG + 18 upload manual), 7 masih inisial

## Troubleshooting Fonnte
- Error `request invalid on disconnected device` → device di Fonnte tidak terkoneksi, scan ulang QR
- API Fonnte harus dikirim sebagai `application/x-www-form-urlencoded`, bukan `application/json`
- Cek Vercel Function Logs → filter `/api/contact` → cari baris `[WA] Fonnte response:` untuk debug

## Security Notes
- Rate limit: 5 req/menit per IP (in-memory, tidak scalable di Vercel serverless)
- Input sanitasi: XSS protection di semua field form
- `WHATSAPP_ADMIN_NUMBER` & `FONNTE_TOKEN` = server-only (tidak ke browser)
- CI: TruffleHog scan di setiap push


## Optimasi PageSpeed (Juni 2026)
Perbaikan dari temuan PageSpeed Insights (Performance 48, Accessibility 99):
- **Logo navbar:** `src/components/layout/Navbar.tsx` — `<Image>` logo pakai `width={48} height={48}` + `sizes="48px"` (bukan `fill` + default `100vw`). Mencegah Next.js generate varian 750px untuk display 48×48 (−24 KiB, perbaikan LCP).
- **GA4 → GTM-only:** Script `gtag.js` (`G-1SJ8G9TVER`) langsung di `layout.tsx` **dihapus**. GA4 sekarang di-handle penuh lewat GTM (`GTM-5L5LR2KW`). Hemat ~157 KiB JS + hilangkan double-tracking. **Penting:** GA4 tag harus dikonfigurasi di dalam GTM container; jangan tambahkan kembali gtag.js langsung. Import `next/script` di layout.tsx ikut dihapus (tidak lagi dipakai).
- **Urutan script consent tetap:** `ga-consent-default` (inline `<head>`) → GTM. Consent Mode v2 wajib di dataLayer sebelum GTM init — jangan diubah.
- **browserslist (`package.json`):** ditambah target modern (Chrome/Edge/Firefox ≥111, Safari ≥16.4) agar SWC tidak inject polyfill ES6+ legacy (−12 KiB). Ditambah devDependency `critters`.
- **optimizeCss (`next.config.js`):** `experimental.optimizeCss: true` untuk inline critical CSS (kurangi render-blocking CSS ~150 ms). Butuh paket `critters`.
- **Heading order (`HeroSection.tsx`):** label statistik hero diubah `<h4>` → `<p>` agar urutan heading tidak melompat (H1→H2→H4). Ini label angka, bukan heading konten SEO.
- **Three.js (`HeroScene.tsx`):** `<Stars count={500}>` → `{250}` untuk kurangi beban main-thread. Three.js tetap deferred via `requestIdleCallback` + `dynamic(ssr:false)`.


## A11y: Web Interface Guidelines Audit (Juni 2026)

Audit Vercel Web Interface Guidelines — 24 file diperbaiki dalam 1 commit:
- **`transition-all` → `transition`** (42×): Tailwind `transition` memakai daftar properti kurasi (color/bg/border/opacity/shadow/transform/filter), bukan `all`. Memenuhi guideline "list properties explicitly" tanpa mengubah desain/durasi.
- **`focus:ring*` → `focus-visible:ring*`** (14×) di komponen tsx + `.btn-primary/.btn-secondary/.input-base` (globals.css). `:focus-visible` hanya tampil saat fokus keyboard, klik mouse tetap bersih.
- **`.btn-sun`** (globals.css): satu-satunya tombol tanpa focus state → ditambah `focus:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2`.
- **`prefers-reduced-motion`**: ditambah blok global di akhir `globals.css` (sebelumnya TIDAK ada sama sekali) — menonaktifkan animasi/transisi untuk pengguna reduce-motion (Three.js, framer-motion, marquee).
- **Tipografi `...` → `…`**: `loading.tsx`, `BookingForm.tsx`, `ContactForm.tsx`, `CompanyProfileDownload.tsx`, truncation di `blog/[slug]/page.tsx`. Spread operator JS dilindungi.
- Catatan: 3 flag "icon button tanpa aria-label" diverifikasi false-positive (semua punya teks terlihat). Viewport tidak menonaktifkan zoom.
