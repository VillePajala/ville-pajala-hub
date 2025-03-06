'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function AutomationSolutionsPage() {
  // Mock automation services data - will be replaced with actual data from Sanity
  const services = [
    {
      id: 1,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and processes to save time and reduce errors.",
      details: "I design and implement custom automation solutions that connect your existing tools and services to create seamless workflows. By reducing manual tasks, your team can focus on high-value work while improving consistency and reducing operational costs.",
      icon: "⚙️",
      benefits: [
        "Reduced operational costs",
        "Minimized human error",
        "Improved team productivity",
        "Consistent process execution"
      ]
    },
    {
      id: 2,
      title: "Business Process Optimization",
      description: "Analyze and reimagine workflows to improve efficiency, quality, and scalability.",
      details: "Before automating, it's essential to optimize. I help analyze your current processes, identify bottlenecks and inefficiencies, and redesign workflows for maximum effectiveness. This ensures that when automation is applied, it enhances an already strong process.",
      icon: "📈",
      benefits: [
        "Streamlined operations",
        "Elimination of bottlenecks",
        "Improved process visibility",
        "Enhanced scalability"
      ]
    },
    {
      id: 3,
      title: "Data Pipeline Automation",
      description: "Create reliable, automated systems for data collection, processing, and analysis.",
      details: "Modern businesses need to move data efficiently between systems for reporting, analysis, and operations. I build automated data pipelines that ensure your information flows seamlessly from source to destination, with appropriate transformations, validations, and error handling.",
      icon: "🔄",
      benefits: [
        "Real-time data availability",
        "Automated reporting",
        "Reduced data entry errors",
        "Consistent data processing"
      ]
    },
    {
      id: 4,
      title: "Custom Integration Solutions",
      description: "Connect disparate systems and applications to work together seamlessly.",
      details: "Most businesses use multiple software platforms that often don't communicate effectively. I develop custom integrations that bridge these gaps, allowing data and functionality to flow between systems without manual intervention, creating a cohesive technology ecosystem.",
      icon: "🔌",
      benefits: [
        "Unified information systems",
        "Elimination of duplicate data entry",
        "Enhanced cross-platform capabilities",
        "Improved data consistency"
      ]
    }
  ]

  // Automation approaches
  const approaches = [
    {
      title: "No-Code Solutions",
      description: "For straightforward automation needs, I leverage platforms like Zapier, Make.com, and Power Automate to create solutions that can be maintained without specialized development skills.",
      suitable: "Quick implementations, connecting popular tools, budget-conscious projects"
    },
    {
      title: "Low-Code Development",
      description: "For more complex requirements, low-code platforms offer flexibility while maintaining accessibility. This approach balances customization with implementation speed.",
      suitable: "Medium-complexity processes, solutions requiring some custom logic, faster development timelines"
    },
    {
      title: "Custom Development",
      description: "When unique requirements or maximum flexibility are needed, I develop custom automation solutions using technologies like Python, Node.js, and cloud services.",
      suitable: "Complex workflows, unique business requirements, mission-critical processes"
    }
  ]

  // Success metrics
  const successMetrics = [
    { metric: "Average time savings", value: "15-30", unit: "hours per week" },
    { metric: "Typical error reduction", value: "60-90", unit: "percent" },
    { metric: "ROI timeframe", value: "2-6", unit: "months" },
    { metric: "Process acceleration", value: "40-80", unit: "percent faster" }
  ]

  return (
    <PageTransition>
      <Section
        title="Automation Solutions"
        description="Streamline operations, reduce errors, and free your team to focus on what matters most."
      >
        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              In today's fast-paced business environment, automation is no longer a luxury—it's a necessity for maintaining 
              competitiveness and scalability. I develop tailored automation solutions that eliminate repetitive tasks, 
              streamline workflows, and ensure consistent results while reducing operational costs.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 text-2xl">{service.icon}</span> {service.title}
                  </CardTitle>
                  <CardDescription className="mt-1 text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{service.details}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-2 text-primary">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="default">
                    <Link href="/contact?service=automation">Discuss Your Needs</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="text-xl font-semibold mb-6">Automation Approaches</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {approaches.map((approach, idx) => (
                <Card key={idx} className="bg-background h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg">{approach.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4">{approach.description}</p>
                    <div>
                      <h4 className="text-xs font-medium mb-1">Best for:</h4>
                      <p className="text-xs text-muted-foreground">{approach.suitable}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg border border-border bg-gradient-to-br from-primary/5 to-background p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Typical Results</h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {successMetrics.map((item, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{item.unit}</div>
                  <div className="text-sm font-medium">{item.metric}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Automate Your Workflows?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Let's discuss your current processes and identify opportunities for automation. Whether you're looking to 
              streamline a specific workflow or transform your entire operation, I can help you implement solutions that 
              save time, reduce errors, and improve outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact?service=automation">Schedule a Consultation</Link>
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