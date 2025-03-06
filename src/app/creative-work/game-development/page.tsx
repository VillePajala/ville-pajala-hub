'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function GameDevelopmentPage() {
  // Mock game development projects data - will be replaced with actual data from Sanity
  const gameProjects = [
    {
      id: 1,
      title: 'Quantum Paradox',
      description: 'An experimental puzzle game that uses quantum mechanics concepts as gameplay mechanics.',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      year: '2023',
      platform: 'WebGL, Desktop',
      status: 'In Development',
      technologies: ['Unity', 'C#', 'WebGL', 'Shader Programming']
    },
    {
      id: 2,
      title: 'Neural Netrunner',
      description: 'A cyberpunk narrative game where players interact with simulated AI entities in a virtual reality.',
      image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      year: '2022',
      platform: 'Web, Mobile',
      status: 'Released',
      technologies: ['React', 'Three.js', 'GPT-3 API', 'Web Audio API']
    },
    {
      id: 3,
      title: 'Biofeedback Meditation',
      description: 'An interactive experience that uses biofeedback sensors to create a personalized meditation environment.',
      image: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1439&q=80',
      year: '2021',
      platform: 'Desktop, Custom Hardware',
      status: 'Released',
      technologies: ['Unity', 'Arduino', 'Biosensors', 'Procedural Generation']
    }
  ]

  return (
    <PageTransition>
      <Section
        title="Game Development"
        description="Interactive experiences, experimental games, and narrative adventures."
      >
        <div className="space-y-10">
          <p className="text-lg text-muted-foreground">
            My game development projects explore new forms of interactivity, narrative, and player experience. These works range from experimental art games to interactive installations, often incorporating technologies like AI, biofeedback, and procedural generation.
          </p>
          
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {gameProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden flex flex-col">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      project.status === 'Released' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <CardDescription>{project.platform} • {project.year}</CardDescription>
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
                  <Button variant="outline">View Project</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Game Design Philosophy</h3>
              <p className="text-muted-foreground">
                I approach game development as a medium for exploration and expression, using interactivity to create experiences that challenge players intellectually and emotionally. My designs often blur the lines between games, art, and experimental technology, focusing on novel mechanics and meaningful player agency.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Approach</h3>
              <p className="text-muted-foreground">
                I work primarily with Unity and web technologies (React, Three.js), supplemented by custom hardware when projects require physical interaction. I'm particularly interested in integrating emerging technologies like AI, machine learning, and biofeedback sensors to create adaptive and personalized experiences.
              </p>
            </Card>
          </div>
          
          <div className="rounded-lg border border-border bg-gradient-to-br from-secondary/30 to-background p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Interested in Game Development?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Whether you're looking to develop an interactive experience, integrate game mechanics into your application, or explore new forms of digital storytelling, I can help bring your vision to life.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 