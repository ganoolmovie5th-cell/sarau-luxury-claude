// src/lib/strapi.ts — menggunakan native fetch, tanpa axios
const STRAPI_URL   = process.env.NEXT_PUBLIC_STRAPI_URL   || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || ''

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
  ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
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
