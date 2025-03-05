# User Interface Design Document (UID)

## 1. Layout Structure
- **Two-Level Sticky Sidebar Navigation**: The primary navigation will be a **sticky sidebar** with contextual secondary options.
- **Multi-Page Structure**: The website will be divided into **multiple pages**, ensuring clear content separation.
- **Homepage Overview**: The landing page will provide a **glimpse into Ville's work, identity, and available actions**.
- **Featured Blog Posts**: Key content will be highlighted on the homepage.

## 2. Navigation System
- **Primary Navigation Sections**:
  - Home
  - Technology & AI
  - Creative Work
  - Philosophy & Learning
  - Metaphysics
  - Services
  - Blog
  - Contact

- **Secondary Navigation**: Context-specific subsections appear when hovering/clicking on primary items:
  - Under "Technology & AI": AI Projects, Web Development, Automation
  - Under "Creative Work": Art, Music, Game Development, Experimental
  - Under "Philosophy & Learning": Essays, Book Reviews, Teaching Materials
  - Under "Metaphysics": Esoteric Thinking, Intuition, Problem-Solving

- **Visual Design & Interaction**:
  - Dark, minimalist base with subtle textures
  - Glowing highlight effect for current section
  - Smooth transitions between sections
  - Breadcrumb integration for context
  - Progress indicator showing position in site structure

- **Mobile Experience**:
  - Collapsible sidebar transforms into hamburger menu
  - Bottom navigation bar for key sections
  - Swipe gestures for navigation between related sections

## 3. Core Components
- **Self-Hosted Blog** with contextual content filtering aligned with main site sections.
- **Portfolio Showcase** covering AI projects, web development, art, music, and philosophy.
- **Services Page** with comprehensive service categories and visual process illustrations.
- **Substack Newsletter Integration** with subtle placement and freebie incentive.
- **Contact Form** for potential clients and collaborations.
- **Like, Comment, and Share Features** for blog posts.
- **Hybrid Recommendation System** combining content-based filtering, behavioral data, and editorial curation.
- **Text-to-Speech Option** for blog content.
- **Clerk Authentication** to handle user login and interactions.

## 4. Content Organization
- **Blog Categories** aligned with main site sections:
  - Technology & AI
  - Creative Work
  - Philosophy & Learning
  - Metaphysics
- **Cross-cutting Tags** for contextual filtering:
  - Format Tags (Tutorial, Essay, Case Study, etc.)
  - Depth Tags (Beginner, Intermediate, Advanced)
  - Theme Tags (Innovation, Creativity, Human Potential)
  - Mood Tags (Reflective, Practical, Inspirational)

- **Portfolio Categories**:
  - AI Projects
  - Web Development
  - Automation Solutions
  - Technical Experiments
  - Visual Art
  - Music & Sound
  - Game Development
  - Experimental Media
  - Essays & Papers
  - Teaching Materials
  - Research Projects
  - Conceptual Works
  - Esoteric Explorations
  - Theoretical Frameworks
  - Intuitive Methods
  - Consciousness Studies

- **Services Structure**:
  - AI & Machine Learning Services
  - Automation Solutions
  - Web & App Development
  - Creative Technology

## 5. Interaction Patterns
- **Guided Experience Elements**:
  - Visual cues directing attention to next logical sections
  - Contextual recommendations at the end of content
  - Reading progress bar for blog posts
  - Path suggestions based on content themes
  - Persistent quick actions (subscribe, contact)

- **Recommendation System**:
  - Content-based filtering (similar to what user is viewing)
  - Lightweight behavioral data tracking
  - Editorial curation for manual highlights
  - Visually distinguished between algorithmic and curated recommendations

- **Substack Integration**:
  - Custom-styled subscription form
  - Freebie delivery system
  - Cross-posting workflow

- **Smooth Animations**: Hover effects, scrolling interactions, and parallax elements.
- **Call-to-Action (CTA) Prompts**: Strategically placed in the services section.

## 6. Visual Design Elements & Color Scheme
- **Dark Mode**: The primary theme will be dark and immersive.
- **Subtle Background Textures & Patterns**: No solid backgrounds; **gradients, textures, or abstract patterns** will add depth.
- **Symbolic & Esoteric Imagery**: Integrating elements that blend **philosophy, technology, and artistic expression**.
- **Glowing Hover Effects & Moving Background Elements**: Adding dynamic interactions.

## 7. Mobile, Web App, and Desktop Considerations
- **Fully Responsive Design**: Ensuring optimal viewing on all screen sizes.
- **Smooth Page Transitions & Navigation Adaptations** for mobile users.
- **Optimized Sidebar Experience**: Collapsible on smaller screens.

## 8. Typography
- **Headers**: A slightly unusual, artistic font to add character.
- **Body Text**: A modern, highly readable sans-serif font for clarity.
- **Typography Balance**: Readability is the priority, but headers will add an aesthetic touch.

## 9. Accessibility
- **Fully Keyboard-Navigable**: All elements accessible via keyboard controls.
- **Text-to-Speech Options**: Available for blog posts.
- **No High-Contrast Mode Toggle Needed**.

## 10. Development Approach
- **UX-First Philosophy**: Focus on user experience before backend implementation
- **Phase 1**: Design system setup and core layout implementation
- **Phase 2**: Static content and mockups to visualize experience
- **Phase 3**: Backend preparation and documentation

## 11. Next Steps
- Implement design system with Tailwind CSS
- Create reusable component library
- Develop animation system with Framer Motion
- Build responsive layouts for all device sizes
