'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function IntuitionPage() {
  // Mock intuition approaches - will be replaced with actual data from Sanity
  const intuitionApproaches = [
    {
      id: 1,
      title: "Expert Intuition",
      description: "The rapid, unconscious pattern recognition that emerges from deep domain expertise.",
      content: "Expert intuition develops through thousands of hours of practice and exposure to patterns within a domain. It allows experts to make rapid, accurate judgments without conscious deliberation by drawing on deeply encoded experiential knowledge.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      practices: ["Deliberate Practice", "Pattern Recognition Training", "Reflective Analysis"]
    },
    {
      id: 2,
      title: "Embodied Cognition",
      description: "Understanding how physical sensations and body states inform intuitive knowledge.",
      content: "Embodied cognition recognizes that our thinking is not isolated to the brain but distributed throughout our physical being. The 'gut feelings' and physical sensations that accompany intuition provide valuable information that can guide decision-making.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80",
      practices: ["Somatic Awareness", "Mindfulness", "Body Scanning"]
    },
    {
      id: 3,
      title: "Integrative Thinking",
      description: "The capacity to hold opposing ideas in mind while creating novel solutions that transcend either-or choices.",
      content: "Integrative thinking allows us to work with complexity by recognizing patterns and connections between seemingly disparate elements. Rather than reducing problems to false dichotomies, it cultivates the ability to synthesize multiple perspectives.",
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      practices: ["Dialectical Thinking", "Perspective-Taking", "Systems Mapping"]
    },
    {
      id: 4,
      title: "Incubation and Insight",
      description: "The unconscious processing that leads to sudden insights or 'aha moments'.",
      content: "Creative insights often emerge when we step away from conscious problem-solving and allow our unconscious mind to process information. This approach leverages the vast parallel processing capabilities of our non-conscious cognition.",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      practices: ["Intentional Breaks", "Sleep Consolidation", "Mind-Wandering"]
    }
  ]

  // Intuition development practices
  const practices = [
    {
      name: "Mindfulness Meditation",
      description: "Regular meditation enhances awareness of subtle internal signals and reduces cognitive noise."
    },
    {
      name: "Decision Journaling",
      description: "Recording decisions, intuitive impressions, and outcomes to refine pattern recognition over time."
    },
    {
      name: "Cross-Domain Exposure",
      description: "Deliberately exploring diverse fields to enrich your mental models and pattern recognition capabilities."
    },
    {
      name: "Embodied Awareness",
      description: "Practices that increase sensitivity to physical sensations associated with intuitive responses."
    }
  ]

  return (
    <PageTransition>
      <Section
        title="Intuition"
        description="Developing and trusting intuitive knowledge and perception."
      >
        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Intuition is often misunderstood as mysterious or magical, but contemporary research reveals 
              it as a sophisticated form of cognition—a rapid, non-conscious processing of information based on 
              experience, pattern recognition, and embodied knowledge. Far from being opposed to rational thinking, 
              intuition complements analytical approaches by providing access to knowledge that may not be 
              immediately available to conscious reasoning.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {intuitionApproaches.map((approach) => (
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
                    <h4 className="text-sm font-medium mb-2">Key Practices:</h4>
                    <div className="flex flex-wrap gap-2">
                      {approach.practices.map((practice, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {practice}
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
          
          <div className="rounded-lg border border-border p-8 bg-card">
            <h3 className="text-xl font-semibold mb-4">Developing Intuitive Capacity</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {practices.map((practice, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{practice.name}</h4>
                    <p className="text-sm text-muted-foreground">{practice.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg border border-secondary/50 bg-gradient-to-br from-secondary/20 to-background p-8">
            <div className="md:flex items-center gap-8">
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-2xl font-semibold">Balancing Analysis and Intuition</h3>
                <p className="text-muted-foreground">
                  The most effective thinking integrates both analytical and intuitive processes. Rather than 
                  privileging one over the other, the goal is to develop both capacities and learn when each 
                  is most appropriate. Complex problems often benefit from an iterative approach that moves 
                  between intuitive pattern recognition and careful analytical verification.
                </p>
                <Button asChild variant="outline" className="border-secondary/50 hover:bg-secondary/20">
                  <Link href="/metaphysics">Explore More Metaphysical Approaches</Link>
                </Button>
              </div>
              <div className="hidden md:block md:w-1/3 opacity-80">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <path fill="currentColor" d="M53.2,-72.2C66,-59.8,71.4,-40.2,74.3,-21.5C77.2,-2.8,77.5,15,70.4,28.5C63.4,42,48.9,51.2,34.2,60.2C19.5,69.2,4.7,78,-13.1,80C-30.8,82,-51.5,77.1,-65.6,64.3C-79.7,51.4,-87.3,30.6,-89.1,9.1C-90.9,-12.3,-86.9,-34.4,-74.2,-48.8C-61.5,-63.1,-40.1,-69.5,-20.7,-73.5C-1.3,-77.4,16.1,-78.8,32.7,-77.5C49.4,-76.2,65.3,-72.2,73.3,-61.5C81.3,-50.8,82.6,-33.3,77.5,-18.8C72.4,-4.3,60.9,7.2,55.2,20.5C49.5,33.7,49.6,48.6,42.5,57.7C35.4,66.8,21.2,70,5.1,72.9C-11,75.7,-29,78.1,-44.1,72.4C-59.1,66.7,-71.3,52.9,-76.2,37.5C-81.1,22.1,-78.7,5.1,-75.5,-11C-72.3,-27.1,-68.4,-42.3,-58.6,-53.8C-48.9,-65.3,-33.4,-73.1,-16.9,-74.7C-0.3,-76.4,17.3,-71.8,35.2,-67.9C53.1,-64,71.2,-60.7,84.4,-49.9C97.5,-39.1,105.7,-20.6,105.5,-2.3C105.4,16,96.9,32,88.6,49.8C80.2,67.7,72,87.3,57.4,96.6C42.8,105.9,21.4,104.8,2.7,100.9C-16,97.1,-32,90.6,-48.4,82.1C-64.8,73.6,-81.6,63.1,-89.7,47.9C-97.9,32.7,-97.5,12.7,-96.7,-7.8C-95.9,-28.3,-94.9,-49.4,-83.5,-62.2C-72.1,-75,-50.4,-79.7,-31.7,-81.2C-13,-82.7,2.7,-81,20.8,-81.6C38.9,-82.2,59.4,-85.2,73.2,-77.9C87,-70.6,94.2,-53,92.5,-36.8C90.8,-20.6,80.3,-5.8,71.2,4.6C62.2,15,54.5,21,47.1,29.9C39.7,38.8,32.6,50.5,21.6,54.7C10.6,58.9,-4.2,55.5,-20.1,53.8C-36,52.1,-52.9,52,-65.3,44.2C-77.7,36.4,-85.5,20.9,-84.2,6.4C-82.9,-8.1,-72.4,-21.7,-63,-36.3C-53.7,-51,-45.4,-66.7,-32.6,-71.4C-19.8,-76.1,-2.5,-69.9,14.3,-71.1C31.1,-72.3,47.4,-81,64.4,-78.2C81.5,-75.4,99.5,-61.3,105.4,-43.7C111.2,-26.1,104.9,-5.1,99,14.6C93.1,34.3,87.6,52.7,76.1,65.8C64.6,78.9,47.2,86.6,30.8,88.2C14.4,89.7,-1,85.2,-14.7,79.2C-28.3,73.2,-40.1,65.7,-56.6,59.6C-73.1,53.5,-94.3,48.7,-103.2,36.3C-112.1,23.9,-108.8,3.8,-104,-15.7C-99.2,-35.2,-93,-54.2,-79.7,-68.7C-66.4,-83.2,-46.1,-93.2,-27.1,-96.1C-8,-99,-9.2,-94.6,7.6,-99.5C24.4,-104.4,49.2,-118.4,62.2,-113.2C75.3,-108,76.7,-83.5,85.8,-64.3C94.9,-45.1,111.8,-31.2,115.2,-15.4C118.6,0.5,108.6,18.2,96.6,31C84.6,43.8,70.6,51.6,55.8,59C41,66.4,25.5,73.4,10.5,76.3C-4.6,79.2,-19.2,78,-36.1,76.1C-53,74.2,-72.2,71.7,-89.7,62.1C-107.2,52.5,-123,35.9,-125.1,17.7C-127.3,-0.6,-115.8,-20.6,-104.4,-37.9C-93,-55.2,-81.7,-69.9,-66.6,-77.9C-51.5,-85.9,-32.6,-87.3,-14.8,-87.2C3,-87.1,19.9,-85.6,31.8,-77.3C43.7,-68.9,50.7,-53.8,58,-39.9C65.4,-26,73.1,-13,72.2,-0.5C71.3,11.9,61.9,23.8,56.2,39.4C50.5,55,48.6,74.3,38.8,83C29,91.7,11.5,89.9,-4.7,86.1C-20.9,82.3,-35.7,76.6,-51.6,69.9C-67.5,63.2,-84.5,55.6,-93.7,42.4C-102.8,29.1,-104.1,10.2,-105.5,-10.5C-107,-31.2,-108.5,-53.8,-98.4,-67.9C-88.3,-82,-66.6,-87.5,-47.1,-91.9C-27.7,-96.3,-10.4,-99.6,8.7,-102.9C27.8,-106.2,48.6,-109.5,68.7,-103.9C88.7,-98.3,108.1,-83.7,119.1,-64.8C130.1,-45.8,132.7,-22.9,125.4,-3.8C118.2,15.3,101.1,30.7,87.7,45.9C74.2,61.1,64.3,76.2,50.2,88.1C36,99.9,17.8,108.5,1.3,106.6C-15.2,104.7,-30,92.3,-45.1,82.6C-60.2,72.9,-75.5,66,-85.3,53.9C-95.1,41.9,-99.3,24.7,-104.7,6.5C-110,-11.7,-116.5,-30.9,-111.7,-46.4C-106.9,-61.9,-90.8,-73.5,-73.2,-79.1C-55.6,-84.7,-36.5,-84.2,-18.9,-86.7C-1.3,-89.1,14.7,-94.5,27.6,-91.6C40.5,-88.7,50.3,-77.5,63.9,-69.4C77.5,-61.3,95,-56.2,100.5,-45.3C106,-34.3,99.4,-17.2,89.9,-4.7C80.3,7.8,67.9,15.6,60.6,26.6C53.3,37.6,51,51.7,43.5,63.7C36,75.7,23.2,85.6,8.3,89.4C-6.6,93.2,-23.8,90.8,-40.5,86.7C-57.2,82.6,-73.5,76.7,-84.8,65.5C-96.1,54.3,-102.4,37.8,-101.1,22.1C-99.9,6.4,-91.1,-8.4,-84.7,-24.5C-78.3,-40.6,-74.3,-58.1,-63.2,-67.3C-52.1,-76.5,-33.9,-77.5,-17.2,-74.7C-0.5,-71.9,14.8,-65.2,33.4,-65.1C52,-65.1,74,-71.5,88.8,-66.2C103.5,-60.9,111.1,-43.8,117.5,-25.5C123.9,-7.2,129.2,12.3,125.1,29.2C121,46.1,107.4,60.3,91.8,69.5C76.3,78.7,58.7,82.9,41.2,89.4C23.7,95.8,6.3,104.4,-12.3,108.6C-30.9,112.8,-50.7,112.6,-70.6,107.2C-90.4,101.8,-110.4,91.2,-119.7,74.3C-129,57.4,-127.7,34.1,-125.5,12.4C-123.2,-9.3,-120,-29.4,-111.5,-48C-102.9,-66.7,-89,-83.9,-71.2,-90.9C-53.3,-97.9,-31.5,-94.6,-10.9,-97.3C9.7,-99.9,29.1,-108.5,47.5,-107.7C65.9,-106.9,83.3,-96.8,95.8,-82.3C108.3,-67.9,115.9,-49.1,118.5,-30.2C121.1,-11.3,118.7,7.6,107.9,19.4C97.1,31.2,77.9,35.9,63.2,44.4C48.4,53,38.1,65.5,25.6,77.2C13.1,88.9,-1.6,99.9,-18.9,101.3C-36.2,102.8,-56,94.7,-71.7,82.2C-87.4,69.8,-99,52.9,-102.8,34.6C-106.7,16.4,-102.8,-3.3,-100.6,-24.5C-98.5,-45.8,-98.1,-68.7,-86.9,-85.2C-75.8,-101.7,-53.9,-111.7,-33.1,-118.7C-12.3,-125.7,7.5,-129.6,25.1,-122.6C42.7,-115.6,58.1,-97.7,67.8,-79.9C77.5,-62.1,81.3,-44.5,80.2,-28.5C79.1,-12.5,73.1,1.8,66.5,14.3C59.9,26.8,52.6,37.6,43,46.3C33.5,55,21.8,61.7,9.6,62.7C-2.7,63.7,-15.3,59.1,-30.2,58.6C-45.1,58.1,-62.2,61.6,-77.1,56.6C-92,51.6,-104.6,38,-105.8,22.9C-107,7.7,-96.8,-8.9,-90.1,-27.1C-83.4,-45.2,-80.3,-64.9,-68.8,-78.2C-57.3,-91.6,-37.6,-98.8,-18.3,-101.3C1,-103.8,19.8,-101.7,34.9,-95.9C50,-90.1,61.3,-80.5,72.5,-69.3C83.7,-58.1,94.7,-45.3,98.3,-30.9C101.9,-16.5,98,-0.5,93.9,14.8C89.8,30.1,85.4,44.7,76.6,57.8C67.8,70.9,54.5,82.6,38.9,91.9C23.3,101.2,5.4,108.1,-13.4,110.4C-32.1,112.7,-51.7,110.4,-66.8,101.7C-81.9,93,-92.5,78,-95.3,61.2C-98.1,44.5,-93.1,26,-90.7,8.4C-88.2,-9.3,-88.2,-26.1,-81.3,-41.3C-74.5,-56.5,-60.7,-70.2,-44.8,-78.2C-28.9,-86.3,-10.9,-88.7,7.6,-86.5C26.1,-84.3,45.2,-77.5,62,-68.2C78.8,-58.9,93.4,-47.1,97.8,-32.7C102.2,-18.3,96.4,-1.3,92.7,17.3C88.9,35.8,87.1,55.9,76.2,68.8C65.3,81.7,45.4,87.5,26.9,94.5C8.4,101.6,-8.6,109.9,-24.1,109C-39.6,108.1,-53.5,98,-63.8,85.7C-74.1,73.3,-80.7,58.7,-92.3,44.4C-103.9,30.1,-120.4,16.1,-123.2,-0.3C-126,-16.7,-115.1,-35.5,-102.9,-50.9C-90.8,-66.3,-77.4,-78.3,-61.5,-88.3C-45.6,-98.4,-27.3,-106.4,-7.5,-108.2C12.3,-110.1,33.6,-105.7,48.2,-95.5C62.8,-85.3,70.6,-69.3,78.5,-53.7C86.4,-38.1,94.4,-22.9,96.6,-6.6C98.8,9.7,95.3,27.1,85.8,40C76.3,52.9,60.8,61.3,47.2,73.8C33.6,86.3,21.8,103,7.2,112.3C-7.4,121.7,-24.9,123.8,-43,121.6C-61.1,119.5,-79.8,113.2,-92.4,99.9C-105,86.6,-111.5,66.3,-110.4,46.9C-109.3,27.4,-100.6,8.7,-98.2,-11.5C-95.7,-31.7,-99.5,-53.5,-91.2,-68.3C-83,-83.1,-62.6,-90.9,-43.1,-96.8C-23.6,-102.8,-4.9,-107,-13.3,-111.5" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 