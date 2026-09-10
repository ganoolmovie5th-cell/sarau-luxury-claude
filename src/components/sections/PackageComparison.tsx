'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Minus, ArrowRight } from 'lucide-react'
import { gatheringPackages } from './PackagesPreview'

// Baris perbandingan terkurasi — label ringkas + status per paket [Silver, Gold, Platinum].
// true = termasuk, false = tidak, string = catatan (mis. "Pilihan").
type Cell = boolean | string
const comparisonRows: { label: string; values: [Cell, Cell, Cell] }[] = [
  { label: 'Penginapan 2D1N',              values: [true, true, true] },
  { label: '3x Meal & 2x Coffee Break',    values: [true, true, true] },
  { label: 'Aula, Lapangan & Kolam Renang', values: [true, true, true] },
  { label: 'Fun Game + Game Master',       values: [true, true, true] },
  { label: 'Pemandu & Dokumentasi',        values: [true, true, true] },
  { label: 'Rafting 11 km',                values: [false, true, true] },
  { label: 'Snack & Kelapa Muda',          values: [false, true, true] },
  { label: 'Team Building',                values: [false, false, true] },
  { label: 'Bus PP 2D1N (termasuk tol)',   values: [false, false, true] },
  { label: 'Pilihan Rafting / Paintball',  values: [false, 'Ya', 'Ya'] },
]

export default function PackageComparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="section-tag mb-4 inline-flex">⚖️ Bandingkan Paket</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mb-4">
            Bandingkan Paket <span className="gradient-text">Berdampingan</span>
          </h2>
          <p className="text-earth/80 text-lg max-w-xl mx-auto">
            Lihat semua fasilitas sekaligus dan temukan paket paling pas untuk tim Anda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-3xl border border-earth/10 shadow-xl shadow-earth/8"
        >
          <table className="w-full border-collapse bg-white min-w-[560px]">
            <caption className="sr-only">
              Perbandingan fasilitas paket Gathering Silver, Gold, dan Platinum
            </caption>
            <thead>
              <tr>
                <th scope="col" className="text-left p-4 bg-white" />
                {gatheringPackages.map((pkg) => {
                  const short = pkg.name.replace('Gathering ', '')
                  return (
                    <th
                      key={pkg.name}
                      scope="col"
                      className={`p-4 text-center align-top border-b border-earth/12 ${
                        pkg.popular ? 'bg-forest' : ''
                      }`}
                    >
                      {pkg.badge && (
                        <span className="inline-block bg-sun text-bark text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2">
                          {pkg.badge}
                        </span>
                      )}
                      <div
                        className={`font-display font-bold text-lg ${
                          pkg.popular ? 'text-cream' : 'text-bark'
                        }`}
                      >
                        {short}
                      </div>
                      <div
                        className={`font-display font-bold text-2xl mt-1 ${
                          pkg.popular ? 'text-sun' : 'text-forest'
                        }`}
                      >
                        Rp {pkg.price}
                      </div>
                      <div className={`text-xs ${pkg.popular ? 'text-cream/60' : 'text-earth'}`}>
                        {pkg.unit}
                      </div>
                      <div className={`text-[11px] mt-0.5 ${pkg.popular ? 'text-cream/50' : 'text-earth/60'}`}>
                        {pkg.minPax}
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="group">
                  <th
                    scope="row"
                    className="text-left font-medium text-sm text-bark p-4 bg-cream group-hover:bg-leaf/15 transition-colors"
                  >
                    {row.label}
                  </th>
                  {row.values.map((val, i) => {
                    const popular = gatheringPackages[i].popular
                    return (
                      <td
                        key={i}
                        className={`p-4 text-center border-b border-earth/8 ${
                          popular ? 'bg-forest/5' : ''
                        }`}
                      >
                        {val === true ? (
                          <span
                            className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                              popular ? 'bg-sun/25 text-sun' : 'bg-forest/15 text-forest'
                            }`}
                          >
                            <Check size={13} aria-hidden="true" />
                            <span className="sr-only">Termasuk</span>
                          </span>
                        ) : val === false ? (
                          <span className="inline-flex items-center justify-center text-earth/30">
                            <Minus size={16} aria-hidden="true" />
                            <span className="sr-only">Tidak termasuk</span>
                          </span>
                        ) : (
                          <span className={`text-sm font-semibold ${popular ? 'text-cream' : 'text-bark'}`}>
                            {val}
                          </span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
              {/* CTA row */}
              <tr>
                <td className="p-4 bg-cream" />
                {gatheringPackages.map((pkg) => (
                  <td key={pkg.name} className={`p-4 text-center ${pkg.popular ? 'bg-forest/5' : ''}`}>
                    <Link
                      href="/booking"
                      className={`inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl font-semibold text-xs transition duration-200 ${
                        pkg.popular
                          ? 'bg-sun text-bark hover:bg-sun/90'
                          : 'bg-forest text-cream hover:bg-forest/90'
                      }`}
                    >
                      Pesan <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>

        <p className="text-earth text-sm text-center mt-6">
          *Harga dapat berubah sesuai destinasi, fasilitas, dan jumlah peserta. Semua sudah all-in tanpa biaya tersembunyi.
        </p>
      </div>
    </section>
  )
}
