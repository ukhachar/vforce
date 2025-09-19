import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Design system utilities
export const designSystem = {
  // Breakpoints matching your 1440px design
  breakpoints: {
    mobile: '320px',
    tablet: '768px', 
    desktop: '1024px',
    design: '1440px'
  },
  
  // Grid system
  grid: {
    maxWidth: '1440px',
    contentWidth: '1170px',
    columns: 12,
    gutter: '30px'
  },
  
  // Spacing scale
  spacing: {
    xs: '8px',
    sm: '16px', 
    md: '24px',
    lg: '32px',
    xl: '48px',
    xxl: '64px'
  },
  
  // Typography scale
  typography: {
    h1: 'text-4xl lg:text-6xl font-bold',
    h2: 'text-3xl lg:text-5xl font-bold',
    h3: 'text-2xl lg:text-4xl font-bold',
    h4: 'text-xl lg:text-3xl font-bold',
    body: 'text-base lg:text-lg',
    small: 'text-sm lg:text-base'
  }
}
