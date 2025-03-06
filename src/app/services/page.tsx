'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <PageTransition>
      <Section
        title="Services"
        description="Professional consulting and development services tailored to your needs."
      >
        <div className="space-y-12">
          <p className="text-lg text-muted-foreground">
            I offer specialized services at the intersection of technology, creativity, and business, focusing on AI consulting, automation solutions, web development, and creative technology implementation.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>AI & Machine Learning Services</CardTitle>
                <CardDescription>
                  Harness the power of artificial intelligence for your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI strategy consulting and implementation planning</li>
                  <li>• Custom machine learning model development</li>
                  <li>• Natural language processing solutions</li>
                  <li>• Computer vision applications</li>
                  <li>• AI integration with existing systems</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/services/ai-machine-learning">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Automation Solutions</CardTitle>
                <CardDescription>
                  Streamline your workflows and increase efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Business process automation</li>
                  <li>• Workflow optimization and redesign</li>
                  <li>• Custom automation scripts and tools</li>
                  <li>• Integration between different platforms</li>
                  <li>• Automated testing and quality assurance</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/services/automation-solutions">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Web & App Development</CardTitle>
                <CardDescription>
                  Modern, responsive, and user-friendly digital experiences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Website and web application development</li>
                  <li>• Progressive web apps (PWAs)</li>
                  <li>• E-commerce solutions</li>
                  <li>• Content management systems (CMS)</li>
                  <li>• Performance optimization and SEO</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/services/web-app-development">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Creative Technology</CardTitle>
                <CardDescription>
                  Innovative solutions that blend art, design, and technology.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Interactive installations and experiences</li>
                  <li>• Generative art and design</li>
                  <li>• Creative coding projects</li>
                  <li>• Digital storytelling applications</li>
                  <li>• Experimental interfaces and interactions</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/services/creative-technology">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Ready to Work Together?</h3>
                <p className="text-muted-foreground">
                  Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 