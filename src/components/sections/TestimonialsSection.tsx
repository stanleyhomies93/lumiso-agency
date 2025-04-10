'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="testimonials" className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Hear from the businesses<br />
          that grew with us
        </h2>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
          variants={cardVariants}
          whileHover={{ 
            y: -10,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex items-center mb-4">
            <motion.div 
              className="w-10 h-10 bg-lumiso-blue rounded-full flex items-center justify-center text-white mr-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-lg">F</span>
            </motion.div>
            <div>
              <h3 className="font-bold">Furniture Audit System</h3>
              <p className="text-sm text-gray-500">Inspection tool</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Furniture Audit System engaged Lumiso to build a full-
            suite inspection management system from mobile app
            to dashboard.
          </p>
          <div className="flex justify-end">
            <motion.div 
              className="w-32 h-24 bg-gray-100 rounded flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-16 h-20 border border-gray-300 rounded"
                animate={{ 
                  rotate: [0, 2, 0, -2, 0],
                  scale: [1, 1.02, 1, 1.02, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-lg text-white shadow-sm hover:shadow-lg transition-all duration-300"
          variants={cardVariants}
          whileHover={{ 
            y: -10,
            boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3), 0 10px 10px -5px rgba(236, 72, 153, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex items-center mb-4">
            <motion.div 
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-500 mr-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-lg">A</span>
            </motion.div>
            <div>
              <h3 className="font-bold">PictureAir</h3>
              <p className="text-sm text-white/80">Imaging Solutions</p>
            </div>
          </div>
          <p className="text-white/90 mb-4">
            PictureAir improved their speed on deployment of
            theme park management system by 50% across
            world wide
          </p>
          <motion.div
            className="absolute bottom-0 right-0 w-20 h-20 opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-full bg-white"></div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-lg text-white shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ 
            y: -10,
            boxShadow: "0 10px 25px -5px rgba(30, 64, 175, 0.3), 0 10px 10px -5px rgba(30, 64, 175, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex items-center mb-4">
            <motion.div 
              className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 mr-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-lg">⚡</span>
            </motion.div>
            <div>
              <h3 className="font-bold">Classy5</h3>
              <p className="text-sm text-white/80">Class management system</p>
            </div>
          </div>
          <p className="text-white/90 mb-4">
            Optimised class management
            by reducing spreadsheets
          </p>
          <motion.div
            className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 5, 0, -5, 0],
              y: [0, 5, 0, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-full bg-yellow-400"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
