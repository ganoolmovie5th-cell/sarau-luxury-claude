// src/types/index.ts

// ─── Sanity ───────────────────────────────────────────────────────────────────

export interface SanityGalleryItem {
  _id:        string
  title:      string
  category:   string
  publishedAt: string
  imageUrl:   string
  blur?:      string
}

export interface SanityPost {
  _id:         string
  title:       string
  slug:        { current: string }
  excerpt:     string
  publishedAt: string
  readTime:    number
  category:    string
  coverUrl:    string
  authorName?: string
  authorAvatar?: string
  body?:       unknown[]
}

export interface SanityTestimonial {
  _id:       string
  name:      string
  role:      string
  company:   string
  rating:    number
  text:      string
  avatarUrl?: string
}

export interface SanityClient {
  _id:     string
  name:    string
  logoUrl: string
  website?: string
}

// ─── Strapi ───────────────────────────────────────────────────────────────────

export interface StrapiPackage {
  id:       number
  name:     string
  tagline:  string
  price:    number | 'Custom'
  unit:     string
  minPax:   string
  features: string[]
  popular:  boolean
  order:    number
}

export interface StrapiService {
  id:          number
  title:       string
  slug:        string
  description: string
  features:    string[]
  order:       number
  icon:        string
}

export interface BookingFormData {
  companyName:  string
  picName:      string
  email:        string
  phone:        string
  service:      string
  eventDate:    string
  duration:     string
  destination:  string
  budget:       string
  participants: string
  ageGroup:     string
  specialNeeds: string
  notes:        string
}

export interface ContactFormData {
  name:         string
  company:      string
  email:        string
  phone:        string
  service:      string
  participants: string
  message:      string
}

// ─── Common ───────────────────────────────────────────────────────────────────

export interface NavLink {
  href:  string
  label: string
}

export interface StatItem {
  value:   number
  suffix:  string
  label:   string
  desc:    string
  decimal?: number
}
