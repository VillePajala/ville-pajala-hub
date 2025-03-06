'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'

export default function Home() {
  return (
    <PageTransition className="space-y-12">
      <Section>
        <h1 className="text-4xl font-bold">Welcome to My Digital Hub</h1>
        <p className="text-xl text-muted-foreground">
          I'm Ville Pajala, a software developer and technology consultant passionate about creating impactful digital solutions.
        </p>
      </Section>

      <Section
        title="Explore My Work"
        description="Discover my content, projects, and services"
        delay={0.2}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Blog</CardTitle>
              <CardDescription>
                Thoughts and insights on software development, technology, and business.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/blog">View Posts</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio</CardTitle>
              <CardDescription>
                Showcase of my projects and professional work in software development.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/portfolio">Explore Projects</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Services</CardTitle>
              <CardDescription>
                Professional consulting and development services for your digital needs.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      <Section
        title="Let's Connect"
        description="Interested in working together or have a question? Feel free to reach out."
        className="rounded-lg border border-border bg-secondary p-8"
        delay={0.4}
      >
        <Button asChild size="lg">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </Section>
    </PageTransition>
  )
}
