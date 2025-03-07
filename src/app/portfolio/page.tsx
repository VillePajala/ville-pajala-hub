'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function PortfolioPage() {
  return (
    <PageTransition>
      <Section
        title="Portfolio"
        description="A showcase of my projects, work experience, and technical expertise."
      >
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>All Projects</CardTitle>
              <CardDescription>
                Browse through my complete collection of projects and works.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/portfolio">View All</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Case Studies</CardTitle>
              <CardDescription>
                Detailed analysis of selected projects with in-depth insights.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/portfolio/case-studies">Explore</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technologies</CardTitle>
              <CardDescription>
                Overview of the technologies and tools I specialize in.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/portfolio/technologies">Explore</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>
    </PageTransition>
  )
} 