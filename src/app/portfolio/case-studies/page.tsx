'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  industry: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export default function CaseStudiesPage() {
  // Mock case studies data - will be replaced with actual data from Sanity
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "AI-Powered Customer Service Platform",
      client: "TechSolutions Inc.",
      summary: "Developed an AI customer service platform that reduced response times by 85% and improved customer satisfaction scores.",
      challenge: "TechSolutions was struggling with scaling their customer support operations while maintaining quality. Response times were increasing, and customer satisfaction was declining as the company grew.",
      solution: "I designed and implemented an AI-powered customer service platform that uses natural language processing to categorize, prioritize, and respond to customer inquiries. The system integrates with their existing CRM and provides real-time analytics for the support team.",
      results: [
        "85% reduction in average response time",
        "42% increase in customer satisfaction scores", 
        "Support team capacity increased by 300% without additional staff",
        "Annual cost savings of approximately $240,000"
      ],
      technologies: ["Natural Language Processing", "React", "Node.js", "Supabase", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      industry: "Technology / SaaS",
      testimonial: {
        quote: "The AI solution transformed our customer service operations. We're now able to provide faster, more accurate support while our team focuses on complex issues that truly require human attention.",
        author: "Sarah Johnson",
        role: "Customer Success Director"
      }
    },
    {
      id: 2,
      title: "E-commerce Platform Redesign & Optimization",
      client: "Urban Threads",
      summary: "Redesigned and optimized an e-commerce platform, resulting in a 47% increase in conversion rate and 62% improvement in page load speed.",
      challenge: "Urban Threads' online store was struggling with poor performance, high bounce rates, and a complicated checkout process that was leading to cart abandonment.",
      solution: "I redesigned the e-commerce platform with a focus on user experience, performance optimization, and conversion rate improvement. The project included rebuilding the frontend with Next.js, implementing a headless CMS, and creating a streamlined checkout process.",
      results: [
        "47% increase in conversion rate",
        "62% improvement in page load speed",
        "38% reduction in cart abandonment",
        "Mobile purchases increased by 56%"
      ],
      technologies: ["Next.js", "Sanity.io", "Stripe", "Tailwind CSS", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      industry: "Retail / E-commerce"
    },
    {
      id: 3,
      title: "Automated Data Processing Pipeline",
      client: "ResearchNow Institute",
      summary: "Built an automated data processing pipeline that reduced analysis time from weeks to hours while improving data quality and consistency.",
      challenge: "ResearchNow Institute was manually processing large datasets for their research projects, leading to delays, inconsistent results, and inefficient use of researcher time.",
      solution: "I developed an automated data processing pipeline that extracts data from multiple sources, cleans and transforms it according to predefined rules, performs necessary analysis, and generates standardized reports and visualizations.",
      results: [
        "Analysis time reduced from 2-3 weeks to 4-6 hours",
        "Data processing errors reduced by 94%",
        "Enabled researchers to analyze 5x more datasets",
        "Standardized reporting improved cross-study comparisons"
      ],
      technologies: ["Python", "Pandas", "Automated ETL", "Docker", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      industry: "Research / Education",
      testimonial: {
        quote: "This automation solution transformed our research capabilities. What used to take weeks now happens in hours, with better quality and consistency. Our researchers can now focus on interpretation and discovery rather than data wrangling.",
        author: "Dr. Michael Chen",
        role: "Research Director"
      }
    }
  ];

  // Industries for filtering
  const industries = Array.from(new Set(caseStudies.map(study => study.industry)));

  return (
    <PageTransition>
      <Section
        title="Case Studies"
        description="Detailed explorations of challenges, solutions, and outcomes from selected projects."
      >
        <div className="space-y-12">
          <p className="text-lg text-muted-foreground">
            These case studies provide in-depth looks at specific projects, detailing the challenges faced, 
            the solutions implemented, and the measurable results achieved. Each case study demonstrates 
            my approach to solving complex problems and delivering measurable value.
          </p>
          
          {/* Case studies */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="scroll-mt-24" id={`case-study-${study.id}`}>
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''} h-full`}>
                      <div className="h-64 md:h-full w-full overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="mb-2">
                        <span className="inline-flex items-center rounded-full bg-secondary/70 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                          {study.industry}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                      <h3 className="text-lg text-muted-foreground mb-4">Client: {study.client}</h3>
                      <p className="text-muted-foreground mb-6">{study.summary}</p>
                      <Button asChild>
                        <Link href={`#case-study-details-${study.id}`}>View Case Study</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
                
                <div className="mt-8 scroll-mt-24" id={`case-study-details-${study.id}`}>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Challenge</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Technologies</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, i) => (
                              <span key={i} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="md:col-span-2 space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Solution</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Results</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {study.results.map((result, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2 text-primary">•</span>
                                <span className="text-muted-foreground">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                      
                      {study.testimonial && (
                        <Card className="bg-primary/5 border-primary/10">
                          <CardContent className="pt-6">
                            <blockquote className="text-lg italic mb-4">
                              "{study.testimonial.quote}"
                            </blockquote>
                            <footer className="text-right">
                              <p className="font-medium">{study.testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                            </footer>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Have a Similar Challenge?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              I'd love to discuss how my expertise can help you overcome your business or technical challenges. 
              Let's explore how we can work together to achieve measurable results for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 