import { Service } from '@/components/sections/ServiceCard'

// More reliable Unsplash URLs using their production-ready format
const getUnsplashUrl = (id: string, width = 800, height = 500) => 
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;

// Mock data for services
export const services: Service[] = [
  {
    id: '1',
    title: 'AI & Machine Learning Services',
    slug: 'ai-machine-learning',
    description: 'Harness the power of artificial intelligence for your business with custom solutions and strategic implementation.',
    features: [
      'AI strategy consulting and implementation planning',
      'Custom machine learning model development',
      'Natural language processing solutions',
      'Computer vision applications',
      'AI integration with existing systems'
    ],
    categories: ['Artificial Intelligence', 'Data Science', 'Consulting'],
    imageUrl: getUnsplashUrl('1620712943543-bcc4688e7485')
  },
  {
    id: '2',
    title: 'Automation Solutions',
    slug: 'automation-solutions',
    description: 'Streamline your workflows and increase efficiency with custom automation solutions tailored to your business needs.',
    features: [
      'Business process automation',
      'Workflow optimization and redesign',
      'Custom automation scripts and tools',
      'Integration between different platforms',
      'Automated testing and quality assurance'
    ],
    categories: ['Automation', 'Efficiency', 'Business'],
    imageUrl: getUnsplashUrl('1555066931-4365d14bab8c')
  },
  {
    id: '3',
    title: 'Web & App Development',
    slug: 'web-app-development',
    description: 'Modern, responsive, and user-friendly digital experiences built with cutting-edge technologies and best practices.',
    features: [
      'Website and web application development',
      'Progressive web apps (PWAs)',
      'E-commerce solutions',
      'Content management systems (CMS)',
      'Performance optimization and SEO'
    ],
    categories: ['Web Development', 'Frontend', 'Backend'],
    imageUrl: getUnsplashUrl('1517245386807-bb43389b5b1b')
  },
  {
    id: '4',
    title: 'Creative Technology',
    slug: 'creative-technology',
    description: 'Innovative solutions that blend art, design, and technology to create memorable digital experiences.',
    features: [
      'Interactive installations and experiences',
      'Generative art and design',
      'Creative coding projects',
      'Digital storytelling applications',
      'Experimental interfaces and interactions'
    ],
    categories: ['Creativity', 'Design', 'Innovation'],
    imageUrl: getUnsplashUrl('1550745165-9bc0b252726f')
  },
  {
    id: '5',
    title: 'Data Analysis & Visualization',
    slug: 'data-analysis-visualization',
    description: 'Transform your data into actionable insights through sophisticated analysis and compelling visualizations.',
    features: [
      'Data exploration and preprocessing',
      'Statistical analysis and modeling',
      'Interactive dashboards and reports',
      'Custom visualization development',
      'Data storytelling and communication'
    ],
    categories: ['Data Analysis', 'Visualization', 'Business Intelligence'],
    imageUrl: getUnsplashUrl('1551288049-dabada3f2327')
  },
  {
    id: '6',
    title: 'Technical Consulting',
    slug: 'technical-consulting',
    description: 'Expert guidance on technology decisions, architecture, and implementation strategies for your projects.',
    features: [
      'Technology stack selection',
      'System architecture design',
      'Performance and security audits',
      'Technical documentation',
      'Team training and knowledge transfer'
    ],
    categories: ['Consulting', 'Architecture', 'Strategy'],
    imageUrl: getUnsplashUrl('1544717297-fa95b93b4ce7')
  }
]

// Extract unique categories from services
export const serviceCategories = Array.from(
  new Set(services.flatMap(service => service.categories))
) 