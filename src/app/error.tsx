'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[App Error]', error)
  }, [error])

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <div className="text-6xl mb-6">🌿</div>
        <h1 className="font-display text-3xl font-bold text-bark mb-3">
          Oops, ada yang tidak beres
        </h1>
        <p className="text-earth/70 mb-8 leading-relaxed">
          Maaf, terjadi kesalahan saat memuat halaman ini. Tim kami akan segera memperbaikinya.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-forest text-cream font-semibold hover:bg-forest/90 transition-colors"
          >
            Coba Lagi
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border-2 border-forest text-forest font-semibold hover:bg-forest/10 transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}
