'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { href: '/',         label: 'Beranda' },
  { href: '/about',    label: 'Tentang Kami' },
  { href: '/services', label: 'Layanan' },
  { href: '/packages', label: 'Paket' },
  { href: '/clients',  label: 'Klien' },
  { href: '/gallery',  label: 'Galeri' },
  { href: '/blog',     label: 'Blog' },
  { href: '/contact',  label: 'Kontak' },
]

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  const isHome = pathname === '/'

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'glass shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl gradient-forest flex items-center justify-center shadow-forest group-hover:scale-105 transition-transform">
            <span className="text-cream font-display font-bold text-lg">S</span>
          </div>
          <div>
            <div className={`font-display font-bold text-xl leading-tight transition-colors ${
              scrolled || !isHome ? 'text-bark' : 'text-cream'
            }`}>
              Sarau Luxury
            </div>
            <div className={`font-accent text-xs leading-none transition-colors ${
              scrolled || !isHome ? 'text-forest' : 'text-leaf'
            }`}>
              Where Teams Grow Together
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${pathname === link.href
                  ? 'bg-forest text-cream'
                  : scrolled || !isHome
                    ? 'text-bark hover:text-forest hover:bg-forest/10'
                    : 'text-cream/80 hover:text-cream hover:bg-white/10'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              scrolled || !isHome
                ? 'bg-forest text-cream hover:bg-forest-light shadow-forest'
                : 'bg-sun text-bark hover:bg-sun-light'
            }`}
          >
            Book Sekarang
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled || !isHome
                ? 'text-bark hover:bg-forest/10'
                : 'text-cream hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
          >
            <div className="glass border-t border-forest/10 py-4">
              <div className="container-wide flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? 'bg-forest text-cream'
                          : 'text-bark hover:bg-forest/10 hover:text-forest'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/booking"
                  className="btn-primary mt-3 justify-center"
                >
                  Book Sekarang
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
