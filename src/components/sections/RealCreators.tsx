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

export default function RealCreators() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  // Performance metrics data
   const metrics = [
     {
       id: 1,
       logo: "/images/client/tireagent.png",
       metric: "8X",
       title: "ROAS Achieved",
       description: "On $2,000 ad spend campaign Sept → Oct: $160K to $590K revenue (+268%)",
       size: "large",
       position: { top: "0px", left: "0px" }
     },
     {
       id: 2,
       logo: null, 
       metric: "8X",
       title: "ROAS Achieved",
       description: "",
       size: "small",
       position: { top: "106px", left: "530px" }
     },
     {
       id: 3,
       logo: "/images/client/diginn.png",
       metric: "400%",
       title: "CTR Improvement", 
       description: "0.2-0.3% → 1.4% top performer CPC: $5.38 → $1.87 over 3 months",
       size: "large",
       position: { top: "256px", right: "70px" }
     },
     {
       id: 4,
       logo: "/images/client/tireagent.png",
       metric: "105%",
       title: "More Online Signups",
       description: "8 community influencers activated. #1 sales month + 104 new clicks to signup",
       size: "large", 
       position: { top: "516px", left: "230px" }
     },
     {
       id: 5,
       logo: null,
       metric: "90%",
       title: "Content Repurposed",
       description: "",
       size: "small",
       position: { top: "747px", right: "170px" }
     }
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Simple fade-in animation for title
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Simple parallax effect for title during scroll
      gsap.to(titleRef.current, {
        y: -120, // Move title higher up
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        }
      })

      // Animate cards from bottom to top based on scroll position only
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        // Cards move from bottom to top during scroll
        gsap.fromTo(card,
          {
            y: 200, // Start from bottom
          },
          {
            y: 0, // Move to original position
            ease: "none",
            delay: index * 0.1, // Slight stagger based on card index
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1, // Tied to scroll position
            }
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])


  return (
    <section ref={sectionRef} className="h-[917px] wave_pattern bg-[#0a0f1e] relative overflow-visible realcreatorbg">
      {/* Background Effects */}

      <Container size="content" className="relative z-10 h-full flex flex-col justify-center">
        <div>
        {/* Section Title */}
        <div className="text-center mb-4" ref={titleRef}>
          <h2 
            
            className="font-bold text-white font-sf-pro mb-4"
            style={{ fontSize: '80px', lineHeight: '1.1' }}
          >
            Real Creators Drive{' '}<br />
            <span className="bg-home-gradient bg-clip-text text-transparent">
              Real Performance
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-white font-sf-pro" style={{ fontSize: '24px' }}>
            2.6-8X ROAS • Up to 86% Cost Reduction • 400% CTR Improvement
          </p>
        </div>

        {/* Metrics Cards Container */}
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              ref={el => { if (el) cardsRef.current[index] = el }}
               className="absolute"
              style={{
                left: metric.position.left || 'auto',
                right: metric.position.right || 'auto',
                top: metric.position.top,
              }}
            >
               {/* Gradient Border Card - Outer div */}
               <div id={`card-${metric.id}`} className="creator-card">
                 {/* Inner div with dark background */}
                 <div className="creator-card-inner">
                  {/* Client Logo */}
                  {metric.logo && (
                    <div className="mb-[28px]">
                      <Image
                        src={metric.logo}
                        alt="Client Logo"
                        width={100}
                        height={34}
                        className="max-h-[34px] w-auto object-contain"
                      />
                    </div>
                  )}

                   {/* Main Metric */}
                   <div className={metric.logo ? "mb-2" : "mb-3"}>
                     <h3 className={`font-bold text-white font-sf-pro ${
                       metric.size === 'large' ? 'text-[60px]' : 'text-[30px]'
                     } leading-none`}>
                       {metric.metric}
                     </h3>
                   </div>

                   {/* Title */}
                   <div className="mb-5">
                     <h4 className={`font-semibold text-white font-sf-pro ${
                       metric.size === 'large' ? 'text-[20px]' : 'text-[16px]'
                     }`}>
                       {metric.title}
                     </h4>
                   </div>

                   {/* Description */}
                   {metric.description && (
                     <p className="text-white/70 font-sf-pro text-[20px] leading-relaxed">
                       {metric.description}
                     </p>
                   )}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
