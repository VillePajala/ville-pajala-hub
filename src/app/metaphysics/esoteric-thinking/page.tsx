'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function EsotericThinkingPage() {
  // Mock esoteric thinking topics - will be replaced with actual data from Sanity
  const esotericTopics = [
    {
      id: 1,
      title: "Consciousness as a Fundamental Property",
      description: "Exploring the idea that consciousness is not emergent but a fundamental aspect of reality, similar to space, time, or mass.",
      content: "This perspective draws from both ancient wisdom traditions and modern theories like panpsychism, suggesting that consciousness may be intrinsic to the universe rather than solely a product of complex neural activity.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      influences: ["Quantum Physics", "Eastern Philosophy", "Western Metaphysics"]
    },
    {
      id: 2,
      title: "Non-Dualistic Frameworks",
      description: "Investigating frameworks that transcend traditional dualities like mind/matter, subject/object, or digital/analog.",
      content: "Non-dualistic thinking offers alternatives to the binary oppositions that often constrain our understanding. These frameworks suggest that apparent contradictions may be reconciled at deeper levels of understanding or higher dimensions of thought.",
      image: "https://images.unsplash.com/photo-1606310981425-48833ecc332e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      influences: ["Taoism", "Advaita Vedanta", "Paradox Theory"]
    },
    {
      id: 3,
      title: "Symbolic Cognition",
      description: "The role of symbols, archetypes, and metaphors as tools for accessing deeper levels of understanding and knowledge.",
      content: "Symbolic cognition recognizes that certain forms of knowledge are not easily articulable through literal language but can be accessed through symbolic representations that engage intuitive and unconscious aspects of mind.",
      image: "https://images.unsplash.com/photo-1546651607-77e1f5dca6c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      influences: ["Jungian Psychology", "Sacred Geometry", "Alchemical Tradition"]
    },
    {
      id: 4,
      title: "Information and Reality",
      description: "Examining the concept that information, rather than matter or energy, may be the fundamental substance of reality.",
      content: "Building on concepts from information theory, quantum physics, and digital philosophy, this approach explores how the universe might be fundamentally composed of information patterns rather than conventional physical substances.",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      influences: ["Digital Physics", "Information Theory", "Holographic Principle"]
    }
  ]

  return (
    <PageTransition>
      <Section
        title="Esoteric Thinking"
        description="Alternative frameworks for understanding reality, consciousness, and existence."
      >
        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Esoteric thinking explores alternative paradigms and frameworks that extend beyond conventional models of reality. 
              These approaches often draw from diverse traditions—ancient wisdom, mystical practices, cutting-edge science, 
              and philosophical inquiry—to explore consciousness, reality, and knowledge in ways that transcend mainstream discourse.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {esotericTopics.map((topic) => (
              <Card key={topic.id} className="overflow-hidden flex flex-col h-full border-secondary/50 bg-gradient-to-br from-secondary/20 to-background">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={topic.image} 
                    alt={topic.title} 
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{topic.title}</CardTitle>
                  <CardDescription className="text-base">{topic.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{topic.content}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {topic.influences.map((influence, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {influence}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary">Explore This Perspective</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg border border-secondary/50 bg-gradient-to-br from-secondary/20 to-background p-8">
            <div className="md:flex items-center gap-8">
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-2xl font-semibold">Beyond Conventional Thinking</h3>
                <p className="text-muted-foreground">
                  Esoteric frameworks offer valuable perspectives for addressing complex problems that resist conventional solutions. 
                  By approaching challenges through alternative paradigms, we can discover insights and possibilities that might 
                  otherwise remain invisible. These approaches are particularly valuable when working at the boundaries of 
                  current knowledge or addressing deeply complex, interdisciplinary challenges.
                </p>
                <Button asChild variant="outline" className="border-secondary/50 hover:bg-secondary/20">
                  <Link href="/metaphysics">Explore More Metaphysical Approaches</Link>
                </Button>
              </div>
              <div className="hidden md:block md:w-1/3 opacity-80">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <path fill="currentColor" d="M37.5,-64.4C45.9,-55.6,48.2,-39.8,54.8,-26.1C61.3,-12.5,72,-1.1,72.9,10.9C73.7,22.9,64.6,35.4,53.9,44.9C43.2,54.4,30.9,60.8,17.8,64.5C4.7,68.2,-9.1,69.1,-23.6,66.7C-38.1,64.3,-53.3,58.6,-62.1,47.5C-70.9,36.4,-73.2,19.9,-74.1,3.5C-75,-12.9,-74.6,-29.3,-66.6,-40.8C-58.7,-52.3,-43.3,-58.9,-29.6,-64.8C-15.9,-70.7,-3.9,-75.8,6.7,-75.1C17.4,-74.3,29.1,-73.3,37.5,-64.4Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="text-center p-8 border border-secondary/20 rounded-lg">
            <blockquote className="text-xl italic mb-4">
              "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science."
            </blockquote>
            <footer className="text-muted-foreground">— Albert Einstein</footer>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 