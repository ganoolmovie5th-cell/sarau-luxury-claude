'use client'

import { useScrollProgress } from '@/hooks'
import { motion } from 'framer-motion'

export default function ScrollProgressBar() {
  const progress = useScrollProgress()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-gradient-to-r from-forest via-leaf to-sun origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    />
  )
}
