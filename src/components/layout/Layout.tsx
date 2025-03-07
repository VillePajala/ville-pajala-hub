'use client'

import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { cn } from '@/lib/utils'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  // Use stable class names without conditional rendering to avoid hydration issues
  return (
    <div className={cn("flex min-h-screen flex-col")}>
      <div className={cn("flex flex-1")}>
        <Sidebar />
        <div className={cn("flex-1 overflow-y-auto p-6 pt-24 md:pl-10 lg:p-8 lg:pt-24 lg:pl-10")}>
          <div className={cn("mx-auto max-w-6xl rounded-xl border border-border/30 bg-card/70 p-6 shadow-lg backdrop-blur-sm relative before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] before:opacity-30 before:pointer-events-none before:rounded-xl")}>
            <div className={cn("relative")}>
              <div className={cn("absolute -top-6 left-0 right-0 h-1.5 rounded-t-lg bg-gradient-to-r from-primary/50 via-indigo-500/50 to-primary/50")} />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 