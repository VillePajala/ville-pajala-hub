'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function MusicPage() {
  // Mock music projects data - will be replaced with actual data from Sanity
  const musicProjects = [
    {
      id: 1,
      title: 'Algorithmic Compositions',
      description: 'Experimental music created through algorithmic processes and computational creativity.',
      image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      year: '2023',
      tracks: [
        { title: 'Neural Networks', duration: '4:32' },
        { title: 'Recursive Patterns', duration: '3:17' },
        { title: 'Emergent Harmonies', duration: '5:45' }
      ]
    },
    {
      id: 2,
      title: 'Ambient Soundscapes',
      description: 'Atmospheric sonic environments designed for focus, relaxation, and spatial awareness.',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      year: '2022',
      tracks: [
        { title: 'Digital Forest', duration: '8:12' },
        { title: 'Urban Frequencies', duration: '7:35' },
        { title: 'Quantum Fields', duration: '10:28' }
      ]
    },
    {
      id: 3,
      title: 'Interactive Audio Installations',
      description: 'Music and sound design for interactive installations that respond to audience movement and participation.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      year: '2023',
      tracks: [
        { title: 'Motion Reactive Suite', duration: '12:45' },
        { title: 'Collective Emergence', duration: '9:18' },
        { title: 'Spatial Perception', duration: '11:02' }
      ]
    }
  ]

  return (
    <PageTransition>
      <Section
        title="Music Projects"
        description="Audio experiments, compositions, and sound design explorations."
      >
        <div className="space-y-12">
          <p className="text-lg text-muted-foreground">
            My music projects explore the intersection of technology, algorithmic composition, and human emotion. These works range from generative ambient soundscapes to interactive audio installations and experimental electronic music.
          </p>
          
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {musicProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 aspect-square overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{project.title}</CardTitle>
                        <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                          {project.year}
                        </span>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <h4 className="text-sm font-medium mb-2">Tracks</h4>
                      <ul className="space-y-2">
                        {project.tracks.map((track, index) => (
                          <li key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary">
                                ▶
                              </span>
                              <span className="text-sm">{track.title}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{track.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Listen to Album</Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-xl font-semibold mb-4">About My Musical Approach</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-2">Philosophy</h4>
                <p className="text-muted-foreground">
                  I approach music as a form of cognitive exploration, using technology to discover new patterns, textures, and emotional spaces that wouldn't be accessible through traditional composition methods. The algorithmic and generative aspects of my work allow for emergence and discovery, creating a collaboration between human intention and computational processes.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Tools & Techniques</h4>
                <p className="text-muted-foreground">
                  My compositions utilize a range of approaches, from custom algorithms written in SuperCollider and Max/MSP to machine learning models trained on various musical traditions. I often combine digital synthesis with processed recordings of acoustic instruments and environmental sounds, creating hybrid sonic worlds that blur the line between the synthetic and organic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 