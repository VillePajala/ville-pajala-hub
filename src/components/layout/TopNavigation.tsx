'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Only include the main sections we want to focus on
// We're keeping all routes accessible but only showing these in navigation
type NavItem = {
  title: string
  href: string
  children?: {
    title: string
    href: string
  }[]
}

const mainNavigation: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
    children: [
      { title: 'All Posts', href: '/blog' },
      { title: 'Categories', href: '/blog/categories' },
      { title: 'Featured', href: '/blog/featured' }
    ]
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
    children: [
      { title: 'All Projects', href: '/portfolio' },
      { title: 'Case Studies', href: '/portfolio/case-studies' },
      { title: 'Technologies', href: '/portfolio/technologies' }
    ]
  },
  {
    title: 'Services',
    href: '/services',
    children: [
      { title: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
      { title: 'Automation Solutions', href: '/services/automation-solutions' },
      { title: 'Web & App Development', href: '/services/web-app-development' },
      { title: 'Creative Technology', href: '/services/creative-technology' }
    ]
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export function TopNavigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/brand */}
          <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Ville Pajala
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {mainNavigation.map((item) => (
              <div 
                key={item.href} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className={cn(
                    'block px-2 py-2 text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  )}
                >
                  {item.title}
                </Link>
                
                {/* Dropdowns are hidden with hidden class but structure is preserved */}
                {item.children && (
                  <div className="hidden">
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-2 text-sm transition-colors',
                            pathname === child.href
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground hover:bg-muted hover:text-primary'
                          )}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted/50"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="border-t border-border/50 bg-background/95 backdrop-blur-md">
              {mainNavigation.map((item) => (
                <div key={item.href} className="border-b border-border/30">
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 font-medium',
                      pathname === item.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted/50'
                    )}
                  >
                    {item.title}
                  </Link>
                  
                  {/* Mobile dropdowns are hidden but structure is preserved */}
                  {item.children && (
                    <div className="hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block border-t border-border/20 px-4 py-2 text-sm',
                            pathname === child.href
                              ? 'text-primary'
                              : 'text-muted-foreground hover:text-foreground'
                          )}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 