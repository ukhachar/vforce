'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl md:text-5xl font-bold font-sf-pro">
            Ready to Transform?
          </h3>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-montserrat">
            Join thousands of creators who are already using VideoFusion to bring their visions to life.
          </p>
          
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
          
          <div className="pt-12 border-t border-gray-700 mt-16">
            <p className="text-gray-400 font-montserrat">
              © 2024 VideoFusion. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full"
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          delay: 0
        }}
      />
      
      <motion.div 
        className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute bottom-32 left-1/3 w-1 h-1 bg-indigo-400 rounded-full"
        animate={{ 
          scale: [1, 3, 1],
          opacity: [0.2, 0.7, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          delay: 2
        }}
      />
    </footer>
  )
}
