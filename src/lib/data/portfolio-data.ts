import { PortfolioProject } from '@/components/sections/PortfolioCard'

// More reliable Unsplash URLs using their production-ready format
const getUnsplashUrl = (id: string, width = 800, height = 500) => 
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;

// Mock data for portfolio projects
export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    completionDate: new Date('2023-11-15'),
    categories: ['Web Development', 'Full Stack'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: getUnsplashUrl('1517245386807-bb43389b5b1b')
  },
  {
    id: '2',
    title: 'AI Content Generator',
    slug: 'ai-content-generator',
    description: 'An AI-powered application that generates high-quality written content based on user prompts and guidelines.',
    completionDate: new Date('2023-10-20'),
    categories: ['Artificial Intelligence', 'Machine Learning'],
    technologies: ['Python', 'TensorFlow', 'GPT-3', 'Flask'],
    imageUrl: getUnsplashUrl('1620712943543-bcc4688e7485')
  },
  {
    id: '3',
    title: 'Interactive Data Visualization',
    slug: 'interactive-data-visualization',
    description: 'A powerful data visualization tool that transforms complex datasets into interactive, understandable visual representations.',
    completionDate: new Date('2023-09-01'),
    categories: ['Data Science', 'Web Development'],
    technologies: ['D3.js', 'React', 'TypeScript', 'Python'],
    imageUrl: getUnsplashUrl('1551288049-dabada3f2327')
  },
  {
    id: '4',
    title: 'Mobile Fitness Application',
    slug: 'mobile-fitness-application',
    description: 'A comprehensive fitness tracking app with workout plans, progress monitoring, and social features.',
    completionDate: new Date('2023-08-15'),
    categories: ['Mobile Development', 'UI/UX Design'],
    technologies: ['React Native', 'Firebase', 'Redux', 'Figma'],
    imageUrl: getUnsplashUrl('1556139943-4bdca53adf1e')
  },
  {
    id: '5',
    title: 'Blockchain Voting System',
    slug: 'blockchain-voting-system',
    description: 'A secure, transparent voting system built on blockchain technology for organizational decision-making.',
    completionDate: new Date('2023-07-05'),
    categories: ['Blockchain', 'Security'],
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React'],
    imageUrl: getUnsplashUrl('1639322537230-f3049628e231')
  },
  {
    id: '6',
    title: 'Augmented Reality Art Exhibition',
    slug: 'augmented-reality-art-exhibition',
    description: 'An innovative AR application that transforms physical spaces into immersive art galleries viewable through mobile devices.',
    completionDate: new Date('2023-06-28'),
    categories: ['Augmented Reality', 'Creative Technologies'],
    technologies: ['Unity', 'ARKit', 'ARCore', 'C#'],
    imageUrl: getUnsplashUrl('1633943081803-c0f5f97e8e30')
  }
]

// Extract unique categories from portfolio projects
export const portfolioCategories = Array.from(
  new Set(portfolioProjects.flatMap(project => project.categories))
)

// Extract unique technologies from portfolio projects
export const portfolioTechnologies = Array.from(
  new Set(portfolioProjects.flatMap(project => project.technologies))
) 