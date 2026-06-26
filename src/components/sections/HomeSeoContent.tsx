import { CONTACT } from '@/lib/constants'

// Server component statis — blok konten SEO homepage dengan hierarki heading h2→h6.
// Tidak ada interaktivitas/risiko crash, jadi tidak perlu error boundary atau 'use client'.
// Warna teks pakai text-earth (full opacity, ~5.58:1 di atas putih) — WCAG AA, bukan text-earth/70 (~3:1).
export default function HomeSeoContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container-tight">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-bark mb-4">
          Event Organizer Outing &amp; Outbound Terpercaya untuk Perusahaan
        </h2>
        <p className="text-earth leading-relaxed mb-8">
          Sarau Luxury adalah mitra event korporat profesional yang berdiri sejak 2018. Kami telah
          menggelar 100+ event sukses untuk 53+ perusahaan terkemuka seperti BCA, Toyota, dan Kalbe Farma.
          Dari outing perusahaan, outbound training, team building, hingga company gathering — setiap acara
          kami rancang untuk mempererat tim dan menghadirkan pengalaman yang berkesan.
        </p>

        <h3 className="font-display text-2xl font-bold text-forest mb-3">
          Layanan untuk Setiap Kebutuhan Tim
        </h3>
        <p className="text-earth leading-relaxed mb-6">
          Kami melayani grup dari 20 hingga 1000+ peserta di lebih dari 20 destinasi: Bandung, Lembang, Anyer,
          Bogor, Bali, dan seluruh Indonesia — termasuk outbound tour ke luar negeri.
        </p>

        <h4 className="font-semibold text-lg text-bark mb-2">
          Dari Team Building hingga Company Gathering
        </h4>
        <p className="text-earth text-sm leading-relaxed mb-6">
          Fun games, ice breaking, program leadership, problem solving, rafting, paintball, hingga gala dinner —
          semua dipandu fasilitator bersertifikat dan event manager yang mendampingi Anda dari perencanaan
          hingga evaluasi pasca event.
        </p>

        <h5 className="font-semibold text-base text-bark mb-2">
          Harga Transparan Mulai Rp 125.000 per Peserta
        </h5>
        <p className="text-earth text-sm leading-relaxed mb-6">
          Paket outbound &amp; team building mulai Rp 125.000/pax dan gathering mulai Rp 525.000/pax. Semua harga
          sudah all-in — akomodasi, konsumsi, aktivitas, dan dokumentasi — tanpa biaya tersembunyi.
        </p>

        <h6 className="font-semibold text-sm uppercase tracking-widest text-forest mb-2">
          Konsultasi Gratis &amp; Respon Cepat
        </h6>
        <p className="text-earth text-sm leading-relaxed">
          Hubungi kami untuk konsultasi tanpa biaya — respon dalam 15 menit di jam kerja, {CONTACT.hours}.
          Tim kami siap membantu menyusun rencana event yang tepat sesuai kebutuhan dan anggaran perusahaan Anda.
        </p>
      </div>
    </section>
  )
}
