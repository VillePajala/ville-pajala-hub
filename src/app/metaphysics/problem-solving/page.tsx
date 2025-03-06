'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function ProblemSolvingPage() {
  // Mock problem-solving approaches - will be replaced with actual data from Sanity
  const problemSolvingApproaches = [
    {
      id: 1,
      title: "Systems Thinking",
      description: "Addressing problems by understanding relationships, patterns, and contexts rather than isolated components.",
      content: "Systems thinking moves beyond linear cause-and-effect analysis to understand how different elements interact within complex systems. This approach recognizes that many problems emerge from system dynamics rather than individual components.",
      image: "https://images.unsplash.com/photo-1629651480284-8dca7a65ac69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
      methods: ["Causal Loop Diagrams", "Stock and Flow Modeling", "System Archetypes"]
    },
    {
      id: 2,
      title: "First Principles Reasoning",
      description: "Breaking down complex problems to their fundamental truths and building solutions from the ground up.",
      content: "Rather than reasoning by analogy or convention, first principles thinking identifies the essential elements of a problem and reconstructs solutions from these basic truths. This approach can lead to innovative breakthroughs by challenging underlying assumptions.",
      image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      methods: ["5 Whys Analysis", "Assumption Invalidation", "Fundamental Modeling"]
    },
    {
      id: 3,
      title: "Lateral Thinking",
      description: "Approaching problems from unexpected angles to generate creative solutions beyond conventional reasoning.",
      content: "Lateral thinking deliberately breaks from sequential, logical patterns to explore indirect and creative approaches. It uses techniques like provocation, random stimulation, and conceptual recombination to discover novel perspectives and solutions.",
      image: "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      methods: ["Random Word Association", "Provocation Techniques", "Concept Shifting"]
    },
    {
      id: 4,
      title: "Polarity Thinking",
      description: "Managing interdependent pairs of values that appear to be opposites but actually need each other.",
      content: "Polarity thinking recognizes that many challenges involve managing ongoing polarities rather than solving discrete problems. This approach helps navigate tensions that can't be permanently resolved but must be continuously balanced, such as stability vs. change or individual vs. collective needs.",
      image: "https://images.unsplash.com/photo-1545241201-8195746e600e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      methods: ["Polarity Mapping", "Both/And Framing", "Oscillation Management"]
    }
  ]

  // Problem archetypes
  const problemArchetypes = [
    {
      name: "Convergent Problems",
      description: "Well-defined problems with clear solutions that can be reached through analytical methods.",
      examples: ["Engineering challenges", "Mathematical equations", "Optimization tasks"]
    },
    {
      name: "Divergent Problems",
      description: "Poorly defined problems with multiple possible solutions requiring creativity and exploration.",
      examples: ["Design challenges", "Strategic planning", "Innovation endeavors"]
    },
    {
      name: "Wicked Problems",
      description: "Complex challenges with incomplete information, shifting requirements, and no definitive solution.",
      examples: ["Climate change", "Healthcare reform", "Urban planning"]
    },
    {
      name: "Dilemmas & Polarities",
      description: "Situations involving interdependent opposites that must be managed rather than solved.",
      examples: ["Freedom vs. structure", "Centralization vs. decentralization", "Tradition vs. innovation"]
    }
  ]

  return (
    <PageTransition>
      <Section
        title="Problem-Solving"
        description="Non-conventional approaches to solving complex problems and navigating challenges."
      >
        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Metaphysical approaches to problem-solving move beyond conventional analytical methods to incorporate 
              systems thinking, intuition, creativity, and holistic perspectives. These approaches are particularly 
              valuable for complex, ambiguous, or seemingly intractable challenges that resist standard solutions.
            </p>
          </div>
          
          <div className="rounded-lg border border-border p-8 bg-card">
            <h3 className="text-xl font-semibold mb-6">Understanding Problem Archetypes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {problemArchetypes.map((archetype, idx) => (
                <Card key={idx} className="bg-background">
                  <CardHeader>
                    <CardTitle>{archetype.name}</CardTitle>
                    <CardDescription>{archetype.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Examples:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {archetype.examples.map((example, i) => (
                          <li key={i} className="flex items-center">
                            <span className="mr-2 text-primary">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {problemSolvingApproaches.map((approach) => (
              <Card key={approach.id} className="overflow-hidden flex flex-col h-full border-secondary/50 bg-gradient-to-br from-secondary/20 to-background">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={approach.image} 
                    alt={approach.title} 
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{approach.title}</CardTitle>
                  <CardDescription className="text-base">{approach.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{approach.content}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Key Methods:</h4>
                    <div className="flex flex-wrap gap-2">
                      {approach.methods.map((method, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary">Explore This Approach</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg border border-secondary/50 bg-gradient-to-br from-secondary/20 to-background p-8">
            <div className="md:flex items-center gap-8">
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-2xl font-semibold">Meta-Problem Solving</h3>
                <p className="text-muted-foreground">
                  The highest level of problem-solving involves developing awareness of which approach is most 
                  appropriate for different types of challenges. This meta-skill allows you to deliberately select 
                  and combine methods based on the nature of the problem rather than defaulting to familiar patterns.
                </p>
                <Button asChild variant="outline" className="border-secondary/50 hover:bg-secondary/20">
                  <Link href="/contact">Discuss Problem-Solving Consulting</Link>
                </Button>
              </div>
              <div className="hidden md:block md:w-1/3 opacity-80">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <path fill="currentColor" d="M46.4,-76.3C59.7,-70.7,69.9,-57.8,77.9,-43.5C85.9,-29.2,91.8,-13.6,92.5,2.7C93.2,19.1,88.8,36.2,77.7,46.7C66.7,57.2,49.1,61.1,33.9,67.9C18.7,74.7,5.9,84.2,-5.9,84.6C-17.8,85,-35.7,76.3,-50.8,66C-66,55.7,-78.5,43.7,-83.8,28.7C-89.1,13.7,-87.2,-4.4,-82.9,-21.8C-78.7,-39.3,-72.1,-56.1,-59.7,-63.5C-47.2,-70.9,-28.9,-68.9,-13,-68.1C2.9,-67.3,18.7,-67.8,32.8,-70.6C46.9,-73.4,59.2,-78.6,70.5,-76.3C81.8,-74,92,-64.3,97.8,-52C103.5,-39.6,104.8,-24.8,105.9,-9.8C107.1,5.3,108.3,20.7,104.7,35.5C101.2,50.3,93,64.7,80.6,74.4C68.2,84.1,51.6,89.1,36.3,91.7C21.1,94.2,7.2,94.4,-5.8,89.9C-18.8,85.5,-31,76.4,-43.6,69.1C-56.2,61.8,-69.3,56.3,-75.8,46.2C-82.3,36.1,-82.2,21.3,-86.2,5.8C-90.1,-9.7,-98.2,-25.9,-96.7,-41.6C-95.3,-57.2,-84.3,-72.3,-69.6,-77.3C-54.9,-82.3,-36.4,-77.2,-20.9,-74.8C-5.4,-72.3,7.1,-72.7,19,-69.5C30.9,-66.4,42.2,-59.8,50.9,-51.4C59.5,-43.1,65.4,-32.8,74.4,-21.1C83.5,-9.3,95.7,3.9,93.5,13.7C91.4,23.4,74.8,29.7,64.1,39.1C53.4,48.5,48.5,61,39.7,69.2C30.8,77.5,17.8,81.6,3.6,83.8C-10.7,85.9,-26.3,86.2,-38.5,79.6C-50.7,73,-59.6,59.5,-64.3,45.6C-69.1,31.7,-69.6,17.3,-74.9,1.5C-80.2,-14.3,-90.2,-31.4,-87.8,-45.8C-85.5,-60.3,-70.9,-71.9,-55.2,-77.9C-39.5,-83.9,-22.8,-84.3,-6.1,-82.6C10.5,-80.9,21,-77.1,33.7,-76.7C46.4,-76.3,61.1,-79.3,71.8,-74.4C82.5,-69.6,89.1,-57,95.4,-43.8C101.7,-30.6,107.7,-17,108.1,-3.1C108.6,10.9,103.5,25.2,97.4,40.1C91.3,55,84.2,70.6,72.6,81.1C61,91.6,44.9,97.1,29.8,97C14.7,96.9,0.5,91.3,-17.2,90.6C-34.9,89.9,-56.2,94.1,-70.3,86.8C-84.4,79.5,-91.5,60.8,-93.7,42.9C-95.9,25,-93.3,7.9,-92.6,-9.9C-91.9,-27.7,-93.1,-46.2,-85.6,-59.7C-78.1,-73.3,-61.9,-81.9,-45.2,-87.3C-28.5,-92.7,-11.3,-94.9,3.3,-90.5C17.9,-86.1,29.9,-75.1,43.4,-67.7C56.8,-60.3,71.8,-56.4,81,-47.2C90.2,-38,93.6,-23.5,95.4,-9.1C97.2,5.3,97.4,19.5,91.6,30.8C85.9,42.1,74.2,50.6,62.5,57.8C50.8,65,39.1,71,26.5,75.7C13.9,80.4,0.5,83.9,-13.9,84.5C-28.3,85.1,-43.7,82.8,-56.5,75.5C-69.3,68.2,-79.6,55.9,-86.4,41.8C-93.2,27.7,-96.6,11.9,-96.7,-4C-96.8,-19.8,-93.5,-35.7,-86.7,-49.9C-79.9,-64.1,-69.6,-76.7,-56.5,-81.8C-43.5,-86.9,-27.8,-84.6,-13.2,-81.2C1.4,-77.9,14.8,-73.5,29.2,-71.5C43.6,-69.5,59,-69.9,69.5,-63.4C80.1,-56.9,85.7,-43.6,89.9,-30C94.1,-16.4,96.8,-2.7,96.2,11.5C95.7,25.6,91.9,40.1,85.1,53.8C78.3,67.5,68.6,80.5,55.6,89.1C42.6,97.8,26.3,102.2,10.4,102.5C-5.5,102.8,-21.1,99,-35.1,92.5C-49.1,86.1,-61.5,77,-70.7,65.1C-79.8,53.2,-85.7,38.6,-86.8,23.6C-87.9,8.6,-84.3,-6.7,-82.2,-23.5C-80.1,-40.2,-79.5,-58.4,-70.4,-70.8C-61.3,-83.3,-43.7,-90,-27.8,-87.8C-11.9,-85.6,2.2,-74.4,17.1,-69.1C32,-63.7,47.7,-64.1,61.8,-59.5C75.9,-54.9,88.4,-45.3,95.3,-32.7C102.3,-20.1,103.6,-4.6,102.4,10.7C101.2,26.1,97.6,41.3,87.7,51.2C77.9,61.2,61.9,65.9,47.2,71.6C32.6,77.3,19.3,84,4.5,87.1C-10.3,90.2,-26.5,89.6,-42.4,86.4C-58.3,83.2,-73.8,77.3,-84.2,66.2C-94.6,55.1,-100,38.9,-103.2,22.4C-106.3,5.8,-107.4,-11.1,-104.1,-27.4C-100.8,-43.7,-93.2,-59.3,-80.7,-68.2C-68.3,-77.1,-50.9,-79.2,-35.4,-83.7C-19.9,-88.1,-6.2,-94.9,8.7,-95C23.7,-95.1,39.6,-88.5,50.7,-79.2" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="text-center p-8 border border-secondary/20 rounded-lg">
            <blockquote className="text-xl italic mb-4">
              "We cannot solve our problems with the same thinking we used when we created them."
            </blockquote>
            <footer className="text-muted-foreground">— Albert Einstein</footer>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 