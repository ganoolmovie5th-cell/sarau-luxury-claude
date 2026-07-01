import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { CONTACT, SOCIAL } from '@/lib/constants'

const footerLinks = {
  layanan: [
    { label: 'Company Gathering',  href: '/services#gathering' },
    { label: 'Outing Perusahaan',  href: '/services#outing' },
    { label: 'Outbound Training',  href: '/services#outbound' },
    { label: 'Team Building',      href: '/services#teambuilding' },
    { label: 'Family Gathering',   href: '/services#family' },
    { label: 'Meeting Package',    href: '/services#meeting' },
  ],
  perusahaan: [
    { label: 'Tentang Kami',  href: '/about' },
    { label: 'Tim Kami',      href: '/about#team' },
    { label: 'Klien Kami',    href: '/clients' },
    { label: 'Galeri',        href: '/gallery' },
    { label: 'Blog & Tips',   href: '/blog' },
  ],
  bantuan: [
    { label: 'FAQ',      href: '/faq' },
    { label: 'Paket',    href: '/packages' },
    { label: 'Booking',  href: '/booking' },
    { label: 'Kontak',   href: '/contact' },
  ],
}

// Custom SVG icons for platforms not in lucide-react
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
    </svg>
  )
}
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}
function ThreadsIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.688-1.608-1.754-1.549-3.01.075-1.55.87-2.753 2.292-3.365.9-.386 2.013-.493 3.362-.32.47.06.927.152 1.365.274-.143-.845-.381-1.568-.72-2.16-.486-.844-1.224-1.285-2.253-1.334h-.04c-.64 0-1.51.175-2.102.898l-1.57-1.362c.91-1.077 2.258-1.68 3.733-1.68h.073c2.64.124 4.24 1.67 4.934 4.57.19.014.377.035.56.064 2.033.317 3.522 1.295 4.265 2.836.968 2.003.881 5.135-1.452 7.394-1.872 1.809-4.19 2.652-7.429 2.676zm.099-10.428c-.36 0-.72.017-1.07.05-1.06.098-1.824.485-2.192 1.093-.233.382-.303.835-.198 1.31.252 1.156 1.47 1.635 2.63 1.568 1.022-.057 1.814-.457 2.354-1.188.512-.694.793-1.71.876-3.12a13.207 13.207 0 00-2.4-.713z"/>
    </svg>
  )
}
function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

const socials = [
  { Icon: InstagramIcon, href: SOCIAL.instagram, label: 'Instagram' },
  { Icon: TikTokIcon,    href: SOCIAL.tiktok,    label: 'TikTok' },
  { Icon: FacebookIcon,  href: SOCIAL.facebook,  label: 'Facebook' },
  { Icon: YoutubeIcon,   href: SOCIAL.youtube,   label: 'YouTube' },
  { Icon: ThreadsIcon,   href: SOCIAL.threads,   label: 'Threads' },
]

export default function Footer() {
  return (
    <footer className="bg-bark text-cream/80 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-earth/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Top section */}
        <div className="pt-20 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-6" aria-label="Sarau Luxury – Beranda">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/sarau-luxury-logo.jpeg"
                  alt="Sarau Luxury"
                  fill
                  className="object-contain"
                />
              </div>
              {/* aria-hidden: teks brand di footer bukan heading */}
              <div aria-hidden="true" role="presentation">
                <span className="font-display font-bold text-2xl text-cream block">Sarau Luxury</span>
                <span className="font-accent text-sm text-leaf block">Where Teams Grow Together</span>
              </div>
            </Link>
            <p className="text-cream/80 text-sm leading-relaxed mb-6 max-w-xs">
              Kami menciptakan pengalaman outing dan outbound yang tak terlupakan untuk perusahaan Anda.
              Bersama kami, tim Anda tumbuh, terhubung, dan bersinar.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-forest/20 hover:bg-forest flex items-center justify-center transition duration-200 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-cream mb-5 capitalize">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/80 hover:text-sun transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="py-8 border-y border-cream/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Phone,   text: CONTACT.phone1,   href: `https://wa.me/${CONTACT.phone1Wa}` },
            { icon: Phone,   text: CONTACT.phone2,   href: `https://wa.me/${CONTACT.phone2Wa}` },
            { icon: Mail,    text: CONTACT.email,    href: `mailto:${CONTACT.email}` },
            { icon: MapPin,  text: CONTACT.address,  href: CONTACT.addressMaps },
          ].map(({ icon: Icon, text, href }) => (
            <a
              key={text}
              href={href}
              className="flex items-center gap-3 text-sm text-cream/80 hover:text-sun transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-forest/20 group-hover:bg-forest flex items-center justify-center flex-shrink-0 transition-colors">
                <Icon size={15} />
              </div>
              {text}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/70">
          <p>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> Sarau Luxury. All rights reserved.</p>
          <p>Designed & built with ❤️ for great teams</p>
        </div>
      </div>
    </footer>
  )
}
