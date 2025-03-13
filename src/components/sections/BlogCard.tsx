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
      className="blog-card overflow-hidden rounded-lg border border-white/10 h-full flex flex-col bg-black/30 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
    >
      <div className="h-48 w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-muted/40 animate-pulse"></div>
        {imgSrc && (
          <img 
            src={imgSrc} 
            alt={post.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`h-full w-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ filter: 'brightness(1.05)' }}
            loading="lazy"
          />
        )}
        {/* Lighter image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      {/* Content area with refined styling */}
      <div className="p-6 flex-grow flex flex-col bg-black/25">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <span 
              key={category} 
              className="text-xs font-medium text-white/70 uppercase tracking-wider"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="mb-3 text-xl font-serif font-medium text-white">
          <Link href={`/blog/${post.slug}`} className="hover:text-white/80 transition-colors duration-300">
            {post.title}
          </Link>
        </h3>
        
        <p className="mb-6 flex-grow text-white/70 text-sm leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <time dateTime={post.date.toISOString()} className="text-sm text-white/50 font-light">
            {formatDate(post.date)}
          </time>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-white hover:text-white/80 transition-colors duration-300"
          >
            Read Article
          </Link>
        </div>
      </div>
    </motion.article>
  )
} 