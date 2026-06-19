'use client'

import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

/**
 * GoogleAnalytics — GA4 Consent Mode v2
 *
 * Urutan script penting:
 * 1. ga-consent-default : inisialisasi dataLayer + gtag + set default DENIED sebelum GA load
 * 2. gtag.js            : muat library GA4 dari Google
 * 3. ga-init            : konfigurasi GA4
 *
 * CookieConsent component akan memanggil gtag('consent','update',{...}) saat
 * user membuat pilihan, sehingga analytics_storage di-grant atau tetap denied.
 */
export default function GoogleAnalytics() {
  if (!GA_ID) return null

  return (
    <>
      <Script id="ga-consent-default" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  )
}
