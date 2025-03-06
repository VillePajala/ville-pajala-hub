'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type MenuButtonProps = {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export function MenuButton({ isOpen, onClick, className }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex h-12 w-12 items-center justify-center rounded-md hover:bg-muted',
        className
      )}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="relative h-5 w-6">
        <motion.span
          className="absolute h-0.5 w-6 bg-foreground"
          animate={{
            top: isOpen ? '50%' : '0%',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transformOrigin: 'center'
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute top-[50%] h-0.5 w-6 bg-foreground"
          animate={{
            opacity: isOpen ? 0 : 1,
            transform: 'translateY(-50%)'
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute bottom-0 h-0.5 w-6 bg-foreground"
          animate={{
            bottom: isOpen ? '50%' : '0%',
            transform: isOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
            transformOrigin: 'center'
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </button>
  )
} 