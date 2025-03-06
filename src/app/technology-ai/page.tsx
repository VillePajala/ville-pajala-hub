'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function TechnologyAIPage() {
  return (
    <PageTransition>
      <Section
        title="Technology & AI"
        description="Exploring the intersection of technology, artificial intelligence, and their applications."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>AI Projects</CardTitle>
              <CardDescription>
                Innovative projects leveraging artificial intelligence and machine learning technologies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Explore a collection of AI and machine learning projects, from natural language processing to computer vision applications.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/technology-ai/ai-projects">Explore AI Projects</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>
                Modern web development approaches, frameworks, and best practices.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover insights into modern web development, from frontend technologies like React and Next.js to backend solutions.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/technology-ai/web-development">Explore Web Development</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Automation</CardTitle>
              <CardDescription>
                Streamlining processes and workflows through automation solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn about practical automation approaches for businesses and individuals, from simple scripts to complex workflow systems.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/technology-ai/automation">Explore Automation</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>
    </PageTransition>
  )
} 