"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";

const BRANDS = [
  { src: "/images/ABC-White.png", alt: "ABC" },
  { src: "/images/x-ponential.png", alt: "Xponential Fitness" },
  { src: "/images/ge.png", alt: "GE" },
  { src: "/images/Chuze.png", alt: "Chuze Fitness" },
  { src: "/images/orange-theory_white.png", alt: "Orangetheory" },
  { src: "/images/x-ponential.png", alt: "Xponential Fitness" },
  { src: "/images/ge.png", alt: "GE" },
];

// Duplicate the brands array for seamless infinite scroll
const INFINITE_BRANDS = [...BRANDS, ...BRANDS];

export default function TrustedSection() {
  return (
    <Section
      padding="none"
      background="bg-[#020617]"
      className="relative overflow-hidden pt-[60px]"
      containerSize="content"
    >

      <div className="relative z-[1] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-white/90 lg:text-[30px] leading-tight font-sf-pro"
        >
          Trusted by brands achieving real results with authentic content + AI
        </motion.h2>

        {/* Infinite Logo Carousel */}
        <div className="relative mt-[56px] overflow-hidden">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
          
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <motion.div
            className="flex items-center gap-x-12 lg:gap-x-16"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {INFINITE_BRANDS.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (index % BRANDS.length) * 0.05 }}
                className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="h-[52px] flex items-center">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={140}
                    height={52}
                    className="max-h-[52px] w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
