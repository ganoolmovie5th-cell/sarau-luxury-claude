'use client'
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  duration?: number
  decimals?: number
  delay?: number
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export default function CountUp({ end, duration = 2.5, decimals = 0, delay = 0 }: CountUpProps) {
  const [display, setDisplay] = useState('0')
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = performance.now()
      const durationMs = duration * 1000

      const animate = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / durationMs, 1)
        const value = end * easeOutCubic(progress)
        setDisplay(value.toFixed(decimals))

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate)
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }, delay * 1000)

    return () => {
      clearTimeout(timeout)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [end, duration, decimals, delay])

  return <>{display}</>
}
