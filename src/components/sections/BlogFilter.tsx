import { useState } from 'react'
import { motion } from 'framer-motion'

interface BlogFilterProps {
  categories: string[]
  tags: string[]
  onFilterChange: (filters: { categories: string[]; tags: string[] }) => void
}

export function BlogFilter({ categories, tags, onFilterChange }: BlogFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]

    setSelectedCategories(newCategories)
    onFilterChange({ categories: newCategories, tags: selectedTags })
  }

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]

    setSelectedTags(newTags)
    onFilterChange({ categories: selectedCategories, tags: newTags })
  }

  const handleClearFilters = () => {
    setSelectedCategories([])
    setSelectedTags([])
    onFilterChange({ categories: [], tags: [] })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Filter by Category</h2>
          {(selectedCategories.length > 0 || selectedTags.length > 0) && (
            <button 
              onClick={handleClearFilters}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Clear filters
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryToggle(category)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                selectedCategories.includes(category)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {tags.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Filter by Tag</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`rounded-full px-3 py-1 text-sm transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-card border border-border hover:bg-secondary/10'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
} 