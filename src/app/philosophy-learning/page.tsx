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
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground">
            This section explores the intersection of philosophy, education, and personal growth. Here you'll find essays, book reviews, teaching materials, and other resources dedicated to deeper thinking and learning.
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Essays</CardTitle>
                <CardDescription>
                  Original philosophical essays and thought explorations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep dive into a collection of essays covering topics from epistemology and cognitive science to ethics and the philosophy of technology.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/philosophy-learning/essays">Read Essays</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Book Reviews</CardTitle>
                <CardDescription>
                  Critical analyses and personal reflections on impactful books.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore detailed reviews of books that have shaped my thinking, with analyses that go beyond simple summaries to engage with core ideas.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/philosophy-learning/book-reviews">Read Reviews</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Teaching Materials</CardTitle>
                <CardDescription>
                  Educational resources and teaching frameworks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access a library of teaching materials, including curricula, lecture notes, and exercises designed to facilitate learning and critical thinking.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/philosophy-learning/teaching-materials">View Materials</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="rounded-lg border border-border bg-secondary/30 p-6">
            <h3 className="mb-2 text-xl font-semibold">Join the Conversation</h3>
            <p className="mb-4 text-muted-foreground">
              Philosophy thrives on dialogue. Feel free to engage with these ideas through comments, or reach out directly to discuss further.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 