'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { BlogCard, BlogPost } from '@/components/sections/BlogCard'
import { BlogFilter } from '@/components/sections/BlogFilter'
import { blogPosts, blogCategories, blogTags } from '@/lib/data/blog-data'

export default function BlogPage() {
  const [filters, setFilters] = useState<{ categories: string[]; tags: string[] }>({
    categories: [],
    tags: []
  })

  // Filter posts based on selected categories and tags
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
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
  }, [filters])

  // Sort posts by date (newest first)
  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => b.date.getTime() - a.date.getTime())
  }, [filteredPosts])

  return (
    <div>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="text-xl text-muted-foreground">
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
          {sortedPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
              {sortedPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-lg border border-border bg-card p-12 text-center"
            >
              <h3 className="mb-2 text-xl font-medium">No posts found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
} 