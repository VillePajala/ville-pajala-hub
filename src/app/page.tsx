'use client'

import Link from 'next/link'
import { PageTransition } from '@/components/ui/PageTransition'

export default function Home() {
  return (
    <PageTransition className="space-y-24">
      {/* Hero Section with proper alignment */}
      <section className="relative flex justify-center items-center pt-24 pb-24 w-full">
        {/* Curved line decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
            <path 
              d="M0,100 C300,100 400,300 600,300 C800,300 900,100 1200,100 L1200,600 C900,600 800,400 600,400 C400,400 300,600 0,600 Z" 
              fill="none" 
              stroke="#0066CC" 
              strokeWidth="2"
              opacity="0.5"
            />
          </svg>
        </div>
        
        {/* Center-aligned content */}
        <div className="w-full max-w-[540px] px-6">
          <div className="inline-flex items-center space-x-2 rounded-full px-4 py-1.5 text-xs font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-500/20 mb-6">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Software Developer & Technology Consultant
          </div>
          
          <div className="space-y-5">
            <p className="text-indigo-300 text-xl">Hello, I'm</p>
            <h1 className="text-7xl font-bold gradient-name leading-tight">
              Ville Pajala
            </h1>
            
            <p className="text-xl text-slate-300 mt-6 leading-relaxed">
              I craft <span className="text-elegant">elegant solutions</span> to complex problems and<br className="hidden md:block" />
              build <span className="text-impactful">impactful digital experiences</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/portfolio" className="inline-flex h-12 items-center justify-center rounded-full bg-purple-600 px-8 font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                View Portfolio
              </Link>
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-transparent px-8 font-medium text-white transition-colors hover:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="flex justify-center py-12 relative">
        {/* Subtle section divider */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
        
        <div className="w-full max-w-6xl px-6 space-y-14">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-indigo-400">
              <span className="h-px w-5 bg-indigo-400/50"></span>
              <span>FEATURED WORK</span>
              <span className="h-px w-5 bg-indigo-400/50"></span>
            </div>
            <h2 className="text-4xl font-bold">Explore My Digital Universe</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Discover my content, projects, and professional services</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Card */}
            <div className="group relative">
              <div className="card-dark flex flex-col h-full">
                <div className="flex-1 p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-indigo-900/30 border border-indigo-500/20 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold">Blog</h3>
                  <p className="text-slate-400">Thoughts and insights on software development, technology, and business.</p>
                </div>
                
                <div className="p-6 pt-0">
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center space-x-2 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                  >
                    <span>Read Articles</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Portfolio Card */}
            <div className="group relative">
              <div className="card-dark flex flex-col h-full">
                <div className="flex-1 p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-900/30 border border-teal-500/20 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold">Portfolio</h3>
                  <p className="text-slate-400">Showcase of my projects and professional work in software development.</p>
                </div>
                
                <div className="p-6 pt-0">
                  <Link 
                    href="/portfolio" 
                    className="inline-flex items-center space-x-2 text-teal-400 group-hover:text-teal-300 transition-colors"
                  >
                    <span>View Projects</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Services Card */}
            <div className="group relative">
              <div className="card-dark flex flex-col h-full">
                <div className="flex-1 p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-900/30 border border-purple-500/20 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold">Services</h3>
                  <p className="text-slate-400">Professional consulting and development services for your digital needs.</p>
                </div>
                
                <div className="p-6 pt-0">
                  <Link 
                    href="/services" 
                    className="inline-flex items-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors"
                  >
                    <span>Discover Services</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="flex justify-center relative py-16">
        {/* Subtle section divider */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
        
        <div className="w-full max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl p-1 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-teal-500/5"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            
            <div className="relative p-10 lg:p-14 text-center space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Amazing</span></h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Interested in working together or have a question? I'm always open to new opportunities and collaborations.
                </p>
              </div>
              
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 font-medium text-white transition-all hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 shadow-lg shadow-purple-900/20">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
