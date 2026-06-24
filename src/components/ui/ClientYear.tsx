'use client'

/**
 * ClientYear — renders the current year client-side.
 *
 * Mengapa perlu komponen terpisah?
 * `new Date().getFullYear()` di Server Component dievaluasi saat build/ISR.
 * Dengan suppressHydrationWarning di sini, React tidak akan melempar
 * hydration warning jika nilai tahun berbeda antara cached HTML dan client.
 */
export default function ClientYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>
}
