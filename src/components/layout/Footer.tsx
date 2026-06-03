import Link from 'next/link'
import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  layanan: [
    { label: 'Outing Perusahaan',   href: '/services#outing' },
    { label: 'Outbound Training',   href: '/services#outbound' },
    { label: 'Team Building',       href: '/services#teambuilding' },
    { label: 'Family Gathering',    href: '/services#family' },
    { label: 'MICE Event',          href: '/services#mice' },
  ],
  perusahaan: [
    { label: 'Tentang Kami',  href: '/about' },
    { label: 'Tim Kami',      href: '/about#team' },
    { label: 'Galeri',        href: '/gallery' },
    { label: 'Blog & Tips',   href: '/blog' },
    { label: 'Karier',        href: '/careers' },
  ],
  bantuan: [
    { label: 'FAQ',            href: '/faq' },
    { label: 'Booking',        href: '/booking' },
    { label: 'Kontak',         href: '/contact' },
    { label: 'Kebijakan Privasi', href: '/privacy' },
    { label: 'Syarat & Ketentuan', href: '/terms' },
  ],
}

const socials = [
  { icon: Instagram, href: 'https://instagram.com/sarau.luxury', label: 'Instagram' },
  { icon: Youtube,   href: 'https://youtube.com/@sarauluxury',   label: 'YouTube' },
  { icon: Linkedin,  href: 'https://linkedin.com/company/sarau-luxury', label: 'LinkedIn' },
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
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 rounded-xl gradient-forest flex items-center justify-center shadow-forest">
                <span className="text-cream font-display font-bold text-xl">S</span>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-cream">Sarau Luxury</div>
                <div className="font-accent text-sm text-leaf">Where Teams Grow Together</div>
              </div>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed mb-6 max-w-xs">
              Kami menciptakan pengalaman outing dan outbound yang tak terlupakan untuk perusahaan Anda.
              Bersama kami, tim Anda tumbuh, terhubung, dan bersinar.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-forest/20 hover:bg-forest flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-cream mb-5 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 hover:text-sun transition-colors duration-200 flex items-center gap-1 group"
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
        <div className="py-8 border-y border-cream/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Phone,   text: '+62 812-3456-7890',         href: 'tel:+6281234567890' },
            { icon: Mail,    text: 'info@sarau-luxury.com',     href: 'mailto:info@sarau-luxury.com' },
            { icon: MapPin,  text: 'Jakarta Selatan, Indonesia', href: '#' },
          ].map(({ icon: Icon, text, href }) => (
            <a
              key={text}
              href={href}
              className="flex items-center gap-3 text-sm text-cream/60 hover:text-sun transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-forest/20 group-hover:bg-forest flex items-center justify-center flex-shrink-0 transition-colors">
                <Icon size={15} />
              </div>
              {text}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Sarau Luxury. All rights reserved.</p>
          <p>Designed & built with ❤️ for great teams</p>
        </div>
      </div>
    </footer>
  )
}
