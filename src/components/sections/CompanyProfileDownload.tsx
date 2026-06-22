'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FileText, Download, X, CheckCircle, Loader2,
  User, Building2, Mail, ArrowRight, Shield, Star,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────
type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormState {
  name:    string
  company: string
  email:   string
}

// ─── Backdrop ─────────────────────────────────────────────────────────────────
function Backdrop({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-bark/60 backdrop-blur-sm z-50"
      onClick={onClose}
    />
  )
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function DownloadModal({ onClose }: { onClose: () => void }) {
  const [form, setForm]       = useState<FormState>({ name: '', company: '', email: '' })
  const [status, setStatus]   = useState<Status>('idle')
  const [errorMsg, setError]  = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/download-profile', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Terjadi kesalahan. Silakan coba lagi.')
      }

      // Trigger download
      const blob = await res.blob()
      const url  = URL.createObjectURL(blob)
      const a    = document.createElement('a')
      a.href     = url
      a.download = 'Sarau-Luxury-Company-Profile-2025.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      setStatus('success')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan.')
      setStatus('error')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-cream w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="gradient-forest px-8 py-7 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            <X size={16} className="text-white" />
          </button>
          <div className="w-12 h-12 rounded-2xl bg-sun/20 flex items-center justify-center mb-4">
            <FileText size={24} className="text-sun" />
          </div>
          <h3 className="font-display text-2xl font-bold text-cream mb-1">
            Download Company Profile
          </h3>
          <p className="text-cream/60 text-sm">
            Isi data singkat untuk mengunduh PDF — gratis!
          </p>
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-forest" />
              </div>
              <h4 className="font-display text-xl font-bold text-bark mb-2">
                Download Berhasil!
              </h4>
              <p className="text-bark/60 text-sm mb-6 leading-relaxed">
                Company Profile Sarau Luxury sedang diunduh. Cek folder Downloads Anda.
                Tim kami akan menghubungi Anda segera.
              </p>
              <button
                onClick={onClose}
                className="btn-forest text-sm px-8 py-3"
              >
                Selesai
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Nama */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-bark mb-2">
                  Nama / PIC <span className="text-sun">*</span>
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-bark/40" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    required
                    disabled={status === 'loading'}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-cream-dark bg-white text-bark text-sm placeholder:text-bark/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/30 focus:border-forest transition disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Perusahaan */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-bark mb-2">
                  Nama Perusahaan <span className="text-sun">*</span>
                </label>
                <div className="relative">
                  <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-bark/40" />
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Contoh: PT Maju Bersama"
                    required
                    disabled={status === 'loading'}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-cream-dark bg-white text-bark text-sm placeholder:text-bark/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/30 focus:border-forest transition disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-bark mb-2">
                  Email Bisnis <span className="text-sun">*</span>
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-bark/40" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Contoh: budi@perusahaan.com"
                    required
                    disabled={status === 'loading'}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-cream-dark bg-white text-bark text-sm placeholder:text-bark/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/30 focus:border-forest transition disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Error */}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm mb-4 px-3 py-2 bg-red-50 rounded-lg"
                >
                  {errorMsg}
                </motion.p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-sun w-full text-sm py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Menyiapkan PDF…
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    Download Gratis
                  </>
                )}
              </button>

              {/* Privacy note */}
              <p className="text-center text-xs text-bark/40 mt-3 flex items-center justify-center gap-1">
                <Shield size={11} />
                Data Anda aman dan tidak akan dibagikan ke pihak ketiga
              </p>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  )
}


// ─── Main Section ─────────────────────────────────────────────────────────────
const highlights = [
  { icon: FileText, text: '5 halaman lengkap & profesional' },
  { icon: Star,     text: 'Paket & harga terkini (2025)' },
  { icon: Shield,   text: '53+ portofolio klien korporat' },
]

export default function CompanyProfileDownload() {
  const [open, setOpen]       = useState(false)
  const { ref, inView }       = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <>
      {/* ── Section ─────────────────────────────────────────────────────────── */}
      <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-forest/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-sun/10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="container-tight relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-[2rem] shadow-forest overflow-hidden"
          >
            <div className="grid md:grid-cols-2 items-stretch">
              {/* Left — Visual */}
              <div className="gradient-forest p-10 md:p-14 flex flex-col justify-between relative overflow-hidden noise-overlay">
                {/* Circles */}
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full border border-white/10 translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full border border-white/10 -translate-x-1/3 translate-y-1/3" />

                <div className="relative z-10">
                  {/* PDF mockup */}
                  <div className="w-16 h-20 bg-sun/20 rounded-xl flex items-center justify-center mb-8 border border-sun/30">
                    <FileText size={28} className="text-sun" />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-leaf text-xs font-semibold mb-4">
                    PDF · 5 Halaman · Gratis
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight mb-4">
                    Company Profile<br />
                    <span className="text-sun">Sarau Luxury</span>
                  </h2>
                  <p className="text-cream/65 text-sm leading-relaxed">
                    Dokumen resmi berisi profil perusahaan, layanan lengkap, paket
                    harga, dan portofolio klien — siap untuk presentasi ke direksi.
                  </p>
                </div>

                {/* Highlights */}
                <div className="relative z-10 mt-8 space-y-3">
                  {highlights.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-sun/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={13} className="text-sun" />
                      </div>
                      <span className="text-cream/80 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — CTA */}
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-semibold mb-6 self-start">
                  📄 Download Gratis
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-bark leading-tight mb-4">
                  Butuh Material<br />Presentasi ke Direksi?
                </h3>
                <p className="text-bark/60 text-sm leading-relaxed mb-8">
                  Dapatkan Company Profile Sarau Luxury dalam format PDF berkualitas
                  tinggi. Lengkap dengan portofolio, layanan, paket harga, dan
                  informasi kontak — semua dalam satu dokumen siap pakai.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Format PDF', 'Branded Resmi', 'Data Terkini 2025', 'Gratis'].map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-full bg-cream border border-cream-dark text-bark/60 text-xs"
                    >
                      ✓ {badge}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setOpen(true)}
                  className="btn-sun text-sm px-8 py-4 flex items-center gap-2 self-start"
                >
                  <Download size={16} />
                  Download Company Profile
                  <ArrowRight size={14} />
                </button>

                <p className="text-bark/35 text-xs mt-4 flex items-center gap-1">
                  <Shield size={11} />
                  Isi 3 field singkat · Data Anda terlindungi
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Modal Portal ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            <Backdrop onClose={() => setOpen(false)} />
            <DownloadModal onClose={() => setOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </>
  )
}
