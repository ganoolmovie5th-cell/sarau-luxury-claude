// src/lib/strapi.ts
import axios from 'axios'

const STRAPI_URL   = process.env.NEXT_PUBLIC_STRAPI_URL   || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || ''

export const strapiApi = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
  },
})

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
  const res = await strapiApi.get('/packages?populate=*&sort=order:asc')
  return extractData(res.data)
}

/** GET all services */
export async function getServices() {
  const res = await strapiApi.get('/services?populate=*&sort=order:asc')
  return extractData(res.data)
}

/** POST inquiry/booking form */
export async function submitBooking(data: {
  name: string
  company: string
  email: string
  phone: string
  service: string
  participants: string
  date: string
  message: string
}) {
  const res = await strapiApi.post('/bookings', { data })
  return res.data
}

/** POST contact form */
export async function submitContact(data: {
  name: string
  company: string
  email: string
  phone: string
  service: string
  participants: string
  message: string
}) {
  const res = await strapiApi.post('/contacts', { data })
  return res.data
}
