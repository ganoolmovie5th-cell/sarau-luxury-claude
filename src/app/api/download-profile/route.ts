import { NextRequest, NextResponse } from 'next/server'
import { createElement } from 'react'
import { renderToBuffer } from '@react-pdf/renderer'
import { CompanyProfileDocument } from '@/lib/pdf/CompanyProfileDocument'
import { sanitizeHtml, sanitizePlain, isValidEmail } from '@/lib/security'

export const dynamic = 'force-dynamic'

// ─── Main handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const raw = await req.json()

    // ── Validasi ─────────────────────────────────────────────────────────────
    for (const field of ['name', 'company', 'email'] as const) {
      if (!raw[field] || typeof raw[field] !== 'string' || !raw[field].trim()) {
        return NextResponse.json({ error: `Field ${field} wajib diisi` }, { status: 400 })
      }
    }
    if ((typeof raw.name !== 'string') || raw.name.trim().length < 2 || raw.name.trim().length > 100)
      return NextResponse.json({ error: 'Nama harus antara 2–100 karakter' }, { status: 400 })
    if ((typeof raw.company !== 'string') || raw.company.trim().length < 2 || raw.company.trim().length > 100)
      return NextResponse.json({ error: 'Perusahaan harus antara 2–100 karakter' }, { status: 400 })
    if (!isValidEmail(raw.email))
      return NextResponse.json({ error: 'Format email tidak valid' }, { status: 400 })

    // ── Sanitize ─────────────────────────────────────────────────────────────
    const safe = {
      name:    sanitizeHtml(raw.name),
      company: sanitizeHtml(raw.company),
      email:   sanitizeHtml(raw.email),
    }
    const plain = {
      name:    sanitizePlain(raw.name),
      company: sanitizePlain(raw.company),
      email:   sanitizePlain(raw.email),
    }

    // ── Lead notification email via Resend ───────────────────────────────────
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        const receivedAt = new Date().toLocaleString('id-ID', {
          dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Jakarta',
        })

        await resend.emails.send({
          from:    `Sarau Luxury <${process.env.RESEND_FROM_EMAIL || 'no-reply@sarau-luxury.com'}>`,
          to:      [process.env.CONTACT_EMAIL || 'sarauluxury@gmail.com'],
          replyTo: safe.email,
          subject: `📥 Download Company Profile – ${safe.name} (${safe.company})`,
          html: `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f9f5f0;padding:24px;margin:0">
            <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5ddd5">
              <div style="background:linear-gradient(135deg,#1B4332,#2D6A4F);padding:28px 32px">
                <h2 style="color:#fff;margin:0;font-size:18px">📥 Lead Baru – Company Profile</h2>
                <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:12px">Diterima: ${receivedAt}</p>
              </div>
              <table style="width:100%;border-collapse:collapse">
                <tr>
                  <td style="padding:10px 24px;background:#f9f5f0;font-weight:600;color:#2d4a2d;white-space:nowrap;border-bottom:1px solid #e5ddd5;width:120px">Nama / PIC</td>
                  <td style="padding:10px 24px;border-bottom:1px solid #e5ddd5">${safe.name}</td>
                </tr>
                <tr>
                  <td style="padding:10px 24px;background:#f9f5f0;font-weight:600;color:#2d4a2d;border-bottom:1px solid #e5ddd5">Perusahaan</td>
                  <td style="padding:10px 24px;border-bottom:1px solid #e5ddd5">${safe.company}</td>
                </tr>
                <tr>
                  <td style="padding:10px 24px;background:#f9f5f0;font-weight:600;color:#2d4a2d">Email</td>
                  <td style="padding:10px 24px">${safe.email}</td>
                </tr>
              </table>
              <div style="padding:20px 24px;background:#f9f5f0;border-top:1px solid #e5ddd5">
                <p style="margin:0;font-size:12px;color:#888">
                  Lead ini mengunduh Company Profile dari website Sarau Luxury.
                  Segera follow-up dalam 24 jam untuk meningkatkan konversi.
                </p>
              </div>
            </div>
          </body></html>`,
        })
        console.log('[download-profile] Lead email sent to admin')
      } catch (emailErr) {
        console.warn('[download-profile] Email error (non-fatal):', emailErr)
      }
    }

    // ── WhatsApp notif via Fonnte ─────────────────────────────────────────────
    const fonnte = process.env.FONNTE_TOKEN
    if (fonnte) {
      try {
        const waTarget = process.env.WHATSAPP_ADMIN_NUMBER || '6285711786561'
        const receivedAt = new Date().toLocaleString('id-ID', {
          dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Jakarta',
        })
        const msg = [
          `*📥 LEAD COMPANY PROFILE*`,
          `_${receivedAt}_`,
          ``,
          `👤 *Nama:* ${plain.name}`,
          `🏢 *Perusahaan:* ${plain.company}`,
          `📧 *Email:* ${plain.email}`,
          ``,
          `Segera follow-up lead ini! 🚀`,
        ].join('\n')

        await fetch('https://api.fonnte.com/send', {
          method: 'POST',
          headers: { Authorization: fonnte, 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ target: waTarget, message: msg, countryCode: '62' }).toString(),
        })
      } catch (waErr) {
        console.warn('[download-profile] WA error (non-fatal):', waErr)
      }
    }

    // ── Generate PDF ──────────────────────────────────────────────────────────
    const pdfBuffer = await renderToBuffer(createElement(CompanyProfileDocument))
    // Slice to get a clean ArrayBuffer for NextResponse
    const arrayBuffer = pdfBuffer.buffer.slice(
      pdfBuffer.byteOffset,
      pdfBuffer.byteOffset + pdfBuffer.byteLength
    )

    return new NextResponse(arrayBuffer as ArrayBuffer, {
      status: 200,
      headers: {
        'Content-Type':        'application/pdf',
        'Content-Disposition': 'attachment; filename="Sarau-Luxury-Company-Profile-2025.pdf"',
        'Cache-Control':       'no-store',
      },
    })
  } catch (err: unknown) {
    console.error('[download-profile] Error:', err)
    return NextResponse.json({ error: 'Terjadi kesalahan. Silakan coba lagi.' }, { status: 500 })
  }
}
