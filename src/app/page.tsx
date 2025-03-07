'use client'

import Link from 'next/link'
import { PageTransition } from '@/components/ui/PageTransition'

export default function Home() {
  return (
    <PageTransition className="space-y-24">
      {/* Hero Section with proper alignment */}
      <section className="relative flex justify-center items-center pt-32 pb-32 w-full">
        {/* Curved line decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
            {/* Primary curve */}
            <path 
              d="M0,50 C300,50 400,270 600,270 C800,270 1000,50 1200,50 L1200,650 C1000,650 800,430 600,430 C400,430 200,650 0,650 Z" 
              fill="none" 
              stroke="url(#blue-gradient)" 
              strokeWidth="2"
              opacity="0.6"
              filter="url(#glow)"
            >
              <animate 
                attributeName="d" 
                dur="15s" 
                repeatCount="indefinite"
                values="
                  M0,50 C300,50 400,270 600,270 C800,270 1000,50 1200,50 L1200,650 C1000,650 800,430 600,430 C400,430 200,650 0,650 Z;
                  M0,100 C200,100 400,270 600,270 C800,270 1000,100 1200,100 L1200,550 C1000,550 800,400 600,400 C400,400 200,550 0,550 Z;
                  M0,50 C300,50 400,270 600,270 C800,270 1000,50 1200,50 L1200,650 C1000,650 800,430 600,430 C400,430 200,650 0,650 Z"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
              <animate
                attributeName="opacity"
                dur="10s"
                repeatCount="indefinite"
                values="0.6;0.4;0.6"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
            </path>
            
            {/* Secondary curve with offset */}
            <path 
              d="M0,70 C200,70 400,290 600,290 C800,290 1000,70 1200,70 L1200,630 C1000,630 800,410 600,410 C400,410 200,630 0,630 Z" 
              fill="none" 
              stroke="url(#purple-gradient)" 
              strokeWidth="1.5"
              opacity="0.4"
              strokeDasharray="5,5"
              filter="url(#glow)"
            >
              <animate 
                attributeName="d" 
                dur="18s" 
                repeatCount="indefinite"
                values="
                  M0,70 C200,70 400,290 600,290 C800,290 1000,70 1200,70 L1200,630 C1000,630 800,410 600,410 C400,410 200,630 0,630 Z;
                  M0,120 C200,120 400,290 600,290 C800,290 1000,120 1200,120 L1200,550 C1000,550 800,400 600,400 C400,400 200,550 0,550 Z;
                  M0,70 C200,70 400,290 600,290 C800,290 1000,70 1200,70 L1200,630 C1000,630 800,410 600,410 C400,410 200,630 0,630 Z"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
              <animate
                attributeName="strokeDashoffset"
                dur="8s"
                repeatCount="indefinite"
                values="0;30;0"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              />
            </path>
            
            {/* Glow particles along the paths */}
            <g className="glow-particles">
              <circle r="3" fill="#4F46E5" opacity="0.7">
                <animateMotion dur="8s" repeatCount="indefinite" path="M0,50 C300,50 400,270 600,270 C800,270 900,50 1200,50" rotate="auto">
                  <mpath href="#motionPath" />
                </animateMotion>
                <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0;0.7;0" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                <animate attributeName="r" dur="4s" repeatCount="indefinite" values="2;4;2" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </circle>
              
              <circle r="3" fill="#4F46E5" opacity="0.7">
                <animateMotion dur="10s" repeatCount="indefinite" path="M0,50 C300,50 400,270 600,270 C800,270 900,50 1200,50" rotate="auto">
                  <mpath href="#motionPath" />
                </animateMotion>
                <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;0.7;0" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                <animate attributeName="r" dur="5s" repeatCount="indefinite" values="2;4;2" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </circle>
              
              <circle r="3" fill="#4F46E5" opacity="0.7">
                <animateMotion dur="12s" repeatCount="indefinite" path="M0,50 C300,50 400,270 600,270 C800,270 900,50 1200,50" rotate="auto">
                  <mpath href="#motionPath" />
                </animateMotion>
                <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0;0.7;0" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                <animate attributeName="r" dur="6s" repeatCount="indefinite" values="2;4;2" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </circle>
              
              <circle r="3" fill="#8B5CF6" opacity="0.7">
                <animateMotion dur="14s" repeatCount="indefinite" path="M0,50 C300,50 400,270 600,270 C800,270 900,50 1200,50" rotate="auto">
                  <mpath href="#motionPath" />
                </animateMotion>
                <animate attributeName="opacity" dur="6s" repeatCount="indefinite" values="0;0.7;0" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                <animate attributeName="r" dur="7s" repeatCount="indefinite" values="2;4;2" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </circle>
              
              <circle r="3" fill="#8B5CF6" opacity="0.7">
                <animateMotion dur="16s" repeatCount="indefinite" path="M0,50 C300,50 400,270 600,270 C800,270 900,50 1200,50" rotate="auto">
                  <mpath href="#motionPath" />
                </animateMotion>
                <animate attributeName="opacity" dur="7s" repeatCount="indefinite" values="0;0.7;0" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                <animate attributeName="r" dur="8s" repeatCount="indefinite" values="2;4;2" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </circle>
              
              <circle r="3" fill="#D946EF" opacity="0.7">
                <animateMotion dur="18s" repeatCount="indefinite" path="M0,50 C300,50 400,270 600,270 C800,270 900,50 1200,50" rotate="auto">
                  <mpath href="#motionPath" />
                </animateMotion>
                <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="0;0.7;0" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                <animate attributeName="r" dur="9s" repeatCount="indefinite" values="2;4;2" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </circle>
            </g>
            
            {/* Hidden path for motion */}
            <path 
              id="motionPath" 
              d="M0,50 C300,50 400,270 600,270 C800,270 900,50 1200,50"
              opacity="0"
            />
            
            {/* Bottom curve motion path */}
            <path 
              id="bottomMotionPath" 
              d="M1200,650 C1000,650 800,430 600,430 C400,430 200,650 0,650"
              opacity="0"
            />
            
            {/* Bottom curve particles */}
            <g className="glow-particles">
              <circle r="3" fill="#0EA5E9" opacity="0.7">
                <animateMotion dur="9s" repeatCount="indefinite" path="M1200,650 C1000,650 800,430 600,430 C400,430 200,650 0,650" rotate="auto">
                  <mpath href="#bottomMotionPath" />
                </animateMotion>
                <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;0.7;0" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                <animate attributeName="r" dur="5s" repeatCount="indefinite" values="2;4;2" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </circle>
              
              <circle r="3" fill="#0EA5E9" opacity="0.7">
                <animateMotion dur="11s" repeatCount="indefinite" path="M1200,650 C1000,650 800,430 600,430 C400,430 200,650 0,650" rotate="auto">
                  <mpath href="#bottomMotionPath" />
                </animateMotion>
                <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0;0.7;0" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                <animate attributeName="r" dur="6s" repeatCount="indefinite" values="2;4;2" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </circle>
              
              <circle r="3" fill="#0EA5E9" opacity="0.7">
                <animateMotion dur="13s" repeatCount="indefinite" path="M1200,650 C1000,650 800,430 600,430 C400,430 200,650 0,650" rotate="auto">
                  <mpath href="#bottomMotionPath" />
                </animateMotion>
                <animate attributeName="opacity" dur="6s" repeatCount="indefinite" values="0;0.7;0" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                <animate attributeName="r" dur="7s" repeatCount="indefinite" values="2;4;2" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </circle>
              
              <circle r="3" fill="#4F46E5" opacity="0.7">
                <animateMotion dur="15s" repeatCount="indefinite" path="M1200,650 C1000,650 800,430 600,430 C400,430 200,650 0,650" rotate="auto">
                  <mpath href="#bottomMotionPath" />
                </animateMotion>
                <animate attributeName="opacity" dur="7s" repeatCount="indefinite" values="0;0.7;0" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                <animate attributeName="r" dur="8s" repeatCount="indefinite" values="2;4;2" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </circle>
            </g>
            
            {/* Gradients */}
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
              
              <linearGradient id="purple-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
              
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feFlood flood-color="#4F46E5" flood-opacity="0.3" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>
            </defs>
          </svg>
        </div>
        
        {/* Center-aligned content */}
        <div className="w-full max-w-[540px] px-6 text-center">
          <div className="inline-flex items-center space-x-2 rounded-full px-4 py-1.5 text-xs font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-500/20 mb-6 backdrop-blur-sm shadow-lg">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Software Developer & Technology Consultant
          </div>
          
          <div className="space-y-5">
            <p className="text-indigo-300 text-xl font-medium">Hello, I'm</p>
            <div>
              <h1 className="text-8xl font-bold gradient-name leading-tight drop-shadow-lg mb-2">
                Ville Pajala
              </h1>
            </div>
            
            <p className="text-xl text-slate-200 mt-6 leading-relaxed">
              I craft <span className="text-elegant font-medium">elegant solutions</span> to complex problems and<br className="hidden md:block" />
              build <span className="text-impactful font-medium">impactful digital experiences</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/portfolio" className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 font-medium text-white transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 shadow-lg hover:shadow-purple-500/20 hover:scale-105">
                View Portfolio
              </Link>
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-transparent px-8 font-medium text-white transition-all duration-300 hover:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 shadow-md hover:shadow-white/10 hover:border-white/40 hover:scale-105 backdrop-blur-sm">
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
              <div className="card-dark flex flex-col h-full bg-indigo-950/40 shadow-[0_0_15px_rgba(79,70,229,0.15)] border border-indigo-500/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/5 to-transparent opacity-100 rounded-xl"></div>
                <div className="flex-1 p-6 space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-indigo-900/50 border border-indigo-500/40 mb-4 shadow-[0_0_10px_rgba(99,102,241,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold">Blog</h3>
                  <p className="text-slate-400">Thoughts and insights on software development, technology, and business.</p>
                </div>
                
                <div className="p-6 pt-0 relative z-10">
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
              <div className="card-dark flex flex-col h-full bg-teal-950/40 shadow-[0_0_15px_rgba(20,184,166,0.15)] border border-teal-500/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/5 to-transparent opacity-100 rounded-xl"></div>
                <div className="flex-1 p-6 space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-900/50 border border-teal-500/40 mb-4 shadow-[0_0_10px_rgba(20,184,166,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold">Portfolio</h3>
                  <p className="text-slate-400">Showcase of my projects and professional work in software development.</p>
                </div>
                
                <div className="p-6 pt-0 relative z-10">
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
              <div className="card-dark flex flex-col h-full bg-purple-950/40 shadow-[0_0_15px_rgba(147,51,234,0.15)] border border-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 to-transparent opacity-100 rounded-xl"></div>
                <div className="flex-1 p-6 space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-900/50 border border-purple-500/40 mb-4 shadow-[0_0_10px_rgba(147,51,234,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold">Services</h3>
                  <p className="text-slate-400">Professional consulting and development services for your digital needs.</p>
                </div>
                
                <div className="p-6 pt-0 relative z-10">
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
