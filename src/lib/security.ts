// ponytail: rate limiting dihapus — in-memory Map tidak shared antar Vercel instances (tidak efektif).
// Gunakan Vercel WAF atau Upstash Redis jika perlu rate limiting production.

// ─── Input Sanitization ───────────────────────────────────────────────────────
// Escape karakter HTML berbahaya untuk mencegah XSS di email HTML

// Strip HTML tags and control chars — safe for plain-text channels (WhatsApp, Strapi)
export function sanitizePlain(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str.replace(/[<>]/g, '').replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim().slice(0, 2000)
}

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

// ─── Input Validators ─────────────────────────────────────────────────────────

export function isValidEmail(email: unknown): boolean {
  if (typeof email !== 'string') return false
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  return re.test(email.trim()) && email.length <= 254
}
