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
- **RESEND_FROM_EMAIL:** `sarauluxury@gmail.com`
- **CONTACT_EMAIL (penerima notifikasi):** `sarauluxury@gmail.com`
- **Fallback from/to:** `sarauluxury@gmail.com` (bukan onboarding@resend.dev)
- Email admin (penerima form kontak & booking): `sarauluxury@gmail.com`
- Email pengirim (sender): `sarauluxury@gmail.com`

## Konfigurasi WhatsApp (Fonnte)
- **WHATSAPP_ADMIN_NUMBER:** `6285711786561` (server-only)
- **NEXT_PUBLIC_WHATSAPP_NUMBER:** `6285711786561`
- **FONNTE_TOKEN:** set via env

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

## Single Source of Truth
- Semua data kontak, statistik, sosial media → `src/lib/constants.ts`
- Jangan hardcode email/telepon di komponen — selalu import dari `CONTACT` constant

## Security Notes
- Rate limit: 5 req/menit per IP (in-memory, tidak scalable di Vercel serverless)
- Input sanitasi: XSS protection di semua field form
- `WHATSAPP_ADMIN_NUMBER` & `FONNTE_TOKEN` = server-only (tidak ke browser)
- CI: TruffleHog scan di setiap push
