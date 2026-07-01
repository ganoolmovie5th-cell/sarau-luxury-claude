// ─── Single Source of Truth untuk data statistik Sarau Luxury ─────────────────
// Update file ini saja → semua halaman otomatis sync!

import { Tent, Mountain, Users, Heart, Presentation, Camera, PartyPopper } from 'lucide-react'

/** Canonical service list — icon, title, id, badge live here once. */
export const BASE_SERVICES = [
  { id: 'gathering',     icon: PartyPopper,  title: 'Company Gathering',  badge: 'Terlaris' as string | null },
  { id: 'outing',        icon: Tent,          title: 'Outing Perusahaan',  badge: null },
  { id: 'outbound',      icon: Mountain,      title: 'Outbound Training',  badge: 'Unggulan' as string | null },
  { id: 'teambuilding',  icon: Users,         title: 'Team Building',      badge: null },
  { id: 'family',        icon: Heart,         title: 'Family Gathering',   badge: null },
  { id: 'meeting',       icon: Presentation,  title: 'Meeting Package',    badge: null },
  { id: 'documentation', icon: Camera,        title: 'Dokumentasi Event',  badge: null },
]

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const STATS = {
  totalClients:          53,
  totalIndustries:       19,
  totalEvents:           100,
  totalDestinations:     20,
  yearsExperience:       8,
  foundedYear:           2018,
  googleRating:          5.0,
}

export const CONTACT = {
  phone1:      '+62 857-1178-6561',
  phone1Wa:    '6285711786561',
  phone2:      '+62 858-1062-9838',
  phone2Wa:    '6285810629838',
  email:       'sarauluxury@gmail.com',
  address:     'Binong Permai Blok R-10/14, Curug, Banten',
  addressMaps: 'https://maps.google.com/?q=Binong+Permai+Blok+R-10/14+Curug+Banten',
  hours:       'Senin – Sabtu, 08.00 – 20.00 WIB',
}

export const SOCIAL = {
  instagram: 'https://instagram.com/sarauluxury',
  tiktok:    'https://www.tiktok.com/@sarauluxury',
  facebook:  'https://www.facebook.com/share/1H86Hap6Y7/',
  youtube:   'https://www.youtube.com/@Sarauluxury',
  threads:   'https://www.threads.com/@sarauluxury',
}

export const BRAND = {
  name:    'Sarau Luxury',
  tagline: 'Where Teams Grow Together',
  logo:    '/sarau-luxury-logo.jpeg',
}
