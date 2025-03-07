'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  title?: string
  description?: string
  children: ReactNode
  className?: string
  titleClassName?: string
  delay?: number
}

export function Section({ 
  title, 
  description, 
  children, 
  className,
  titleClassName,
  delay = 0
}: SectionProps) {
  return (
    <section
      className={cn("space-y-6 rounded-xl p-6 bg-card/20 backdrop-blur-sm", className)}
    >
      {(title || description) && (
        <div className="space-y-2">
          {title && (
            <h2 className={cn("text-3xl font-bold tracking-tight text-white drop-shadow-sm", titleClassName)}>{title}</h2>
          )}
          {description && (
            <p className="text-xl text-white/80">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
} 