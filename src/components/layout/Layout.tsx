'use client'

import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { motion } from 'framer-motion'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="flex-1 pt-16 md:pl-64 md:pt-0"
      >
        <div className="container mx-auto px-4 py-8 md:px-8">
          {children}
        </div>
      </motion.main>
    </div>
  )
} 