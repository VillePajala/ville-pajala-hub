import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-lg border border-border bg-card"
    >
      {post.imageUrl && (
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
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
        <h3 className="mb-2 text-xl font-semibold">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <time dateTime={post.date.toISOString()} className="text-sm text-muted-foreground">
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