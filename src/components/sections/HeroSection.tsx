"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Container, Grid } from "@/components/layout";

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the background lines
    if (backgroundRef.current) {
      const ctx = gsap.context(() => {
        gsap.to(".gradient-line", {
          x: 50,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "none",
          stagger: 0.5,
        });
      }, backgroundRef.current);

      return () => ctx.revert();
    }
  }, []);

  return (
    <>
      <section className=" relative wave_pattern bg-gradient-ipadmini">
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <Container
            size="content"
            className="relative z-10 pt-20 bg-ipadmini"
            noPadding={true}
          >
            <Grid cols={12} gap={30} className="items-center min-h-screen">
              {/* Left Content - 6 columns */}
              <div
                className="col-span-12 lg:col-span-6 max-w-[570px] flex flex-col"
                style={{ gap: "40px" }}
              >
                {/* Main Heading */}
                <motion.h1
                  className="font-bold text-white leading-tight font-sf-pro"
                  style={{ fontSize: "61px" }}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <span className="block">AI Agents that</span>
                  <span className="block">
                    Deliver{" "}
                    <span className="bg-home-gradient bg-clip-text text-transparent">
                      Profitable
                    </span>
                  </span>
                  <span className="block">
                    <span className="bg-home-gradient bg-clip-text text-transparent">
                      Video
                    </span>{" "}
                    <span className="bg-home-gradient bg-clip-text text-transparent">
                      Marketing
                    </span>
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.div
                  className="text-white/80 leading-relaxed max-w-2xl font-sf-pro"
                  style={{ fontSize: "20px" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <p>
                    Our AI Agents source{" "}
                    <span className="text-white font-semibold">authentic</span>{" "}
                    creators, extract high value video assets, and run campaigns
                    with winning ad formulas that are optimized 24/7—so you{" "}
                    <span className="text-white font-semibold">
                      stop wasting 90% of content
                    </span>{" "}
                    and scale with{" "}
                    <span className="text-white font-semibold">
                      proven ROAS.
                    </span>
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <motion.button
                    className="bg-home-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 font-sf-pro"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started for FREE
                  </motion.button>

                  <motion.button
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 font-sf-pro"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                {/* Small text */}
                <motion.p
                  className="text-sm text-white/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  No credit card required - 10 min free processing
                </motion.p>
              </div>

              {/* Right Content - iPad Image - 6 columns */}
              <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 100, rotateY: -15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                  {/* iPad Container with 3D effect */}
                  <div className="relative transform perspective-1000 hover:scale-105 transition-transform duration-700">
                    <Image
                      src="/images/ipadmini_big.png"
                      alt="VideoFusion Dashboard on iPad"
                      width={570}
                      height={392}
                      className="w-auto h-auto object-contain"
                      priority
                    />
                    
                    {/* Video overlay positioned like an iframe inside iPad */}
                    <div className="absolute top-[7%] left-[6%] right-[6%] bottom-[7%] rounded-lg overflow-hidden">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/images/video/intro_cover.jpg"
                        className="w-full h-full object-cover"
                      >
                        <source src="/images/video/video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Grid>
          </Container>
        </div>
        {/* Scroll Down Section */}
        <motion.div
          className="scroll-bar-div flex items-center justify-center"
          style={{ height: "181px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p className="text-white/60 text-sm tracking-wider uppercase font-sf-pro">
            Scroll Down
          </p>
        </motion.div>
      </section>
    </>
  );
}
