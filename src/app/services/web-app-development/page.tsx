'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function WebAppDevelopmentPage() {
  // Mock web & app development services data - will be replaced with actual data from Sanity
  const services = [
    {
      id: 1,
      title: "Modern Web Applications",
      description: "Responsive, fast, and engaging web applications built with modern technologies.",
      details: "I develop web applications that provide app-like experiences directly in the browser, with responsive designs that work across all devices. Using frameworks like Next.js and React, these applications deliver exceptional performance, SEO advantages, and engaging user experiences.",
      icon: "💻",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      timeline: "4-12 weeks"
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description: "Custom online stores and marketplaces tailored to your business model.",
      details: "From product catalogs and payment processing to inventory management and customer accounts, I build e-commerce solutions that provide seamless shopping experiences while giving you powerful tools to manage your online business.",
      icon: "🛒",
      technologies: ["Next.js Commerce", "Shopify Integration", "Stripe", "Supabase"],
      timeline: "6-14 weeks"
    },
    {
      id: 3,
      title: "Content Management Systems",
      description: "Tailored CMS solutions that make content creation and management effortless.",
      details: "I create custom content management systems that give you complete control over your website's content without requiring technical knowledge. These solutions are built around your specific workflows and content types, making updates intuitive and efficient.",
      icon: "📝",
      technologies: ["Sanity.io", "Next.js", "Headless CMS", "Custom Schemas"],
      timeline: "4-10 weeks"
    },
    {
      id: 4,
      title: "SaaS Applications",
      description: "Cloud-based software solutions with subscription business models.",
      details: "I develop Software-as-a-Service (SaaS) applications that deliver your core business functionality through the web. These include user management, subscription handling, feature access control, and all the components needed for a successful SaaS business.",
      icon: "☁️",
      technologies: ["Next.js", "Supabase", "Stripe", "Authentication"],
      timeline: "8-16 weeks"
    }
  ]

  // Development process steps
  const processSteps = [
    {
      number: 1,
      title: "Discovery & Planning",
      description: "Understanding your needs, defining requirements, and creating a project roadmap.",
      details: ["Requirement gathering", "User research", "Technology selection", "Architecture planning"]
    },
    {
      number: 2,
      title: "Design & Prototyping",
      description: "Creating the visual identity and user experience of your application.",
      details: ["User interface design", "User experience design", "Interactive prototyping", "Design system creation"]
    },
    {
      number: 3,
      title: "Development",
      description: "Building your application with clean, maintainable code and regular updates.",
      details: ["Frontend development", "Backend implementation", "API integration", "Database design"]
    },
    {
      number: 4,
      title: "Testing & Refinement",
      description: "Ensuring your application works flawlessly across all devices and scenarios.",
      details: ["Functionality testing", "Responsive testing", "Performance optimization", "User testing"]
    },
    {
      number: 5,
      title: "Deployment & Support",
      description: "Launching your application and providing ongoing maintenance and improvements.",
      details: ["Production deployment", "Analytics setup", "Documentation", "Maintenance & updates"]
    }
  ]

  // Technical expertise
  const expertise = [
    { name: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { name: "Backend", technologies: ["Node.js", "Supabase", "PostgreSQL", "RESTful APIs", "GraphQL"] },
    { name: "CMS & Content", technologies: ["Sanity.io", "Headless CMS", "Content Modeling", "GROQ"] },
    { name: "DevOps", technologies: ["Vercel", "CI/CD", "Docker", "GitHub Actions", "Performance Optimization"] }
  ]

  return (
    <PageTransition>
      <Section
        title="Web & App Development"
        description="Modern, responsive, and user-friendly digital experiences tailored to your specific needs."
      >
        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              I create custom web applications and digital experiences that combine modern design, performance, and functionality. 
              Whether you need a complex web platform, e-commerce solution, or content-driven website, I deliver tailored 
              solutions that align with your business goals and delight your users.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="flex items-center">
                      <span className="mr-2 text-2xl">{service.icon}</span> {service.title}
                    </CardTitle>
                    <span className="text-xs px-2 py-1 rounded bg-secondary/70 text-secondary-foreground">
                      {service.timeline}
                    </span>
                  </div>
                  <CardDescription className="mt-1 text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{service.details}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Core Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="default">
                    <Link href="/contact?service=web-development">Discuss Your Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Development Process</h3>
            <div className="space-y-6">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
                {processSteps.map((step) => (
                  <div key={step.number} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary mb-2">
                      {step.number}
                    </div>
                    <h4 className="text-center font-medium">{step.title}</h4>
                  </div>
                ))}
              </div>
              
              <div className="grid gap-4 grid-cols-1 md:grid-cols-5 mt-6">
                {processSteps.map((step) => (
                  <Card key={step.number} className="bg-background h-full flex flex-col">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">{step.title}</CardTitle>
                      <CardDescription className="text-xs">{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-1 text-primary">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="text-xl font-semibold mb-6">Technical Expertise</h3>
            <div className="grid gap-6 md:grid-cols-4">
              {expertise.map((area, idx) => (
                <div key={idx}>
                  <h4 className="font-medium mb-3">{area.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Build Your Web Project?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Let's discuss your project requirements and create a custom solution that meets your specific needs. 
              Whether you have a detailed spec or just a concept, I can guide you through the process of bringing 
              your digital vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact?service=web-development">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 