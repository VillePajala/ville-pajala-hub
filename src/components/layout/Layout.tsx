'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
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
      <div className="fixed inset-0 bg-black/70 pointer-events-none"></div>
      
      {/* Background pattern overlay */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02] pointer-events-none"></div>
      
      {/* Glow elements */}
      <div className="fixed -top-20 -left-20 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
      <div className="fixed -bottom-20 -right-20 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
      
      <div className={cn("flex flex-1 relative z-10")}>
        {isMounted && <Sidebar />}
        <main className={cn("flex-1 overflow-y-auto w-full pt-16 pb-16")}>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 