import { NextRequest, NextResponse } from 'next/server'
import { submitContact } from '@/lib/strapi'

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
  const token   = process.env.FONNTE_TOKEN
  const waTarget = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6285711786561'

  if (!token) {
    console.warn('[WA] FONNTE_TOKEN tidak diset, skip WhatsApp notif.')
    return
  }

  const isBooking = body.type === 'booking'
  const label     = isBooking ? '📋 BOOKING INQUIRY BARU' : '📬 PESAN KONTAK BARU'
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
    body.phone        ? `📱 *WhatsApp:* ${body.phone}`          : null,
    body.service      ? `🎯 *Layanan:* ${body.service}`          : null,
    body.participants ? `👥 *Peserta:* ${body.participants}`      : null,
    '',
    `💬 *Pesan:*\n${body.message}`,
    '',
    `---`,
    `Balas pesan ini atau hubungi via WhatsApp: https://wa.me/${body.phone?.replace(/\D/g, '') || ''}`,
  ]
    .filter((l) => l !== null)
    .join('\n')

  const res = await fetch('https://api.fonnte.com/send', {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      target:  waTarget,
      message: lines,
    }),
  })

  const result = await res.json()
  if (!result.status) {
    console.warn('[WA] Fonnte error:', result)
  } else {
    console.log('[WA] Notifikasi WhatsApp terkirim ke', waTarget)
  }
}

// ─── Main handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Basic validation
    const required = ['name', 'company', 'email', 'message']
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Field ${field} wajib diisi` },
          { status: 400 }
        )
      }
    }

    const isBooking     = body.type === 'booking'
    const subjectPrefix = isBooking ? '📋 Booking Inquiry' : '📬 Pesan Kontak'

    // ── 1. Save to Strapi (only if configured) ───────────────────────────────
    if (process.env.NEXT_PUBLIC_STRAPI_URL && process.env.STRAPI_API_TOKEN) {
      try {
        await submitContact(body)
      } catch (strapiErr) {
        console.warn('Strapi save skipped:', strapiErr)
      }
    }

    // ── 2. Email via Resend ───────────────────────────────────────────────────
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend     = new Resend(process.env.RESEND_API_KEY)

        const rows: [string, string][] = [
          ['Nama / PIC',     body.name],
          ['Perusahaan',     body.company],
          ['Email',          body.email],
          ['No. WhatsApp',   body.phone        || '-'],
          ['Jenis Layanan',  body.service      || '-'],
          ['Jumlah Peserta', body.participants  || '-'],
          ['Pesan / Detail', body.message],
        ]

        const tableRows = rows
          .map(([label, value]) =>
            `<tr>
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

        await resend.emails.send({
          from:    'Sarau Luxury <onboarding@resend.dev>',
          to:      [process.env.CONTACT_EMAIL || 'bandungindonesiasinergi@gmail.com'],
          replyTo: body.email,
          subject: `${subjectPrefix} dari ${body.name} – ${body.company}`,
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
                  Balas langsung ke email ini untuk merespons ke ${body.email}.
                </p>
              </div>
            </div>
          </body></html>`,
        })

        console.log(`[email] Notifikasi terkirim ke ${process.env.CONTACT_EMAIL || 'bandungindonesiasinergi@gmail.com'}`)
      } catch (emailErr) {
        console.warn('[email] Send skipped:', emailErr)
      }
    }

    // ── 3. WhatsApp notification via Fonnte (backup) ──────────────────────────
    try {
      await sendWhatsAppNotif(body)
    } catch (waErr) {
      console.warn('[WA] Notifikasi WA gagal:', waErr)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err: unknown) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
