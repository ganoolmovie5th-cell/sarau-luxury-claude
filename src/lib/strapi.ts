// src/lib/strapi.ts — menggunakan native fetch, tanpa axios
const STRAPI_URL   = process.env.NEXT_PUBLIC_STRAPI_URL   || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || ''

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
  ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
}

// ─── Helper to extract Strapi's nested data shape ────────────────────────────
export function extractData<T>(response: { data: { id: number; attributes: T }[] }) {
  return response.data.map(({ id, attributes }) => ({ id, ...attributes }))
}

export function extractSingle<T>(response: { data: { id: number; attributes: T } }) {
  const { id, attributes } = response.data
  return { id, ...attributes }
}

// ─── Strapi endpoints ────────────────────────────────────────────────────────

/** GET all packages */
export async function getPackages() {
  const res = await fetch(`${STRAPI_URL}/api/packages?populate=*&sort=order:asc`, { headers })
  const json = await res.json()
  return extractData(json)
}

/** GET all services */
export async function getServices() {
  const res = await fetch(`${STRAPI_URL}/api/services?populate=*&sort=order:asc`, { headers })
  const json = await res.json()
  return extractData(json)
}

/** POST inquiry/booking form */
export async function submitBooking(data: {
  name: string; company: string; email: string; phone: string
  service: string; participants: string; date: string; message: string
}) {
  const res = await fetch(`${STRAPI_URL}/api/bookings`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ data }),
  })
  return res.json()
}

/** POST contact form */
export async function submitContact(data: {
  name: string; company: string; email: string; phone: string
  service: string; participants: string; message: string
}) {
  const res = await fetch(`${STRAPI_URL}/api/contacts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ data }),
  })
  return res.json()
}
