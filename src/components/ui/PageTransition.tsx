'use client'

import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  // Return children directly with any className passed to ensure immediate display
  // No animations, no conditional rendering, just pure content
  return (
    <div className={className}>
      {children}
    </div>
  )
} 