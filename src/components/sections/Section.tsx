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
      className={cn("space-y-8 rounded-xl p-8 bg-card/10 backdrop-blur-sm border border-white/5 shadow-xl", className)}
    >
      {(title || description) && (
        <div className="space-y-3">
          {title && (
            <h2 className={cn("text-3xl font-bold tracking-tight text-white drop-shadow-md relative", titleClassName)}>
              {title}
              <span className="absolute -bottom-2 left-0 h-0.5 w-16 bg-gradient-to-r from-purple-500 to-indigo-500"></span>
            </h2>
          )}
          {description && (
            <p className="text-xl text-white/80 leading-relaxed">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
} 