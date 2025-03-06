'use client'

import { useState } from 'react'
import { PageTransition } from '@/components/ui/PageTransition'
import { Section } from '@/components/sections/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { isValidEmail } from '@/lib/utils'

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email
    if (!email) {
      setEmailError('Email is required')
      return
    }
    
    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    
    setEmailError('')
    setIsSubmitting(true)
    
    // Simulate form submission (will be replaced with actual Substack integration)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail('')
    }, 1500)
  }

  return (
    <PageTransition>
      <Section
        title="Subscribe to My Newsletter"
        description="Stay updated with my latest thoughts, projects, and insights."
      >
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            {isSubscribed ? (
              <div className="text-center py-12">
                <div className="mb-4 text-5xl">✅</div>
                <h3 className="text-2xl font-semibold mb-3">Thanks for Subscribing!</h3>
                <p className="text-muted-foreground mb-6">
                  You've successfully signed up for my newsletter. Look out for an email with your free AI guide coming soon!
                </p>
                <div className="flex justify-center">
                  <Button onClick={() => setIsSubscribed(false)}>
                    Subscribe Another Email
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">What You'll Get</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Insights on AI, technology, creativity, and philosophy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Early access to new projects and content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Exclusive resources and tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Monthly newsletter (no spam, ever)</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg mb-8">
                  <h3 className="text-lg font-medium mb-2">Free AI Guide for New Subscribers</h3>
                  <p className="text-muted-foreground mb-0">
                    Sign up today and receive my comprehensive guide to leveraging AI for personal and professional growth.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (emailError) setEmailError('')
                      }}
                      placeholder="your.email@example.com"
                      className={emailError ? "border-destructive" : ""}
                    />
                    {emailError && (
                      <p className="mt-1 text-sm text-destructive">{emailError}</p>
                    )}
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By subscribing, you agree to receive email newsletters. You can unsubscribe at any time.
                    <br />Your information will never be shared with third parties.
                  </p>
                </form>
              </div>
            )}
          </Card>
        </div>
      </Section>
    </PageTransition>
  )
} 