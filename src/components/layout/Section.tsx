import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerSize?: 'full' | 'content' | 'container'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: string
}

export default function Section({ 
  children, 
  className,
  containerSize = 'content',
  padding = 'lg',
  background
}: SectionProps) {
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 lg:py-20',
    xl: 'py-20 lg:py-28'
  }

  return (
    <section 
      className={cn(
        'w-full',
        paddingClasses[padding],
        background,
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}
