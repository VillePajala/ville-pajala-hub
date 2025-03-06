'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useState } from 'react'

export default function EssaysPage() {
  // Mock essays data - will be replaced with actual data from Sanity
  const essays = [
    {
      id: 1,
      title: 'The Consciousness of Machines',
      description: 'Exploring the philosophical implications of artificial consciousness and the boundaries between human and machine cognition.',
      excerpt: 'As artificial intelligence systems grow increasingly sophisticated, the line between human and machine cognition becomes increasingly blurred. This essay explores the philosophical questions raised by the possibility of machine consciousness...',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80',
      date: 'December 15, 2023',
      categories: ['AI Ethics', 'Consciousness Studies', 'Philosophy of Mind'],
      readTime: '12 min'
    },
    {
      id: 2,
      title: 'Digital Phenomenology',
      description: 'How do we experience digital spaces, and what can phenomenology teach us about our relationship to technology?',
      excerpt: 'Phenomenology—the study of structures of consciousness as experienced from the first-person point of view—offers powerful tools for understanding our increasingly digital existence...',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      date: 'October 3, 2023',
      categories: ['Digital Philosophy', 'Phenomenology', 'Human-Computer Interaction'],
      readTime: '15 min'
    },
    {
      id: 3,
      title: 'The Edge of Understanding',
      description: 'On epistemic limits, cognitive biases, and the boundaries of human knowledge.',
      excerpt: 'Throughout history, humans have continuously pushed the boundaries of what can be known. Yet for all our progress, we repeatedly encounter fundamental limits to understanding...',
      image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1429&q=80',
      date: 'August 17, 2023',
      categories: ['Epistemology', 'Cognitive Science', 'Philosophy of Science'],
      readTime: '18 min'
    },
    {
      id: 4,
      title: 'Creativity in the Age of AI',
      description: 'Rethinking artistic creation and creative processes in an era of generative artificial intelligence.',
      excerpt: 'The advent of AI systems capable of generating highly convincing art, text, and music challenges our fundamental understanding of creativity...',
      image: 'https://images.unsplash.com/photo-1569775309292-fd6e224da388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      date: 'July 5, 2023',
      categories: ['AI', 'Creativity', 'Aesthetics', 'Art Theory'],
      readTime: '14 min'
    },
    {
      id: 5,
      title: 'The Ethics of Technological Acceleration',
      description: "Examining the moral dimensions of accelerating technological change and society's ability to adapt.",
      excerpt: 'As the pace of technological change continues to accelerate, important questions arise about our ethical frameworks and their ability to adapt quickly enough...',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      date: 'May 22, 2023',
      categories: ['Ethics', 'Technology', 'Social Philosophy'],
      readTime: '11 min'
    }
  ]

  // Filter categories for essays
  const allCategories = Array.from(new Set(essays.flatMap(essay => essay.categories)))
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  // Filter essays based on selected category
  const filteredEssays = selectedCategory 
    ? essays.filter(essay => essay.categories.includes(selectedCategory))
    : essays

  return (
    <PageTransition>
      <Section
        title="Philosophical Essays"
        description="Deep explorations of ideas at the intersection of technology, consciousness, and human experience."
      >
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
              }`}
            >
              All Essays
            </button>
            {allCategories.map((category) => (
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
          
          <div className="grid gap-8 md:grid-cols-1">
            {filteredEssays.map((essay) => (
              <Card key={essay.id} className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="h-full w-full overflow-hidden">
                      <img 
                        src={essay.image} 
                        alt={essay.title} 
                        className="h-full w-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 flex flex-col">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{essay.title}</CardTitle>
                        <span className="text-xs text-muted-foreground">{essay.readTime} read</span>
                      </div>
                      <CardDescription className="mt-1 text-base">{essay.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4">{essay.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {essay.categories.map((category) => (
                          <span 
                            key={category} 
                            className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium cursor-pointer hover:bg-secondary/80"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCategory(category);
                            }}
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{essay.date}</span>
                      <Button variant="outline">Read Full Essay</Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg border border-border bg-secondary/10 p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">On Philosophical Inquiry</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
              These essays represent my ongoing inquiry into the complex interplay between technology, consciousness, and human experience. Through philosophical exploration, I seek to illuminate the profound questions that arise as we navigate an increasingly digital and technologically mediated world.
            </p>
            <Button variant="outline" asChild>
              <Link href="/philosophy-learning">Back to Philosophy & Learning</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 