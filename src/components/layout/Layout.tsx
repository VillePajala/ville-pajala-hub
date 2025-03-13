'use client'

import { ReactNode, useEffect, useState } from 'react'
import { TopNavigation } from './TopNavigation'
import { cn } from '@/lib/utils'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  // Add client-side only rendering to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={cn("flex min-h-screen flex-col bg-[#050614]")}>
      {/* Background image */}
      <div className="fixed inset-0 bg-[url('/images/backgrounds/background_image.png')] bg-cover bg-center bg-fixed bg-no-repeat pointer-events-none"></div>
      
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/55 pointer-events-none"></div>
      
      {/* Background pattern overlay */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03] pointer-events-none"></div>
      
      {/* Glow elements */}
      <div className="fixed -top-20 -left-20 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      <div className="fixed -bottom-20 -right-20 w-[500px] h-[500px] bg-indigo-900/30 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      <div className="fixed top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      
      {/* Top Navigation */}
      {isMounted && <TopNavigation />}
      
      {/* Main Content */}
      <main className={cn("flex-1 overflow-y-auto w-full pt-24 pb-16")}>
        {/* Increased padding for small and medium screens */}
        <div className="mx-auto max-w-5xl px-5 sm:px-8 md:px-10 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
} 