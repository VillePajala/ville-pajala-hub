# Product Requirements Document (PRD)

## 1. Elevator Pitch
This website is a fusion of **personal brand, portfolio, and business presence**. It will showcase **Ville Pajala's expertise** at the intersection of **technology, creativity, and human potential**, while also allowing room for future business expansion. The site will feature **AI and web development services**, a **self-hosted blog**, and a **portfolio of creative and philosophical works**—all within a dark, stylish, and immersive aesthetic.

## 2. Who Is This App For?
- **Visitors & Readers** – Individuals interested in Ville's **thoughts, work, and creative output**.
- **Potential Clients** – Individuals and small businesses looking for **AI, automation, and web development services**.
- **Subscribers & Followers** – Those who want to stay connected through a **newsletter**.

## 3. Functional Requirements
- **Next.js-based website** with a UX-first development approach
- **Self-hosted blog** with contextual content filtering aligned with main site sections
- **Sanity.io for content management** and **Supabase for database/user interactions**
- **Cross-posting integration with Substack** for automatic content syndication
- **Portfolio showcasing AI projects, web development, art, music, and philosophy**
- **Services page for AI consulting, automation, and web/app development**
- **Substack newsletter integration** with a freebie offering
- **User interactions:**
  - Like, comment, and share blog posts (stored in Supabase)
  - Contact Ville easily
  - Hybrid recommendation system combining content-based filtering, behavioral data, and editorial curation
- **Two-level sticky sidebar navigation** for smooth, guided user experience
- **Animations & interactive UI elements** for a dynamic experience

## 4. User Stories
### 1️⃣ Visitor/Reader
- Should immediately see **what the site offers, who Ville is, and what they can do**.
- Should be able to **explore Ville's work, thoughts, and writings** through an intuitive navigation system.
- Should be able to **contact Ville easily**.
- Should be able to **like, comment, and share** blog posts.
- Should receive **contextual content recommendations** based on their current reading.

### 2️⃣ Potential Client
- The **front page should clearly guide them to the services section**.
- They should be encouraged to **explore offerings** through a comprehensive services structure.
- There should be **some Call-to-Action (CTA) prompts** to encourage engagement.
- Should see **relevant portfolio items** that demonstrate expertise in the service area.

### 3️⃣ Subscriber/Follower
- Newsletter subscription through **Substack integration** should be subtle, not intrusive.
- A **freebie (e.g., AI guide or checklist) will be offered** to encourage sign-ups.
- Should receive **consistent content** across both the website and Substack newsletter.

## 5. User Interface Design
- **Dark Mode** – Primary theme will be dark and immersive.
- **Aesthetic Blend** – Combination of **philosophy, esoteric themes, technology, and artistic expression**.
  - Should feel **a little dangerous and rebellious**, yet **sophisticated, stylish, clean, and inviting**.
- **Two-Level Sticky Sidebar Navigation** – Primary navigation with contextual secondary options.
- **Animations & Interactivity** – The site will include **dynamic elements** to enhance the user experience.
- **Featured blog posts** on the homepage.
- **RSS feed support** for blog syndication.
- **Contextual blog entries** inside relevant sections (e.g., AI posts under "Technology & AI").

## 6. Content Management
- **Sanity.io** will be used as the content management system for:
  - Blog posts
  - Portfolio items
  - Service descriptions
  - Static page content
- **Content Structure** aligned with main site sections:
  - Technology & AI
  - Creative Work
  - Philosophy & Learning
  - Metaphysics
- **Cross-cutting tags** for contextual filtering across categories

## 7. Technical Architecture
- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Content Management**: Sanity.io
- **Database & User Interactions**: Supabase
- **Authentication**: Clerk
- **Newsletter**: Substack integration
- **Development Approach**: UX-first with future-ready architecture

## 8. Next Steps
- Implement **UX design and frontend framework** as the first phase
- Develop **static content and mockups** to visualize the experience
- Document **backend architecture** for future implementation
- Create **design system** with reusable components
