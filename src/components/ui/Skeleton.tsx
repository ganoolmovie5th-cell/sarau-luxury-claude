// ─── Reusable Skeleton Components ────────────────────────────────────────────
// Dipakai di loading.tsx masing-masing halaman untuk menampilkan
// placeholder saat halaman sedang di-render / navigasi berlangsung.

/** Base block — animasi pulse, warna sesuai design system */
export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-earth/10 rounded-xl ${className}`}
      aria-hidden="true"
    />
  )
}

/** Satu baris teks */
export function SkeletonText({ className = '' }: { className?: string }) {
  return <Skeleton className={`h-4 rounded-md ${className}`} />
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

/** Satu card blog */
function SkeletonBlogCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-earth/10 shadow-sm">
      {/* Gambar placeholder */}
      <Skeleton className="h-48 rounded-none rounded-t-3xl" />
      <div className="p-6 space-y-3">
        {/* Category + read time */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
        {/* Title */}
        <SkeletonText className="w-full" />
        <SkeletonText className="w-4/5" />
        {/* Excerpt */}
        <SkeletonText className="w-full mt-1" />
        <SkeletonText className="w-3/4" />
        {/* CTA */}
        <Skeleton className="h-4 w-28 mt-2" />
      </div>
    </div>
  )
}

/** Grid 6 card blog — pakai di app/blog/loading.tsx */
export function SkeletonBlogGrid() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <Skeleton className="h-6 w-28 rounded-full mx-auto" />
          <Skeleton className="h-12 w-80 mx-auto" />
          <Skeleton className="h-12 w-56 mx-auto" />
          <SkeletonText className="w-72 mx-auto" />
        </div>
        {/* Category pills */}
        <div className="flex justify-center gap-3 mb-12">
          {[80, 60, 80, 72, 76].map((w, i) => (
            <Skeleton key={i} className={`h-9 w-${w === 60 ? '16' : w === 72 ? '[4.5rem]' : '20'} rounded-full`} />
          ))}
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBlogCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

/** Grid masonry galeri — pakai di app/gallery/loading.tsx */
export function SkeletonGalleryGrid() {
  // Simulasikan pola tall/short seperti galeri asli
  const heights = ['h-80', 'h-52', 'h-52', 'h-80', 'h-52', 'h-80', 'h-52', 'h-52', 'h-80', 'h-52', 'h-80', 'h-52']

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-6 w-24 rounded-full mx-auto" />
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-12 w-40 mx-auto" />
          <SkeletonText className="w-72 mx-auto" />
        </div>
        {/* Stats row */}
        <div className="grid md:grid-cols-4 gap-5 mb-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 text-center border border-earth/10 space-y-2">
              <Skeleton className="h-8 w-8 rounded-lg mx-auto" />
              <Skeleton className="h-6 w-20 mx-auto" />
              <SkeletonText className="w-32 mx-auto" />
            </div>
          ))}
        </div>
        {/* Filter pills */}
        <div className="flex justify-center gap-3 mb-12">
          {[5].concat([4, 4, 3, 3, 3]).map((_, i) => (
            <Skeleton key={i} className="h-9 w-20 rounded-full" />
          ))}
        </div>
        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {heights.map((h, i) => (
            <Skeleton key={i} className={`break-inside-avoid ${h} mb-4 rounded-2xl`} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Clients ──────────────────────────────────────────────────────────────────

/** Satu client card */
function SkeletonClientCard() {
  return (
    <div className="bg-white rounded-2xl border border-earth/10 p-5 flex flex-col items-center justify-center gap-3 min-h-[140px]">
      <Skeleton className="w-14 h-14 rounded-2xl" />
      <SkeletonText className="w-24" />
      <Skeleton className="h-5 w-16 rounded-full" />
    </div>
  )
}

/** Grid klien + hero — pakai di app/clients/loading.tsx */
export function SkeletonClientsGrid() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="pt-36 pb-20 gradient-forest">
        <div className="container-tight text-center space-y-4">
          <Skeleton className="h-8 w-28 rounded-full mx-auto bg-white/20" />
          <Skeleton className="h-12 w-80 mx-auto bg-white/20" />
          <Skeleton className="h-12 w-56 mx-auto bg-white/20" />
          <SkeletonText className="w-96 mx-auto bg-white/20" />
        </div>
      </div>
      {/* Industry tags row */}
      <div className="py-10 bg-white border-b border-earth/10">
        <div className="container-wide flex flex-wrap justify-center gap-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-24 rounded-full" />
          ))}
        </div>
      </div>
      {/* Grid */}
      <div className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12 space-y-3">
            <Skeleton className="h-6 w-32 rounded-full mx-auto" />
            <Skeleton className="h-10 w-72 mx-auto" />
            <SkeletonText className="w-64 mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <SkeletonClientCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
