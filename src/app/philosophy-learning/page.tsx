'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function PhilosophyLearningPage() {
  return (
    <PageTransition>
      <Section
        title="Philosophy & Learning"
        description="Deep explorations of ideas, learning resources, and philosophical inquiries."
      >
        <div className="mb-6 text-lg text-muted-foreground">
          <p>This section explores the intersection of philosophy, education, and personal growth.</p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Essays</CardTitle>
              <CardDescription>
                Personal and philosophical essays on various topics.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/philosophy-learning/essays">Explore</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Book Reviews</CardTitle>
              <CardDescription>
                Critical analysis and reflections on significant books.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/philosophy-learning/book-reviews">Explore</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Teaching Materials</CardTitle>
              <CardDescription>
                Resources, guides, and materials for educational purposes.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/philosophy-learning/teaching-materials">Explore</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>
    </PageTransition>
  )
} 