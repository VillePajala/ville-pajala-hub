'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold">Welcome to My Digital Hub</h1>
        <p className="text-xl text-muted-foreground">
          I'm Ville Pajala, a software developer and technology consultant passionate about creating impactful digital solutions.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-xl font-semibold">Blog</h3>
          <p className="text-muted-foreground">
            Thoughts and insights on software development, technology, and business.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-xl font-semibold">Portfolio</h3>
          <p className="text-muted-foreground">
            Showcase of my projects and professional work in software development.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-xl font-semibold">Services</h3>
          <p className="text-muted-foreground">
            Professional consulting and development services for your digital needs.
          </p>
        </div>
      </motion.section>
    </div>
  )
}
