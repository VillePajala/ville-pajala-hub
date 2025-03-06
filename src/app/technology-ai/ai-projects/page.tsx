'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function AIProjectsPage() {
  // Mock AI projects data - will be replaced with actual data from Sanity
  const projects = [
    {
      id: 1,
      title: 'Natural Language Processing Assistant',
      description: 'An AI assistant built with state-of-the-art NLP models to understand and respond to complex queries.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['NLP', 'Machine Learning', 'Python']
    },
    {
      id: 2,
      title: 'Computer Vision Object Detector',
      description: 'Real-time object detection system using computer vision to identify and track objects in video streams.',
      image: 'https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
      tags: ['Computer Vision', 'Deep Learning', 'TensorFlow']
    },
    {
      id: 3,
      title: 'Predictive Analytics Dashboard',
      description: 'Business intelligence dashboard with predictive analytics capabilities to forecast trends and outcomes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['Data Science', 'Analytics', 'Visualization']
    },
    {
      id: 4,
      title: 'Generative AI Art System',
      description: 'Creative AI system that generates unique artwork based on text prompts and style references.',
      image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1510&q=80',
      tags: ['Generative AI', 'Art', 'Diffusion Models']
    }
  ]

  return (
    <PageTransition>
      <Section
        title="AI Projects"
        description="Innovative projects leveraging artificial intelligence and machine learning technologies."
      >
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground">
            Explore a collection of AI and machine learning projects, from natural language processing to computer vision applications and generative models.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Project Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Interested in a Custom AI Solution?</h3>
            <p className="text-muted-foreground mb-4">
              Let's discuss how AI can solve your specific challenges and drive innovation for your business.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 