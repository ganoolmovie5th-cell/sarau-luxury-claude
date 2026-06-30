// ponytail: rate limiting dihapus — in-memory Map tidak shared antar Vercel instances (tidak efektif).
// Gunakan Vercel WAF atau Upstash Redis jika perlu rate limiting production.

// ─── Input Sanitization ───────────────────────────────────────────────────────
// Escape karakter HTML berbahaya untuk mencegah XSS di email HTML

export function sanitizeHtml(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// Versi plain-text (untuk WhatsApp message) — strip karakter kontrol berbahaya
export function sanitizePlain(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str
    .replace(/[<>]/g, '')          // strip < >
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // strip control chars
    .trim()
    .slice(0, 2000)                 // batasi panjang
}

// ─── Input Validators ─────────────────────────────────────────────────────────

export function isValidEmail(email: unknown): boolean {
  if (typeof email !== 'string') return false
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  return re.test(email.trim()) && email.length <= 254
}

export function isValidPhone(phone: unknown): boolean {
  if (typeof phone !== 'string') return true // phone opsional
  if (phone.trim() === '') return true
  const cleaned = phone.replace(/[\s\-\+\(\)\.]/g, '')
  return /^\d{8,15}$/.test(cleaned)
}

export function isValidLength(str: unknown, min: number, max: number): boolean {
  if (typeof str !== 'string') return false
  const len = str.trim().length
  return len >= min && len <= max
}
