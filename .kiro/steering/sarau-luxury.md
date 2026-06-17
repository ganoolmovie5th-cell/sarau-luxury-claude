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
| Resend | Aktif | Email notifikasi form kontak & booking |
| Fonnte | Opsional | WhatsApp notifikasi ke admin |
| Strapi | Opsional | Simpan data kontak ke CMS (skip jika tidak ada token) |
| Sanity | Placeholder | Blog/galeri (belum aktif) |
| Vercel Analytics | Aktif | Web analytics |
| Google Analytics 4 | Aktif | `G-DFKHWJ3TJZ` |

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
- `<meta charset="utf-8">` ditambahkan di root `layout.tsx` `<head>`
- `<link rel="canonical" href="https://sarau-luxury.com/">` ditambahkan di root `<head>` (homepage), halaman lain via `metadata.alternates.canonical`
- **H1 audit selesai** — semua 10 halaman kini punya tepat 1 H1; `/packages` pakai `<h1 className="sr-only">` karena section-nya pakai `h2`
- **Service JSON-LD** ditambahkan di `services/page.tsx` — `ItemList` berisi 6 `Service` schema: Company Gathering, Outing Perusahaan, Outbound Training, Team Building, Family Gathering, Meeting Package

## Single Source of Truth
- Semua data kontak, statistik, sosial media → `src/lib/constants.ts`
- Jangan hardcode email/telepon di komponen — selalu import dari `CONTACT` constant

## Troubleshooting Fonnte
- Error `request invalid on disconnected device` → device di Fonnte tidak terkoneksi, scan ulang QR
- API Fonnte harus dikirim sebagai `application/x-www-form-urlencoded`, bukan `application/json`
- Cek Vercel Function Logs → filter `/api/contact` → cari baris `[WA] Fonnte response:` untuk debug

## Security Notes
- Rate limit: 5 req/menit per IP (in-memory, tidak scalable di Vercel serverless)
- Input sanitasi: XSS protection di semua field form
- `WHATSAPP_ADMIN_NUMBER` & `FONNTE_TOKEN` = server-only (tidak ke browser)
- CI: TruffleHog scan di setiap push
