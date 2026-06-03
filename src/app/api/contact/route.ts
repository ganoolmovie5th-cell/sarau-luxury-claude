import { NextRequest, NextResponse } from 'next/server'
import { submitContact } from '@/lib/strapi'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Basic validation
    const required = ['name', 'company', 'email', 'message']
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `Field ${field} is required` }, { status: 400 })
      }
    }

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
        await resend.emails.send({
          from:    'Sarau Luxury <noreply@sarau-luxury.com>',
          to:      [process.env.CONTACT_EMAIL || 'info@sarau-luxury.com'],
          subject: `Pesan Baru dari ${body.name} - ${body.company}`,
          html: `
            <h2>Pesan Baru dari Website</h2>
            <table>
              <tr><td><b>Nama:</b></td><td>${body.name}</td></tr>
              <tr><td><b>Perusahaan:</b></td><td>${body.company}</td></tr>
              <tr><td><b>Email:</b></td><td>${body.email}</td></tr>
              <tr><td><b>No. WA:</b></td><td>${body.phone || '-'}</td></tr>
              <tr><td><b>Layanan:</b></td><td>${body.service || '-'}</td></tr>
              <tr><td><b>Peserta:</b></td><td>${body.participants || '-'}</td></tr>
              <tr><td><b>Pesan:</b></td><td>${body.message}</td></tr>
            </table>
          `,
        })
      } catch (emailErr) {
        console.warn('Email send skipped:', emailErr)
      }
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
