'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function CreativeWorkPage() {
  return (
    <PageTransition>
      <Section
        title="Creative Work"
        description="A showcase of art, music, game development, and experimental creative projects."
      >
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Art</CardTitle>
              <CardDescription>
                Visual artwork, digital illustrations, and design projects.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/creative-work/art">Explore</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Music</CardTitle>
              <CardDescription>
                Original compositions, musical projects, and audio experiments.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/creative-work/music">Explore</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Game Development</CardTitle>
              <CardDescription>
                Game design and development projects and prototypes.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/creative-work/game-development">Explore</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experimental</CardTitle>
              <CardDescription>
                Creative experiments that push boundaries and explore new ideas.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href="/creative-work/experimental">Explore</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>
    </PageTransition>
  )
} 