'use client'

import { useState, useEffect, memo } from 'react'
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
    title: 'Technology & AI',
    href: '/technology-ai',
    icon: '🤖',
    children: [
      { title: 'AI Projects', href: '/technology-ai/ai-projects' },
      { title: 'Web Development', href: '/technology-ai/web-development' },
      { title: 'Automation', href: '/technology-ai/automation' }
    ]
  },
  {
    title: 'Creative Work',
    href: '/creative-work',
    icon: '🎨',
    children: [
      { title: 'Art', href: '/creative-work/art' },
      { title: 'Music', href: '/creative-work/music' },
      { title: 'Game Development', href: '/creative-work/game-development' },
      { title: 'Experimental', href: '/creative-work/experimental' }
    ]
  },
  {
    title: 'Philosophy & Learning',
    href: '/philosophy-learning',
    icon: '📚',
    children: [
      { title: 'Essays', href: '/philosophy-learning/essays' },
      { title: 'Book Reviews', href: '/philosophy-learning/book-reviews' },
      { title: 'Teaching Materials', href: '/philosophy-learning/teaching-materials' }
    ]
  },
  {
    title: 'Metaphysics',
    href: '/metaphysics',
    icon: '✨',
    children: [
      { title: 'Esoteric Thinking', href: '/metaphysics/esoteric-thinking' },
      { title: 'Intuition', href: '/metaphysics/intuition' },
      { title: 'Problem-Solving', href: '/metaphysics/problem-solving' }
    ]
  },
  {
    title: 'Services',
    href: '/services',
    icon: '🛠️',
    children: [
      { title: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
      { title: 'Automation Solutions', href: '/services/automation-solutions' },
      { title: 'Web & App Development', href: '/services/web-app-development' },
      { title: 'Creative Technology', href: '/services/creative-technology' }
    ]
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
      { title: 'All Projects', href: '/portfolio' },
      { title: 'Case Studies', href: '/portfolio/case-studies' },
      { title: 'Technologies', href: '/portfolio/technologies' }
    ]
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: '📧'
  },
  {
    title: 'Subscribe',
    href: '/subscribe',
    icon: '📬'
  }
]

// Memoize the NavItem component to prevent unnecessary re-renders
const NavItemComponent = memo(({ item, pathname, expandedItems, toggleExpand }: {
  item: NavItem
  pathname: string
  expandedItems: string[]
  toggleExpand: (title: string) => void
}) => {
  const isExpanded = expandedItems.includes(item.title)
  const isActive = pathname === item.href
  
  return (
    <div className="mb-2">
      <button
        onClick={() => item.children && toggleExpand(item.title)}
        className={cn(
          'group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
          isActive
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
            {isExpanded ? '▼' : '▶'}
          </span>
        )}
      </button>

      <AnimatePresence>
        {item.children && isExpanded && (
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
  )
})
NavItemComponent.displayName = 'NavItemComponent'

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
              <NavItemComponent 
                key={item.title}
                item={item}
                pathname={pathname}
                expandedItems={expandedItems}
                toggleExpand={toggleExpand}
              />
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