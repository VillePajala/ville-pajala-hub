import { BlogPost } from '@/components/sections/BlogCard'

// More reliable Unsplash URLs using their production-ready format
const getUnsplashUrl = (id: string, width = 800, height = 500) => 
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;

// Mock data for blog posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js and TypeScript',
    slug: 'getting-started-with-nextjs-and-typescript',
    excerpt: 'A comprehensive guide to setting up a new project with Next.js and TypeScript, including best practices and common pitfalls.',
    date: new Date('2023-12-15'),
    categories: ['Technology & AI', 'Web Development'],
    tags: ['Next.js', 'TypeScript', 'Tutorial', 'Beginner'],
    imageUrl: getUnsplashUrl('1555066931-4365d14bab8c')
  },
  {
    id: '2',
    title: 'The Philosophy of Artificial Intelligence',
    slug: 'the-philosophy-of-artificial-intelligence',
    excerpt: 'Exploring the philosophical implications of AI development and how it shapes our understanding of consciousness and intelligence.',
    date: new Date('2023-11-20'),
    categories: ['Philosophy & Learning', 'Technology & AI'],
    tags: ['AI', 'Philosophy', 'Ethics', 'Advanced'],
    imageUrl: getUnsplashUrl('1620712943543-bcc4688e7485')
  },
  {
    id: '3',
    title: 'Creating Immersive Experiences with Framer Motion',
    slug: 'creating-immersive-experiences-with-framer-motion',
    excerpt: 'Learn how to use Framer Motion to create engaging animations and transitions in your React applications.',
    date: new Date('2023-12-01'),
    categories: ['Creative Work', 'Web Development'],
    tags: ['Animation', 'React', 'Tutorial', 'Intermediate'],
    imageUrl: getUnsplashUrl('1550745165-9bc0b252726f')
  },
  {
    id: '4',
    title: 'Intuitive Problem Solving in Software Development',
    slug: 'intuitive-problem-solving-in-software-development',
    excerpt: 'How to develop your intuition to solve complex programming problems more efficiently.',
    date: new Date('2023-10-15'),
    categories: ['Metaphysics', 'Philosophy & Learning'],
    tags: ['Problem Solving', 'Creativity', 'Intuition', 'Advanced'],
    imageUrl: getUnsplashUrl('1543966888-7c1dc482a810')
  },
  {
    id: '5',
    title: 'Building Creative AI Projects with TensorFlow',
    slug: 'building-creative-ai-projects-with-tensorflow',
    excerpt: 'A hands-on guide to developing creative applications using TensorFlow and machine learning techniques.',
    date: new Date('2023-11-05'),
    categories: ['Technology & AI', 'Creative Work'],
    tags: ['TensorFlow', 'Machine Learning', 'Tutorial', 'Intermediate'],
    imageUrl: getUnsplashUrl('1677442136019-21780ecad478')
  },
  {
    id: '6',
    title: 'The Art of Technical Writing',
    slug: 'the-art-of-technical-writing',
    excerpt: 'How to write clear, concise, and engaging technical documentation that users will actually want to read.',
    date: new Date('2023-09-28'),
    categories: ['Philosophy & Learning', 'Web Development'],
    tags: ['Writing', 'Documentation', 'Communication', 'Beginner'],
    imageUrl: getUnsplashUrl('1455390582262-044cdead277a')
  }
]

// Extract unique categories from blog posts
export const blogCategories = Array.from(
  new Set(blogPosts.flatMap(post => post.categories))
)

// Extract unique tags from blog posts
export const blogTags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
) 