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
      className="group blog-card overflow-hidden rounded-lg border border-white/10 h-full flex flex-col bg-gradient-to-br from-zinc-900/50 to-zinc-700/30 backdrop-blur-sm hover:border-white/30 hover:shadow-xl hover:shadow-zinc-900/20 hover:-translate-y-2 hover:scale-[1.03] hover:rotate-[0.3deg] transition-all duration-500 ease-out"
    >
      <div className="h-48 w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-muted/40 animate-pulse"></div>
        {imgSrc && (
          <img 
            src={imgSrc} 
            alt={post.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`h-full w-full object-cover transition-all duration-700 ease-out ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-110 group-hover:brightness-110`}
            style={{ filter: 'brightness(1.15)' }}
            loading="lazy"
          />
        )}
        {/* Lighter image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/45 to-transparent transition-opacity duration-500 group-hover:from-zinc-800/40"></div>
      </div>
      
      {/* Content area with refined styling */}
      <div className="p-6 flex-grow flex flex-col bg-gradient-to-b from-zinc-800/20 via-zinc-700/25 to-zinc-600/30">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <span 
              key={category} 
              className="text-xs font-medium text-white/85 uppercase tracking-wider transition-all duration-500 group-hover:text-white"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="mb-3 text-xl font-serif font-medium text-white/95 transition-transform duration-500 group-hover:translate-x-1">
          <Link href={`/blog/${post.slug}`} className="hover:text-white transition-colors duration-300">
            {post.title}
          </Link>
        </h3>
        
        <p className="mb-6 flex-grow text-white/85 text-sm leading-relaxed transition-all duration-500 group-hover:text-white/90">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10 transition-colors duration-500 group-hover:border-white/20">
          <time dateTime={post.date.toISOString()} className="text-sm text-white/60 font-light transition-colors duration-500 group-hover:text-white/75">
            {formatDate(post.date)}
          </time>
          <Link 
            href={`/blog/${post.slug}`}
            className="relative text-sm font-medium text-white/90 transition-all duration-500 group-hover:text-white group-hover:translate-x-1 after:absolute after:w-0 after:h-[1px] after:bg-white/70 after:bottom-[-2px] after:left-0 after:transition-all after:duration-500 group-hover:after:w-full"
          >
            Read Article
          </Link>
        </div>
      </div>
    </motion.article>
  )
} 