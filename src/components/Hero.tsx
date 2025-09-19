'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, y: 0 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      </motion.div>

      {/* Logo */}
      <motion.div 
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image 
          src="/images/logo.webp"
          alt="VideoFusion Logo" 
          width={120} 
          height={40}
          className="object-contain"
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 font-sf-pro"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          VideoFusion
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-montserrat opacity-80"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Experience the future of video technology
        </motion.p>

        <motion.button 
          className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Now
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
