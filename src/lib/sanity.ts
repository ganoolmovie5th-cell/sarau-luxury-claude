// src/lib/sanity.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn:     process.env.NODE_ENV === 'production',
  token:      process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: SanityImageSource) => builder.image(source)

// ─── GROQ Queries ────────────────────────────────────────────────────────────

// Gallery
export const galleryQuery = `
  *[_type == "gallery"] | order(publishedAt desc) {
    _id, title, category, publishedAt,
    "imageUrl": image.asset->url,
    "blur": image.asset->metadata.lqip
  }
`

// Blog posts
export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) [0...$limit] {
    _id, title, slug, excerpt, publishedAt,
    "readTime": readTime,
    "category": category->title,
    "coverUrl": cover.asset->url
  }
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, excerpt, publishedAt, readTime, body,
    "category": category->title,
    "coverUrl": cover.asset->url,
    "authorName": author->name,
    "authorAvatar": author->avatar.asset->url
  }
`

// Testimonials
export const testimonialsQuery = `
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id, name, role, company, rating, text,
    "avatarUrl": avatar.asset->url
  }
`

// Clients
export const clientsQuery = `
  *[_type == "client"] | order(order asc) {
    _id, name, "logoUrl": logo.asset->url, website
  }
`
