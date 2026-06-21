'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight, ArrowLeft, Calendar, Users, FileText } from 'lucide-react'

const steps = [
  { id: 1, label: 'Perusahaan',  icon: FileText },
  { id: 2, label: 'Event',       icon: Calendar },
  { id: 3, label: 'Peserta',     icon: Users },
  { id: 4, label: 'Konfirmasi',  icon: CheckCircle },
]

type FormData = {
  // Step 1
  companyName: string; picName: string; email: string; phone: string
  // Step 2
  service: string; eventDate: string; duration: string; destination: string; budget: string
  // Step 3
  participants: string; ageGroup: string; specialNeeds: string; notes: string
}

const initialData: FormData = {
  companyName: '', picName: '', email: '', phone: '',
  service: '', eventDate: '', duration: '', destination: '', budget: '',
  participants: '', ageGroup: '', specialNeeds: '', notes: '',
}

export default function BookingForm() {
  const [step,      setStep]      = useState(1)
  const [form,      setForm]      = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)

  const update = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value })

  const next = () => setStep((s) => Math.min(s + 1, 4))
  const prev = () => setStep((s) => Math.max(s - 1, 1))

  const submit = async () => {
    setError(null)

    // Basic validation
    if (!form.companyName || !form.picName || !form.email || !form.phone) {
      setError('Mohon lengkapi data perusahaan (Nama, PIC, Email, WhatsApp).')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:         form.picName,
          company:      form.companyName,
          email:        form.email,
          phone:        form.phone,
          service:      form.service,
          participants: form.participants,
          message: [
            form.notes && `Catatan: ${form.notes}`,
            form.destination && `Destinasi: ${form.destination}`,
            form.eventDate && `Tanggal: ${form.eventDate}`,
            form.duration && `Durasi: ${form.duration}`,
            form.budget && `Budget: Rp ${form.budget} Juta`,
            form.ageGroup && `Kelompok Usia: ${form.ageGroup}`,
            form.specialNeeds && `Kebutuhan Khusus: ${form.specialNeeds}`,
          ]
            .filter(Boolean)
            .join('\n') || '(Tidak ada catatan tambahan)',
          type: 'booking',
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Terjadi kesalahan. Coba lagi.')
      }

      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Gagal mengirim inquiry. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-28 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-12 max-w-md w-full text-center shadow-xl border border-earth/8"
        >
          <div className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-forest" />
          </div>
          <h2 className="font-display text-3xl font-bold text-bark mb-3">Inquiry Terkirim!</h2>
          <p className="text-earth/70 mb-6">
            Tim Sarau Luxury akan menghubungi <b>{form.picName || 'Anda'}</b> melalui WhatsApp atau email
            dalam 1×24 jam kerja.
          </p>
          <p className="text-forest font-semibold text-sm">Nomor Referensi: SL-{Date.now().toString().slice(-6)}</p>
        </motion.div>
      </div>
    )
  }

  return (
    <section className="min-h-screen pt-32 pb-24 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-leaf/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-tight relative z-10 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-tag mb-4 inline-flex">📋 Booking & Inquiry</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-bark">
            Ajukan <span className="gradient-text">Inquiry</span>
          </h1>
          <p className="text-earth/70 mt-3">Isi form di bawah dan kami siapkan penawaran terbaik untuk Anda.</p>
        </div>

        {/* SEO content */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: '⚡', label: 'Respon 15 Menit', desc: 'Tim kami siap merespons cepat' },
            { icon: '💰', label: 'Konsultasi Gratis', desc: 'Tanpa biaya konsultasi awal' },
            { icon: '📋', label: 'Proposal 24 Jam', desc: 'Penawaran lengkap & transparan' },
          ].map(({ icon, label, desc }) => (
            <div key={label} className="bg-white rounded-xl p-4 text-center border border-earth/10 shadow-sm">
              <div className="text-2xl mb-1">{icon}</div>
              <h4 className="font-semibold text-bark text-xs mb-0.5">{label}</h4>
              <h6 className="text-earth/60 text-xs">{desc}</h6>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center mb-10 gap-3">
          {steps.map(({ id, label, icon: Icon }, i) => (
            <div key={id} className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition duration-300 ${
                  step > id ? 'bg-forest text-cream' : step === id ? 'bg-sun text-bark' : 'bg-earth/15 text-earth/50'
                }`}>
                  {step > id ? <CheckCircle size={18} /> : <Icon size={18} />}
                </div>
                <span className={`text-xs mt-1 font-medium hidden sm:block ${step >= id ? 'text-bark' : 'text-earth/40'}`}>{label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`h-0.5 w-8 sm:w-14 rounded-full transition duration-500 ${step > id ? 'bg-forest' : 'bg-earth/20'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-earth/8">          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-bark mb-6">Data Perusahaan</h3>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Nama Perusahaan *</label>
                  <input value={form.companyName} onChange={update('companyName')} placeholder="PT Maju Bersama" className="input-base" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Nama PIC *</label>
                  <input value={form.picName} onChange={update('picName')} placeholder="Budi Santoso" className="input-base" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Email *</label>
                  <input type="email" value={form.email} onChange={update('email')} placeholder="budi@perusahaan.com" className="input-base" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">No. WhatsApp *</label>
                  <input value={form.phone} onChange={update('phone')} placeholder="08123456789" className="input-base" />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-bark mb-6">Detail Event</h3>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Jenis Layanan *</label>
                  <select value={form.service} onChange={update('service')} className="input-base">
                    <option value="">Pilih layanan</option>
                    <option value="gathering">Company Gathering</option>
                    <option value="outing">Outing Perusahaan</option>
                    <option value="outbound">Outbound Training</option>
                    <option value="teambuilding">Team Building</option>
                    <option value="family">Family Gathering</option>
                    <option value="meeting">Meeting Package</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Tanggal Event</label>
                  <input type="date" value={form.eventDate} onChange={update('eventDate')} className="input-base" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Durasi</label>
                  <select value={form.duration} onChange={update('duration')} className="input-base">
                    <option value="">Pilih durasi</option>
                    <option value="1d">1 Hari</option>
                    <option value="2d1n">2 Hari 1 Malam</option>
                    <option value="3d2n">3 Hari 2 Malam</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Preferensi Destinasi</label>
                  <input value={form.destination} onChange={update('destination')} placeholder="Lembang, Bali, Bromo, dll." className="input-base" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Estimasi Budget</label>
                  <select value={form.budget} onChange={update('budget')} className="input-base">
                    <option value="">Pilih range budget</option>
                    <option value="10-20">Rp 10 – 20 Juta</option>
                    <option value="20-50">Rp 20 – 50 Juta</option>
                    <option value="50-100">Rp 50 – 100 Juta</option>
                    <option value="100+">Di atas Rp 100 Juta</option>
                  </select>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-bark mb-6">Data Peserta</h3>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Jumlah Peserta *</label>
                  <select value={form.participants} onChange={update('participants')} className="input-base">
                    <option value="">Pilih range peserta</option>
                    <option value="20-50">20 – 50 orang</option>
                    <option value="50-100">50 – 100 orang</option>
                    <option value="100-200">100 – 200 orang</option>
                    <option value="200-500">200 – 500 orang</option>
                    <option value="500+">500+ orang</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Kelompok Usia</label>
                  <select value={form.ageGroup} onChange={update('ageGroup')} className="input-base">
                    <option value="">Dominan usia peserta</option>
                    <option value="20s">20-an (Gen Z)</option>
                    <option value="30s">30-an (Millennial)</option>
                    <option value="40s">40-an ke atas</option>
                    <option value="mixed">Campuran</option>
                    <option value="family">Keluarga (anak-anak)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Kebutuhan Khusus</label>
                  <input value={form.specialNeeds} onChange={update('specialNeeds')} placeholder="Vegetarian, halal, aksesibilitas, dll." className="input-base" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bark mb-2">Catatan Tambahan</label>
                  <textarea value={form.notes} onChange={update('notes')} placeholder="Tema event, aktivitas favorit, hal yang perlu dihindari, dll." rows={4} className="input-base resize-none" />
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                <h3 className="font-display text-xl font-bold text-bark mb-6">Konfirmasi Inquiry</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Perusahaan', value: form.companyName },
                    { label: 'PIC', value: form.picName },
                    { label: 'Email', value: form.email },
                    { label: 'WhatsApp', value: form.phone },
                    { label: 'Layanan', value: form.service },
                    { label: 'Tanggal', value: form.eventDate || 'Belum ditentukan' },
                    { label: 'Durasi', value: form.duration || '-' },
                    { label: 'Destinasi', value: form.destination || '-' },
                    { label: 'Peserta', value: form.participants },
                    { label: 'Budget', value: form.budget ? `Rp ${form.budget} Juta` : '-' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between py-2 border-b border-earth/10 text-sm">
                      <span className="text-earth/60 font-medium">{label}</span>
                      <span className="text-bark font-semibold text-right max-w-[200px]">{value || '-'}</span>
                    </div>
                  ))}
                </div>
                <p className="text-earth/60 text-xs mt-6 leading-relaxed">
                  Dengan mengirim form ini, Anda menyetujui bahwa tim Sarau Luxury dapat menghubungi
                  Anda melalui email dan WhatsApp untuk membahas kebutuhan event Anda.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-earth/10">
            <button
              onClick={prev}
              disabled={step === 1}
              className="btn-secondary disabled:opacity-30 disabled:cursor-not-allowed py-3 px-6"
            >
              <ArrowLeft size={17} /> Kembali
            </button>
            {step < 4 ? (
              <button onClick={next} className="btn-primary py-3 px-8">
                Lanjut <ArrowRight size={17} />
              </button>
            ) : (
              <div className="flex flex-col items-end gap-3">
                {error && (
                  <div className="flex items-start gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm max-w-xs text-right">
                    <span>⚠️ {error}</span>
                  </div>
                )}
                <button onClick={submit} disabled={loading} className="btn-primary py-3 px-8 disabled:opacity-60">
                  {loading ? 'Mengirim…' : 'Kirim Inquiry 🌿'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── SEO Content Block ─────────────────────────────────────────────── */}
      <div className="container-tight max-w-2xl relative z-10 mt-12 space-y-6">

        <div className="bg-white rounded-2xl p-7 border border-earth/10 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-bark mb-4">Proses Booking Sarau Luxury</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { step: '01', title: 'Isi Form Inquiry', desc: 'Lengkapi data perusahaan, jenis event, jumlah peserta, dan preferensi destinasi Anda.' },
              { step: '02', title: 'Konsultasi Gratis', desc: 'Tim kami menghubungi Anda dalam 15 menit untuk memahami kebutuhan event secara lebih detail.' },
              { step: '03', title: 'Terima Proposal', desc: 'Proposal lengkap berisi rundown, harga transparan, dan opsi paket dikirim dalam 24 jam kerja.' },
              { step: '04', title: 'Konfirmasi & DP', desc: 'Setujui proposal, tandatangani kontrak, dan event Anda resmi terjadwal bersama Sarau Luxury.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-forest text-cream font-bold text-xs flex items-center justify-center flex-shrink-0">{step}</div>
                <div>
                  <h4 className="font-semibold text-bark text-sm mb-1">{title}</h4>
                  <h6 className="text-earth/60 text-xs leading-relaxed">{desc}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-7 border border-earth/10 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-bark mb-4">Layanan yang Bisa Dipesan</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '🏕️', name: 'Company Gathering', price: 'Mulai Rp 525.000/pax' },
              { icon: '⛺', name: 'Outing Perusahaan', price: 'Harga custom' },
              { icon: '🏔️', name: 'Outbound Training', price: 'Mulai Rp 125.000/pax' },
              { icon: '🤝', name: 'Team Building', price: 'Mulai Rp 125.000/pax' },
              { icon: '❤️', name: 'Family Gathering', price: 'Harga custom' },
              { icon: '🎤', name: 'Meeting Package', price: 'Mulai Rp 225.000/pax' },
            ].map(({ icon, name, price }) => (
              <div key={name} className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                <span className="text-xl">{icon}</span>
                <div>
                  <h5 className="font-semibold text-bark text-xs">{name}</h5>
                  <h6 className="text-earth/60 text-xs">{price}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-7 border border-earth/10 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-bark mb-3">Kenapa Booking Lewat Sarau Luxury?</h2>
          <p className="text-earth/70 text-sm leading-relaxed mb-4">
            Sarau Luxury adalah event organizer profesional yang telah berpengalaman sejak 2018.
            Kami telah menggelar <strong>100+ event sukses</strong> untuk <strong>53+ perusahaan terkemuka</strong>
            di seluruh Indonesia — dari BCA, Toyota, Kalbe Farma, hingga Park Hyatt Jakarta.
          </p>
          <p className="text-earth/70 text-sm leading-relaxed mb-4">
            Setiap event kami tangani end-to-end: dari konsultasi awal, perencanaan konsep, koordinasi vendor,
            eksekusi hari H, hingga dokumentasi pasca event. Anda tidak perlu khawatir tentang logistik —
            kami yang handle semua detail agar event Anda berjalan sempurna.
          </p>
          <div className="flex flex-wrap gap-2">
            {['53+ Klien Korporat', '100+ Event Sukses', '20+ Destinasi', '8 Tahun Pengalaman', 'Fasilitator Bersertifikat', 'All-in Package'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-forest/10 text-forest text-xs font-semibold rounded-full">{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
