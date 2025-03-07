'use client'

import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import dynamic from 'next/dynamic'

// Dynamically import motion to avoid chunk loading issues
const MotionMain = dynamic(() => 
  import('framer-motion').then((mod) => {
    const { motion } = mod
    return motion.main
  }),
  { ssr: false }
)

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MotionMain
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="flex-1 pt-16 md:pl-64 md:pt-0"
      >
        <div className="container mx-auto px-4 py-8 md:px-8">
          {children}
        </div>
      </MotionMain>
    </div>
  )
} 