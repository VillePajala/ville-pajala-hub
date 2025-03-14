'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { services, serviceCategories } from '@/lib/data/services-data'
import Link from 'next/link'

export default function ServicesPage() {
  // Add loading state
  const [isLoading, setIsLoading] = useState(true)
  const [loadedServices, setLoadedServices] = useState<typeof services>([])
  
  // Load services with useEffect to ensure client-side loading
  useEffect(() => {
    // Simplified loading to avoid potential issues
    setLoadedServices(services);
    
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

  const heroTitle = "Services";

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
            Professional consulting and development services tailored to your needs.
          </motion.p>
        </div>
      </div>

      {/* Main content with services */}
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
            loadedServices.map((service, index) => (
              <div key={service.id} className="h-full">
                <ServiceCard service={service} index={index} />
              </div>
            ))
          )}
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-lg border border-white/10 p-8 bg-gradient-to-br from-zinc-900/50 to-zinc-700/30 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-medium text-white/95 mb-2">Ready to Work Together?</h3>
              <p className="text-white/80">
                Let's discuss how I can help bring your ideas to life.
              </p>
            </div>
            <Link 
              href="/contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 