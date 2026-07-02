import { NextRequest, NextResponse } from 'next/server'
import { sanitizeHtml, sanitizePlain, isValidEmail } from '@/lib/security'

// ─── WhatsApp notification via Fonnte ────────────────────────────────────────
async function sendWhatsAppNotif(body: {
  name: string
  company: string
  email: string
  phone?: string
  service?: string
  participants?: string
  message: string
  type?: string
}) {
  const token    = process.env.FONNTE_TOKEN
  const waTarget = process.env.WHATSAPP_ADMIN_NUMBER || '6285711786561'

  if (!token) {
    console.warn('[WA] FONNTE_TOKEN tidak diset, skip WhatsApp notif.')
    return
  }

  const isBooking  = body.type === 'booking'
  const label      = isBooking ? '📋 BOOKING INQUIRY BARU' : '📬 PESAN KONTAK BARU'
  const receivedAt = new Date().toLocaleString('id-ID', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Jakarta',
  })

  const lines = [
    `*${label}*`,
    `_${receivedAt}_`,
    '',
    `👤 *Nama:* ${body.name}`,
    `🏢 *Perusahaan:* ${body.company}`,
    `📧 *Email:* ${body.email}`,
    body.phone        ? `📱 *WhatsApp:* ${body.phone}`     : null,
    body.service      ? `🎯 *Layanan:* ${body.service}`     : null,
    body.participants ? `👥 *Peserta:* ${body.participants}` : null,
    '',
    `💬 *Pesan:*\n${body.message}`,
    '',
    `---`,
    `Balas pesan ini atau hubungi via WhatsApp: https://wa.me/${body.phone?.replace(/\D/g, '') || ''}`,
  ]
    .filter((l) => l !== null)
    .join('\n')

  const payload = new URLSearchParams({
    target:      waTarget,
    message:     lines,
    countryCode: '62',
  })

  console.log('[WA] Mengirim ke Fonnte → target:', waTarget)

  const res = await fetch('https://api.fonnte.com/send', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: payload.toString(),
  })

  const result = await res.json()
  console.log('[WA] Fonnte response:', JSON.stringify(result))

  if (!result.status) {
    console.warn('[WA] Fonnte error — status:', result.status, '| reason:', result.reason || result.message || JSON.stringify(result))
  } else {
    console.log('[WA] Notifikasi WhatsApp berhasil terkirim ke', waTarget)
  }
}

// ─── Main handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const raw = await req.json()

    // ── 1. Validasi field wajib & format ────────────────────────────────────
    const requiredFields = ['name', 'company', 'email', 'message'] as const
    for (const field of requiredFields) {
      if (!raw[field] || typeof raw[field] !== 'string' || !raw[field].trim()) {
        return NextResponse.json(
          { error: `Field ${field} wajib diisi` },
          { status: 400 }
        )
      }
    }

    const nameLen = typeof raw.name === 'string' ? raw.name.trim().length : 0
    if (nameLen < 2 || nameLen > 100)
      return NextResponse.json({ error: 'Nama harus antara 2–100 karakter' }, { status: 400 })
    const companyLen = typeof raw.company === 'string' ? raw.company.trim().length : 0
    if (companyLen < 2 || companyLen > 100)
      return NextResponse.json({ error: 'Nama perusahaan harus antara 2–100 karakter' }, { status: 400 })
    if (!isValidEmail(raw.email))
      return NextResponse.json({ error: 'Format email tidak valid' }, { status: 400 })
    if (typeof raw.phone === 'string' && raw.phone.trim() !== '' && !/^\d{8,15}$/.test(raw.phone.replace(/[\s\-\+\(\)\.]/g, '')))
      return NextResponse.json({ error: 'Format nomor WhatsApp tidak valid' }, { status: 400 })
    const msgLen = typeof raw.message === 'string' ? raw.message.trim().length : 0
    if (msgLen < 10 || msgLen > 2000)
      return NextResponse.json({ error: 'Pesan harus antara 10–2000 karakter' }, { status: 400 })

    // ── 2. Sanitize semua input ──────────────────────────────────────────────
    // HTML-safe (untuk email)
    const safe = {
      name:         sanitizeHtml(raw.name),
      company:      sanitizeHtml(raw.company),
      email:        sanitizeHtml(raw.email),
      phone:        sanitizeHtml(raw.phone        || ''),
      service:      sanitizeHtml(raw.service      || ''),
      participants: sanitizeHtml(raw.participants  || ''),
      message:      sanitizeHtml(raw.message),
      type:         raw.type === 'booking' ? 'booking' : 'contact',
    }

    // Plain-text (untuk WhatsApp)
    const plain = {
      name:         sanitizePlain(raw.name),
      company:      sanitizePlain(raw.company),
      email:        sanitizePlain(raw.email),
      phone:        sanitizePlain(raw.phone        || ''),
      service:      sanitizePlain(raw.service      || ''),
      participants: sanitizePlain(raw.participants  || ''),
      message:      sanitizePlain(raw.message),
      type:         safe.type,
    }

    const isBooking     = safe.type === 'booking'
    const subjectPrefix = isBooking ? '📋 Booking Inquiry' : '📬 Pesan Kontak'

    // ── 3. Save to Strapi (only if configured) ───────────────────────────────
    if (process.env.NEXT_PUBLIC_STRAPI_URL && process.env.STRAPI_API_TOKEN) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contacts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
          },
          body: JSON.stringify({ data: plain }),
        })
      } catch (strapiErr) {
        console.warn('Strapi save skipped:', strapiErr)
      }
    }

    // ── 4. Email via Resend ───────────────────────────────────────────────────
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend     = new Resend(process.env.RESEND_API_KEY)

        const rows: [string, string][] = [
          ['Nama / PIC',     safe.name],
          ['Perusahaan',     safe.company],
          ['Email',          safe.email],
          ['No. WhatsApp',   safe.phone        || '-'],
          ['Jenis Layanan',  safe.service      || '-'],
          ['Jumlah Peserta', safe.participants  || '-'],
          ['Pesan / Detail', safe.message],
        ]

        const tableRows = rows
          .map(
            ([label, value]) => `
            <tr>
              <td style="padding:8px 12px;background:#f9f5f0;font-weight:600;color:#2d4a2d;white-space:nowrap;border-bottom:1px solid #e5ddd5">${label}</td>
              <td style="padding:8px 12px;color:#4a3728;border-bottom:1px solid #e5ddd5;white-space:pre-wrap">${value}</td>
            </tr>`
          )
          .join('')

        const receivedAt = new Date().toLocaleString('id-ID', {
          dateStyle: 'full',
          timeStyle: 'short',
          timeZone: 'Asia/Jakarta',
        })

        // Gunakan domain terverifikasi jika tersedia, fallback ke no-reply@sarau-luxury.com
        const fromAddress = process.env.RESEND_FROM_EMAIL || 'no-reply@sarau-luxury.com'

        await resend.emails.send({
          from:    `Sarau Luxury <${fromAddress}>`,
          to:      [process.env.CONTACT_EMAIL || 'sarauluxury@gmail.com'],
          replyTo: safe.email,
          subject: `${subjectPrefix} dari ${safe.name} – ${safe.company}`,
          html: `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f9f5f0;padding:24px;margin:0">
            <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5ddd5">
              <div style="background:linear-gradient(135deg,#2d4a2d,#4a7c59);padding:28px 32px">
                <h2 style="color:#fff;margin:0;font-size:20px">${subjectPrefix} Baru</h2>
                <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px">Diterima: ${receivedAt}</p>
              </div>
              <table style="width:100%;border-collapse:collapse">${tableRows}</table>
              <div style="padding:20px 32px;background:#f9f5f0;border-top:1px solid #e5ddd5">
                <p style="margin:0;font-size:12px;color:#888">
                  Email ini dikirim otomatis dari website Sarau Luxury.
                  Balas langsung ke email ini untuk merespons ke ${safe.email}.
                </p>
              </div>
            </div>
          </body></html>`,
        })

        console.log(`[email] Notifikasi terkirim ke ${process.env.CONTACT_EMAIL}`)
      } catch (emailErr) {
        console.warn('[email] Send skipped:', emailErr)
      }
    }

    // ── 5. WhatsApp notification via Fonnte ───────────────────────────────────
    try {
      await sendWhatsAppNotif(plain)
    } catch (waErr) {
      console.warn('[WA] Notifikasi WA gagal:', waErr)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err: unknown) {
    console.error('Contact API error:', err)
    // Jangan bocorkan detail error ke client
    return NextResponse.json({ error: 'Terjadi kesalahan. Silakan coba lagi.' }, { status: 500 })
  }
}
