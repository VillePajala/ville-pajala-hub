'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function WebDevelopmentPage() {
  // Mock web development projects data - will be replaced with actual data from Sanity
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js, featuring product listings, cart functionality, and secure checkout.',
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe']
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      description: 'An intuitive SaaS dashboard interface with analytics, user management, and subscription handling.',
      image: 'https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'Next.js', 'Supabase', 'ChartJS']
    },
    {
      id: 3,
      title: 'Content Management System',
      description: 'A custom CMS designed for content creators, with flexible content modeling and publishing workflows.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Sanity.io', 'React', 'Next.js', 'GROQ']
    }
  ]

  // Technologies with expertise levels
  const technologies = [
    { name: 'Next.js', level: 'Expert', description: 'Server-side rendering, static site generation, and API routes' },
    { name: 'React', level: 'Expert', description: 'Component-based UI development with hooks and context' },
    { name: 'TypeScript', level: 'Expert', description: 'Type-safe JavaScript development' },
    { name: 'Tailwind CSS', level: 'Expert', description: 'Utility-first CSS framework for rapid UI development' },
    { name: 'Node.js', level: 'Advanced', description: 'Server-side JavaScript runtime' },
    { name: 'GraphQL', level: 'Advanced', description: 'Query language for APIs' },
    { name: 'Supabase', level: 'Advanced', description: 'Open source Firebase alternative with PostgreSQL' },
    { name: 'Sanity.io', level: 'Advanced', description: 'Headless CMS for structured content' }
  ]

  return (
    <PageTransition>
      <Section
        title="Web Development"
        description="Modern, responsive, and user-friendly web applications built with cutting-edge technologies."
      >
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden flex flex-col">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Technical Expertise</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {technologies.map((tech) => (
                <Card key={tech.name} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{tech.name}</CardTitle>
                    <CardDescription>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        tech.level === 'Expert' ? 'bg-primary/20 text-primary' : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {tech.level}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-xl font-semibold">Need a Web Development Solution?</h2>
            <p className="text-muted-foreground">
              Whether you need a new website, a complex web application, or improvements to your existing digital presence, I can help bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services/web-app-development">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 