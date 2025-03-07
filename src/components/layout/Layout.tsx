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
    <div className={cn("flex min-h-screen flex-col bg-[#0a0c1b]")}>
      {/* Soft glow effects */}
      <div className="fixed top-0 -left-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl opacity-30"></div>
      <div className="fixed bottom-20 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className={cn("flex flex-1 relative z-10")}>
        <Sidebar />
        <div className={cn("flex-1 overflow-y-auto p-6 pt-24 md:pl-10 lg:p-8 lg:pt-24 lg:pl-10")}>
          <div className={cn("mx-auto max-w-6xl relative")}>
            <div className={cn("relative p-6 rounded-xl")}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 