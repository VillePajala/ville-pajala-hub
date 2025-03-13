'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BlogCard, BlogPost } from '@/components/sections/BlogCard'
import { BlogFilter } from '@/components/sections/BlogFilter'
import { blogPosts, blogCategories, blogTags } from '@/lib/data/blog-data'

export default function BlogPage() {
  // Add loading state
  const [isLoading, setIsLoading] = useState(true)
  const [loadedPosts, setLoadedPosts] = useState<BlogPost[]>([])
  const [filters, setFilters] = useState<{ categories: string[]; tags: string[] }>({
    categories: [],
    tags: []
  })

  // Load blog posts with useEffect to ensure client-side loading
  useEffect(() => {
    // Simplified loading to avoid potential issues
    setLoadedPosts(blogPosts);
    
    // Short timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter posts based on selected categories and tags
  const filteredPosts = useMemo(() => {
    if (loadedPosts.length === 0) return []
    
    return loadedPosts.filter((post) => {
      // If no filters are selected, show all posts
      if (filters.categories.length === 0 && filters.tags.length === 0) {
        return true
      }

      // Check if post matches selected categories
      const matchesCategories =
        filters.categories.length === 0 ||
        post.categories.some((category) => filters.categories.includes(category))

      // Check if post matches selected tags
      const matchesTags =
        filters.tags.length === 0 ||
        post.tags.some((tag) => filters.tags.includes(tag))

      // Post must match both category and tag filters
      return matchesCategories && matchesTags
    })
  }, [filters, loadedPosts])

  // Sort posts by date (newest first)
  const sortedPosts = useMemo(() => {
    if (filteredPosts.length === 0) return []
    return [...filteredPosts].sort((a, b) => b.date.getTime() - a.date.getTime())
  }, [filteredPosts])

  return (
    // Added more horizontal padding for medium and smaller screens
    <div className="pb-12 px-4 sm:px-6 md:px-8 lg:px-6">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="mb-4 text-4xl font-bold text-high-contrast">Blog</h1>
        <p className="text-xl text-medium-contrast">
          Thoughts and insights on technology, creativity, philosophy, and more.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <aside className="sticky top-24 space-y-8">
            <BlogFilter
              categories={blogCategories}
              tags={blogTags}
              onFilterChange={setFilters}
            />
          </aside>
        </div>

        <div className="lg:col-span-3">
          {isLoading ? (
            // Loading state
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {[...Array(6)].map((_, index) => (
                <div 
                  key={index} 
                  className="rounded-lg border border-border bg-card animate-pulse flex flex-col"
                >
                  <div className="h-48 bg-muted/40 rounded-t-lg"></div>
                  <div className="p-6 space-y-3 flex-grow card-content-area">
                    <div className="h-4 bg-muted/40 rounded w-3/4"></div>
                    <div className="h-4 bg-muted/40 rounded w-1/2"></div>
                    <div className="h-4 bg-muted/40 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : sortedPosts.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {sortedPosts.map((post, index) => (
                <div key={post.id} className="h-full">
                  <BlogCard post={post} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-lg border border-border bg-card p-12 text-center"
            >
              <h3 className="mb-2 text-xl font-medium text-high-contrast">No posts found</h3>
              <p className="text-medium-contrast">
                Try adjusting your filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
} 