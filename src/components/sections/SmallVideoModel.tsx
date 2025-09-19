'use client'

import { useRef, useEffect } from 'react'
import { Container } from '@/components/layout'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SmallVideoModel() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Feature data for the 4 cards
  const features = [
    {
      id: 1,
      icon: "/images/icon/user-star.svg",
      title: "Predicts authentic content with 94% accuracy"
    },
    {
      id: 2,
      icon: "/images/icon/users.svg", 
      title: "Validated and backed by against 3B+ viral posts."
    },
    {
      id: 3,
      icon: "/images/icon/chart.svg",
      title: "Spots creative fatigue early to keep campaigns effective"
    },
    {
      id: 4,
      icon: "/images/icon/brain-cog.svg",
      title: "Competitive intelligence, seamlessly built in"
    }
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Initial states - all elements hidden
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 })
      gsap.set(cardsRef.current, { opacity: 0, y: 40 })
      gsap.set(buttonRef.current, { opacity: 0, scale: 0.8 })

      // Main timeline triggered when section comes into view
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      })

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      .to(cardsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)"
      }, "-=0.3")
      .to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.2")

    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pb-20 pt-[470px]"
      style={{ backgroundImage: 'url(/images/svmbg.png)' }}
    >
      
      <Container size="content" noPadding={true} className="relative z-10 flex flex-col justify-center">
        {/* Content Card */}

          {/* Gradient Border Card */}
          <div className="relative rounded-2xl overflow-hidden mb-[-120px]">
  {/* Border strips (top/right/bottom/left) */}
  <div className="pointer-events-none absolute inset-0">
    {/* Top */}
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
    {/* Bottom */}
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
    {/* Left */}
    <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500" />
    {/* Right */}
    <div className="absolute top-0 bottom-0 right-0 w-[3px] bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500" />
  </div>

  {/* Content area (fully transparent if you like) */}
  <div className="relative p-1">
            <div className="rounded-[5px] bg-gradient-to-br from-black/40 via-black/20 to-black/10 backdrop-blur-[20px]" style={{ padding: '48px 64px' }}>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex-1">
                  <h2 
                    ref={titleRef}
                    className="font-bold text-white mb-4 font-sf-pro"
                    style={{ fontSize: '44px' }}
                  >
                    Small Video Model (SVM)
                  </h2>
                  
                  <div ref={subtitleRef}>
                    <p className="text-white/90 font-sf-pro" style={{ fontSize: '20px' }}>
                    Predicts which authentic content will convert before you spend on ads. Powered by patented Highlights extraction
                    </p>
                  </div>
                </div>

                {/* CTA Button - Moved to header right */}
                <div className="ml-8">
                  <button 
                    ref={buttonRef}
                    className="bg-home-gradient text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-sf-pro"
                  >
                    Get Started for FREE
                  </button>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    ref={el => { if (el) cardsRef.current[index] = el }}
                    className="flex items-start space-x-4 p-6"
                  >
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-base text-white/70 font-sf-pro" style={{ fontSize: '20px' }}>
                        {feature.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>


            </div>
  </div>
</div>

          
      </Container>
    </section>
  )
}
