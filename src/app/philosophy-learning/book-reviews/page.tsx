'use client'

import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useState } from 'react'

export default function BookReviewsPage() {
  // Mock book reviews data - will be replaced with actual data from Sanity
  const bookReviews = [
    {
      id: 1,
      title: "Superintelligence: Paths, Dangers, Strategies",
      author: "Nick Bostrom",
      coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      excerpt: "Bostrom's comprehensive analysis of the potential implications of advanced artificial intelligence raises important questions about humanity's future. This review examines his key arguments and considers their relevance to current AI developments...",
      rating: 4.5,
      categories: ["AI", "Philosophy", "Futurism"],
      publishDate: "January 15, 2023"
    },
    {
      id: 2,
      title: "The Phenomenology of Perception",
      author: "Maurice Merleau-Ponty",
      coverImage: "https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      excerpt: "Merleau-Ponty's classic work provides profound insights into embodied cognition and the nature of perception. This review explores how his ideas remain relevant in an era of virtual reality and digital embodiment...",
      rating: 5,
      categories: ["Phenomenology", "Philosophy of Mind", "Consciousness"],
      publishDate: "March 8, 2023"
    },
    {
      id: 3,
      title: "Algorithms to Live By",
      author: "Brian Christian & Tom Griffiths",
      coverImage: "https://images.unsplash.com/photo-1565116175827-64847f972a3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      excerpt: "This accessible exploration of how computer algorithms can be applied to human decision-making offers valuable insights. The review considers both the practical applications and philosophical implications of viewing human cognition through a computational lens...",
      rating: 4,
      categories: ["Cognitive Science", "Computer Science", "Psychology"],
      publishDate: "April 22, 2023"
    },
    {
      id: 4,
      title: "The Creativity Code",
      author: "Marcus du Sautoy",
      coverImage: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      excerpt: "Du Sautoy explores the question of whether AI can truly be creative, examining art, music, mathematics, and more. This review evaluates his arguments and considers the implications for our understanding of human creativity...",
      rating: 4.5,
      categories: ["AI", "Art", "Creativity", "Mathematics"],
      publishDate: "June 14, 2023"
    },
    {
      id: 5,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      coverImage: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      excerpt: "Kahneman's influential work on cognitive biases and dual-process theory has profound implications for decision-making. This review examines how his insights apply to technology design and AI development...",
      rating: 5,
      categories: ["Psychology", "Behavioral Economics", "Cognitive Science"],
      publishDate: "August 30, 2023"
    }
  ]

  // Categories for filtering
  const allCategories = Array.from(new Set(bookReviews.flatMap(review => review.categories)))
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  // Filter reviews based on selected category
  const filteredReviews = selectedCategory 
    ? bookReviews.filter(review => review.categories.includes(selectedCategory))
    : bookReviews

  // Function to render stars for ratings
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    let stars = []
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-amber-500">★</span>)
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-amber-500">½</span>)
    }
    
    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-muted-foreground">☆</span>)
    }
    
    return <div className="flex">{stars}</div>
  }

  return (
    <PageTransition>
      <Section
        title="Book Reviews"
        description="Critical analyses and reflections on important books at the intersection of technology, philosophy, and cognitive science."
      >
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
              }`}
            >
              All Books
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid gap-8 md:grid-cols-1">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/4 shrink-0">
                  <div className="h-full w-full overflow-hidden">
                    <img 
                      src={review.coverImage} 
                      alt={`${review.title} by ${review.author}`} 
                      className="h-full w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <CardTitle>{review.title}</CardTitle>
                        <CardDescription className="text-base">by {review.author}</CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        {renderStars(review.rating)}
                        <span className="text-sm text-muted-foreground">{review.rating}/5</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{review.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {review.categories.map((category) => (
                        <span 
                          key={category} 
                          className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium cursor-pointer hover:bg-secondary/80"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCategory(category);
                          }}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Published: {review.publishDate}</span>
                    <Button variant="outline">Read Full Review</Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg border border-border bg-secondary/10 p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Reading Recommendations</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
              These reviews reflect my ongoing exploration of ideas through literature. Each book has influenced my thinking in meaningful ways, and I hope these analyses provide valuable insights and inspire your own intellectual journey.
            </p>
            <Button variant="outline" asChild>
              <Link href="/philosophy-learning">Back to Philosophy & Learning</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
} 