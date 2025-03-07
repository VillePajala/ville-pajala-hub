// This file injects mystical symbols overlay using pure DOM
// This approach bypasses React's hydration process to guarantee the symbols appear

export function injectMysticalSymbols() {
  // Create the style element
  const style = document.createElement('style');
  style.textContent = `
    .mystical-symbols-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 20;
      overflow: hidden;
    }
    
    .mystical-symbol {
      position: absolute;
      opacity: 0.15;
      stroke-width: 1.5px;
      fill: none;
    }
    
    .mystical-symbol.air {
      stroke: #3b82f6;
      top: 10%;
      left: 20%;
      animation: float1 120s infinite ease-in-out, spin1 60s infinite linear;
    }
    
    .mystical-symbol.fire {
      stroke: #8b5cf6;
      top: 25%;
      right: 15%;
      animation: float2 110s infinite ease-in-out, spin2 80s infinite linear;
    }
    
    .mystical-symbol.water {
      stroke: #14b8a6;
      bottom: 30%;
      left: 25%;
      animation: float3 150s infinite ease-in-out, spin3 70s infinite linear;
    }
    
    .mystical-symbol.ankh {
      stroke: #ec4899;
      top: 40%;
      right: 25%;
      animation: float4 140s infinite ease-in-out, spin4 85s infinite linear;
    }
    
    .mystical-symbol.eye {
      stroke: #3b82f6;
      bottom: 15%;
      right: 20%;
      animation: float5 120s infinite ease-in-out, spin5 95s infinite linear;
    }
    
    .mystical-symbol.saturn {
      stroke: #14b8a6;
      top: 15%;
      left: 40%;
      animation: float6 190s infinite ease-in-out, spin6 105s infinite linear;
    }
    
    .mystical-symbol.triangle {
      stroke: #f59e0b;
      bottom: 35%;
      right: 40%;
      animation: float7 155s infinite ease-in-out, spin7 75s infinite linear;
    }
    
    .mystical-symbol.seed {
      stroke: #14b8a6;
      top: 50%;
      left: 10%;
      animation: float8 210s infinite ease-in-out, spin8 130s infinite linear;
    }
    
    @keyframes float1 {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(100px, 100px); }
      50% { transform: translate(0, 200px); }
      75% { transform: translate(-100px, 100px); }
    }
    
    @keyframes float2 {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(-150px, 150px); }
      50% { transform: translate(0, 300px); }
      75% { transform: translate(150px, 450px); }
    }
    
    @keyframes float3 {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(200px, -200px); }
      50% { transform: translate(400px, 0); }
      75% { transform: translate(600px, 200px); }
    }
    
    @keyframes float4 {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(200px, 200px); }
      50% { transform: translate(0, 400px); }
      75% { transform: translate(-200px, 600px); }
    }
    
    @keyframes float5 {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(-100px, 150px); }
      50% { transform: translate(-200px, 0); }
      75% { transform: translate(-300px, -150px); }
    }
    
    @keyframes float6 {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(-200px, -200px); }
      50% { transform: translate(-400px, 0); }
      75% { transform: translate(-600px, 200px); }
    }
    
    @keyframes float7 {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(-150px, -200px); }
      50% { transform: translate(-300px, 0); }
      75% { transform: translate(-450px, 200px); }
    }
    
    @keyframes float8 {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(300px, -100px); }
      50% { transform: translate(600px, 0); }
      75% { transform: translate(900px, 100px); }
    }
    
    @keyframes spin1 { 100% { transform: rotate(360deg); } }
    @keyframes spin2 { 100% { transform: rotate(-360deg); } }
    @keyframes spin3 { 100% { transform: rotate(360deg); } }
    @keyframes spin4 { 100% { transform: rotate(360deg); } }
    @keyframes spin5 { 100% { transform: rotate(-360deg); } }
    @keyframes spin6 { 100% { transform: rotate(-360deg); } }
    @keyframes spin7 { 100% { transform: rotate(360deg); } }
    @keyframes spin8 { 100% { transform: rotate(-360deg); } }
  `;
  document.head.appendChild(style);
  
  // Create overlay container
  const overlay = document.createElement('div');
  overlay.className = 'mystical-symbols-overlay';
  
  // Add mystical symbols
  
  // Air Symbol
  const airSymbol = document.createElement('svg');
  airSymbol.className = 'mystical-symbol air';
  airSymbol.setAttribute('width', '100');
  airSymbol.setAttribute('height', '100');
  airSymbol.setAttribute('viewBox', '0 0 100 100');
  airSymbol.innerHTML = '<path d="M20,50 L80,50 L50,20 Z M50,50 L50,80" />';
  overlay.appendChild(airSymbol);
  
  // Fire Symbol
  const fireSymbol = document.createElement('svg');
  fireSymbol.className = 'mystical-symbol fire';
  fireSymbol.setAttribute('width', '100');
  fireSymbol.setAttribute('height', '100');
  fireSymbol.setAttribute('viewBox', '0 0 100 100');
  fireSymbol.innerHTML = '<path d="M50,20 L80,80 L50,60 L20,80 Z" />';
  overlay.appendChild(fireSymbol);
  
  // Water Symbol
  const waterSymbol = document.createElement('svg');
  waterSymbol.className = 'mystical-symbol water';
  waterSymbol.setAttribute('width', '100');
  waterSymbol.setAttribute('height', '100');
  waterSymbol.setAttribute('viewBox', '0 0 100 100');
  waterSymbol.innerHTML = '<path d="M20,20 L80,20 L50,80 L20,20 M50,20 L50,0" />';
  overlay.appendChild(waterSymbol);
  
  // Ankh Symbol
  const ankhSymbol = document.createElement('svg');
  ankhSymbol.className = 'mystical-symbol ankh';
  ankhSymbol.setAttribute('width', '100');
  ankhSymbol.setAttribute('height', '100');
  ankhSymbol.setAttribute('viewBox', '0 0 100 100');
  ankhSymbol.innerHTML = '<path d="M50,20 L50,60 M30,40 L70,40 M50,60 C30,60 30,90 50,90 C70,90 70,60 50,60" />';
  overlay.appendChild(ankhSymbol);
  
  // Eye of Horus
  const eyeSymbol = document.createElement('svg');
  eyeSymbol.className = 'mystical-symbol eye';
  eyeSymbol.setAttribute('width', '100');
  eyeSymbol.setAttribute('height', '100');
  eyeSymbol.setAttribute('viewBox', '0 0 100 100');
  eyeSymbol.innerHTML = '<path d="M20,50 Q50,20 80,50 M20,50 L80,50 M20,50 Q50,80 80,50 M50,50 L65,60" />';
  overlay.appendChild(eyeSymbol);
  
  // Saturn Symbol
  const saturnSymbol = document.createElement('svg');
  saturnSymbol.className = 'mystical-symbol saturn';
  saturnSymbol.setAttribute('width', '100');
  saturnSymbol.setAttribute('height', '100');
  saturnSymbol.setAttribute('viewBox', '0 0 100 100');
  saturnSymbol.innerHTML = '<path d="M50,20 L50,80 M30,70 L70,70 M50,20 L30,0" />';
  overlay.appendChild(saturnSymbol);
  
  // Triangle (Tetrahedron)
  const triangleSymbol = document.createElement('svg');
  triangleSymbol.className = 'mystical-symbol triangle';
  triangleSymbol.setAttribute('width', '100');
  triangleSymbol.setAttribute('height', '100');
  triangleSymbol.setAttribute('viewBox', '0 0 100 100');
  triangleSymbol.innerHTML = '<path d="M50,20 L20,80 L80,80 Z" />';
  overlay.appendChild(triangleSymbol);
  
  // Seed of Life (simplified)
  const seedSymbol = document.createElement('svg');
  seedSymbol.className = 'mystical-symbol seed';
  seedSymbol.setAttribute('width', '120');
  seedSymbol.setAttribute('height', '120');
  seedSymbol.setAttribute('viewBox', '0 0 120 120');
  seedSymbol.innerHTML = `
    <circle cx="60" cy="60" r="30" />
    <circle cx="90" cy="60" r="30" />
    <circle cx="75" cy="90" r="30" />
    <circle cx="45" cy="90" r="30" />
    <circle cx="30" cy="60" r="30" />
    <circle cx="45" cy="30" r="30" />
    <circle cx="75" cy="30" r="30" />
  `;
  overlay.appendChild(seedSymbol);
  
  // Add the overlay to the body
  document.body.appendChild(overlay);
  
  return () => {
    // Clean up function
    document.body.removeChild(overlay);
    document.head.removeChild(style);
  };
} 