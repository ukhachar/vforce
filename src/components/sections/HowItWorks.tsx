'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/layout'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ipadRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const content1Ref = useRef<HTMLDivElement>(null)
  const content2Ref = useRef<HTMLDivElement>(null)
  const content3Ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const currentStageRef = useRef<number>(0)


  // Content data for three stages
  const contentStages = {
    stage1: {
      title: "Creator Sourcing",
      subtitle: "Sources authentic creators & content 24/7",
      bulletPoints: [
        { icon: "/images/icon/users-color.svg", title: "UGC Creators", description: "Find, Vet and manage automatically" },
        { icon: "/images/icon/user-star-color.svg", title: "Influencers", description: "Perfect brand matches" },
        { icon: "/images/icon/chart-color.svg", title: "Viral Trends", description: "Adapt before they peak" }
      ]
    },
    stage2: {
      title: "Highlights",
      subtitle: "Extracts profit-driving moments with patented AI",
      bulletPoints: [
        { icon: "/images/icon/chart-color.svg", title: "Killer Hooks", description: "Stop-the-scroll moments" },
        { icon: "/images/icon/users-color.svg", title: "Social Proof", description: "Testimonials & reviews" },
        { icon: "/images/icon/user-star-color.svg", title: "Strong CTAs", description: "Drive instant action" }
      ]
    },
    stage3: {
      title: "Performance Media",
      subtitle: "Turning authentic content into profitable campaigns",
      bulletPoints: [
        { icon: "/images/icon/user-star-color.svg", title: "Winning Ads", description: "Create & test high-converting campaigns" },
        { icon: "/images/icon/chart-color.svg", title: "Smart Media Buying", description: "AI-optimized bidding & placement" },
        { icon: "/images/icon/users-color.svg", title: "24/7 Optimization", description: "Scale winners, kill losers automatically" }
      ]
    }
  }

  useEffect(() => {
    if (!containerRef.current || !ipadRef.current) return

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(ipadRef.current, { x: 0, y: 0, rotation: 0 })
      gsap.set(content1Ref.current, { y: 100 })  // from bottom
      gsap.set(content2Ref.current, { y: 100 })  // from bottom
      gsap.set(content3Ref.current, { y: 100 })  // from bottom
      gsap.set(headerRef.current, { opacity: 0, y: 100 })  // header hidden initially
      
      // Initialize with sourcing video
      currentStageRef.current = 1
      if (videoRef.current) {
        videoRef.current.src = "/images/video/sourcing.mp4"
        videoRef.current.poster = "/images/video/sourcing.png"
      }

      // Header animation - appears after iPad is fully visible
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ipadRef.current,
          start: "top 50%",
          end: "top 30%",
          toggleActions: "play none none reverse"
        }
      })

      // Function to change video/image content with smooth transition
      const changeMedia = (stage: number) => {
        if (!videoRef.current || !imageRef.current || currentStageRef.current === stage) return
        
        console.log(`Changing to stage ${stage}`) // Debug log
        currentStageRef.current = stage
        
        // Fade out current content
        gsap.to([videoRef.current, imageRef.current], {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            if (!videoRef.current || !imageRef.current) return
            
            if (stage === 1) {
              // Stage 1: sourcing.mp4 (default)
              videoRef.current.src = "/images/video/sourcing.mp4"
              videoRef.current.poster = "/images/video/sourcing.png"
              videoRef.current.style.display = "block"
              imageRef.current.style.display = "none"
              videoRef.current.load()
            } else if (stage === 2) {
              // Stage 2: highlights.mp4
              videoRef.current.src = "/images/video/highlights.mp4"
              videoRef.current.poster = "/images/video/highlights.png"
              videoRef.current.style.display = "block"
              imageRef.current.style.display = "none"
              videoRef.current.load()
            } else if (stage === 3) {
              // Stage 3: dashboard.png
              videoRef.current.style.display = "none"
              imageRef.current.src = "/images/video/dashboard.png"
              imageRef.current.style.display = "block"
            }
            
            // Fade in new content
            gsap.to([videoRef.current, imageRef.current], {
              opacity: 1,
              duration: 0.3,
              ease: "power2.inOut",
              onComplete: () => {
                // Play video only after fade in is complete
                if (stage <= 2 && videoRef.current) {
                  videoRef.current.play().catch(e => console.log('Video play failed:', e))
                }
              }
            })
          }
        })
      }

      // Main timeline: 3 equal stages mapped to 1500px scroll (500px each)
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000", // 3 transitions * 1000px each (slower)
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            // Handle media changes based on progress - when content starts showing
            const progress = self.progress
            
            if (progress < 0.33) {
              // Stage 1: Creator Sourcing content visible - show sourcing video
              if (currentStageRef.current !== 1) {
                changeMedia(1)
              }
            } else if (progress >= 0.33 && progress < 0.66) {
              // Stage 2: Highlights content starts showing - show highlights video
              if (currentStageRef.current !== 2) {
                changeMedia(2)
              }
            } else {
              // Stage 3: Performance Media content starts showing - show dashboard image
              if (currentStageRef.current !== 3) {
                changeMedia(3)
              }
            }
          }
        }
      })

      // Stage 1 (0-1000): iPad -> left, then content1 in from bottom
      tl.add("s0")
        .to(ipadRef.current, { x: -250, duration: 1 }, "s0")
        .to(content1Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "s0+=0.7")

        // Stage 2 (1000-2000): iPad -> right, content1 out to top, content2 in from bottom
        .add("s1")
        .to(ipadRef.current, { x: 250, duration: 1 }, "s1")
        .to(content1Ref.current, { opacity: 0, y: -100, duration: 0.6, ease: "power2.in" }, "s1")
        .to(content2Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "s1+=0.6")

        // Stage 3 (2000-3000): iPad -> left, content2 out to top, content3 in from bottom
        .add("s2")
        .to(ipadRef.current, { x: -250, duration: 1 }, "s2")
        .to(content2Ref.current, { opacity: 0, y: -100, duration: 0.6, ease: "power2.in" }, "s2")
        .to(content3Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "s2+=0.6")

    }, containerRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <>
    <section ref={containerRef} className="h-screen bg-[#020617] relative overflow-hidden pt-[50px]">

      <Container size="content" className="relative z-10">
        {/* Header Section */}
        <div 
          ref={headerRef}
          className="text-center mb-6"
        >
          <div className="inline-block">
            <span className="bg-home-gradient text-white px-6 py-2 rounded-full text-sm font-medium font-sf-pro">
              HOW IT WORKS
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 mb-4 font-sf-pro">
            From Content to Conversions -{' '}
            <span className="bg-home-gradient bg-clip-text text-transparent">
              Fully Automated
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-3xl mx-auto font-sf-pro">
            Source authentic creators. Extract winning moments. Scale profitable campaigns. All on autopilot.
          </p>
        </div>
         <div className='movesection relative h-full'>
          
         {/* iPad - Absolute positioned within this section only */}
         <div id="stage-ipad-only">
         <div            
           ref={ipadRef}
           className="absolute left-1/2 top-20 transform -translate-x-1/2 z-30"
         >
            <div className="relative">
              {/* iPad Frame */}
              <Image
                src="/images/ipadmini_big.png"
                alt="iPad Mockup"
                width={648}
                height={446}
                className="relative z-10"
                priority
              />
              
              {/* Video/Image Player inside iPad */}
              <div className="absolute top-[7%] left-[6%] right-[6%] bottom-[7%] rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/video/sourcing.png"
                  className="w-full h-full object-cover"
                >
                  <source src="/images/video/sourcing.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <img
                  ref={imageRef}
                  src="/images/video/sourcing.png"
                  alt="Sourcing"
                  className="w-full h-full object-cover"
                  style={{ display: 'none' }}
                />
              </div>
            </div>
          </div>
          </div>

          {/* Stage 2: Creator Sourcing Section */}
          <div id="stage-creator-sourcing" className="flex items-center relative">
            {/* Content 1 - Creator Sourcing */}
            <div
              ref={content1Ref}
              className="absolute right-20 top-16 max-w-md z-10 opacity-0"
            >
            <div className="bg-[#020617]/90 backdrop-blur-sm p-8 rounded-2xl ">
              <h3 className="text-3xl font-bold text-white mb-4 font-sf-pro">
                {contentStages.stage1.title}
              </h3>
              
              <p className="text-white/70 mb-8 font-sf-pro">
                {contentStages.stage1.subtitle}
              </p>

              <div className="space-y-6 mb-8">
                {contentStages.stage1.bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                      <Image
                        src={point.icon}
                        alt={point.title}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 font-sf-pro">
                        {point.title}
                      </h4>
                      <p className="text-white/60 text-sm font-sf-pro">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-home-gradient text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-sf-pro">
                Learn More
              </button>
            </div>
          </div>
        </div>

          {/* Stage 3: Highlights Section */}
          <div id="stage-highlights" className="flex items-center relative">
            {/* Content 2 - Highlights */}
            <div
              ref={content2Ref}
              className="absolute left-20 top-16 max-w-md z-10 opacity-0"
            >
            <div className="bg-[#020617]/90 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-4 font-sf-pro">
                {contentStages.stage2.title}
              </h3>
              
              <p className="text-white/70 mb-8 font-sf-pro">
                {contentStages.stage2.subtitle}
              </p>

              <div className="space-y-6 mb-8">
                {contentStages.stage2.bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10  rounded-full flex items-center justify-center">
                      <Image
                        src={point.icon}
                        alt={point.title}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 font-sf-pro">
                        {point.title}
                      </h4>
                      <p className="text-white/60 text-sm font-sf-pro">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-home-gradient text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-sf-pro">
                Learn More
              </button>
            </div>
          </div>
          </div>

          {/* Stage 4: Performance Media Section */}
          <div id="stage-performance-media" className="flex items-center relative">
            {/* Content 3 - Performance Media */}
            <div
              ref={content3Ref}
              className="absolute right-20 top-16 max-w-md z-10 opacity-0"
            >
            <div className="bg-[#020617]/90 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-4 font-sf-pro">
                {contentStages.stage3.title}
              </h3>
              
              <p className="text-white/70 mb-8 font-sf-pro">
                {contentStages.stage3.subtitle}
              </p>

              <div className="space-y-6 mb-8">
                {contentStages.stage3.bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10  rounded-full flex items-center justify-center">
                      <Image
                        src={point.icon}
                        alt={point.title}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 font-sf-pro">
                        {point.title}
                      </h4>
                      <p className="text-white/60 text-sm font-sf-pro">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-home-gradient text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-sf-pro">
                Learn More
              </button>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </section>
    </>
  )
}
