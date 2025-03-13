import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, X, Filter, ChevronDown } from 'lucide-react'

interface BlogFilterProps {
  categories: string[]
  tags: string[]
  onFilterChange: (filters: { categories: string[]; tags: string[] }) => void
  onSearch?: (query: string) => void
}

export function BlogFilter({ categories, tags, onFilterChange, onSearch }: BlogFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const [showTagDropdown, setShowTagDropdown] = useState(false)
  
  const categoryDropdownRef = useRef<HTMLDivElement>(null)
  const tagDropdownRef = useRef<HTMLDivElement>(null)

  // Handle clicks outside of dropdowns to close them
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setShowCategoryDropdown(false)
      }
      if (tagDropdownRef.current && !tagDropdownRef.current.contains(event.target as Node)) {
        setShowTagDropdown(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]

    setSelectedCategories(newCategories)
    onFilterChange({ 
      categories: newCategories, 
      tags: selectedTags,
    })
  }

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]

    setSelectedTags(newTags)
    onFilterChange({ 
      categories: selectedCategories, 
      tags: newTags,
    })
  }

  const handleClearFilters = () => {
    setSelectedCategories([])
    setSelectedTags([])
    setSearchQuery('')
    onFilterChange({ categories: [], tags: [] })
    if (onSearch) {
      onSearch('')
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    if (onSearch) {
      onSearch(query)
    }
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedTags.length > 0 || searchQuery !== ''

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Scrollbar styling with CSS */}
      <style jsx global>{`
        .styled-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .styled-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          transition: background 0.2s ease;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>

      {/* Search input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 pl-10 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
        />
        <Search className="absolute left-3 top-3.5 w-4 h-4 text-white/50" />
        {searchQuery && (
          <button
            onClick={() => { 
              setSearchQuery(''); 
              if (onSearch) onSearch(''); 
            }}
            className="absolute right-3 top-3.5 text-white/50 hover:text-white/90 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Filter controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Filter size={16} className="text-white/70 mr-2" />
          <h2 className="text-lg font-medium text-white/90">Filters</h2>
        </div>
        {hasActiveFilters && (
          <button 
            onClick={handleClearFilters}
            className="text-sm text-white/60 hover:text-white/90 transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Filter dropdowns */}
      <div className="space-y-3">
        {/* Category filter dropdown */}
        <div className="space-y-3">
          <div className="relative" ref={categoryDropdownRef}>
            <button
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="w-full flex justify-between items-center bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-white/80 hover:border-white/30 transition-colors"
            >
              <span className="flex items-center">
                {selectedCategories.length === 0 
                  ? 'Filter by Category' 
                  : `${selectedCategories.length} ${selectedCategories.length === 1 ? 'category' : 'categories'}`}
                {selectedCategories.length > 0 && (
                  <span className="ml-2 bg-white/10 text-xs py-0.5 px-1.5 rounded">{selectedCategories.length}</span>
                )}
              </span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${showCategoryDropdown ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {showCategoryDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-black/30 backdrop-blur-md border border-white/20 rounded-lg py-2 z-50 max-h-56 overflow-auto shadow-lg shadow-black/20 styled-scrollbar">
                {categories.map((category) => (
                  <div 
                    key={category}
                    className="px-4 py-2 hover:bg-white/10 cursor-pointer flex items-center"
                    onClick={() => handleCategoryToggle(category)}
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center mr-3 ${
                      selectedCategories.includes(category) 
                        ? 'border-white bg-white/90' 
                        : 'border-white/30'
                    }`}>
                      {selectedCategories.includes(category) && (
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className="text-white">
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Selected categories - displayed directly below the dropdown */}
          {selectedCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2 pl-1">
              {selectedCategories.map(category => (
                <div 
                  key={category}
                  className="inline-flex items-center rounded-md bg-black/20 px-2.5 py-1.5 text-xs text-white/90 border border-white/10"
                >
                  <span className="font-medium">{category}</span>
                  <button 
                    className="ml-1.5 text-white/60 hover:text-white"
                    onClick={() => handleCategoryToggle(category)}
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tags filter dropdown */}
        {tags.length > 0 && (
          <div className="space-y-3">
            <div className="relative" ref={tagDropdownRef}>
              <button
                onClick={() => setShowTagDropdown(!showTagDropdown)}
                className="w-full flex justify-between items-center bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-white/80 hover:border-white/30 transition-colors"
              >
                <span className="flex items-center">
                  {selectedTags.length === 0 
                    ? 'Filter by Tag' 
                    : `${selectedTags.length} ${selectedTags.length === 1 ? 'tag' : 'tags'}`}
                  {selectedTags.length > 0 && (
                    <span className="ml-2 bg-white/10 text-xs py-0.5 px-1.5 rounded">{selectedTags.length}</span>
                  )}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${showTagDropdown ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {showTagDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-black/30 backdrop-blur-md border border-white/20 rounded-lg py-2 z-50 max-h-56 overflow-auto shadow-lg shadow-black/20 styled-scrollbar">
                  {tags.map((tag) => (
                    <div 
                      key={tag}
                      className="px-4 py-2 hover:bg-white/10 cursor-pointer flex items-center"
                      onClick={() => handleTagToggle(tag)}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center mr-3 ${
                        selectedTags.includes(tag) 
                          ? 'border-white bg-white/90' 
                          : 'border-white/30'
                      }`}>
                        {selectedTags.includes(tag) && (
                          <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-white">#{tag}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Selected tags - displayed directly below the dropdown */}
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2 pl-1">
                {selectedTags.map(tag => (
                  <div 
                    key={tag}
                    className="inline-flex items-center rounded-md bg-black/20 px-2.5 py-1.5 text-xs text-white/90 border border-white/10"
                  >
                    <span className="font-medium">#{tag}</span>
                    <button 
                      className="ml-1.5 text-white/60 hover:text-white"
                      onClick={() => handleTagToggle(tag)}
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Active search query indicator */}
      {searchQuery && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="text-sm text-white/70">Searching for:</div>
            <div 
              className="inline-flex items-center rounded-md bg-black/20 px-2.5 py-1.5 text-xs text-white/90 border border-white/10"
            >
              <span className="font-medium">{searchQuery}</span>
              <button 
                className="ml-1.5 text-white/60 hover:text-white"
                onClick={() => { 
                  setSearchQuery(''); 
                  if (onSearch) onSearch(''); 
                }}
              >
                <X size={12} />
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
} 