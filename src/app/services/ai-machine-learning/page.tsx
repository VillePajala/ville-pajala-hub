'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function AIMachineLearningPage() {
  // Mock services data - will be replaced with actual data from Sanity
  const services = [
    {
      id: 1,
      title: "AI Strategy Consulting",
      description: "Strategic guidance on integrating AI into your business workflows and products.",
      details: "I help businesses identify high-value AI opportunities, develop implementation roadmaps, manage technical risks, and ensure ethical compliance. This includes evaluating potential use cases, selecting appropriate technologies, and creating a sustainable AI adoption strategy aligned with your business goals.",
      icon: "🧠",
      timeframe: "2-6 weeks",
      deliverables: [
        "AI opportunity assessment",
        "Implementation roadmap",
        "Technology recommendations",
        "Risk analysis & mitigation strategies"
      ]
    },
    {
      id: 2,
      title: "Custom AI Model Development",
      description: "Design and implementation of tailored machine learning models for specific business needs.",
      details: "From data preparation to deployment, I develop specialized AI models to solve your unique challenges. Services include data analysis, feature engineering, model selection, training, evaluation, and integration with your existing systems.",
      icon: "⚙️",
      timeframe: "4-12 weeks",
      deliverables: [
        "Customized machine learning models",
        "Model documentation & performance metrics",
        "Deployment-ready code",
        "Knowledge transfer & training"
      ]
    },
    {
      id: 3,
      title: "Natural Language Processing Solutions",
      description: "Text analysis and generation capabilities for understanding and creating human language.",
      details: "I develop NLP solutions for tasks like sentiment analysis, document classification, content generation, summarization, and conversational AI. Using the latest techniques in language modeling, these solutions can be tailored to your specific domain and integrated with your existing systems.",
      icon: "💬",
      timeframe: "3-8 weeks",
      deliverables: [
        "Custom NLP pipeline",
        "Integration with existing systems",
        "Performance optimization",
        "Ongoing refinement options"
      ]
    },
    {
      id: 4,
      title: "AI Integration & Deployment",
      description: "Seamless integration of AI capabilities into your existing products, services, and workflows.",
      details: "I handle the technical complexities of bringing AI models into production environments, including API development, containerization, performance optimization, and monitoring. The focus is on creating robust, maintainable, and scalable AI implementations.",
      icon: "🔄",
      timeframe: "2-6 weeks",
      deliverables: [
        "Integration architecture",
        "Deployment pipeline",
        "Monitoring & maintenance procedures",
        "Documentation & knowledge transfer"
      ]
    }
  ]

  // Case studies
  const caseStudies = [
    {
      title: "Predictive Analytics for E-commerce",
      description: "Implemented a recommendation system that increased average order value by 23% and customer retention by 18%.",
      industry: "Retail / E-commerce"
    },
    {
      title: "NLP for Customer Support",
      description: "Developed a text analysis system that reduced support ticket processing time by 35% and improved resolution rates.",
      industry: "SaaS / Technology"
    },
    {
      title: "Computer Vision for Quality Control",
      description: "Created a visual inspection system that reduced defect rates by 42% while decreasing inspection costs by 30%.",
      industry: "Manufacturing"
    }
  ]

  return (
    <PageTransition>
      <Section
        title="AI & Machine Learning Services"
        description="Harness the power of artificial intelligence to solve complex problems and create new opportunities."
      >
        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              AI and machine learning technologies offer unprecedented opportunities to enhance products, optimize operations, 
              and create entirely new business models. I help organizations navigate the AI landscape, from strategic planning 
              to implementation, ensuring practical solutions that deliver measurable value.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <span className="mr-2 text-2xl">{service.icon}</span> {service.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-base">{service.description}</CardDescription>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-secondary/70 text-secondary-foreground">
                      {service.timeframe}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{service.details}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-2 text-primary">•</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="default">
                    <Link href="/contact?service=ai">Request Service</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="text-xl font-semibold mb-6">Case Studies</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((study, idx) => (
                <Card key={idx} className="bg-background">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <CardDescription className="text-xs">{study.industry}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{study.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">View Case Study</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Leverage AI for Your Business?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Let's discuss your challenges and explore how AI and machine learning can create value for your organization.
              Whether you're just starting your AI journey or looking to enhance existing implementations, I can help navigate
              the complexities and deliver practical, high-impact solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact?service=ai">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 