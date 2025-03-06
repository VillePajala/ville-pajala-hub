'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

export default function ArtPage() {
  // Mock art projects data - will be replaced with actual data from Sanity
  const artProjects = [
    {
      id: 1,
      title: 'Digital Abstractions',
      description: 'A series of digital abstract artworks exploring the intersection of code, mathematics, and visual aesthetics.',
      thumbnail: 'https://images.unsplash.com/photo-1573096108468-702f6014ef28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      category: 'Digital Art',
      year: '2023',
      images: [
        'https://images.unsplash.com/photo-1573096108468-702f6014ef28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1358&q=80'
      ]
    },
    {
      id: 2,
      title: 'Generative Landscapes',
      description: 'AI-generated landscape paintings created through a custom algorithm that combines traditional painting techniques with machine learning.',
      thumbnail: 'https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1396&q=80',
      category: 'AI Art',
      year: '2022',
      images: [
        'https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1396&q=80',
        'https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
      ]
    },
    {
      id: 3,
      title: 'Cybernetic Dreams',
      description: 'A mixed media art series exploring the relationship between humans and technology through surreal cyberpunk-inspired imagery.',
      thumbnail: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Mixed Media',
      year: '2023',
      images: [
        'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1436&q=80'
      ]
    },
    {
      id: 4,
      title: 'Code as Canvas',
      description: 'Interactive art pieces created entirely through programming, where code becomes both the medium and the message.',
      thumbnail: 'https://images.unsplash.com/photo-1633321088355-d0f41e41f7ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      category: 'Creative Coding',
      year: '2022',
      images: [
        'https://images.unsplash.com/photo-1633321088355-d0f41e41f7ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      ]
    }
  ]

  // Filter categories for the art gallery
  const categories = ['All', 'Digital Art', 'AI Art', 'Mixed Media', 'Creative Coding']
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? artProjects 
    : artProjects.filter(project => project.category === selectedCategory)

  return (
    <PageTransition>
      <Section
        title="Art Projects"
        description="Exploring the intersection of technology, creativity, and visual expression."
      >
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={project.thumbnail} 
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
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Gallery</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-lg border border-border bg-card text-center">
            <h3 className="text-xl font-semibold mb-2">Artist Statement</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              My art explores the symbiotic relationship between technology and human creativity. By blending traditional artistic sensibilities with computational techniques and AI experimentation, I create works that challenge our understanding of authorship, creativity, and the boundaries between the digital and physical realms.
            </p>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 