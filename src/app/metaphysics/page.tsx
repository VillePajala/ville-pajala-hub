'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function MetaphysicsPage() {
  return (
    <PageTransition>
      <Section
        title="Metaphysics"
        description="Exploring esoteric thinking, intuition, and alternative problem-solving approaches."
      >
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground">
            The Metaphysics section ventures beyond conventional thinking to explore consciousness, intuition, and esoteric approaches to understanding reality and solving complex problems.
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-secondary/50 to-background border-secondary/50">
              <CardHeader>
                <CardTitle>Esoteric Thinking</CardTitle>
                <CardDescription>
                  Alternative frameworks for understanding reality and consciousness.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore unconventional perspectives that challenge mainstream paradigms and offer new ways to understand existence, consciousness, and reality.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary">
                  <Link href="/metaphysics/esoteric-thinking">Explore Esoteric Thinking</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/50 to-background border-secondary/50">
              <CardHeader>
                <CardTitle>Intuition</CardTitle>
                <CardDescription>
                  Developing and trusting intuitive knowledge and perception.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Discover approaches to cultivating intuition as a complement to analytical thinking, with practical exercises and theoretical foundations.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary">
                  <Link href="/metaphysics/intuition">Explore Intuition</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/50 to-background border-secondary/50">
              <CardHeader>
                <CardTitle>Problem-Solving</CardTitle>
                <CardDescription>
                  Non-conventional approaches to solving complex problems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn alternative problem-solving methodologies that integrate analytical thinking with intuition, creativity, and systems perspectives.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary">
                  <Link href="/metaphysics/problem-solving">Explore Problem-Solving</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="rounded-lg border border-secondary/50 bg-secondary/20 p-8 text-center">
            <h3 className="mb-3 text-2xl font-semibold">A Different Approach</h3>
            <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
              The topics explored here intentionally bridge the gap between rigorous thinking and intuitive understanding. They invite you to question assumptions and explore the boundaries of conventional knowledge.
            </p>
            <Button asChild variant="outline" className="border-secondary/50 hover:bg-secondary/30">
              <Link href="/contact">Discuss These Topics</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 