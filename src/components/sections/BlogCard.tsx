import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  date: Date
  categories: string[]
  tags: string[]
  imageUrl?: string
}

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined)
  
  // Defer image loading until component is mounted
  useEffect(() => {
    if (post.imageUrl) {
      setImgSrc(post.imageUrl)
    }
  }, [post.imageUrl])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    // Fallback to a placeholder image
    setImgSrc('/images/placeholder-image.svg')
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="blog-card overflow-hidden rounded-lg border border-border h-full flex flex-col shadow-md"
    >
      <div className="h-48 w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-muted/40 animate-pulse"></div>
        {imgSrc && (
          <img 
            src={imgSrc} 
            alt={post.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`h-full w-full object-cover transition-transform duration-300 hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        )}
      </div>
      
      {/* Content area with improved visibility and responsive padding */}
      <div className="card-content-area p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
        <div className="mb-2 flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <span 
              key={category} 
              className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="blog-card-title mb-2 text-xl">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        
        <p className="blog-card-excerpt mb-4 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/20">
          <time dateTime={post.date.toISOString()} className="text-sm text-medium-contrast">
            {formatDate(post.date)}
          </time>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </motion.article>
  )
} 