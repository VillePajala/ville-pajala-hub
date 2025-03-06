'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function AutomationPage() {
  // Mock case studies data - will be replaced with actual data from Sanity
  const caseStudies = [
    {
      id: 1,
      title: 'Marketing Workflow Automation',
      description: "Streamlined a marketing team's workflow, reducing manual tasks by 70% and improving campaign delivery times.",
      challenge: 'A marketing team spending too much time on repetitive tasks rather than creative work.',
      solution: 'Custom workflow automation using Zapier, Make.com, and custom scripts to connect CRM, email, and analytics tools.',
      results: '70% reduction in manual tasks, 40% faster campaign delivery, improved analytics reporting.'
    },
    {
      id: 2,
      title: 'E-commerce Order Processing',
      description: 'Automated the order processing system for an e-commerce business, from order receipt to shipping notification.',
      challenge: 'Growing e-commerce business struggling with manual order processing as volume increased.',
      solution: 'End-to-end order processing automation connecting the online store, inventory management, and shipping providers.',
      results: '90% reduction in order processing time, near-zero errors, ability to handle 5x order volume without adding staff.'
    },
    {
      id: 3,
      title: 'Data Processing Pipeline',
      description: 'Built an automated data processing pipeline for a research organization, handling large datasets efficiently.',
      challenge: 'Research team manually processing large datasets, causing delays in analysis and reporting.',
      solution: 'Python-based data pipeline with automated cleaning, transformation, analysis, and visualization steps.',
      results: 'Processing time reduced from days to minutes, standardized data quality, and automated report generation.'
    }
  ]

  // Automation tools and technologies
  const tools = [
    { name: 'Python', category: 'Programming', description: 'Custom automation scripts and data processing' },
    { name: 'Node.js', category: 'Programming', description: 'Backend automation services and API integrations' },
    { name: 'Zapier', category: 'No-Code', description: 'Connecting apps and automating workflows without coding' },
    { name: 'Make.com', category: 'Low-Code', description: 'Complex automation scenarios with visual interface' },
    { name: 'GitHub Actions', category: 'DevOps', description: 'CI/CD pipelines and code deployment automation' },
    { name: 'AWS Lambda', category: 'Cloud', description: 'Serverless functions for event-driven automation' },
    { name: 'Puppeteer', category: 'Web', description: 'Web scraping and browser automation' },
    { name: 'Power Automate', category: 'Microsoft', description: 'Business process automation within Microsoft ecosystem' }
  ]

  return (
    <PageTransition>
      <Section
        title="Automation Solutions"
        description="Streamlining processes and workflows to save time, reduce errors, and increase efficiency."
      >
        <div className="space-y-12">
          <p className="text-lg text-muted-foreground">
            Automation can transform your business operations by eliminating repetitive tasks, standardizing processes, and allowing your team to focus on high-value work. Explore case studies and automation technologies below.
          </p>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Case Studies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((study) => (
                <Card key={study.id} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>{study.title}</CardTitle>
                    <CardDescription>{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">The Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">The Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">The Results</h4>
                      <p className="text-sm text-muted-foreground">{study.results}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">Full Case Study</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Automation Technologies</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => (
                <Card key={tool.name} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <CardDescription>
                      <span className="inline-block px-2 py-1 rounded-full text-xs bg-secondary">
                        {tool.category}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg border border-border bg-gradient-to-br from-primary/10 to-background p-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-semibold">Ready to Automate Your Workflows?</h2>
              <p className="text-muted-foreground">
                Let's identify the repetitive tasks and inefficient processes in your business that could benefit from automation. Together, we'll design and implement solutions that save time, reduce errors, and boost productivity.
              </p>
              <div className="pt-4">
                <Button asChild size="lg">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 