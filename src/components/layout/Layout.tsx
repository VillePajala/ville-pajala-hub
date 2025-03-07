'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import { motion } from 'framer-motion'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  // The content container with styling
  const contentContainer = (
    <div className="mx-auto max-w-6xl rounded-xl border border-border/30 bg-card/90 p-6 shadow-lg backdrop-blur-sm relative before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] before:opacity-30 before:pointer-events-none before:rounded-xl">
      <div className="relative">
        <div className="absolute -top-6 left-0 right-0 h-1.5 rounded-t-lg bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50" />
        {children}
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        {/* No conditional rendering - always show content right away */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          <motion.div 
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {contentContainer}
          </motion.div>
        </div>
      </div>
    </div>
  )
} 