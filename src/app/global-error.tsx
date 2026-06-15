'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[Global Error]', error)
  }, [error])

  return (
    <html lang="id">
      <body style={{ margin: 0, fontFamily: 'sans-serif', background: '#f5f0e8', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center', padding: '2rem', maxWidth: '400px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌿</div>
          <h2 style={{ color: '#3d2b1f', marginBottom: '0.5rem' }}>Terjadi Kesalahan Kritis</h2>
          <p style={{ color: '#6b4c3b', marginBottom: '1.5rem' }}>
            Maaf, terjadi kesalahan yang tidak terduga. Silakan muat ulang halaman.
          </p>
          <button
            onClick={reset}
            style={{ padding: '0.75rem 2rem', background: '#2d6a4f', color: 'white', border: 'none', borderRadius: '9999px', cursor: 'pointer', fontWeight: 600 }}
          >
            Muat Ulang
          </button>
        </div>
      </body>
    </html>
  )
}
