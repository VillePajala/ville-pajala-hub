'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useState } from 'react'

export default function TeachingMaterialsPage() {
  // Mock teaching materials data - will be replaced with actual data from Sanity
  const materials = [
    {
      id: 1,
      title: "Introduction to AI Ethics",
      type: "Course Materials",
      description: "A comprehensive curriculum for teaching AI ethics, including lecture notes, discussion prompts, and assignments.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      audience: "University Students",
      difficulty: "Intermediate",
      topics: ["AI Ethics", "Philosophy of Technology", "Critical Thinking"],
      resources: [
        { name: "Lecture Slides", type: "PDF" },
        { name: "Reading List", type: "PDF" },
        { name: "Discussion Guide", type: "PDF" },
        { name: "Assignment Prompts", type: "PDF" }
      ]
    },
    {
      id: 2,
      title: "Critical Thinking in the Digital Age",
      type: "Workshop Materials",
      description: "Workshop materials designed to help participants develop critical thinking skills specifically for navigating digital information and technology.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      audience: "Professional Development",
      difficulty: "All Levels",
      topics: ["Critical Thinking", "Digital Literacy", "Information Evaluation"],
      resources: [
        { name: "Workshop Guide", type: "PDF" },
        { name: "Exercise Worksheets", type: "PDF" },
        { name: "Resource List", type: "PDF" },
        { name: "Discussion Cards", type: "Printable" }
      ]
    },
    {
      id: 3,
      title: "Consciousness and Artificial Intelligence",
      type: "Reading Group Guide",
      description: "A curated reading list and discussion guide for exploring philosophical questions about consciousness and AI.",
      image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      audience: "Reading Groups",
      difficulty: "Advanced",
      topics: ["Philosophy of Mind", "AI", "Consciousness Studies"],
      resources: [
        { name: "Reading Schedule", type: "PDF" },
        { name: "Discussion Questions", type: "PDF" },
        { name: "Key Concepts Guide", type: "PDF" },
        { name: "Further Resources", type: "PDF" }
      ]
    },
    {
      id: 4,
      title: "Technology and Human Values",
      type: "Curriculum",
      description: "A complete curriculum for teaching about the relationship between technology and human values, with an emphasis on ethical considerations.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      audience: "High School / Early University",
      difficulty: "Beginner to Intermediate",
      topics: ["Ethics", "Technology", "Social Impact", "Human Values"],
      resources: [
        { name: "Teacher's Guide", type: "PDF" },
        { name: "Student Workbook", type: "PDF" },
        { name: "Presentation Slides", type: "PPT" },
        { name: "Assessment Guidelines", type: "PDF" }
      ]
    }
  ]

  // Available topics for filtering
  const allTopics = Array.from(new Set(materials.flatMap(material => material.topics)))
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  
  // Available audience types for filtering
  const allAudiences = Array.from(new Set(materials.map(material => material.audience)))
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null)
  
  // Filter materials based on selected filters
  const filteredMaterials = materials.filter(material => {
    const matchesTopic = selectedTopic ? material.topics.includes(selectedTopic) : true
    const matchesAudience = selectedAudience ? material.audience === selectedAudience : true
    return matchesTopic && matchesAudience
  })

  return (
    <PageTransition>
      <Section
        title="Teaching Materials"
        description="Educational resources for teaching philosophy, critical thinking, and technology ethics."
      >
        <div className="space-y-8">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium mb-2">Filter by Topic</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTopic(null)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      selectedTopic === null
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
                    }`}
                  >
                    All Topics
                  </button>
                  {allTopics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        selectedTopic === topic
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Filter by Audience</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedAudience(null)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      selectedAudience === null
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
                    }`}
                  >
                    All Audiences
                  </button>
                  {allAudiences.map((audience) => (
                    <button
                      key={audience}
                      onClick={() => setSelectedAudience(audience)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        selectedAudience === audience
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
                      }`}
                    >
                      {audience}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {filteredMaterials.map((material) => (
              <Card key={material.id} className="overflow-hidden flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={material.image} 
                    alt={material.title} 
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle>{material.title}</CardTitle>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {material.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center text-xs text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {material.audience}
                    </span>
                    <span className="inline-flex items-center text-xs text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      {material.difficulty}
                    </span>
                  </div>
                  <CardDescription className="mt-2">{material.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="text-sm font-medium mb-2">Included Resources:</h4>
                  <ul className="space-y-1">
                    {material.resources.map((resource, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        {resource.name} <span className="ml-1 text-xs opacity-70">({resource.type})</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Materials</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredMaterials.length === 0 && (
            <div className="p-12 text-center border border-border rounded-lg">
              <h3 className="text-xl font-medium mb-2">No matching materials found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters to find what you're looking for.</p>
              <Button variant="outline" onClick={() => {
                setSelectedTopic(null)
                setSelectedAudience(null)
              }}>Reset Filters</Button>
            </div>
          )}
          
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Custom Materials</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
              Looking for specialized teaching materials for your course, workshop, or organization? I can create custom resources tailored to your specific needs and audience.
            </p>
            <Button asChild>
              <Link href="/contact">Discuss Custom Materials</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 