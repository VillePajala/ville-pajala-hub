'use client'

import { motion } from 'framer-motion'
import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { blogPosts } from '@/lib/data/blog-data'

export default function BlogFeaturedPage() {
  // For demo purposes, we'll select a few posts as "featured"
  // In a real implementation, this would be a property in the CMS
  const featuredPosts = blogPosts
    .slice(0, 5)
    .map(post => ({ ...post, featured: true, reason: getFeaturedReason(post.id) }));
  
  const mainFeature = featuredPosts[0];
  const secondaryFeatures = featuredPosts.slice(1);

  // Generate a reason for featuring (mock data)
  function getFeaturedReason(id: string): string {
    const reasons = [
      "Editor's Pick",
      "Most Popular",
      "Recent Highlight",
      "Essential Reading",
      "Thought Leadership"
    ];
    return reasons[parseInt(id) % reasons.length];
  }

  return (
    <PageTransition>
      <Section
        title="Featured Articles"
        description="Highlighted content selected for impact, relevance, and insight."
      >
        <div className="space-y-12">
          {/* Main featured article */}
          <Card className="overflow-hidden border-primary/20">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:order-2 h-full">
                <div className="h-full aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img 
                    src={mainFeature.imageUrl} 
                    alt={mainFeature.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {mainFeature.reason}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{mainFeature.title}</h2>
                <p className="text-muted-foreground mb-6">{mainFeature.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {mainFeature.date.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <Button asChild>
                    <Link href={`/blog/${mainFeature.slug}`}>Read Article</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Secondary featured articles */}
          <div>
            <h3 className="text-2xl font-bold mb-6">More Featured Articles</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {secondaryFeatures.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="h-full w-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="mb-2">
                        <span className="inline-flex items-center rounded-full bg-secondary/70 px-2.5 py-0.5 text-xs font-medium">
                          {post.reason}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={`/blog/${post.slug}`}>Read Article</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Featured by category */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Featured by Category</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {['Technology & AI', 'Creative Work', 'Philosophy & Learning'].map((category, index) => {
                const categoryPost = blogPosts.find(post => post.categories.includes(category));
                if (!categoryPost) return null;
                
                return (
                  <Card key={category} className="h-full flex flex-col">
                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                      <img 
                        src={categoryPost.imageUrl} 
                        alt={categoryPost.title} 
                        className="h-full w-full object-cover transition-all hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                        <div className="p-4">
                          <h4 className="text-lg font-bold mb-1 text-foreground">{category}</h4>
                          <p className="text-sm text-muted-foreground">Featured content</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="flex-grow">
                      <h4 className="font-medium mb-2">{categoryPost.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">{categoryPost.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={`/blog/categories#${category.toLowerCase().replace(/\s+/g, '-')}`}>
                          More in {category}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
          
          <div className="rounded-lg border border-border bg-secondary/10 p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Subscribe to Stay Updated</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              Get the latest featured articles delivered directly to your inbox. Subscribe to the newsletter for weekly updates, exclusive content, and more.
            </p>
            <Button asChild>
              <Link href="/subscribe">Subscribe Now</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 