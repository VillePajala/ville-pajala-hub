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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Art</CardTitle>
              <CardDescription>
                Visual art expressions across different media and techniques.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Explore digital and traditional art pieces that blend technology with creative expression.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/creative-work/art">View Art Projects</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Music</CardTitle>
              <CardDescription>
                Compositions, sound design, and audio experiments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Listen to original compositions and sound design projects that explore the boundaries of audio.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/creative-work/music">Explore Music</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Game Development</CardTitle>
              <CardDescription>
                Interactive experiences, games, and simulations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover game development projects that combine programming, art, and design into interactive experiences.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/creative-work/game-development">Play & Explore</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experimental</CardTitle>
              <CardDescription>
                Innovative and experimental projects pushing creative boundaries.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Experience cutting-edge experiments that blend different creative disciplines with emerging technologies.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/creative-work/experimental">Explore Experiments</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>
    </PageTransition>
  )
} 