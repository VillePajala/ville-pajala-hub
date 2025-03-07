'use client'

import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { cn } from '@/lib/utils'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={cn("flex min-h-screen flex-col bg-[#050614] relative")}>
      {/* Visual decoration elements */}
      <div className="fixed top-0 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
      <div className="fixed bottom-20 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02] pointer-events-none"></div>
      
      {/* Decorative elements */}
      <div className="fixed top-[20%] left-[10%] w-1 h-20 bg-gradient-to-b from-indigo-500/20 to-transparent"></div>
      <div className="fixed top-[30%] left-[20%] w-1 h-10 bg-gradient-to-b from-indigo-500/10 to-transparent"></div>
      <div className="fixed top-[70%] right-[15%] w-1 h-16 bg-gradient-to-b from-purple-500/20 to-transparent"></div>
      <div className="fixed top-[50%] right-[10%] w-1 h-12 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
      
      {/* Small floating dots */}
      <div className="fixed top-[15%] left-[15%] w-1 h-1 rounded-full bg-indigo-400/50"></div>
      <div className="fixed top-[85%] left-[25%] w-1 h-1 rounded-full bg-indigo-400/50"></div>
      <div className="fixed top-[25%] right-[35%] w-1 h-1 rounded-full bg-purple-400/50"></div>
      <div className="fixed top-[65%] right-[20%] w-1 h-1 rounded-full bg-purple-400/50"></div>
      
      <div className={cn("flex flex-1 relative z-10")}>
        <Sidebar />
        <div className={cn("flex-1 overflow-y-auto p-6 pt-24 md:pl-10 lg:p-8 lg:pt-24 lg:pl-16")}>
          <div className={cn("mx-auto max-w-6xl relative")}>
            {/* Subtle gradient border at top */}
            <div className="absolute -top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
            <div className={cn("relative p-6 rounded-xl")}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 