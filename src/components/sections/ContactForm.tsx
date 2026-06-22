'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

const contactInfo = [
  { icon: Phone,  label: 'Telepon 1',  value: CONTACT.phone1,   href: `https://wa.me/${CONTACT.phone1Wa}` },
  { icon: Phone,  label: 'Telepon 2',  value: CONTACT.phone2,   href: `https://wa.me/${CONTACT.phone2Wa}` },
  { icon: Mail,   label: 'Email',      value: CONTACT.email,    href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: 'Kantor',     value: CONTACT.address,  href: CONTACT.addressMaps },
  { icon: Clock,  label: 'Jam Kerja',  value: CONTACT.hours,    href: null },
]

export default function ContactForm() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', participants: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setError(null)

    // Basic validation
    if (!form.name || !form.company || !form.email || !form.message) {
      setError('Mohon lengkapi field yang wajib diisi (Nama, Perusahaan, Email, Pesan).')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Terjadi kesalahan. Coba lagi.')
      }

      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Gagal mengirim pesan. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="pt-36 pb-24 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sun/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">📬 Kontak</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mb-5">
            Mari <span className="gradient-text">Ngobrol!</span>
          </h1>
          <p className="text-earth/80 text-xl max-w-xl mx-auto">
            Ceritakan kebutuhan event perusahaan Anda — tim kami siap membantu mewujudkannya.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="gradient-forest rounded-3xl p-8 text-cream relative overflow-hidden noise-overlay">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
              <h3 className="font-display text-2xl font-bold mb-2 relative z-10">Info Kontak</h3>
              <h5 className="text-cream/70 text-sm mb-8 relative z-10">Kami selalu siap melayani Anda</h5>
              <div className="space-y-5 relative z-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h6 className="text-cream/50 text-xs mb-0.5">{label}</h6>
                      {href ? (
                        <a href={href} className="text-cream text-sm font-medium hover:text-sun transition-colors">{value}</a>
                      ) : (
                        <span className="text-cream text-sm font-medium">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WA quick contact */}
            <a
              href={`https://wa.me/${CONTACT.phone1Wa}?text=Halo%20Sarau%20Luxury%2C%20saya%20ingin%20konsultasi!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-earth/10 shadow-sm hover:shadow-forest/15 hover:shadow-xl transition duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#25D366' }}>
                <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-bark text-sm group-hover:text-forest transition-colors">Chat WhatsApp</div>
                <div className="text-earth/60 text-xs">Respon dalam 15 menit</div>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-earth/8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-forest" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-bark mb-3">Pesan Terkirim!</h3>
                  <p className="text-earth/70">Tim kami akan menghubungi Anda dalam 1×24 jam. Terima kasih! 🌿</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <h3 className="font-display text-2xl font-bold text-bark mb-6">Kirim Pesan</h3>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-bark mb-2">Nama Lengkap *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Budi Santoso" className="input-base" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bark mb-2">Nama Perusahaan *</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="PT Maju Bersama" className="input-base" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-bark mb-2">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="budi@perusahaan.com" className="input-base" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bark mb-2">No. WhatsApp</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="08123456789" className="input-base" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-bark mb-2">Jenis Layanan</label>
                      <select name="service" value={form.service} onChange={handleChange} className="input-base">
                        <option value="">Pilih layanan</option>
                        <option value="outing">Outing Perusahaan</option>
                        <option value="outbound">Outbound Training</option>
                        <option value="teambuilding">Team Building</option>
                        <option value="family">Family Gathering</option>
                        <option value="gathering">Company Gathering</option>
                        <option value="meeting">Meeting Package</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bark mb-2">Jumlah Peserta</label>
                      <select name="participants" value={form.participants} onChange={handleChange} className="input-base">
                        <option value="">Estimasi peserta</option>
                        <option value="20-50">20 – 50 orang</option>
                        <option value="50-100">50 – 100 orang</option>
                        <option value="100-200">100 – 200 orang</option>
                        <option value="200-500">200 – 500 orang</option>
                        <option value="500+">500+ orang</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-bark mb-2">Pesan / Kebutuhan Khusus</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Ceritakan kebutuhan event Anda — destinasi impian, tanggal, tema, dll."
                      rows={5}
                      className="input-base resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                      <span className="flex-shrink-0 mt-0.5">⚠️</span>
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Mengirim…
                      </span>
                    ) : (
                      <>Kirim Pesan <Send size={17} /></>
                    )}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Google Maps embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10"
        >
          <div className="rounded-3xl overflow-hidden border border-earth/10 shadow-sm" style={{ height: 340 }}>
            <iframe
              title="Lokasi Sarau Luxury"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5!2d106.5864722!3d-6.2526389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb50eef8000d%3A0x1!2sBinong%20Permai%20Blok%20R-10%2F14%2C%20Curug%2C%20Banten!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
          <div className="flex items-center gap-2 mt-3 text-earth/60 text-sm">
            <MapPin size={14} className="text-forest" />
            <span>Binong Permai Blok R-10/14, Curug, Banten</span>
            <a
              href={CONTACT.addressMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-forest font-semibold hover:underline text-xs"
            >
              Buka di Google Maps →
            </a>
          </div>

          {/* SEO content block */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-earth/10 shadow-sm">
              <h2 className="font-display text-xl font-bold text-bark mb-3">Kenapa Pilih Sarau Luxury?</h2>
              <ul className="space-y-2 text-sm text-earth/70">
                <li className="flex items-start gap-2"><span className="text-forest mt-0.5">✓</span> <span>Berpengalaman sejak 2018 — 100+ event sukses</span></li>
                <li className="flex items-start gap-2"><span className="text-forest mt-0.5">✓</span> <span>Dipercaya 53+ perusahaan terkemuka: BCA, Toyota, Kalbe Farma</span></li>
                <li className="flex items-start gap-2"><span className="text-forest mt-0.5">✓</span> <span>Paket outbound & team building mulai Rp 125.000/pax, gathering mulai Rp 525.000/pax — transparan, tanpa biaya tersembunyi</span></li>
                <li className="flex items-start gap-2"><span className="text-forest mt-0.5">✓</span> <span>Layanan 20+ destinasi: Lembang, Bali, Bromo, Anyer & seluruh Indonesia</span></li>
                <li className="flex items-start gap-2"><span className="text-forest mt-0.5">✓</span> <span>Tim fasilitator bersertifikat & pemandu berpengalaman</span></li>
                <li className="flex items-start gap-2"><span className="text-forest mt-0.5">✓</span> <span>Respon cepat — konsultasi gratis dalam 15 menit</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-earth/10 shadow-sm">
              <h2 className="font-display text-xl font-bold text-bark mb-3">Layanan Kami</h2>
              <h4 className="text-earth/50 text-xs uppercase tracking-widest font-semibold mb-3">Pilih jenis event perusahaan Anda:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-earth/70">
                {[
                  '🏕️ Company Gathering', '⛺ Outing Perusahaan',
                  '🏔️ Outbound Training', '🤝 Team Building',
                  '❤️ Family Gathering', '🎤 Meeting Package',
                  '📸 Dokumentasi Event', '🚌 Transportasi',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 bg-cream rounded-lg px-3 py-2 text-xs font-medium text-bark">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
