'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  title?: string
  description?: string
  children: ReactNode
  className?: string
  delay?: number
}

export function Section({ 
  title, 
  description, 
  children, 
  className,
  delay = 0
}: SectionProps) {
  return (
    <section
      className={cn("space-y-6", className)}
    >
      {(title || description) && (
        <div className="space-y-2">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          )}
          {description && (
            <p className="text-xl text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
} 