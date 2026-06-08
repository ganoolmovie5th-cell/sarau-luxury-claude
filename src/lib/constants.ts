// ─── Single Source of Truth untuk data statistik Sarau Luxury ─────────────────
// Update file ini saja → semua halaman otomatis sync!

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const STATS = {
  totalClients:          53,
  totalClientsLabel:     '53+',
  totalIndustries:       19,
  totalIndustriesLabel:  '19+',
  totalEvents:           100,
  totalEventsLabel:      '100+',
  totalDestinations:     20,
  totalDestinationsLabel:'20+',
  yearsExperience:       8,
  yearsExperienceLabel:  '8+',
  foundedYear:           2018,
  googleRating:          5.0,
  googleRatingStr:       '5.0',
}

export const CONTACT = {
  phone1:      '+62 857-1178-6561',
  phone1Wa:    '6285711786561',
  phone2:      '+62 858-1062-9838',
  phone2Wa:    '6285810629838',
  email:       'bandungindonesiasinergi@gmail.com',
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
