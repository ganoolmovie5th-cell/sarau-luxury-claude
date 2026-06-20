'use client'

import { Component, ReactNode } from 'react'

/**
 * ErrorBoundary for the Three.js HeroScene.
 * If WebGL/Three.js fails (e.g. GPU blocklist, OOM, unsupported browser),
 * the hero silently degrades to the gradient background instead of
 * crashing the entire homepage.
 */
export default class HeroSceneBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.warn('[HeroScene] Three.js scene failed to load, falling back to gradient:', error.message)
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}