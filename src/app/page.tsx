'use client'

import Link from 'next/link'
import { PageTransition } from '@/components/ui/PageTransition'
import { useEffect, useState } from 'react'
import { injectMysticalSymbols } from './MysticalOverlay'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after a short delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Inject mystical symbols
    const cleanup = injectMysticalSymbols();

    // Create background particles
    const particleContainer = document.querySelector('.particle-container');
    if (particleContainer) {
      const createParticles = () => {
        // Clear any existing particles
        particleContainer.innerHTML = '';
        
        // Create new particles
        const particleCount = Math.min(window.innerWidth / 10, 50); // Responsive count
        
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          
          // Random starting position
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          
          // Random properties
          const size = Math.random() * 3 + 1;
          const opacity = Math.random() * 0.2 + 0.1;
          const duration = Math.random() * 30 + 20;
          const delay = Math.random() * duration;
          const drift = (Math.random() - 0.5) * 100;
          const distance = Math.random() * 300 + 100;
          
          particle.style.left = `${x}px`;
          particle.style.top = `${y}px`;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.setProperty('--opacity', opacity.toString());
          particle.style.setProperty('--duration', `${duration}s`);
          particle.style.setProperty('--drift', `${drift}px`);
          particle.style.setProperty('--travel-distance', `${distance}px`);
          particle.style.animationDelay = `${delay}s`;
          
          particleContainer.appendChild(particle);
        }
      };
      
      // Initial creation
      createParticles();
      
      // Recreate on resize for responsiveness
      const handleResize = () => {
        createParticles();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(timer);
      };
    }
    
    // Parallax effect setup
    const handleParallax = (e: MouseEvent) => {
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach(element => {
        const speed = element.classList.contains('parallax-slow') ? 0.05 :
                      element.classList.contains('parallax-medium') ? 0.1 : 0.15;
        
        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;
        
        (element as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxContainers = document.querySelectorAll('.parallax-container');
      
      parallaxContainers.forEach(container => {
        (container as HTMLElement).style.transform = `translateY(${scrollY * 0.3}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleParallax);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleParallax);
      window.removeEventListener('scroll', handleScroll);
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);

  // Magnetic title effect
  useEffect(() => {
    const title = document.querySelector('.magnetic-title');
    if (title) {
      const letters = title.querySelectorAll('.magnetic-letter');

      // Initialize letters
      letters.forEach((letter) => {
        // Store the character data for the pseudo-element
        (letter as HTMLElement).setAttribute('data-char', (letter as HTMLElement).innerText);
      });
      
      // Mouse movement handler for the whole title gradient and letter effects
      const handleMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        
        // Apply magnetic effect to each letter
        letters.forEach((letter) => {
          const letterEl = letter as HTMLElement;
          const rect = letterEl.getBoundingClientRect();
          
          // Calculate distance from cursor to letter center
          const x = mouseEvent.clientX - rect.left - rect.width / 2;
          const y = mouseEvent.clientY - rect.top - rect.height / 2;
          const distance = Math.sqrt(x * x + y * y);
          
          // Effect strength based on distance (fade out at 300px)
          const maxDistance = 300;
          const strength = Math.max(0, 1 - distance / maxDistance);
          
          // Move the letter toward/away from cursor
          letterEl.style.setProperty('--x-offset', `${x * 0.1 * strength}px`);
          letterEl.style.setProperty('--y-offset', `${y * 0.1 * strength}px`);
        });
      };
      
      // Handle letter click animation
      const handleLetterClick = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('magnetic-letter')) {
          target.classList.add('clicked');
          setTimeout(() => target.classList.remove('clicked'), 500);
        }
      };
      
      // Add event listeners
      title.addEventListener('mousemove', handleMouseMove as EventListener);
      title.addEventListener('click', handleLetterClick);
      
      // Clean up
      return () => {
        title.removeEventListener('mousemove', handleMouseMove as EventListener);
        title.removeEventListener('click', handleLetterClick);
      };
    }
  }, []);

  return (
    <PageTransition className="space-y-8">
      {/* Add the particle container */}
      <div className="particle-container"></div>
      
      {/* Add parallax background elements */}
      <div className="parallax-container">
        <div className="parallax-element parallax-slow" style={{ left: '10%', top: '20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)' }}></div>
        <div className="parallax-element parallax-medium" style={{ right: '15%', top: '30%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)' }}></div>
        <div className="parallax-element parallax-fast" style={{ left: '20%', bottom: '20%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, transparent 70%)' }}></div>
      </div>
      
      {/* Hero Section with proper alignment */}
      <section className="relative flex justify-center items-center pt-32 pb-8 w-full">
        {/* Physics Universe Animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
            {/* Definitions */}
            <defs>
              <pattern id="quantum-grid" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.5) rotate(15)">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#blue-gradient)" strokeWidth="0.5" opacity="0.2" />
              </pattern>
              
              <filter id="neural-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="#A855F7" floodOpacity="0.8" result="color"/>
                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                <feComposite in="SourceGraphic" in2="glow" operator="over"/>
              </filter>
              
              <filter id="quantum-blur" x="-100%" y="-100%" width="300%" height="300%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G"/>
                <feGaussianBlur stdDeviation="2"/>
              </filter>
              
              <filter id="prismatic" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 10 -2
                " result="colorMatrix" />
                <feComponentTransfer in="colorMatrix" result="componentTransfer">
                  <feFuncR type="table" tableValues="0 0.4 0.6 0.8 1" />
                  <feFuncG type="table" tableValues="0 0.2 0.5 0.9 1" />
                  <feFuncB type="table" tableValues="0 0.3 0.7 0.8 1" />
                </feComponentTransfer>
                <feBlend in="componentTransfer" in2="SourceGraphic" mode="screen" />
              </filter>
              
              <filter id="hologram" x="-50%" y="-50%" width="200%" height="200%">
                <feTurbulence baseFrequency="0.05" numOctaves="2" result="turbulence" seed="5" />
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="5" xChannelSelector="R" yChannelSelector="G" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 3 -0.7
                " />
              </filter>
              
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
              
              <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              
              <linearGradient id="teal-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14B8A6" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
              
              <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#a16207" />
              </linearGradient>
              
              <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="25%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="75%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              
              <linearGradient id="entangle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.1)" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              
              <radialGradient id="blue-radial" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0"/>
              </radialGradient>
              
              <radialGradient id="gold-radial" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#EAB308" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#EAB308" stopOpacity="0"/>
              </radialGradient>
              
              <radialGradient id="halo-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                <stop offset="70%" stopColor="rgba(96, 165, 250, 0.4)" />
                <stop offset="100%" stopColor="rgba(79, 70, 229, 0)" />
              </radialGradient>
              
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feFlood floodColor="#4F46E5" floodOpacity="0.3" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>
              
              {/* Clip path to protect the center area */}
              <clipPath id="center-exclude">
                <path d="M0,0 H1200 V800 H0 Z" />
              </clipPath>
            </defs>
            
            {/* Subtle Quantum Grid Background */}
            <rect width="1200" height="800" fill="url(#quantum-grid)" opacity="0.05">
              <animate attributeName="opacity" values="0.05;0.1;0.05" dur="20s" repeatCount="indefinite"/>
            </rect>
            
            {/* Dimensional Branes (avoiding center) */}
            <g clipPath="url(#center-exclude)">
              {/* Primary brane - REMOVED */}
              
              {/* Secondary brane - REMOVED */}
            </g>
            
            {/* Quantum Geometric Patterns */}
            {/* Hexagonal Lattice - Top */}
            <g opacity="0.2" transform="translate(600, 150)">
              <polygon points="0,0 30,0 45,26 30,52 0,52 -15,26" stroke="url(#blue-gradient)" strokeWidth="1" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="60s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="15s" repeatCount="indefinite"/>
              </polygon>
              <polygon points="0,0 30,0 45,26 30,52 0,52 -15,26" stroke="url(#purple-gradient)" strokeWidth="1" fill="none" transform="scale(2)">
                <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="60s" repeatCount="indefinite"/>
              </polygon>
              <polygon points="0,0 30,0 45,26 30,52 0,52 -15,26" stroke="url(#teal-gradient)" strokeWidth="1" fill="none" transform="scale(3)">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="90s" repeatCount="indefinite"/>
              </polygon>
              <polygon points="0,0 30,0 45,26 30,52 0,52 -15,26" stroke="url(#gold-gradient)" strokeWidth="1" fill="none" transform="scale(4)">
                <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="120s" repeatCount="indefinite"/>
              </polygon>
            </g>
            
            {/* Hexagonal Lattice - Bottom */}
            <g opacity="0.2" transform="translate(600, 550)">
              <polygon points="0,0 30,0 45,26 30,52 0,52 -15,26" stroke="url(#purple-gradient)" strokeWidth="1" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="60s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="15s" repeatCount="indefinite"/>
              </polygon>
              <polygon points="0,0 30,0 45,26 30,52 0,52 -15,26" stroke="url(#blue-gradient)" strokeWidth="1" fill="none" transform="scale(2)">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="60s" repeatCount="indefinite"/>
              </polygon>
              <polygon points="0,0 30,0 45,26 30,52 0,52 -15,26" stroke="url(#gold-gradient)" strokeWidth="1" fill="none" transform="scale(3)">
                <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="90s" repeatCount="indefinite"/>
              </polygon>
              <polygon points="0,0 30,0 45,26 30,52 0,52 -15,26" stroke="url(#teal-gradient)" strokeWidth="1" fill="none" transform="scale(4)">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="120s" repeatCount="indefinite"/>
              </polygon>
            </g>
            
            {/* Penrose Tiling Left */}
            <g opacity="0.15" transform="translate(200, 350)">
              <path d="M0,0 L30,20 L15,50 L-15,50 L-30,20 Z" stroke="url(#purple-gradient)" strokeWidth="1" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="45s" repeatCount="indefinite"/>
              </path>
              <path d="M0,0 L30,-20 L15,-50 L-15,-50 L-30,-20 Z" stroke="url(#blue-gradient)" strokeWidth="1" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="45s" repeatCount="indefinite"/>
              </path>
              <path d="M0,0 L60,0 L30,52 L-30,52 L-60,0 L-30,-52 L30,-52 Z" stroke="url(#teal-gradient)" strokeWidth="1" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="0" to="120" dur="30s" repeatCount="indefinite"/>
              </path>
            </g>
            
            {/* Penrose Tiling Right */}
            <g opacity="0.15" transform="translate(1000, 350)">
              <path d="M0,0 L30,20 L15,50 L-15,50 L-30,20 Z" stroke="url(#teal-gradient)" strokeWidth="1" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="45s" repeatCount="indefinite"/>
              </path>
              <path d="M0,0 L30,-20 L15,-50 L-15,-50 L-30,-20 Z" stroke="url(#gold-gradient)" strokeWidth="1" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="45s" repeatCount="indefinite"/>
              </path>
              <path d="M0,0 L60,0 L30,52 L-30,52 L-60,0 L-30,-52 L30,-52 Z" stroke="url(#blue-gradient)" strokeWidth="1" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="0" to="-120" dur="30s" repeatCount="indefinite"/>
              </path>
            </g>
            
            {/* Quantum Wave Function Visualizations - Away from center */}
            <g opacity="0.2">
              {/* Top Wave Functions */}
              {Array.from({ length: 10 }).map((_, i) => (
                <path 
                  key={`wave-top-${i}`}
                  d={`M${i * 120},120 Q${i * 120 + 60},${120 + (i % 2 ? 30 : -30)} ${i * 120 + 120},120`} 
                  stroke="url(#blue-gradient)" 
                  strokeWidth="1" 
                  fill="none"
                >
                  <animate 
                    attributeName="d" 
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                    values={`
                      M${i * 120},120 Q${i * 120 + 60},${120 + (i % 2 ? -30 : 30)} ${i * 120 + 120},120;
                      M${i * 120},120 Q${i * 120 + 60},${120 + (i % 2 ? 30 : -30)} ${i * 120 + 120},120;
                      M${i * 120},120 Q${i * 120 + 60},${120 + (i % 2 ? -30 : 30)} ${i * 120 + 120},120
                    `}
                  />
                </path>
              ))}
              
              {/* Bottom Wave Functions */}
              {Array.from({ length: 10 }).map((_, i) => (
                <path 
                  key={`wave-bottom-${i}`}
                  d={`M${i * 120},580 Q${i * 120 + 60},${580 + (i % 2 ? 30 : -30)} ${i * 120 + 120},580`} 
                  stroke="url(#purple-gradient)" 
                  strokeWidth="1" 
                  fill="none"
                >
                  <animate 
                    attributeName="d" 
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                    values={`
                      M${i * 120},580 Q${i * 120 + 60},${580 + (i % 2 ? -30 : 30)} ${i * 120 + 120},580;
                      M${i * 120},580 Q${i * 120 + 60},${580 + (i % 2 ? 30 : -30)} ${i * 120 + 120},580;
                      M${i * 120},580 Q${i * 120 + 60},${580 + (i % 2 ? -30 : 30)} ${i * 120 + 120},580
                    `}
                  />
                </path>
              ))}
            </g>
            
            {/* Quantum Superposition Circles - Left Side */}
            <g className="superposition-left" opacity="0.3" transform="translate(200, 350)">
              <circle r="30" fill="none" stroke="url(#blue-gradient)" strokeWidth="1" strokeDasharray="2,4">
                <animate attributeName="r" values="30;40;30" dur="8s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite"/>
              </circle>
              <circle r="50" fill="none" stroke="url(#purple-gradient)" strokeWidth="1" strokeDasharray="4,4">
                <animate attributeName="r" values="50;40;50" dur="12s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="25s" repeatCount="indefinite"/>
              </circle>
              <circle r="70" fill="none" stroke="url(#teal-gradient)" strokeWidth="1" strokeDasharray="1,5">
                <animate attributeName="r" values="70;80;70" dur="15s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite"/>
              </circle>
            </g>
            
            {/* Quantum Superposition Circles - Right Side */}
            <g className="superposition-right" opacity="0.3" transform="translate(1000, 350)">
              <circle r="30" fill="none" stroke="url(#purple-gradient)" strokeWidth="1" strokeDasharray="2,4">
                <animate attributeName="r" values="30;40;30" dur="8s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="20s" repeatCount="indefinite"/>
              </circle>
              <circle r="50" fill="none" stroke="url(#teal-gradient)" strokeWidth="1" strokeDasharray="4,4">
                <animate attributeName="r" values="50;40;50" dur="12s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite"/>
              </circle>
              <circle r="70" fill="none" stroke="url(#blue-gradient)" strokeWidth="1" strokeDasharray="1,5">
                <animate attributeName="r" values="70;80;70" dur="15s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="30s" repeatCount="indefinite"/>
              </circle>
            </g>
            
            {/* Quantum Energy Levels */}
            <g opacity="0.1" clipPath="url(#center-exclude)">
              {Array.from({ length: 3 }).map((_, i) => (
                <ellipse
                  key={`quantum-level-${i}`}
                  cx="600"
                  cy="400"
                  rx={40 + i * 20}
                  ry={20 + i * 10}
                  fill="none"
                  stroke="url(#gold-gradient)"
                  strokeWidth="1"
                >
                  <animate attributeName="rx" values={`${40 + i * 20};${45 + i * 20};${40 + i * 20}`} dur={`${10 + i * 2}s`} repeatCount="indefinite"/>
                  <animate attributeName="ry" values={`${20 + i * 10};${25 + i * 10};${20 + i * 10}`} dur={`${8 + i * 2}s`} repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from={`${i * 15}`} to={`${i * 15 - 360}`} dur={`${30 + i * 10}s`} repeatCount="indefinite"/>
                </ellipse>
              ))}
            </g>
            
            {/* String Theory Visualizations */}
            <g className="string-theory" opacity="0.1" clipPath="url(#center-exclude)">
              
              {/* Quantum Superstring Visualizations */}
              {Array.from({ length: 10 }).map((_, i) => (
                <path 
                  key={`top-string-${i}`}
                  d={`M${i * 120},120 Q${i * 120 + 60},${120 + (i % 2 ? 30 : -30)} ${i * 120 + 120},120`} 
                  stroke="url(#blue-gradient)" 
                  strokeWidth="1" 
                  fill="none"
                >
                  <animate 
                    attributeName="d" 
                    dur={`${8 + i * 0.5}s`}
                    repeatCount="indefinite"
                    values={`
                      M${i * 120},120 Q${i * 120 + 60},${120 + (i % 2 ? 30 : -30)} ${i * 120 + 120},120;
                      M${i * 120},120 Q${i * 120 + 60},${120 + (i % 2 ? -30 : 30)} ${i * 120 + 120},120
                    `}
                  />
                </path>
              ))}
              
              {Array.from({ length: 10 }).map((_, i) => (
                <path 
                  key={`bottom-string-${i}`}
                  d={`M${i * 120},580 Q${i * 120 + 60},${580 + (i % 2 ? 30 : -30)} ${i * 120 + 120},580`} 
                  stroke="url(#purple-gradient)" 
                  strokeWidth="1" 
                  fill="none"
                >
                  <animate 
                    attributeName="d" 
                    dur={`${8 + i * 0.5}s`}
                    repeatCount="indefinite"
                    values={`
                      M${i * 120},580 Q${i * 120 + 60},${580 + (i % 2 ? 30 : -30)} ${i * 120 + 120},580;
                      M${i * 120},580 Q${i * 120 + 60},${580 + (i % 2 ? -30 : 30)} ${i * 120 + 120},580
                    `}
                  />
                </path>
              ))}
              
              {/* Quantum Spin Arrows */}
              <g opacity="0.6" transform="translate(200, 200)" clipPath="url(#center-exclude)">
                <path d="M0,-20 A20,20 0 0 1 17.32,-10" stroke="url(#purple-gradient)" strokeWidth="2">
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="15s" repeatCount="indefinite"/>
                </path>
              </g>
            </g>
            
            {/* Quantum Spin Visualizations */}
            <g opacity="0.2">
              {/* Top-left Spin */}
              <g transform="translate(300, 150)">
                <circle r="20" fill="none" stroke="url(#blue-gradient)" strokeWidth="1" />
                <path d="M0,-20 A20,20 0 0 1 17.32,-10" stroke="url(#purple-gradient)" strokeWidth="2">
                  <animateTransform 
                    attributeName="transform" 
                    type="rotate" 
                    from="0" 
                    to="360" 
                    dur="4s" 
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              
              {/* Top-right Spin */}
              <g transform="translate(900, 150)">
                <circle r="20" fill="none" stroke="url(#purple-gradient)" strokeWidth="1" />
                <path d="M0,-20 A20,20 0 0 1 -17.32,-10" stroke="url(#blue-gradient)" strokeWidth="2">
                  <animateTransform 
                    attributeName="transform" 
                    type="rotate" 
                    from="0" 
                    to="-360" 
                    dur="4s" 
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              
              {/* Bottom-left Spin */}
              <g transform="translate(300, 550)">
                <circle r="20" fill="none" stroke="url(#teal-gradient)" strokeWidth="1" />
                <path d="M0,-20 A20,20 0 0 1 -17.32,-10" stroke="url(#gold-gradient)" strokeWidth="2">
                  <animateTransform 
                    attributeName="transform" 
                    type="rotate" 
                    from="0" 
                    to="-360" 
                    dur="4s" 
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              
              {/* Bottom-right Spin */}
              <g transform="translate(900, 550)">
                <circle r="20" fill="none" stroke="url(#gold-gradient)" strokeWidth="1" />
                <path d="M0,-20 A20,20 0 0 1 17.32,-10" stroke="url(#teal-gradient)" strokeWidth="2">
                  <animateTransform 
                    attributeName="transform" 
                    type="rotate" 
                    from="0" 
                    to="360" 
                    dur="4s" 
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
            
            {/* Schrodinger's Equation - Decorative */}
            <g opacity="0.15" transform="translate(600, 70)">
              <text textAnchor="middle" fontSize="16" fill="url(#blue-gradient)" fontFamily="monospace">iħ∂Ψ/∂t = ĤΨ</text>
            </g>
            
            <g opacity="0.15" transform="translate(600, 730)">
              <text textAnchor="middle" fontSize="16" fill="url(#purple-gradient)" fontFamily="monospace">ΔxΔp ≥ ħ/2</text>
            </g>
            
            {/* Quantum Halos - Top */}
            <g className="quantum-halos-top" opacity="0.4" clipPath="url(#center-exclude)">
              <circle cx="600" cy="120" r="80" fill="none" stroke="url(#halo-gradient)" strokeWidth="20" opacity="0.2">
                <animate attributeName="r" values="80;100;80" dur="10s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"/>
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="10s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0 600 120" to="360 600 120" dur="60s" repeatCount="indefinite"/>
              </circle>
              
              <circle cx="600" cy="120" r="60" fill="none" stroke="url(#halo-gradient)" strokeWidth="15" opacity="0.15">
                <animate attributeName="r" values="60;75;60" dur="15s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"/>
                <animate attributeName="opacity" values="0.15;0.3;0.15" dur="15s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="360 600 120" to="0 600 120" dur="45s" repeatCount="indefinite"/>
              </circle>
            </g>
            
            {/* Quantum Halos - Bottom */}
            <g className="quantum-halos-bottom" opacity="0.4" clipPath="url(#center-exclude)">
              <circle cx="600" cy="680" r="80" fill="none" stroke="url(#halo-gradient)" strokeWidth="20" opacity="0.2">
                <animate attributeName="r" values="80;100;80" dur="12s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"/>
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="12s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0 600 680" to="-360 600 680" dur="60s" repeatCount="indefinite"/>
              </circle>
              
              <circle cx="600" cy="680" r="60" fill="none" stroke="url(#halo-gradient)" strokeWidth="15" opacity="0.15">
                <animate attributeName="r" values="60;75;60" dur="18s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"/>
                <animate attributeName="opacity" values="0.15;0.3;0.15" dur="18s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="-360 600 680" to="0 600 680" dur="45s" repeatCount="indefinite"/>
              </circle>
            </g>
            
            {/* Quantum Mirror Plane Effect */}
            <g opacity="0.15" clipPath="url(#center-exclude)">
              {/* Vertical Mirror Plane */}
              <line x1="600" y1="150" x2="600" y2="650" stroke="url(#rainbow-gradient)" strokeWidth="1" strokeDasharray="5,10" opacity="0.1">
                <animate attributeName="opacity" values="0.1;0.2;0.1" dur="10s" repeatCount="indefinite"/>
              </line>
              
              {/* Reflected Particles */}
              <g className="mirror-particles">
                {/* Left to Right */}
                <circle r="3" fill="#3b82f6" opacity="0.5">
                  <animate attributeName="cx" values="450;590" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="cy" values="300;300" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="6s" repeatCount="indefinite"/>
                </circle>
                
                {/* Right to Left (reflection) */}
                <circle r="3" fill="#3b82f6" opacity="0.5">
                  <animate attributeName="cx" values="750;610" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="cy" values="300;300" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;0.5;0" dur="6s" repeatCount="indefinite" begin="3s"/>
                </circle>
                
                {/* Left to Right - lower */}
                <circle r="2" fill="#8b5cf6" opacity="0.5">
                  <animate attributeName="cx" values="480;590" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="cy" values="400;400" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="8s" repeatCount="indefinite"/>
                </circle>
                
                {/* Right to Left - lower (reflection) */}
                <circle r="2" fill="#8b5cf6" opacity="0.5">
                  <animate attributeName="cx" values="720;610" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="cy" values="400;400" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;0.5;0" dur="8s" repeatCount="indefinite" begin="4s"/>
                </circle>
              </g>
            </g>
            
            {/* Holographic Prism Effect */}
            <g opacity="0.3" transform="translate(150, 300)" filter="url(#hologram)" clipPath="url(#center-exclude)">
              <path d="M0,0 L40,60 L-40,60 Z" fill="none" stroke="url(#rainbow-gradient)" strokeWidth="1">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="10s" repeatCount="indefinite"/>
              </path>
              
              <line x1="0" y1="0" x2="0" y2="100" stroke="url(#rainbow-gradient)" strokeWidth="1" strokeDasharray="1,2">
                <animate attributeName="y2" values="100;150;100" dur="8s" repeatCount="indefinite"/>
              </line>
            </g>
            
            <g opacity="0.3" transform="translate(1050, 300)" filter="url(#hologram)" clipPath="url(#center-exclude)">
              <path d="M0,0 L40,60 L-40,60 Z" fill="none" stroke="url(#rainbow-gradient)" strokeWidth="1">
                <animateTransform attributeName="transform" type="rotate" from="180" to="-180" dur="20s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="10s" repeatCount="indefinite"/>
              </path>
              
              <line x1="0" y1="0" x2="0" y2="100" stroke="url(#rainbow-gradient)" strokeWidth="1" strokeDasharray="1,2">
                <animate attributeName="y2" values="100;150;100" dur="8s" repeatCount="indefinite"/>
              </line>
            </g>
            
            {/* Prismatic Quantum Particles */}
            <g className="prismatic-particles" clipPath="url(#center-exclude)">
              <circle r="8" fill="#FFFFFF" opacity="0.2" filter="url(#prismatic)">
                <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite"/>
                <animateMotion path="M100,150 Q200,120 300,150 Q400,180 500,150" dur="15s" repeatCount="indefinite"/>
              </circle>
              
              <circle r="6" fill="#FFFFFF" opacity="0.2" filter="url(#prismatic)">
                <animate attributeName="r" values="6;10;6" dur="5s" repeatCount="indefinite"/>
                <animateMotion path="M1100,150 Q1000,120 900,150 Q800,180 700,150" dur="18s" repeatCount="indefinite"/>
              </circle>
              
              <circle r="4" fill="#FFFFFF" opacity="0.2" filter="url(#prismatic)">
                <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite"/>
                <animateMotion path="M1100,650 Q1000,680 900,650 Q800,620 700,650" dur="12s" repeatCount="indefinite"/>
              </circle>
            </g>
            
            {/* Edge Reflection Animations */}
            <g opacity="0.3" clipPath="url(#center-exclude)">
              {/* Left Edge */}
              <path d="M50,250 L150,350 L50,450" stroke="url(#blue-gradient)" strokeWidth="1" fill="none">
                <animate attributeName="d" values="
                  M50,250 L150,350 L50,450;
                  M75,250 L175,350 L75,450;
                  M50,250 L150,350 L50,450
                " dur="10s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="10s" repeatCount="indefinite"/>
              </path>
              
              {/* Right Edge */}
              <path d="M1150,250 L1050,350 L1150,450" stroke="url(#purple-gradient)" strokeWidth="1" fill="none">
                <animate attributeName="d" values="
                  M1150,250 L1050,350 L1150,450;
                  M1125,250 L1025,350 L1125,450;
                  M1150,250 L1050,350 L1150,450
                " dur="10s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="10s" repeatCount="indefinite"/>
              </path>
            </g>
            
            {/* NEW: Quantum Vortices */}
            <g className="quantum-vortices" opacity="0.2" clipPath="url(#center-exclude)">
              {/* Left Vortex */}
              <path d="M320,200 C330,220 350,230 370,230 C390,230 410,220 420,200 C430,180 430,160 420,140 C410,120 390,110 370,110 C350,110 330,120 320,140 C310,160 310,180 320,200 Z" 
                fill="none" 
                stroke="url(#purple-gradient)" 
                strokeWidth="1.5"
                opacity="0.3">
                <animate attributeName="d" 
                  values="
                    M320,200 C330,220 350,230 370,230 C390,230 410,220 420,200 C430,180 430,160 420,140 C410,120 390,110 370,110 C350,110 330,120 320,140 C310,160 310,180 320,200 Z;
                    M325,205 C335,225 355,235 375,235 C395,235 415,225 425,205 C435,185 435,165 425,145 C415,125 395,115 375,115 C355,115 335,125 325,145 C315,165 315,185 325,205 Z;
                    M320,200 C330,220 350,230 370,230 C390,230 410,220 420,200 C430,180 430,160 420,140 C410,120 390,110 370,110 C350,110 330,120 320,140 C310,160 310,180 320,200 Z
                  " 
                  dur="15s" 
                  repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0 370 170" to="360 370 170" dur="40s" repeatCount="indefinite"/>
              </path>

              {/* Right Vortex */}
              <path d="M780,500 C790,520 810,530 830,530 C850,530 870,520 880,500 C890,480 890,460 880,440 C870,420 850,410 830,410 C810,410 790,420 780,440 C770,460 770,480 780,500 Z" 
                fill="none" 
                stroke="url(#teal-gradient)" 
                strokeWidth="1.5"
                opacity="0.3">
                <animate attributeName="d" 
                  values="
                    M780,500 C790,520 810,530 830,530 C850,530 870,520 880,500 C890,480 890,460 880,440 C870,420 850,410 830,410 C810,410 790,420 780,440 C770,460 770,480 780,500 Z;
                    M785,505 C795,525 815,535 835,535 C855,535 875,525 885,505 C895,485 895,465 885,445 C875,425 855,415 835,415 C815,415 795,425 785,445 C775,465 775,485 785,505 Z;
                    M780,500 C790,520 810,530 830,530 C850,530 870,520 880,500 C890,480 890,460 880,440 C870,420 850,410 830,410 C810,410 790,420 780,440 C770,460 770,480 780,500 Z
                  " 
                  dur="18s" 
                  repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0 830 470" to="-360 830 470" dur="45s" repeatCount="indefinite"/>
              </path>
            </g>

            {/* NEW: Floating Quantum Orbs with Halos */}
            <g className="floating-orbs" clipPath="url(#center-exclude)">
              {/* Top-left orb */}
              <g transform="translate(250, 180)">
                <circle r="4" fill="#8b5cf6" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="4;5;4" dur="6s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q10,-15 0,-30 Q-10,-45 0,-60 Q10,-75 0,-90" dur="20s" repeatCount="indefinite"/>
                </circle>
                <circle r="12" fill="none" stroke="url(#halo-gradient)" strokeWidth="2" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="5s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="12;15;12" dur="7s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q10,-15 0,-30 Q-10,-45 0,-60 Q10,-75 0,-90" dur="20s" repeatCount="indefinite"/>
                </circle>
              </g>

              {/* Top-right orb */}
              <g transform="translate(950, 220)">
                <circle r="3" fill="#3b82f6" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.9;0.7" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="3;4;3" dur="5s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q-15,-20 -30,-15 Q-45,-10 -60,-15 Q-75,-20 -90,-15" dur="25s" repeatCount="indefinite"/>
                </circle>
                <circle r="10" fill="none" stroke="url(#halo-gradient)" strokeWidth="2" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="6s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="10;13;10" dur="8s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q-15,-20 -30,-15 Q-45,-10 -60,-15 Q-75,-20 -90,-15" dur="25s" repeatCount="indefinite"/>
                </circle>
              </g>

              {/* Bottom-left orb */}
              <g transform="translate(300, 600)">
                <circle r="5" fill="#14b8a6" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3.5s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="5;6;5" dur="7s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q20,-10 25,-30 Q30,-50 25,-70" dur="22s" repeatCount="indefinite"/>
                </circle>
                <circle r="14" fill="none" stroke="url(#halo-gradient)" strokeWidth="2" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="5.5s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="14;17;14" dur="9s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q20,-10 25,-30 Q30,-50 25,-70" dur="22s" repeatCount="indefinite"/>
                </circle>
              </g>

              {/* Bottom-right orb */}
              <g transform="translate(900, 580)">
                <circle r="4" fill="#eab308" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.9;0.7" dur="4.5s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="4;5;4" dur="6.5s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q-10,-20 -30,-25 Q-50,-30 -70,-25" dur="18s" repeatCount="indefinite"/>
                </circle>
                <circle r="13" fill="none" stroke="url(#halo-gradient)" strokeWidth="2" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="6.5s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="13;16;13" dur="8.5s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q-10,-20 -30,-25 Q-50,-30 -70,-25" dur="18s" repeatCount="indefinite"/>
                </circle>
              </g>
            </g>

            {/* NEW: Strange Attractor Patterns */}
            <g className="strange-attractors" opacity="0.15" clipPath="url(#center-exclude)">
              {/* Left Attractor */}
              <path d="M150,300 C170,280 200,290 200,320 C200,350 170,360 150,340 C130,320 130,320 150,300 Z" 
                fill="none" 
                stroke="url(#rainbow-gradient)" 
                strokeWidth="1">
                <animate 
                  attributeName="d" 
                  values="
                    M150,300 C170,280 200,290 200,320 C200,350 170,360 150,340 C130,320 130,320 150,300 Z;
                    M155,305 C175,285 205,295 205,325 C205,355 175,365 155,345 C135,325 135,325 155,305 Z;
                    M150,300 C170,280 200,290 200,320 C200,350 170,360 150,340 C130,320 130,320 150,300 Z
                  " 
                  dur="25s" 
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                />
                <animateTransform attributeName="transform" type="rotate" from="0 170 320" to="360 170 320" dur="60s" repeatCount="indefinite"/>
              </path>

              {/* Right Attractor */}
              <path d="M1050,300 C1030,280 1000,290 1000,320 C1000,350 1030,360 1050,340 C1070,320 1070,320 1050,300 Z" 
                fill="none" 
                stroke="url(#rainbow-gradient)" 
                strokeWidth="1">
                <animate 
                  attributeName="d" 
                  values="
                    M1050,300 C1030,280 1000,290 1000,320 C1000,350 1030,360 1050,340 C1070,320 1070,320 1050,300 Z;
                    M1045,305 C1025,285 995,295 995,325 C995,355 1025,365 1045,345 C1065,325 1065,325 1045,305 Z;
                    M1050,300 C1030,280 1000,290 1000,320 C1000,350 1030,360 1050,340 C1070,320 1070,320 1050,300 Z
                  " 
                  dur="28s" 
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                />
                <animateTransform attributeName="transform" type="rotate" from="0 1030 320" to="-360 1030 320" dur="65s" repeatCount="indefinite"/>
              </path>

              {/* Center Attractors */}
              <g transform="translate(600, 350)">
                <path d="M-100,-50 C-80,-70 -50,-60 -50,-30 C-50,0 -80,10 -100,-10 C-120,-30 -120,-30 -100,-50 Z" 
                  fill="none" 
                  stroke="url(#blue-gradient)" 
                  strokeWidth="1">
                    <animateTransform attributeName="transform" type="rotate" from="0 -75 -30" to="360 -75 -30" dur="45s" repeatCount="indefinite"/>
                  </path>
                
                <path d="M100,-50 C80,-70 50,-60 50,-30 C50,0 80,10 100,-10 C120,-30 120,-30 100,-50 Z" 
                  fill="none" 
                  stroke="url(#purple-gradient)" 
                  strokeWidth="1">
                    <animateTransform attributeName="transform" type="rotate" from="0 75 -30" to="-360 75 -30" dur="50s" repeatCount="indefinite"/>
                  </path>
              </g>
            </g>

            {/* NEW: Quantum Entanglement Visualizations */}
            <g className="quantum-entanglement" opacity="0.25" clipPath="url(#center-exclude)">
              {/* Entanglement Pair 1 */}
              <g>
                <circle cx="400" cy="250" r="5" fill="url(#blue-gradient)" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="800" cy="550" r="5" fill="url(#blue-gradient)" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4s" repeatCount="indefinite"/>
                </circle>
                <path d="M400,250 C500,350 700,450 800,550" stroke="url(#entangle-gradient)" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="5,5">
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="5s" repeatCount="indefinite"/>
                  <animate attributeName="strokeDashoffset" values="0;30" dur="3s" repeatCount="indefinite"/>
                </path>
              </g>

              {/* Entanglement Pair 2 */}
              <g>
                <circle cx="400" cy="550" r="5" fill="url(#purple-gradient)" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="800" cy="250" r="5" fill="url(#purple-gradient)" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4.5s" repeatCount="indefinite"/>
                </circle>
                <path d="M400,550 C500,450 700,350 800,250" stroke="url(#entangle-gradient)" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="5,5">
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="5.5s" repeatCount="indefinite"/>
                  <animate attributeName="strokeDashoffset" values="0;30" dur="3.5s" repeatCount="indefinite"/>
                </path>
              </g>
            </g>

            {/* NEW: Flying Quantum Halos */}
            <g className="flying-halos" clipPath="url(#center-exclude)">
              {/* Top Left Flying Halo */}
              <g transform="translate(250, 200)">
                <ellipse rx="30" ry="20" fill="none" stroke="url(#halo-gradient)" strokeWidth="8" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="7s" repeatCount="indefinite"/>
                  <animate attributeName="rx" values="30;35;30" dur="11s" repeatCount="indefinite"/>
                  <animate attributeName="ry" values="20;25;20" dur="9s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q50,30 100,0 Q150,-30 200,0" dur="30s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite"/>
                </ellipse>
              </g>

              {/* Top Right Flying Halo */}
              <g transform="translate(950, 200)">
                <ellipse rx="25" ry="35" fill="none" stroke="url(#halo-gradient)" strokeWidth="8" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="rx" values="25;30;25" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="ry" values="35;40;35" dur="10s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q-50,30 -100,0 Q-150,-30 -200,0" dur="35s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="28s" repeatCount="indefinite"/>
                </ellipse>
              </g>

              {/* Bottom Left Flying Halo */}
              <g transform="translate(250, 600)">
                <ellipse rx="35" ry="25" fill="none" stroke="url(#halo-gradient)" strokeWidth="8" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="7.5s" repeatCount="indefinite"/>
                  <animate attributeName="rx" values="35;40;35" dur="12.5s" repeatCount="indefinite"/>
                  <animate attributeName="ry" values="25;30;25" dur="9.5s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q50,-30 100,0 Q150,30 200,0" dur="32s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="27s" repeatCount="indefinite"/>
                </ellipse>
              </g>

              {/* Bottom Right Flying Halo */}
              <g transform="translate(950, 600)">
                <ellipse rx="30" ry="30" fill="none" stroke="url(#halo-gradient)" strokeWidth="8" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="8.5s" repeatCount="indefinite"/>
                  <animate attributeName="rx" values="30;35;30" dur="11.5s" repeatCount="indefinite"/>
                  <animate attributeName="ry" values="30;35;30" dur="9.5s" repeatCount="indefinite"/>
                  <animateMotion path="M0,0 Q-50,-30 -100,0 Q-150,30 -200,0" dur="34s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="29s" repeatCount="indefinite"/>
                </ellipse>
              </g>
            </g>

            {/* NEW: Quantum Field Fluctuations */}
            <g className="quantum-fields" opacity="0.1" clipPath="url(#center-exclude)">
              {/* Field Fluctuation 1 */}
              {Array.from({ length: 5 }).map((_, i) => (
                <line 
                  key={`field-line-1-${i}`}
                  x1={100 + i * 50} 
                  y1="100" 
                  x2={100 + i * 50} 
                  y2="200" 
                  stroke="url(#blue-gradient)" 
                  strokeWidth="1"
                  strokeDasharray="1,4"
                >
                  <animate 
                    attributeName="y2" 
                    values="200;210;190;200" 
                    dur={`${3 + i * 0.5}s`} 
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                  />
                </line>
              ))}

              {/* Field Fluctuation 2 */}
              {Array.from({ length: 5 }).map((_, i) => (
                <line 
                  key={`field-line-2-${i}`}
                  x1={800 + i * 50} 
                  y1="600" 
                  x2={800 + i * 50} 
                  y2="500" 
                  stroke="url(#purple-gradient)" 
                  strokeWidth="1"
                  strokeDasharray="1,4"
                >
                  <animate 
                    attributeName="y2" 
                    values="500;490;510;500" 
                    dur={`${3 + i * 0.5}s`} 
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                  />
                </line>
              ))}
            </g>
            
            {/* NEW: Cosmic Spirals */}
            <g className="cosmic-spirals" opacity="0.2">
              {/* Left Spiral */}
              <path 
                d="M220,220 Q240,240 260,220 Q280,200 260,180 Q240,160 220,180 Q200,200 220,220 Z" 
                fill="none" 
                stroke="url(#purple-gradient)" 
                strokeWidth="1.5"
                opacity="0.3"
              >
                <animate 
                  attributeName="d" 
                  values="
                    M220,220 Q240,240 260,220 Q280,200 260,180 Q240,160 220,180 Q200,200 220,220 Z;
                    M215,215 Q240,245 265,215 Q290,185 265,175 Q240,155 215,175 Q190,195 215,215 Z;
                    M220,220 Q240,240 260,220 Q280,200 260,180 Q240,160 220,180 Q200,200 220,220 Z
                  " 
                  dur="10s" 
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                />
                <animateTransform attributeName="transform" type="rotate" from="0 240 200" to="360 240 200" dur="30s" repeatCount="indefinite"/>
              </path>
              
              {/* Right Spiral */}
              <path 
                d="M980,380 Q1000,400 1020,380 Q1040,360 1020,340 Q1000,320 980,340 Q960,360 980,380 Z" 
                fill="none" 
                stroke="url(#teal-gradient)" 
                strokeWidth="1.5"
                opacity="0.3"
              >
                <animate 
                  attributeName="d" 
                  values="
                    M980,380 Q1000,400 1020,380 Q1040,360 1020,340 Q1000,320 980,340 Q960,360 980,380 Z;
                    M975,375 Q1000,405 1025,375 Q1050,345 1025,335 Q1000,315 975,335 Q950,355 975,375 Z;
                    M980,380 Q1000,400 1020,380 Q1040,360 1020,340 Q1000,320 980,340 Q960,360 980,380 Z
                  " 
                  dur="12s" 
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                />
                <animateTransform attributeName="transform" type="rotate" from="0 1000 360" to="-360 1000 360" dur="35s" repeatCount="indefinite"/>
              </path>
              
              {/* Double Spiral */}
              <path 
                d="M600,180 Q620,200 640,180 Q660,160 640,140 Q620,120 600,140 Q580,160 600,180 Z" 
                fill="none" 
                stroke="url(#gold-gradient)" 
                strokeWidth="1"
                opacity="0.2"
              >
                <animate 
                  attributeName="d" 
                  values="
                    M600,180 Q620,200 640,180 Q660,160 640,140 Q620,120 600,140 Q580,160 600,180 Z;
                    M595,175 Q620,205 645,175 Q670,145 645,135 Q620,115 595,135 Q570,155 595,175 Z;
                    M600,180 Q620,200 640,180 Q660,160 640,140 Q620,120 600,140 Q580,160 600,180 Z
                  " 
                  dur="15s" 
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                />
                <animateTransform attributeName="transform" type="rotate" from="0 620 160" to="360 620 160" dur="25s" repeatCount="indefinite"/>
              </path>
              
              <path 
                d="M600,620 Q620,640 640,620 Q660,600 640,580 Q620,560 600,580 Q580,600 600,620 Z" 
                fill="none" 
                stroke="url(#blue-gradient)" 
                strokeWidth="1"
                opacity="0.2"
              >
                <animate 
                  attributeName="d" 
                  values="
                    M600,620 Q620,640 640,620 Q660,600 640,580 Q620,560 600,580 Q580,600 600,620 Z;
                    M595,615 Q620,645 645,615 Q670,585 645,575 Q620,555 595,575 Q570,595 595,615 Z;
                    M600,620 Q620,640 640,620 Q660,600 640,580 Q620,560 600,580 Q580,600 600,620 Z
                  " 
                  dur="18s" 
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                />
                <animateTransform attributeName="transform" type="rotate" from="0 620 600" to="-360 620 600" dur="28s" repeatCount="indefinite"/>
              </path>
            </g>
            
            {/* NEW: Mystical Symbols */}
            <g className="mystical-symbols" opacity="0.2">
              {/* Triangle */}
              <path d="M300,100 L350,180 L250,180 Z" fill="none" stroke="url(#gold-gradient)" strokeWidth="1">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="12s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0 300 140" to="360 300 140" dur="40s" repeatCount="indefinite"/>
              </path>
              
              {/* Pentagram */}
              <path d="M900,120 L930,180 L880,140 L920,140 L870,180 Z" fill="none" stroke="url(#purple-gradient)" strokeWidth="1">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="13s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0 900 150" to="-360 900 150" dur="45s" repeatCount="indefinite"/>
              </path>
              
              {/* Triquetra */}
              <path d="M500,700 C520,680 540,690 550,710 C560,730 550,750 530,760 C510,770 490,760 480,740 C490,730 500,740 500,750 C510,760 520,750 520,740 C520,730 510,720 500,730 Z" fill="none" stroke="url(#teal-gradient)" strokeWidth="1">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="14s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0 515 730" to="360 515 730" dur="50s" repeatCount="indefinite"/>
              </path>
              
              {/* Sri Yantra simplified */}
              <g transform="translate(700, 680) scale(0.4)">
                <path d="M0,0 L60,100 L-60,100 Z" fill="none" stroke="url(#rainbow-gradient)" strokeWidth="2"/>
                <path d="M0,0 L120,200 L-120,200 Z" fill="none" stroke="url(#rainbow-gradient)" strokeWidth="2"/>
                <path d="M-60,100 L60,100 L120,200 L-120,200 Z" fill="none" stroke="url(#rainbow-gradient)" strokeWidth="2"/>
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="15s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" from="0 0 100" to="360 0 100" dur="55s" repeatCount="indefinite"/>
              </g>
            </g>

            {/* NEW: Sacred Geometry */}
            <g className="sacred-geometry" opacity="0.15">
              {/* Flower of Life (simplified) */}
              <g transform="translate(420, 350) scale(0.3)">
                {Array.from({ length: 7 }).map((_, i) => (
                  <circle 
                    key={`flower-${i}`}
                    cx={60 * Math.cos(2 * Math.PI * i / 6)} 
                    cy={60 * Math.sin(2 * Math.PI * i / 6)} 
                    r="60" 
                    fill="none" 
                    stroke="url(#purple-gradient)" 
                    strokeWidth="1" 
                  />
                ))}
                <circle cx="0" cy="0" r="60" fill="none" stroke="url(#purple-gradient)" strokeWidth="1" />
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="120s" repeatCount="indefinite"/>
              </g>
              
              {/* Metatron's Cube (simplified) */}
              <g transform="translate(780, 350) scale(0.3)">
                <path d="M0,0 L87,50 L87,-50 Z" fill="none" stroke="url(#blue-gradient)" strokeWidth="1" />
                <path d="M0,0 L-87,50 L-87,-50 Z" fill="none" stroke="url(#blue-gradient)" strokeWidth="1" />
                <path d="M0,0 L0,100 L87,50 Z" fill="none" stroke="url(#blue-gradient)" strokeWidth="1" />
                <path d="M0,0 L0,100 L-87,50 Z" fill="none" stroke="url(#blue-gradient)" strokeWidth="1" />
                <path d="M0,0 L0,-100 L87,-50 Z" fill="none" stroke="url(#blue-gradient)" strokeWidth="1" />
                <path d="M0,0 L0,-100 L-87,-50 Z" fill="none" stroke="url(#blue-gradient)" strokeWidth="1" />
                <path d="M87,50 L0,100 L-87,50 L-87,-50 L0,-100 L87,-50 Z" fill="none" stroke="url(#blue-gradient)" strokeWidth="1" />
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="100s" repeatCount="indefinite"/>
              </g>
            </g>

            {/* NEW: Energy Lines and Beams */}
            <g className="energy-beams" opacity="0.12">
              {/* Diagonal Energy Beam */}
              <path d="M100,100 L1100,700" stroke="url(#blue-gradient)" strokeWidth="1" strokeDasharray="5,20" opacity="0.3">
                <animate attributeName="strokeDashoffset" values="0;100" dur="30s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="15s" repeatCount="indefinite"/>
              </path>
              
              {/* Opposite Diagonal Energy Beam */}
              <path d="M100,700 L1100,100" stroke="url(#purple-gradient)" strokeWidth="1" strokeDasharray="5,15" opacity="0.3">
                <animate attributeName="strokeDashoffset" values="0;-90" dur="25s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="18s" repeatCount="indefinite"/>
              </path>
              
              {/* Horizontal Energy Line */}
              <line x1="0" y1="400" x2="1200" y2="400" stroke="url(#rainbow-gradient)" strokeWidth="1" strokeDasharray="2,10" opacity="0.2">
                <animate attributeName="strokeDashoffset" values="0;50" dur="20s" repeatCount="indefinite"/>
                <animate attributeName="y1" values="400;410;390;400" dur="30s" repeatCount="indefinite"/>
                <animate attributeName="y2" values="400;390;410;400" dur="30s" repeatCount="indefinite"/>
              </line>
              
              {/* Energy Pulses */}
              {Array.from({ length: 5 }).map((_, i) => (
                <circle
                  key={`pulse-${i}`}
                  cx={200 + i * 200}
                  cy="400"
                  r="2"
                  fill="#fff"
                  opacity="0.6"
                >
                  <animate attributeName="r" values="2;30;2" dur={`${5 + i}s`} repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0;0.6" dur={`${5 + i}s`} repeatCount="indefinite"/>
                </circle>
              ))}
            </g>

            {/* NEW: Constellation Patterns */}
            <g className="constellations" opacity="0.3">
              {/* Constellation 1 */}
              <g>
                <circle cx="150" cy="150" r="1.5" fill="#fff"/>
                <circle cx="200" cy="120" r="1" fill="#fff"/>
                <circle cx="220" cy="170" r="2" fill="#fff"/>
                <circle cx="180" cy="200" r="1" fill="#fff"/>
                <line x1="150" y1="150" x2="200" y2="120" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3"/>
                <line x1="200" y1="120" x2="220" y2="170" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3"/>
                <line x1="220" y1="170" x2="180" y2="200" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3"/>
                <line x1="180" y1="200" x2="150" y2="150" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3"/>
                <animateTransform attributeName="transform" type="rotate" from="0 180 150" to="360 180 150" dur="120s" repeatCount="indefinite"/>
              </g>
              
              {/* Constellation 2 */}
              <g>
                <circle cx="950" cy="250" r="1.5" fill="#fff"/>
                <circle cx="1000" cy="220" r="1" fill="#fff"/>
                <circle cx="1020" cy="270" r="2" fill="#fff"/>
                <circle cx="980" cy="300" r="1" fill="#fff"/>
                <circle cx="930" cy="280" r="1.5" fill="#fff"/>
                <line x1="950" y1="250" x2="1000" y2="220" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
                <line x1="1000" y1="220" x2="1020" y2="270" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
                <line x1="1020" y1="270" x2="980" y2="300" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
                <line x1="980" y1="300" x2="930" y2="280" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
                <line x1="930" y1="280" x2="950" y2="250" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
                <animateTransform attributeName="transform" type="rotate" from="0 980 250" to="-360 980 250" dur="150s" repeatCount="indefinite"/>
              </g>
              
              {/* Constellation 3 */}
              <g>
                <circle cx="350" cy="650" r="1.5" fill="#fff"/>
                <circle cx="400" cy="620" r="1" fill="#fff"/>
                <circle cx="420" cy="670" r="2" fill="#fff"/>
                <circle cx="380" cy="700" r="1" fill="#fff"/>
                <circle cx="330" cy="680" r="1.5" fill="#fff"/>
                <line x1="350" y1="650" x2="400" y2="620" stroke="#10b981" strokeWidth="0.5" opacity="0.3"/>
                <line x1="400" y1="620" x2="420" y2="670" stroke="#10b981" strokeWidth="0.5" opacity="0.3"/>
                <line x1="420" y1="670" x2="380" y2="700" stroke="#10b981" strokeWidth="0.5" opacity="0.3"/>
                <line x1="380" y1="700" x2="330" y2="680" stroke="#10b981" strokeWidth="0.5" opacity="0.3"/>
                <line x1="330" y1="680" x2="350" y2="650" stroke="#10b981" strokeWidth="0.5" opacity="0.3"/>
                <animateTransform attributeName="transform" type="rotate" from="0 380 650" to="360 380 650" dur="180s" repeatCount="indefinite"/>
              </g>
            </g>

            {/* NEW: Quantum Zigzag Lines */}
            <g className="quantum-zigzags" opacity="0.2">
              {/* Zigzag 1 */}
              <polyline points="100,300 150,270 200,330 250,270 300,330 350,270 400,330" 
                fill="none" 
                stroke="url(#blue-gradient)" 
                strokeWidth="1"
                strokeDasharray="1,1"
              >
                <animate attributeName="points" 
                  values="
                    100,300 150,270 200,330 250,270 300,330 350,270 400,330;
                    100,310 150,280 200,340 250,280 300,340 350,280 400,340;
                    100,300 150,270 200,330 250,270 300,330 350,270 400,330
                  " 
                  dur="8s" 
                  repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="10s" repeatCount="indefinite"/>
              </polyline>
              
              {/* Zigzag 2 */}
              <polyline points="800,300 850,270 900,330 950,270 1000,330 1050,270 1100,330" 
                fill="none" 
                stroke="url(#purple-gradient)" 
                strokeWidth="1"
                strokeDasharray="1,1"
              >
                <animate attributeName="points" 
                  values="
                    800,300 850,270 900,330 950,270 1000,330 1050,270 1100,330;
                    800,310 850,280 900,340 950,280 1000,340 1050,280 1100,340;
                    800,300 850,270 900,330 950,270 1000,330 1050,270 1100,330
                  " 
                  dur="9s" 
                  repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="12s" repeatCount="indefinite"/>
              </polyline>
              
              {/* Zigzag 3 */}
              <polyline points="100,500 150,470 200,530 250,470 300,530 350,470 400,530" 
                fill="none" 
                stroke="url(#teal-gradient)" 
                strokeWidth="1"
                strokeDasharray="1,1"
              >
                <animate attributeName="points" 
                  values="
                    100,500 150,470 200,530 250,470 300,530 350,470 400,530;
                    100,510 150,480 200,540 250,480 300,540 350,480 400,540;
                    100,500 150,470 200,530 250,470 300,530 350,470 400,530
                  " 
                  dur="10s" 
                  repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="14s" repeatCount="indefinite"/>
              </polyline>
            </g>

            {/* NEW: Dimensional Portals */}
            <g className="dimensional-portals" opacity="0.15">
              {/* Portal 1 */}
              <g transform="translate(200, 450)">
                <ellipse rx="40" ry="20" fill="none" stroke="url(#purple-gradient)" strokeWidth="1">
                  <animate attributeName="rx" values="40;50;40" dur="20s" repeatCount="indefinite"/>
                  <animate attributeName="ry" values="20;25;20" dur="15s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.15;0.25;0.15" dur="10s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse rx="30" ry="15" fill="none" stroke="url(#blue-gradient)" strokeWidth="1">
                  <animate attributeName="rx" values="30;35;30" dur="15s" repeatCount="indefinite"/>
                  <animate attributeName="ry" values="15;18;15" dur="18s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.15;0.25;0.15" dur="12s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse rx="20" ry="10" fill="none" stroke="url(#gold-gradient)" strokeWidth="1">
                  <animate attributeName="rx" values="20;25;20" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="ry" values="10;12;10" dur="14s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.15;0.25;0.15" dur="8s" repeatCount="indefinite"/>
                </ellipse>
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite"/>
              </g>
              
              {/* Portal 2 */}
              <g transform="translate(1000, 450)">
                <ellipse rx="40" ry="20" fill="none" stroke="url(#teal-gradient)" strokeWidth="1">
                  <animate attributeName="rx" values="40;50;40" dur="22s" repeatCount="indefinite"/>
                  <animate attributeName="ry" values="20;25;20" dur="17s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.15;0.25;0.15" dur="11s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse rx="30" ry="15" fill="none" stroke="url(#gold-gradient)" strokeWidth="1">
                  <animate attributeName="rx" values="30;35;30" dur="16s" repeatCount="indefinite"/>
                  <animate attributeName="ry" values="15;18;15" dur="19s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.15;0.25;0.15" dur="13s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse rx="20" ry="10" fill="none" stroke="url(#purple-gradient)" strokeWidth="1">
                  <animate attributeName="rx" values="20;25;20" dur="13s" repeatCount="indefinite"/>
                  <animate attributeName="ry" values="10;12;10" dur="15s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.15;0.25;0.15" dur="9s" repeatCount="indefinite"/>
                </ellipse>
                <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="45s" repeatCount="indefinite"/>
              </g>
            </g>

            {/* NEW: Quantum Particle Collisions */}
            <g className="particle-collisions" opacity="0.25">
              {/* Collision 1 */}
              <g>
                <circle cx="300" cy="300" r="2" fill="#3b82f6">
                  <animate attributeName="cx" values="200;300;200" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="300" cy="300" r="2" fill="#8b5cf6">
                  <animate attributeName="cx" values="400;300;400" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="300" cy="300" r="0" fill="url(#rainbow-gradient)">
                  <animate attributeName="r" values="0;30;0" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;0.5;0" dur="8s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              {/* Collision 2 */}
              <g>
                <circle cx="900" cy="400" r="2" fill="#10b981">
                  <animate attributeName="cx" values="800;900;800" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="10s" repeatCount="indefinite"/>
                </circle>
                <circle cx="900" cy="400" r="2" fill="#f59e0b">
                  <animate attributeName="cx" values="1000;900;1000" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="10s" repeatCount="indefinite"/>
                </circle>
                <circle cx="900" cy="400" r="0" fill="url(#rainbow-gradient)">
                  <animate attributeName="r" values="0;30;0" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;0.5;0" dur="10s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              {/* Collision 3 */}
              <g>
                <circle cx="600" cy="500" r="2" fill="#ec4899">
                  <animate attributeName="cy" values="400;500;400" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="12s" repeatCount="indefinite"/>
                </circle>
                <circle cx="600" cy="500" r="2" fill="#14b8a6">
                  <animate attributeName="cy" values="600;500;600" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="12s" repeatCount="indefinite"/>
                </circle>
                <circle cx="600" cy="500" r="0" fill="url(#rainbow-gradient)">
                  <animate attributeName="r" values="0;30;0" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;0.5;0" dur="12s" repeatCount="indefinite"/>
                </circle>
              </g>
            </g>

            {/* NEW: Quantum Wave Interference */}
            <g className="wave-interference" opacity="0.2">
              {/* Wave Set 1 */}
              <path 
                d="M100,250 C150,230 200,270 250,250 C300,230 350,270 400,250" 
                fill="none" 
                stroke="url(#blue-gradient)" 
                strokeWidth="1"
              >
                <animate 
                  attributeName="d" 
                  values="
                    M100,250 C150,230 200,270 250,250 C300,230 350,270 400,250;
                    M100,250 C150,270 200,230 250,250 C300,270 350,230 400,250;
                    M100,250 C150,230 200,270 250,250 C300,230 350,270 400,250
                  " 
                  dur="6s" 
                  repeatCount="indefinite"
                />
              </path>
              
              {/* Wave Set 2 */}
              <path 
                d="M800,250 C850,230 900,270 950,250 C1000,230 1050,270 1100,250" 
                fill="none" 
                stroke="url(#purple-gradient)" 
                strokeWidth="1"
              >
                <animate 
                  attributeName="d" 
                  values="
                    M800,250 C850,230 900,270 950,250 C1000,230 1050,270 1100,250;
                    M800,250 C850,270 900,230 950,250 C1000,270 1050,230 1100,250;
                    M800,250 C850,230 900,270 950,250 C1000,230 1050,270 1100,250
                  " 
                  dur="7s" 
                  repeatCount="indefinite"
                />
              </path>
              
              {/* Interference Pattern */}
              <path 
                d="M450,250 C500,240 550,260 600,250 C650,240 700,260 750,250" 
                fill="none" 
                stroke="url(#teal-gradient)" 
                strokeWidth="1.5"
                strokeDasharray="2,3"
              >
                <animate 
                  attributeName="d" 
                  values="
                    M450,250 C500,240 550,260 600,250 C650,240 700,260 750,250;
                    M450,250 C500,260 550,240 600,250 C650,260 700,240 750,250;
                    M450,250 C500,240 550,260 600,250 C650,240 700,260 750,250
                  " 
                  dur="10s" 
                  repeatCount="indefinite"
                />
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="5s" repeatCount="indefinite"/>
              </path>
            </g>
            
            {/* Interactive script (preserved but with new elements) */}
            <script dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('mousemove', function(e) {
                  const x = e.clientX / window.innerWidth;
                  const y = e.clientY / window.innerHeight;
                  
                  // Superposition effects
                  const left = document.querySelector('.superposition-left');
                  const right = document.querySelector('.superposition-right');
                  if (left && right) {
                    left.style.opacity = 0.2 + (1-x) * 0.2;
                    right.style.opacity = 0.2 + x * 0.2;
                  }
                  
                  // String vibration response
                  const strings = document.querySelector('.string-theory');
                  if (strings) {
                    strings.style.opacity = 0.1 + y * 0.2;
                  }
                  
                  // Halos response
                  const topHalos = document.querySelector('.quantum-halos-top');
                  const bottomHalos = document.querySelector('.quantum-halos-bottom');
                  if (topHalos && bottomHalos) {
                    topHalos.style.opacity = 0.3 + (1-y) * 0.3;
                    bottomHalos.style.opacity = 0.3 + y * 0.3;
                  }
                  
                  // Mirror particles
                  const mirror = document.querySelector('.mirror-particles');
                  if (mirror) {
                    // Slight distortion effect based on mouse position
                    mirror.style.transform = \`skewX(\${(y - 0.5) * 5}deg)\`;
                  }
                  
                  // Prismatic particles
                  const prismatic = document.querySelector('.prismatic-particles');
                  if (prismatic) {
                    // Change opacity based on mouse
                    prismatic.style.opacity = 0.2 + Math.abs(x - 0.5) * 0.3;
                  }
                  
                  // Make animations in center more subtle for better text readability
                  const quantumGroups = document.querySelectorAll('.quantum-vortices, .floating-orbs, .strange-attractors, .quantum-entanglement, .flying-halos, .quantum-fields');
                  quantumGroups.forEach(group => {
                    // Calculate distance from center
                    const centerX = 0.5;
                    const centerY = 0.5;
                    const distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
                    
                    // More transparent in the center, more visible toward the edges
                    const opacityFactor = Math.min(1, distanceFromCenter * 2.5);
                    group.style.opacity = 0.1 + opacityFactor * 0.3;
                  });
                });
              `
            }} />
          </svg>
        </div>
        
        {/* Center-aligned content */}
        <div className="w-full max-w-[540px] px-6 text-center">
          
          
          <div className="space-y-5">
            <p className="flex items-center justify-center space-x-2 mb-4">
              <span className="h-px w-5 bg-indigo-400/50"></span>
              <span className={`text-vibey text-xl font-medium tracking-wider subheader-entrance ${isVisible ? 'visible' : ''}`} data-text="VIBE ENGINEER">VIBE ENGINEER</span>
              <span className="h-px w-5 bg-indigo-400/50"></span>
            </p>
            <div className="mb-6">
              <h1 className="magnetic-title text-8xl font-semibold text-white leading-tight mb-2 tracking-tight">
                {"Ville Pajala".split('').map((char, index) => (
                  <span key={index} className="magnetic-letter">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h1>
            </div>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className={`text-xl mt-3 leading-relaxed font-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] tracking-normal subheader-entrance ${isVisible ? 'visible' : ''}`}>
                I craft <span className="text-gradient-high-vis">elegant solutions</span> to complex problems and
                build <span className="text-gradient-impactful">impactful digital experiences</span>.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/portfolio" className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 font-medium text-white transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 shadow-lg hover:shadow-purple-500/20 hover:scale-105 btn-shimmer">
                View Portfolio
              </Link>
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full px-8 font-medium text-white btn-glass">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="flex justify-center py-6 relative">
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
            <div className="group relative float-card">
              <div className="card-dark flex flex-col h-full bg-indigo-950/40 shadow-[0_0_15px_rgba(79,70,229,0.15)] border border-indigo-500/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/5 to-transparent opacity-100 rounded-xl"></div>
                <div className="flex-1 space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-indigo-900/50 border border-indigo-500/40 mb-4 shadow-[0_0_10px_rgba(99,102,241,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold">Blog</h3>
                  <p className="text-slate-400">Thoughts and insights on software development, technology, and business.</p>
                </div>
                
                <div className="pt-3 relative z-10">
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
            <div className="group relative float-card">
              <div className="card-dark flex flex-col h-full bg-purple-950/40 shadow-[0_0_15px_rgba(147,51,234,0.15)] border border-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 to-transparent opacity-100 rounded-xl"></div>
                <div className="flex-1 space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-900/50 border border-purple-500/40 mb-4 shadow-[0_0_10px_rgba(147,51,234,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold">Portfolio</h3>
                  <p className="text-slate-400">Showcase of my projects and professional work in software development.</p>
                </div>
                
                <div className="pt-3 relative z-10">
                  <Link 
                    href="/portfolio" 
                    className="inline-flex items-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors"
                  >
                    <span>View Projects</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Services Card */}
            <div className="group relative float-card">
              <div className="card-dark flex flex-col h-full bg-teal-950/40 shadow-[0_0_15px_rgba(20,184,166,0.15)] border border-teal-500/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/5 to-transparent opacity-100 rounded-xl"></div>
                <div className="flex-1 space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-900/50 border border-teal-500/40 mb-4 shadow-[0_0_10px_rgba(20,184,166,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold">Services</h3>
                  <p className="text-slate-400">Professional services in software development, AI implementation, and more.</p>
                </div>
                
                <div className="pt-3 relative z-10">
                  <Link 
                    href="/services" 
                    className="inline-flex items-center space-x-2 text-teal-400 group-hover:text-teal-300 transition-colors"
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
