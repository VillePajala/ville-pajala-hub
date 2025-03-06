'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { blogCategories, blogPosts } from '@/lib/data/blog-data'

export default function BlogCategoriesPage() {
  // Group posts by category
  const postsByCategory = blogCategories.reduce((acc, category) => {
    acc[category] = blogPosts.filter(post => post.categories.includes(category));
    return acc;
  }, {} as Record<string, typeof blogPosts>);

  // Selected category for mobile view
  const [selectedCategoryMobile, setSelectedCategoryMobile] = useState(blogCategories[0]);

  return (
    <PageTransition>
      <Section
        title="Blog Categories"
        description="Explore content organized by subject area and theme."
      >
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground">
            Browse articles and essays organized by category. Each category represents a key area of focus, 
            from technology and AI to creative pursuits, philosophical explorations, and metaphysical inquiries.
          </p>
          
          {/* Desktop view - Side by side categories and posts */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {/* Categories sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-2">
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <ul className="space-y-1">
                  {blogCategories.map((category) => (
                    <li key={category}>
                      <Link 
                        href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block p-2 rounded-md hover:bg-secondary/50 transition-colors"
                      >
                        {category}
                        <span className="ml-2 text-xs text-muted-foreground">
                          ({postsByCategory[category].length})
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Posts by category */}
            <div className="md:col-span-3 space-y-12">
              {blogCategories.map((category) => (
                <div 
                  key={category} 
                  id={category.toLowerCase().replace(/\s+/g, '-')} 
                  className="scroll-mt-24"
                >
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">
                    {category}
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {postsByCategory[category].map((post) => (
                      <Card key={post.id}>
                        <div className="aspect-[16/9] w-full overflow-hidden">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="h-full w-full object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">
                            {post.date.toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/blog/${post.slug}`}>Read More</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile view - Dropdown to select category */}
          <div className="md:hidden space-y-8">
            <div className="rounded-lg border border-border p-4">
              <label htmlFor="category-select" className="text-sm font-medium block mb-2">
                Select Category
              </label>
              <select 
                id="category-select"
                value={selectedCategoryMobile}
                onChange={(e) => setSelectedCategoryMobile(e.target.value)}
                className="w-full p-2 rounded-md bg-background border border-border"
              >
                {blogCategories.map((category) => (
                  <option key={category} value={category}>
                    {category} ({postsByCategory[category].length})
                  </option>
                ))}
              </select>
            </div>
            
            <motion.div 
              key={selectedCategoryMobile}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
                {selectedCategoryMobile}
              </h2>
              <div className="space-y-6">
                {postsByCategory[selectedCategoryMobile].map((post) => (
                  <Card key={post.id}>
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="h-full w-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {post.date.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/blog/${post.slug}`}>Read More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="rounded-lg border border-border bg-secondary/10 p-6 text-center mt-12">
            <h3 className="text-xl font-semibold mb-3">Looking for Something Specific?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              If you're interested in a particular topic that doesn't fit into these categories, 
              you can explore tags or use the search function to find relevant content.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="/blog">View All Posts</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Request a Topic</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 