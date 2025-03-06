'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function CreativeTechnologyPage() {
  // Mock creative technology services data - will be replaced with actual data from Sanity
  const services = [
    {
      id: 1,
      title: "Generative AI Art & Design",
      description: "Custom AI-powered creative systems for unique visual content generation.",
      details: "I develop tailored generative AI solutions that create unique visual assets for your brand, marketing, or products. These systems can generate illustrations, product visualizations, abstract art, or design variations based on your specifications and style guidelines.",
      image: "https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      technologies: ["Stable Diffusion", "ControlNet", "Custom Fine-tuning", "Web Integration"]
    },
    {
      id: 2,
      title: "Interactive Installations",
      description: "Engaging physical-digital experiences for events, exhibitions, and spaces.",
      details: "I create interactive installations that blend technology with physical space to create memorable experiences. These can include motion-reactive displays, interactive projections, sensor-based experiences, and other immersive technologies for events, exhibitions, or permanent installations.",
      image: "https://images.unsplash.com/photo-1573167710701-35950a41e251?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      technologies: ["Computer Vision", "Projection Mapping", "Motion Tracking", "Touch Interfaces"]
    },
    {
      id: 3,
      title: "Data Visualization",
      description: "Beautiful, interactive representations of complex data for insight and engagement.",
      details: "I transform complex data into intuitive, engaging visual experiences that reveal patterns and insights. From interactive dashboards to artistic data representations, these visualizations can help communicate complex information effectively or create compelling data-driven experiences.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["D3.js", "Three.js", "WebGL", "SVG Animation"]
    },
    {
      id: 4,
      title: "Experimental Interfaces",
      description: "Innovative user interactions that push beyond conventional interface patterns.",
      details: "I explore and implement novel interface concepts that challenge traditional interaction paradigms. These experimental interfaces can create distinctive user experiences, solve unique interaction challenges, or simply differentiate your digital product through innovative design.",
      image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technologies: ["WebGL", "3D Interfaces", "Gestural Controls", "Spatial UI"]
    }
  ]

  // Applications by industry
  const applications = [
    {
      industry: "Marketing & Advertising",
      uses: [
        "Interactive campaigns that increase engagement",
        "Generative AI for personalized visual content",
        "Memorable brand experiences at events",
        "Data visualizations that tell compelling stories"
      ]
    },
    {
      industry: "Education & Museums",
      uses: [
        "Interactive exhibits that enhance learning",
        "Engaging data visualizations of complex concepts",
        "Immersive historical or scientific reconstructions",
        "Participatory installations for collaborative learning"
      ]
    },
    {
      industry: "Brand & Product Experiences",
      uses: [
        "Innovative product demonstrations",
        "Interactive showrooms and retail experiences",
        "Virtual try-on and visualization systems",
        "Brand activations and trade show installations"
      ]
    }
  ]

  // Creative approach principles
  const principles = [
    {
      title: "Technology × Art",
      description: "Blending technical capabilities with artistic sensibility to create solutions that are both functional and aesthetically compelling."
    },
    {
      title: "Experimentation",
      description: "Embracing an iterative, exploratory process that allows for discovery and innovation beyond predefined specifications."
    },
    {
      title: "Human-Centered",
      description: "Focusing on the human experience—emotional, cognitive, and physical—as the foundation for all creative technology solutions."
    },
    {
      title: "Purposeful Innovation",
      description: "Using novel technologies and approaches with intention, ensuring innovation serves meaningful objectives rather than novelty for its own sake."
    }
  ]

  return (
    <PageTransition>
      <Section
        title="Creative Technology"
        description="Innovative solutions that blend art, design, and technology to create unique experiences."
      >
        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Creative technology explores the possibilities that emerge at the intersection of art, design, and technical innovation. 
              I develop experiences that engage, inspire, and communicate in ways that conventional approaches cannot, using emerging 
              technologies to create memorable and meaningful connections with audiences.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{service.details}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Technologies:</h4>
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
                    <Link href="/contact?service=creative-technology">Discuss Possibilities</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg border border-border bg-gradient-to-br from-secondary/10 to-background p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Applications by Industry</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {applications.map((app, idx) => (
                <Card key={idx} className="bg-background h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{app.industry}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {app.uses.map((use, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <span className="mr-2 text-primary">•</span>
                          {use}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Creative Approach</h3>
            <div className="grid gap-6 md:grid-cols-4">
              {principles.map((principle, idx) => (
                <div key={idx} className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl mx-auto">
                    {idx === 0 ? '✦' : idx === 1 ? '⟐' : idx === 2 ? '◉' : '⟡'}
                  </div>
                  <h4 className="font-medium">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Have a Creative Technology Project in Mind?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Let's explore how creative technology can help you engage your audience in new and meaningful ways. 
              Whether you have a specific concept or are just beginning to explore possibilities, I can help you 
              navigate the intersection of art, design, and technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact?service=creative-technology">Start a Conversation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/creative-work">View Creative Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 