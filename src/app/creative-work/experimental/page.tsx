'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function ExperimentalPage() {
  // Mock experimental projects data - will be replaced with actual data from Sanity
  const experimentalProjects = [
    {
      id: 1,
      title: 'Neural Typography',
      description: 'An experiment in using neural networks to generate dynamic typography that responds to semantic meaning.',
      image: 'https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
      year: '2023',
      category: 'AI + Design',
      link: '#'
    },
    {
      id: 2,
      title: 'Biodata Sonification',
      description: 'Transforming biological data from plants and fungi into musical compositions that reflect their living processes.',
      image: 'https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
      year: '2022',
      category: 'Bioart + Sound',
      link: '#'
    },
    {
      id: 3,
      title: 'Collective Consciousness Visualizer',
      description: 'A real-time visualization of social media sentiment analysis, creating abstract representations of collective emotional states.',
      image: 'https://images.unsplash.com/photo-1501250987900-211872d97eaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      year: '2023',
      category: 'Data Visualization',
      link: '#'
    },
    {
      id: 4,
      title: 'Quantum Random Poetry Generator',
      description: 'A poetry generator that uses quantum random number generation to create truly non-deterministic verse structures.',
      image: 'https://images.unsplash.com/photo-1603792907757-d3e2a237dc48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
      year: '2022',
      category: 'Quantum Computing + Literature',
      link: '#'
    },
    {
      id: 5,
      title: 'Synaesthetic Interface',
      description: 'An experimental user interface that translates interactions into cross-sensory experiences, blending sound, color, and haptic feedback.',
      image: 'https://images.unsplash.com/photo-1624969862644-791f3dc98927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      year: '2021',
      category: 'Human-Computer Interaction',
      link: '#'
    },
    {
      id: 6,
      title: 'Dream Architecture',
      description: 'Architectural structures and spaces generated from dream journal entries using GANs and 3D modeling.',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80',
      year: '2023',
      category: 'AI + Architecture',
      link: '#'
    }
  ]

  return (
    <PageTransition>
      <Section
        title="Experimental Projects"
        description="Explorations at the intersection of technology, art, and human experience."
      >
        <div className="space-y-10">
          <p className="text-lg text-muted-foreground">
            My experimental work pushes boundaries and explores new possibilities by combining diverse disciplines and emerging technologies. These projects often don't fit neatly into categories, instead existing at the intersections of art, technology, science, and philosophy.
          </p>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experimentalProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden flex flex-col h-full">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href={project.link}>Explore Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Experimental Approach</h3>
                <p className="text-muted-foreground">
                  My experimental projects embrace uncertainty, failure, and unexpected outcomes as crucial parts of the creative process. I often start with a question or hypothesis rather than a predetermined result, allowing the work to evolve through iteration and discovery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Collaborative Spirit</h3>
                <p className="text-muted-foreground">
                  Many of these projects involve collaboration with specialists from different fields—scientists, musicians, architects, and researchers—creating unique interdisciplinary intersections where new ideas can emerge.
                </p>
                <div className="mt-4">
                  <Button variant="outline" asChild>
                    <Link href="/contact">Discuss Collaboration</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background p-8 rounded-lg text-center border border-border/50">
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-xl italic mb-4">
                "The most interesting things happen at the boundaries between disciplines."
              </p>
              <footer className="text-muted-foreground">— Personal design philosophy</footer>
            </blockquote>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 