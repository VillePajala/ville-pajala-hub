# Software Requirements Specification (SRS)

## 1. System Design
The system is a **monolithic Next.js web application** designed to showcase **Ville Pajala's expertise** while also offering AI consulting and web development services. The application will follow a **UX-first development approach** with a **future-ready architecture** using **Sanity.io for content management**, **Supabase for database services**, and **Clerk for authentication**.

## 2. Architecture Pattern
- **Monolithic Architecture**: A single Next.js application managing all functionalities, ensuring **simplicity, ease of maintenance, and performance**.
- **Headless CMS**: Sanity.io will manage all content (blog posts, portfolio items, services).
- **Database Services**: Supabase will handle user interactions, comments, analytics, and contact submissions.
- **Authentication**: Clerk will manage user authentication with OAuth providers.

## 3. Content Management
- **Sanity.io Integration**: Used for managing all content types:
  - Blog posts with rich text, images, and structured content
  - Portfolio items with categorization and media
  - Service descriptions and process steps
  - Static page content
- **Content Modeling**: Structured content approach with references between content types
- **Editorial Workflow**: Draft, preview, and publish capabilities

## 4. User Data & Interactions
- **Supabase Integration**: Used for storing and managing user-generated data:
  - Comments and likes on blog posts
  - Contact form submissions
  - Analytics and view counts
  - User preferences and settings
- **Real-time Features**: Comments and interactions will update in real-time

## 5. State Management
- **React Context API + Local Component State** to keep state management lightweight and efficient.
- Used primarily for **theme settings, authentication state, and global UI preferences**.

## 6. Data Flow
- **SSG (Static Site Generation)**: Pre-builds blog posts and portfolio for fast, SEO-friendly performance.
- **ISR (Incremental Static Regeneration)**: Allows content updates without full redeploys.
- **CSR (Client-Side Rendering)**: Used for comments, likes, and real-time interactions via Supabase.
- **Content Syndication**: Automatic cross-posting to Substack when content is published in Sanity.

## 7. Technical Stack
- **Hosting & Deployment:** Vercel (optimized for Next.js apps)
- **Frontend:** Next.js with TypeScript and Tailwind CSS
- **Content Management:** Sanity.io
- **Database & Backend:** Supabase (PostgreSQL, Storage, Realtime API)
- **Authentication:** Clerk (OAuth)
- **State Management:** React Context API + Local Component State
- **Styling:** Tailwind CSS for responsive design
- **Animation:** Framer Motion for UI animations

## 8. Authentication Process
- Users can authenticate via **OAuth (Google, GitHub, etc.)** using Clerk.
- Authentication is required for **posting comments, likes, and accessing dashboard features**.
- Anonymous browsing is allowed for general content consumption.

## 9. Navigation Structure
- **Two-Level Sticky Sidebar**: Primary navigation with contextual secondary options
- **Primary Sections**:
  - Home
  - Technology & AI
  - Creative Work
  - Philosophy & Learning
  - Metaphysics
  - Services
  - Blog
  - Contact
- **Secondary Navigation**: Context-specific subsections under each primary section

## 10. Route Design
- `/` (Home) – Introduction, featured blog posts, and quick navigation.
- `/technology-ai` – AI & automation projects, web & app development.
- `/creative-work` – Art, music, game development, experimental projects.
- `/philosophy-learning` – Blog, essays, teaching materials, and deep explorations.
- `/metaphysics` – Esoteric thinking, intuition, problem-solving philosophy.
- `/services` – AI consulting, web development, and creative tech solutions.
- `/blog` – Blog listing page with filtering options.
- `/blog/[slug]` – Individual blog post page.
- `/portfolio` – Showcase of all portfolio items with filtering.
- `/portfolio/[slug]` – Individual portfolio item page.
- `/contact` – Contact & work with Ville.
- `/subscribe` – Newsletter sign-up page with Substack integration.

## 11. Content Structure
### Blog Categories
- Aligned with main site sections:
  - Technology & AI
  - Creative Work
  - Philosophy & Learning
  - Metaphysics
- Cross-cutting tags for contextual filtering:
  - Format Tags (Tutorial, Essay, Case Study, etc.)
  - Depth Tags (Beginner, Intermediate, Advanced)
  - Theme Tags (Innovation, Creativity, Human Potential)
  - Mood Tags (Reflective, Practical, Inspirational)

### Portfolio Categories
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

### Services Structure
- AI & Machine Learning Services
- Automation Solutions
- Web & App Development
- Creative Technology

## 12. Database Design
### Sanity.io Collections
- Blog Posts
- Portfolio Items
- Services
- Categories & Tags
- Static Pages

### Supabase Tables
- **Users Table**
  - `id` (Primary Key)
  - `clerk_id` (Clerk Authentication ID)
  - `name`
  - `email`
  - `created_at`

- **Comments Table**
  - `id` (Primary Key)
  - `content_id` (Sanity Document ID)
  - `content_type` (blog, portfolio)
  - `user_id` (Foreign Key → Users)
  - `comment_text`
  - `created_at`

- **Likes Table**
  - `id` (Primary Key)
  - `content_id` (Sanity Document ID)
  - `content_type` (blog, portfolio)
  - `user_id` (Foreign Key → Users)
  - `created_at`

- **Contact Submissions Table**
  - `id` (Primary Key)
  - `name`
  - `email`
  - `message`
  - `submitted_at`

- **Analytics Table**
  - `id` (Primary Key)
  - `content_id` (Sanity Document ID)
  - `content_type` (blog, portfolio, page)
  - `views`
  - `user_id` (Nullable, tracks logged-in users)
  - `timestamp`

## 13. Development Phases
### Phase 1: UX Design & Frontend Framework
- Design system setup
- Core layout implementation
- Homepage & key section designs
- Interactive elements

### Phase 2: Static Content & Mockups
- Content placeholders
- Frontend-only features
- Responsive testing

### Phase 3: Backend Implementation
- Sanity.io setup and schema implementation
- Supabase database configuration
- Clerk authentication integration
- API endpoints and serverless functions

## 14. Next Steps
- Implement **UX design and frontend framework** as the first phase
- Develop **static content and mockups** to visualize the experience
- Document **backend architecture** for future implementation
- Create **design system** with reusable components
