import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GridProps {
  children: ReactNode
  className?: string
  cols?: 12 | 16 | number
  gap?: 'sm' | 'md' | 'lg' | 'xl' | number | string
}

export default function Grid({ 
  children, 
  className, 
  cols = 12,
  gap = 'md'
}: GridProps) {
  const colClasses = {
    12: 'grid-cols-design-12',
    16: 'grid-cols-design-16'
  }

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6', 
    lg: 'gap-8',
    xl: 'gap-12'
  }

  // Handle custom gap values
  const getGapStyle = () => {
    if (typeof gap === 'number') {
      return { gap: `${gap}px` }
    }
    if (typeof gap === 'string' && gap.includes('px')) {
      return { gap }
    }
    return {}
  }

  return (
    <div 
      className={cn(
        'grid w-full',
        typeof cols === 'number' && cols <= 16 ? colClasses[cols as 12 | 16] : `grid-cols-${cols}`,
        typeof gap === 'string' && !gap.includes('px') ? gapClasses[gap as keyof typeof gapClasses] : '',
        className
      )}
      style={getGapStyle()}
    >
      {children}
    </div>
  )
}
