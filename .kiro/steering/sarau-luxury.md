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
| Google Analytics 4 | Aktif | `G-DFKHWJ3TJZ` |
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

## Fix: Gallery & Client Logos (Juni 2025)
- **Gallery broken images fix:** tambah `unoptimized` pada semua `<Image>` di GalleryPage & GalleryPreview → bypass Next.js server-side optimization yang gagal fetch Google Drive (Google rate-limit server requests)
- **Client logos:** ganti colored initials dengan logo resmi via **Clearbit Logo API** (`https://logo.clearbit.com/${domain}`) di ClientsPage & ClientsMarquee; `onError` fallback ke colored initials untuk company tanpa logo di Clearbit
- **CSP + remotePatterns:** tambah `https://logo.clearbit.com` ke `img-src` di CSP header & ke `images.remotePatterns` di next.config.js
- **PDF Generator:** `src/lib/pdf/CompanyProfileDocument.tsx` — 5 halaman (Cover, About, Services, Packages, Contact) menggunakan `@react-pdf/renderer` v4.5.1
- **API Route:** `POST /api/download-profile` — validasi (name, company, email) → kirim lead notif ke admin via Resend + Fonnte → return PDF binary
- **Section Component:** `src/components/sections/CompanyProfileDownload.tsx` — gated download, modal form 3 field, trigger download via fetch + Blob
- **Posisi di Homepage:** ditambahkan sebelum `CtaSection`
- **next.config.js:** `experimental.serverComponentsExternalPackages: ['@react-pdf/renderer']`
- **PDF Response:** `renderToBuffer` → `.buffer.slice()` → `ArrayBuffer` untuk kompatibilitas `NextResponse`
- **Lead capture:** setiap download tercatat di email admin (subject: `📥 Download Company Profile`) dan WA notif via Fonnte
- **Unicode fix:** `✦`, `★`, `→` bukan bagian dari Helvetica → diganti ASCII (`-`, `*`, `>`) agar tidak muncul sebagai `&`
- **PackagesPage overflow fix:** `pkgCard` padding 18→12, marginBottom 12→6 agar tidak overflow ke halaman kosong

## Troubleshooting Fonnte
- Error `request invalid on disconnected device` → device di Fonnte tidak terkoneksi, scan ulang QR
- API Fonnte harus dikirim sebagai `application/x-www-form-urlencoded`, bukan `application/json`
- Cek Vercel Function Logs → filter `/api/contact` → cari baris `[WA] Fonnte response:` untuk debug

## Security Notes
- Rate limit: 5 req/menit per IP (in-memory, tidak scalable di Vercel serverless)
- Input sanitasi: XSS protection di semua field form
- `WHATSAPP_ADMIN_NUMBER` & `FONNTE_TOKEN` = server-only (tidak ke browser)
- CI: TruffleHog scan di setiap push
