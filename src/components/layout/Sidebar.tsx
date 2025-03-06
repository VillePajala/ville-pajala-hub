'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MenuButton } from '@/components/ui/MenuButton'

type NavItem = {
  title: string
  href: string
  icon?: string
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: '🏠'
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: '📝',
    children: [
      { title: 'All Posts', href: '/blog' },
      { title: 'Categories', href: '/blog/categories' },
      { title: 'Featured', href: '/blog/featured' }
    ]
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
    icon: '💼',
    children: [
      { title: 'Projects', href: '/portfolio' },
      { title: 'Case Studies', href: '/portfolio/case-studies' },
      { title: 'Technologies', href: '/portfolio/technologies' }
    ]
  },
  {
    title: 'Services',
    href: '/services',
    icon: '🛠️',
    children: [
      { title: 'Consulting', href: '/services/consulting' },
      { title: 'Development', href: '/services/development' },
      { title: 'Training', href: '/services/training' }
    ]
  },
  {
    title: 'About',
    href: '/about',
    icon: '👨‍💻'
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: '📧'
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Expand items based on current path
  useEffect(() => {
    const currentPath = pathname
    const newExpandedItems = navigation
      .filter(item => item.children && currentPath.startsWith(item.href))
      .map(item => item.title)
    setExpandedItems(newExpandedItems)
  }, [pathname])

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const toggleExpand = (title: string) => {
    setExpandedItems(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed left-0 right-0 top-0 z-40 border-b border-border bg-card px-4 md:hidden">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-primary/80">
            Ville Pajala
          </Link>
          <MenuButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.nav
        className={cn(
          'fixed left-0 top-0 z-40 h-screen w-64 transform border-r border-border bg-card transition-all duration-300',
          'md:translate-x-0',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
          isScrolled && 'bg-opacity-90 backdrop-blur supports-[backdrop-filter]:bg-opacity-75'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Desktop Logo/Header */}
          <div className="hidden h-16 items-center border-b border-border px-6 md:flex">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-primary/80">
              Ville Pajala
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 space-y-1 overflow-y-auto p-4 pt-20 md:pt-4">
            {navigation.map((item) => (
              <div key={item.title} className="mb-2">
                <button
                  onClick={() => item.children && toggleExpand(item.title)}
                  className={cn(
                    'group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted hover:text-primary',
                    item.children && 'justify-between'
                  )}
                >
                  <span className="flex items-center">
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.title}
                  </span>
                  {item.children && (
                    <span className="ml-auto transform transition-transform duration-200">
                      {expandedItems.includes(item.title) ? '▼' : '▶'}
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {item.children && expandedItems.includes(item.title) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block rounded-md px-3 py-2 text-sm transition-colors',
                              pathname === child.href
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                            )}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-border p-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>© 2024 Ville Pajala</span>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
} 