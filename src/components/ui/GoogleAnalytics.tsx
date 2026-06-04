'use client'

import Script from 'next/script'

// Fallback ke Measurement ID hardcoded jika env belum di-set
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-1SJ8G9TVER'

export default function GoogleAnalytics() {
  if (!GA_ID) return null

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        async
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
