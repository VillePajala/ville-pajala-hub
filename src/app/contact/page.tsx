'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react'
import { isValidEmail } from '@/lib/utils'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: formData.email ? (isValidEmail(formData.email) ? '' : 'Invalid email address') : 'Email is required',
      message: formData.message ? '' : 'Message is required'
    }
    
    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  // Animation variants for the hero title
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  }

  const heroTitle = "Contact";

  return (
    <div>
      {/* Transparent hero section with centered text */}
      <div className="relative py-24 mb-8 overflow-visible flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center overflow-visible pb-8">
            {heroTitle.split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block font-serif text-7xl md:text-8xl font-bold"
                style={{ lineHeight: 1.2 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto" 
          >
            Have a question or want to work together? Send me a message.
          </motion.p>
        </div>
      </div>

      {/* Main content with contact form and connect channels */}
      <div className="pb-12 px-4 sm:px-6 md:px-8 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg border border-white/10 p-6 bg-gradient-to-br from-zinc-900/50 to-zinc-700/30 backdrop-blur-sm"
          >
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 mb-4 text-green-400" />
                <h3 className="mb-2 text-2xl font-serif font-medium text-white/95">Message Sent!</h3>
                <p className="mb-6 text-white/80">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5 flex items-center gap-2"
                >
                  <Mail size={18} />
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/90">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full rounded-md border ${
                      errors.name ? "border-red-500" : "border-white/10"
                    } bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/90">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full rounded-md border ${
                      errors.email ? "border-red-500" : "border-white/10"
                    } bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/90">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full rounded-md border ${
                      errors.message ? "border-red-500" : "border-white/10"
                    } bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300`}
                    placeholder="How can I help you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-white/20 border-t-white/80 animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="rounded-lg border border-white/10 p-6 bg-gradient-to-br from-zinc-900/50 to-zinc-700/30 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-serif font-medium text-white/95">Connect with Me</h3>
              <p className="mb-6 text-white/80">
                You can also reach me through the following channels:
              </p>
              
              <div className="space-y-5">
                <div className="flex items-center gap-4 p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 group-hover:bg-white/20 transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white/90 group-hover:text-white transition-colors duration-300">Email</p>
                    <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors duration-300">contact@villepajala.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 group-hover:bg-white/20 transition-all duration-300">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white/90 group-hover:text-white transition-colors duration-300">LinkedIn</p>
                    <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors duration-300">linkedin.com/in/ville-pajala</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 group-hover:bg-white/20 transition-all duration-300">
                    <Twitter size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white/90 group-hover:text-white transition-colors duration-300">X / Twitter</p>
                    <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors duration-300">@villepajala</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-white/10 p-6 bg-gradient-to-br from-zinc-900/50 to-zinc-700/30 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-serif font-medium text-white/95">Office Hours</h3>
              <p className="mb-4 text-white/80">
                I'm available for virtual meetings during the following hours:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white/90">9:00 AM - 5:00 PM CET</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white/90">By appointment</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white/90">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 