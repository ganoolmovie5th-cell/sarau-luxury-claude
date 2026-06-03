import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl mb-6">🌿</div>
        <h1 className="font-display text-6xl font-bold text-forest mb-3">404</h1>
        <h2 className="font-display text-2xl font-bold text-bark mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-earth/70 mb-8 leading-relaxed">
          Sepertinya halaman yang Anda cari sudah berpindah ke destinasi lain.
          Ayo kembali dan temukan event impian tim Anda!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">← Kembali ke Beranda</Link>
          <Link href="/contact" className="btn-secondary">Hubungi Kami</Link>
        </div>
      </div>
    </div>
  )
}
