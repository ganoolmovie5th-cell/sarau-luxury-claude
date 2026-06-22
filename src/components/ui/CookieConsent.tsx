'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, ChevronDown, ShieldCheck } from 'lucide-react'

const CONSENT_KEY = 'sarau_cookie_consent'

type ConsentValue = 'all' | 'essential'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function updateGA4Consent(choice: ConsentValue) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('consent', 'update', {
    analytics_storage: choice === 'all' ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

const cookieTypes = [
  {
    name: 'Esensial',
    desc: 'Diperlukan agar website berfungsi dengan benar. Selalu aktif dan tidak dapat dinonaktifkan.',
    color: 'bg-leaf',
    required: true,
  },
  {
    name: 'Analitik (GA4)',
    desc: 'Membantu kami memahami cara pengunjung menggunakan website sehingga kami bisa meningkatkan layanan.',
    color: 'bg-sun',
    required: false,
  },
]

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY) as ConsentValue | null
    if (saved) {
      // Re-apply saved preference on every page load
      updateGA4Consent(saved)
    } else {
      // No preference yet — show banner after short delay
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem(CONSENT_KEY, 'all')
    updateGA4Consent('all')
    setVisible(false)
  }

  const handleEssentialOnly = () => {
    localStorage.setItem(CONSENT_KEY, 'essential')
    updateGA4Consent('essential')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-[60]"
          role="dialog"
          aria-modal="false"
          aria-label="Banner izin penggunaan cookies"
        >
          <div className="max-w-3xl mx-auto glass-dark rounded-2xl shadow-2xl border border-leaf/20 overflow-hidden">
            {/* Top accent line */}
            <div className="h-0.5 w-full bg-gradient-to-r from-forest via-sun to-leaf" />

            <div className="p-5 md:p-6">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-sun/20 flex items-center justify-center flex-shrink-0">
                  <Cookie size={18} className="text-sun" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-cream font-bold text-base md:text-lg leading-snug">
                    Kami menggunakan cookies
                  </h2>
                  <p className="text-cream/65 text-sm leading-relaxed mt-1">
                    Sarau Luxury menggunakan cookies untuk menganalisis trafik website dan meningkatkan pengalaman Anda.
                    Data analitik <span className="text-leaf font-medium">tidak dijual</span> ke pihak ketiga.
                  </p>
                </div>
              </div>

              {/* Expandable detail */}
              <div className="mb-4">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-1.5 text-leaf text-xs font-medium hover:text-leaf/80 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-leaf rounded"
                  aria-expanded={expanded}
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                  />
                  {expanded ? 'Sembunyikan detail' : 'Lihat jenis cookies yang digunakan'}
                </button>

                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cookieTypes.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/5"
                          >
                            <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${item.color}`} />
                            <div>
                              <div className="flex items-center gap-2 mb-0.5">
                                <p className="text-cream text-xs font-semibold">{item.name}</p>
                                {item.required && (
                                  <span className="flex items-center gap-0.5 text-leaf text-[10px] font-medium">
                                    <ShieldCheck size={10} />
                                    Wajib
                                  </span>
                                )}
                              </div>
                              <p className="text-cream/50 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <p className="text-cream/35 text-xs leading-relaxed flex-1 hidden sm:block">
                    Dengan klik &ldquo;Terima Semua&rdquo;, Anda menyetujui penggunaan cookies analitik sesuai{' '}
                    <a href="/privacy" className="underline underline-offset-2 hover:text-cream/55 transition-colors">
                      Kebijakan Privasi
                    </a>{' '}
                    kami.
                  </p>
                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <button
                      onClick={handleEssentialOnly}
                      className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-sm font-semibold text-cream/70 border border-white/20 hover:bg-white/10 hover:text-cream/90 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      Hanya Esensial
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 sm:flex-none px-6 py-2.5 rounded-full text-sm font-semibold bg-sun text-bark hover:bg-[#f5b27a] transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sun/60"
                    >
                      Terima Semua
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
