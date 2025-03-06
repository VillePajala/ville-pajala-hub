'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { blogPosts } from '@/lib/data/blog-data'
import { BlogPost } from '@/components/sections/BlogCard'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [readingProgress, setReadingProgress] = useState(0)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  // Find the blog post by slug
  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug)
    setPost(foundPost || null)
    setIsLoading(false)

    // Find related posts (same category or tags)
    if (foundPost) {
      const related = blogPosts
        .filter((p) => 
          p.id !== foundPost.id && (
            p.categories.some((cat) => foundPost.categories.includes(cat)) ||
            p.tags.some((tag) => foundPost.tags.includes(tag))
          )
        )
        .sort(() => 0.5 - Math.random()) // Randomize order
        .slice(0, 2) // Limit to 2 posts
      setRelatedPosts(related)
    }
  }, [slug])

  // Reading progress tracking
  useEffect(() => {
    const updateReadingProgress = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = Math.min(100, Math.round((window.scrollY / totalHeight) * 100))
      setReadingProgress(progress)
    }

    window.addEventListener('scroll', updateReadingProgress)
    return () => window.removeEventListener('scroll', updateReadingProgress)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold">Blog Post Not Found</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          The post you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/blog" 
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Reading progress bar */}
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-border">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>

      <article className="mx-auto max-w-3xl">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/blog" 
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to Blog
          </Link>
          
          <div className="mb-2 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span 
                key={category} 
                className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
              >
                {category}
              </span>
            ))}
          </div>
          
          <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
          
          <div className="mb-6 flex items-center gap-4">
            <time dateTime={post.date.toISOString()} className="text-muted-foreground">
              {formatDate(post.date)}
            </time>
            <div className="flex items-center gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm text-muted-foreground">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {post.imageUrl && (
            <div className="mb-8 overflow-hidden rounded-xl">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full object-cover"
              />
            </div>
          )}
        </motion.header>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="prose prose-invert max-w-none">
            <p className="lead">{post.excerpt}</p>
            
            {/* Placeholder content for blog post - this would come from the CMS in a real implementation */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tempor
              consectetur, nisl nunc aliquet nunc, eget tincidunt nisl nisl vitae nisl. Sed euismod,
              urna eu tempor consectetur, nisl nunc aliquet nunc, eget tincidunt nisl nisl vitae nisl.
            </p>
            
            <h2>Introduction</h2>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur
              non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci
              porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            </p>

            <h2>Main Concepts</h2>
            <p>
              Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.
              Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
            </p>
            
            <ul>
              <li>Cras ultricies ligula sed magna dictum porta.</li>
              <li>Praesent sapien massa, convallis a pellentesque nec.</li>
              <li>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</li>
            </ul>
            
            <h2>Implementation Details</h2>
            <p>
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit
              tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed,
              convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </p>
            
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor
              lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget
              malesuada. Donec rutrum congue leo eget malesuada.
            </p>
            
            <h2>Conclusion</h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum
              congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac
              lectus.
            </p>
          </div>
          
          <div className="mt-12 flex gap-4">
            {post.tags.map((tag) => (
              <Link 
                key={tag}
                href={`/blog?tag=${tag}`}
                className="rounded-full bg-card border border-border px-4 py-2 text-sm hover:bg-secondary/10"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </motion.div>
      </article>
      
      {relatedPosts.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="mb-8 text-2xl font-bold">Related Posts</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {relatedPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </motion.section>
      )}
    </div>
  )
} 