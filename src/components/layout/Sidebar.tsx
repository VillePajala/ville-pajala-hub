'use client'

import { useState, useEffect, memo, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MenuButton } from '@/components/ui/MenuButton'
import { 
  Home, 
  Bot, 
  Palette, 
  BookOpen, 
  Sparkles, 
  Wrench, 
  PenTool,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ChevronRight,
  ChevronLeft
} from 'lucide-react'

type NavItem = {
  title: string
  href: string
  icon?: React.ReactNode
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: <Home className="h-5 w-5" />
  },
  {
    title: 'Technology & AI',
    href: '/technology-ai',
    icon: <Bot className="h-5 w-5" />,
    children: [
      { title: 'AI Projects', href: '/technology-ai/ai-projects' },
      { title: 'Web Development', href: '/technology-ai/web-development' },
      { title: 'Automation', href: '/technology-ai/automation' }
    ]
  },
  {
    title: 'Creative Work',
    href: '/creative-work',
    icon: <Palette className="h-5 w-5" />,
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
    icon: <BookOpen className="h-5 w-5" />,
    children: [
      { title: 'Essays', href: '/philosophy-learning/essays' },
      { title: 'Book Reviews', href: '/philosophy-learning/book-reviews' },
      { title: 'Teaching Materials', href: '/philosophy-learning/teaching-materials' }
    ]
  },
  {
    title: 'Metaphysics',
    href: '/metaphysics',
    icon: <Sparkles className="h-5 w-5" />,
    children: [
      { title: 'Esoteric Thinking', href: '/metaphysics/esoteric-thinking' },
      { title: 'Intuition', href: '/metaphysics/intuition' },
      { title: 'Problem-Solving', href: '/metaphysics/problem-solving' }
    ]
  },
  {
    title: 'Services',
    href: '/services',
    icon: <Wrench className="h-5 w-5" />,
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
    icon: <PenTool className="h-5 w-5" />,
    children: [
      { title: 'All Posts', href: '/blog' },
      { title: 'Categories', href: '/blog/categories' },
      { title: 'Featured', href: '/blog/featured' }
    ]
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
    icon: <Wrench className="h-5 w-5" />,
    children: [
      { title: 'All Projects', href: '/portfolio' },
      { title: 'Case Studies', href: '/portfolio/case-studies' },
      { title: 'Technologies', href: '/portfolio/technologies' }
    ]
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ExternalLink className="h-5 w-5" />
  },
  {
    title: 'Subscribe',
    href: '/subscribe',
    icon: <PenTool className="h-5 w-5" />
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
  const router = useRouter()
  
  const handleClick = () => {
    if (item.children) {
      toggleExpand(item.title)
    } else {
      router.push(item.href)
    }
  }
  
  return (
    <div className="mb-2">
      <button
        onClick={handleClick}
        className={cn(
          'group flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
          isActive
            ? 'bg-primary text-primary-foreground shadow-md'
            : 'text-foreground hover:bg-muted/80 hover:text-primary hover:shadow-sm',
          item.children && 'justify-between'
        )}
      >
        <span className="flex items-center">
          {item.icon && (
            <span className={cn(
              "mr-2.5 transition-transform duration-200",
              isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary",
              "group-hover:scale-110"
            )}>
              {item.icon}
            </span>
          )}
          {item.title}
        </span>
        {item.children && (
          <span className="ml-auto transform transition-transform duration-200">
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
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
            <div className="ml-4 mt-1.5 space-y-1">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-sm transition-colors duration-200',
                    pathname === child.href
                      ? 'bg-primary/15 text-primary font-medium'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
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
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
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

  // Close menus on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsDesktopSidebarOpen(false)
  }, [pathname])
  
  // Auto-hide desktop sidebar after inactivity
  useEffect(() => {
    if (isDesktopSidebarOpen) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      // Set a new timeout for auto-hiding
      timeoutRef.current = setTimeout(() => {
        setIsDesktopSidebarOpen(false)
      }, 5000) // Auto-hide after 5 seconds of inactivity
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isDesktopSidebarOpen])

  const toggleExpand = (title: string) => {
    // Reset the auto-hide timer when user interacts with sidebar on desktop
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
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
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-y-auto bg-card py-4 shadow-xl"
          >
            <div className="px-6">
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
            
            <div className="border-t border-border/50 mt-4 p-6">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>© 2024 Ville Pajala</span>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      
      {/* Desktop Header */}
      <div className="fixed left-0 right-0 top-0 z-30 hidden h-16 items-center border-b border-border bg-card px-6 md:flex">
        <div className="flex h-16 w-full items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Ville Pajala
          </Link>
        </div>
      </div>
      
      {/* Desktop Sidebar Overlay */}
      <AnimatePresence>
        {isDesktopSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 hidden bg-background/80 backdrop-blur-sm md:block"
            onClick={() => setIsDesktopSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar Peek - visible when sidebar is closed */}
      <div 
        className="fixed left-0 top-0 z-20 mt-16 hidden h-full w-3 cursor-pointer bg-border/30 hover:bg-border/50 transition-colors md:block"
        onClick={() => setIsDesktopSidebarOpen(true)}
      >
        <div className="absolute left-0 top-1/2 flex h-12 w-6 -translate-y-1/2 items-center justify-center rounded-r-md bg-primary/70 text-primary-foreground shadow-md hover:bg-primary/90 transition-all">
          <ChevronRight className="h-5 w-5" />
        </div>
      </div>
      
      {/* Desktop Sidebar */}
      <AnimatePresence>
        {(isDesktopSidebarOpen || typeof window === 'undefined') && (
          <motion.nav
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={cn(
              'fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-border bg-gradient-to-b from-card/95 via-primary/5 to-accent/5 shadow-lg backdrop-blur-sm md:block',
              isScrolled && 'bg-opacity-90 backdrop-blur-md supports-[backdrop-filter]:bg-opacity-75'
            )}
            onMouseEnter={() => {
              // Reset the timeout when mouse enters sidebar
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
              }
            }}
            onMouseLeave={() => {
              // Set timeout when mouse leaves sidebar
              timeoutRef.current = setTimeout(() => {
                setIsDesktopSidebarOpen(false)
              }, 5000)
            }}
          >
            <div className="flex h-full flex-col">
              {/* Sidebar Header */}
              <div className="h-16 items-center border-b border-border/50 px-6 flex justify-between">
                <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                  Ville Pajala
                </Link>
                
                <button 
                  className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted/50"
                  onClick={() => setIsDesktopSidebarOpen(false)}
                  aria-label="Close sidebar"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>
              
              {/* Sidebar Content */}
              <div className="flex-1 space-y-1 overflow-y-auto p-4 pt-4">
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
              
              {/* Sidebar Footer */}
              <div className="border-t border-border/50 p-4 bg-background/30">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>© 2024 Ville Pajala</span>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
} 