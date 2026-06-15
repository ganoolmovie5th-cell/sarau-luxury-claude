// src/lib/sanity.ts
// Sanity CMS belum diintegrasikan — seluruh data website menggunakan static data.
// Uncomment dan konfigurasi saat Sanity siap dipakai.

/*
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: unknown) => builder.image(source as Parameters<typeof builder.image>[0])

export const postsQuery = `*[_type == "post"] | order(publishedAt desc) { _id, title, slug, excerpt, publishedAt, category, coverImage }`
export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]`
export const galleryQuery = `*[_type == "galleryItem"] | order(_createdAt desc) { _id, title, image, category }`
export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc)`
export const clientsQuery = `*[_type == "client"] | order(name asc) { _id, name, logo, industry }`
*/

export {}
