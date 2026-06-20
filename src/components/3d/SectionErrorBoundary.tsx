'use client'

import { Component, ReactNode } from 'react'

/**
 * Generic ErrorBoundary for homepage sections.
 * If any section crashes (Three.js, Google Drive images, etc.),
 * only that section is hidden — the rest of the page stays functional.
 */
export default class SectionErrorBoundary extends Component<
  { children: ReactNode; name?: string },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; name?: string }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    const name = this.props.name || 'section'
    console.warn(`[Homepage] ${name} failed to load:`, error.message)
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}