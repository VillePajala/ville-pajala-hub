'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PortfolioCard } from '@/components/sections/PortfolioCard'
import { portfolioProjects, portfolioCategories, portfolioTechnologies } from '@/lib/data/portfolio-data'

export default function PortfolioPage() {
  // Add loading state
  const [isLoading, setIsLoading] = useState(true)
  const [loadedProjects, setLoadedProjects] = useState<typeof portfolioProjects>([])
  
  // Load portfolio projects with useEffect to ensure client-side loading
  useEffect(() => {
    // Simplified loading to avoid potential issues
    setLoadedProjects(portfolioProjects);
    
    // Short timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for the hero title
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  }

  const heroTitle = "Portfolio";

  return (
    <div>
      {/* Transparent hero section with centered text */}
      <div className="relative py-24 mb-8 overflow-visible flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center overflow-visible pb-8">
            {heroTitle.split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block font-serif text-7xl md:text-8xl font-bold"
                style={{ lineHeight: 1.2 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto" 
          >
            A showcase of my projects, work experience, and technical expertise.
          </motion.p>
        </div>
      </div>

      {/* Main content with portfolio projects */}
      <div className="pb-12 px-4 sm:px-6 md:px-8 lg:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            // Loading state
            [...Array(6)].map((_, index) => (
              <div 
                key={index} 
                className="rounded-lg border border-white/10 bg-black/30 animate-pulse flex flex-col"
              >
                <div className="h-48 bg-white/5 rounded-t-lg"></div>
                <div className="p-6 space-y-3 flex-grow">
                  <div className="h-4 bg-white/5 rounded w-3/4"></div>
                  <div className="h-4 bg-white/5 rounded w-1/2"></div>
                  <div className="h-4 bg-white/5 rounded w-5/6"></div>
                </div>
              </div>
            ))
          ) : (
            loadedProjects.map((project, index) => (
              <div key={project.id} className="h-full">
                <PortfolioCard project={project} index={index} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
} 