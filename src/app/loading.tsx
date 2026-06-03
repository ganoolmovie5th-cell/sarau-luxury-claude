export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-forest/20" />
          <div className="absolute inset-0 rounded-full border-4 border-forest border-t-transparent animate-spin" />
        </div>
        <div className="font-display text-forest font-semibold">Sarau Luxury</div>
        <div className="font-accent text-earth/60 text-sm">Memuat halaman...</div>
      </div>
    </div>
  )
}
