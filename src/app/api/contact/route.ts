import { NextRequest, NextResponse } from 'next/server'
import { submitContact } from '@/lib/strapi'

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

    const isBooking = body.type === 'booking'
    const subjectPrefix = isBooking ? '📋 Booking Inquiry' : '📬 Pesan Kontak'

    // Save to Strapi (only if configured)
    if (process.env.NEXT_PUBLIC_STRAPI_URL && process.env.STRAPI_API_TOKEN) {
      try {
        await submitContact(body)
      } catch (strapiErr) {
        console.warn('Strapi save skipped:', strapiErr)
      }
    }

    // Send email via Resend (only if API key is set)
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)

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

        const receivedAt = new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' })
        const refNumber  = 'SL-' + Date.now().toString().slice(-6)
        const replyLabel = isBooking ? 'Inquiry booking Anda telah berhasil kami terima.' : 'Pesan Anda telah berhasil kami terima.'
        const autoReplySubject = isBooking ? 'Inquiry' : 'Pesan'
        const refHtml = isBooking
          ? `<p style="color:#4a3728;line-height:1.6">Nomor referensi Anda: <strong style="color:#2d4a2d">${refNumber}</strong></p>`
          : ''

        // Email to admin
        await resend.emails.send({
          from:    'Sarau Luxury <noreply@sarau-luxury.com>',
          to:      [process.env.CONTACT_EMAIL || 'info@sarau-luxury.com'],
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

        // Auto-reply to sender
        await resend.emails.send({
          from:    'Sarau Luxury <noreply@sarau-luxury.com>',
          to:      [body.email],
          subject: `✅ ${autoReplySubject} Anda telah kami terima – Sarau Luxury`,
          html: `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f9f5f0;padding:24px;margin:0">
            <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5ddd5">
              <div style="background:linear-gradient(135deg,#2d4a2d,#4a7c59);padding:28px 32px;text-align:center">
                <h2 style="color:#fff;margin:0;font-size:22px">🌿 Sarau Luxury</h2>
              </div>
              <div style="padding:32px">
                <h3 style="color:#2d4a2d;margin-top:0">Halo, ${body.name}!</h3>
                <p style="color:#4a3728;line-height:1.6">Terima kasih telah menghubungi <strong>Sarau Luxury</strong>. ${replyLabel}</p>
                <p style="color:#4a3728;line-height:1.6">Tim kami akan menghubungi Anda melalui <strong>WhatsApp atau email</strong> dalam <strong>1×24 jam kerja</strong>.</p>
                ${refHtml}
                <div style="margin-top:24px;padding:16px;background:#f9f5f0;border-radius:10px;font-size:13px;color:#666">
                  <strong>Info Kontak Kami:</strong><br/>
                  📞 +62 812-3456-7890<br/>
                  📧 info@sarau-luxury.com<br/>
                  ⏰ Senin–Sabtu, 08.00–20.00 WIB
                </div>
              </div>
            </div>
          </body></html>`,
        })
      } catch (emailErr) {
        console.warn('Email send skipped:', emailErr)
      }
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err: unknown) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
