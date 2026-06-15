// ─── Rate Limiter (in-memory, per IP) ────────────────────────────────────────
// Batas: MAX_REQUESTS request per WINDOW_MS milidetik per IP
//
// ⚠️  CATATAN SERVERLESS: Di Vercel, setiap request bisa jalan di instance
// berbeda sehingga Map ini tidak shared antar instances.
// Untuk production-grade rate limiting, gunakan Upstash Redis:
// https://upstash.com/docs/redis/sdks/ratelimit-ts/overview
// Implementasi saat ini tetap efektif untuk single-instance dev & low traffic.

const WINDOW_MS    = 60 * 1000  // 1 menit
const MAX_REQUESTS = 5           // maks 5 request/menit/IP

const store = new Map<string, { count: number; resetAt: number }>()

export function rateLimit(ip: string): { allowed: boolean; retryAfter: number } {
  const now   = Date.now()
  const entry = store.get(ip)

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, retryAfter: 0 }
  }

  if (entry.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000)
    return { allowed: false, retryAfter }
  }

  entry.count++
  return { allowed: true, retryAfter: 0 }
}

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
