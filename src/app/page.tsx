'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { ReactNode } from 'react'

export default function Home() {
  return (
    <PageTransition className="space-y-20">
      {/* Hero Section */}
      <Section className="text-center py-12">
        <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-indigo-900/30 text-indigo-light mb-8">
          Welcome to my digital portfolio
        </span>
        <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-white">I'm </span>
          <span className="text-gradient-rainbow">Ville Pajala</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-slate-300 leading-relaxed">
          Software developer and technology consultant passionate about creating <span className="text-gradient-purple-blue font-semibold">impactful digital solutions</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-5 mb-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-primary to-indigo-primary hover:opacity-90 text-white px-8 py-6 text-base rounded-full shadow-md hover:shadow-lg button-glow">
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-8 py-6 text-base border-2 border-slate-700 hover:border-indigo-primary text-white hover:text-indigo-light rounded-full shadow-md hover:shadow-lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Section>

      {/* Featured Sections */}
      <Section
        title="Explore My Work"
        titleClassName="text-gradient-indigo"
        description="Discover my content, projects, and services"
        delay={0.2}
        className="py-12"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="card-gradient-purple-blue card-hover enhanced-card rounded-xl overflow-hidden shadow-xl">
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-2xl font-semibold tracking-tight text-white">Blog</CardTitle>
              <CardDescription className="text-slate-300">
                Thoughts and insights on software development, technology, and business.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="h-36 flex items-center justify-center">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-light w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button asChild className="bg-indigo-primary hover:bg-indigo-700 text-white w-full shadow-md rounded-lg transition-all duration-300 font-medium">
                <Link href="/blog">View Posts</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-gradient-teal-blue card-hover enhanced-card rounded-xl overflow-hidden shadow-xl">
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-2xl font-semibold tracking-tight text-white">Portfolio</CardTitle>
              <CardDescription className="text-slate-300">
                Showcase of my projects and professional work in software development.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="h-36 flex items-center justify-center">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-teal-secondary w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button asChild className="bg-teal-primary hover:bg-teal-700 text-white w-full shadow-md rounded-lg transition-all duration-300 font-medium">
                <Link href="/portfolio">Explore Projects</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-gradient-slate-purple card-hover enhanced-card rounded-xl overflow-hidden shadow-xl">
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-2xl font-semibold tracking-tight text-white">Services</CardTitle>
              <CardDescription className="text-slate-300">
                Professional consulting and development services for your digital needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="h-36 flex items-center justify-center">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-secondary w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button asChild className="bg-purple-primary hover:bg-purple-900 text-white w-full shadow-md rounded-lg transition-all duration-300 font-medium">
                <Link href="/services">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Connect Section */}
      <Section
        delay={0.4}
        className="rounded-2xl card-glass shadow-lg border border-indigo-primary/20 p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/10 via-indigo-primary/5 to-teal-primary/10 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-gradient-purple-blue">Let's Create Something Amazing</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-slate-300">
            Interested in working together or have a question? I'm always open to new opportunities and collaborations.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-primary to-indigo-primary hover:from-purple-secondary hover:to-indigo-secondary text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 button-glow">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Section>
    </PageTransition>
  )
}
