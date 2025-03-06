'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useState } from 'react'

export default function PortfolioTechnologiesPage() {
  // Technology categories with their technologies
  const technologyCategories = [
    {
      name: "Frontend",
      description: "Technologies for building user interfaces and client-side applications.",
      technologies: [
        {
          name: "React",
          level: "Expert",
          description: "A JavaScript library for building user interfaces with a component-based architecture",
          projectsCount: 48,
          icon: "⚛️"
        },
        {
          name: "Next.js",
          level: "Expert",
          description: "React framework with built-in features like routing, server-side rendering, and more",
          projectsCount: 35,
          icon: "▲"
        },
        {
          name: "TypeScript",
          level: "Expert",
          description: "Strongly typed programming language that builds on JavaScript",
          projectsCount: 52,
          icon: "TS"
        },
        {
          name: "Tailwind CSS",
          level: "Expert",
          description: "Utility-first CSS framework for rapidly building custom designs",
          projectsCount: 40,
          icon: "🎨"
        },
        {
          name: "Framer Motion",
          level: "Advanced",
          description: "Production-ready motion library for React to create animations",
          projectsCount: 22,
          icon: "🔄"
        }
      ]
    },
    {
      name: "Backend",
      description: "Technologies for server-side development, APIs, and data processing.",
      technologies: [
        {
          name: "Node.js",
          level: "Expert",
          description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
          projectsCount: 45,
          icon: "🟢"
        },
        {
          name: "Express",
          level: "Advanced",
          description: "Fast, unopinionated, minimalist web framework for Node.js",
          projectsCount: 38,
          icon: "🚂"
        },
        {
          name: "GraphQL",
          level: "Advanced",
          description: "Query language for APIs and a runtime for fulfilling those queries",
          projectsCount: 17,
          icon: "◢"
        },
        {
          name: "Python",
          level: "Advanced",
          description: "Versatile programming language used for automation, data analysis, and backend development",
          projectsCount: 26,
          icon: "🐍"
        }
      ]
    },
    {
      name: "Data & Content",
      description: "Technologies for data storage, content management, and databases.",
      technologies: [
        {
          name: "Supabase",
          level: "Expert",
          description: "Open source Firebase alternative with PostgreSQL database and authentication",
          projectsCount: 19,
          icon: "⚡"
        },
        {
          name: "Sanity.io",
          level: "Expert",
          description: "Headless CMS with structured content and a customizable editing environment",
          projectsCount: 24,
          icon: "📝"
        },
        {
          name: "PostgreSQL",
          level: "Advanced",
          description: "Powerful, open source object-relational database system",
          projectsCount: 31,
          icon: "🐘"
        },
        {
          name: "MongoDB",
          level: "Advanced",
          description: "NoSQL document database for modern applications",
          projectsCount: 14,
          icon: "🍃"
        }
      ]
    },
    {
      name: "AI & Machine Learning",
      description: "Technologies for artificial intelligence and machine learning applications.",
      technologies: [
        {
          name: "TensorFlow",
          level: "Advanced",
          description: "End-to-end open source platform for machine learning",
          projectsCount: 11,
          icon: "📊"
        },
        {
          name: "OpenAI API",
          level: "Expert",
          description: "API access to GPT models for natural language processing tasks",
          projectsCount: 23,
          icon: "🧠"
        },
        {
          name: "Hugging Face",
          level: "Advanced",
          description: "Platform providing pre-trained models and tools for natural language processing",
          projectsCount: 9,
          icon: "🤗"
        },
        {
          name: "Pandas",
          level: "Advanced",
          description: "Data analysis and manipulation library for Python",
          projectsCount: 18,
          icon: "🐼"
        }
      ]
    }
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState(technologyCategories[0].name);

  // Get active category data
  const activeCategoryData = technologyCategories.find(cat => cat.name === activeCategory) || technologyCategories[0];

  return (
    <PageTransition>
      <Section
        title="Technologies"
        description="Explore the technologies, frameworks, and tools used across portfolio projects."
      >
        <div className="space-y-10">
          <p className="text-lg text-muted-foreground">
            This page showcases the range of technologies I work with, organized by category. Each 
            technology includes information about my expertise level and the number of projects in 
            which I've applied it. This overview demonstrates both the breadth and depth of my 
            technical capabilities.
          </p>
          
          {/* Category tabs */}
          <div className="border-b border-border">
            <div className="flex overflow-x-auto space-x-1">
              {technologyCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                    activeCategory === category.name
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Category description */}
          <div>
            <h2 className="text-2xl font-bold mb-2">{activeCategoryData.name}</h2>
            <p className="text-muted-foreground">{activeCategoryData.description}</p>
          </div>
          
          {/* Technologies grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {activeCategoryData.technologies.map((tech) => (
              <Card key={tech.name} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <CardTitle>{tech.name}</CardTitle>
                    </div>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      tech.level === 'Expert' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {tech.level}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{tech.description}</p>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="font-medium">{tech.projectsCount}</span>
                    <span className="text-muted-foreground">projects completed</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/portfolio?tech=${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      View Projects
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Approach section */}
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="text-xl font-semibold mb-6">My Technical Approach</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium">Technology Selection</h4>
                <p className="text-sm text-muted-foreground">
                  I select technologies based on project requirements, performance considerations, and long-term maintainability—not just current trends. This ensures solutions that are both modern and sustainable.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">
                  The technology landscape constantly evolves. I maintain a regular practice of exploring new tools and approaches, evaluating their potential, and incorporating those that provide genuine value.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Best Practices</h4>
                <p className="text-sm text-muted-foreground">
                  Across all technologies, I emphasize clean code, comprehensive testing, thoughtful documentation, and performance optimization to create maintainable, robust solutions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Need Technical Expertise?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Whether you need development work using these technologies or guidance on which technical approach 
              would best suit your project, I can help. Let's discuss your specific needs and explore how these 
              technologies can be applied to achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 