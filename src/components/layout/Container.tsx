import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'full' | 'content' | 'container'
  noPadding?: boolean
}

export default function Container({ 
  children, 
  className, 
  size = 'content',
  noPadding = false 
}: ContainerProps) {
  const sizeClasses = {
    full: 'max-w-design',      // 1440px
    content: 'max-w-content',  // 1170px
    container: 'max-w-container' // 1200px
  }

  return (
    <div 
      className={cn(
        'mx-auto w-full',
        sizeClasses[size],
        !noPadding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  )
}
