'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      <motion.div 
        className="w-full md:w-1/2 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          We help to craft<br />great system
        </h1>
        <p className="text-gray-600 mb-8 max-w-md text-lg">
          At Lumiso, we work with you and your team to build digital solutions 
          that help your business grow. Our team has years of experience in digital 
          development, and can adapt to meet requirements in the market.
        </p>
        <Button className="bg-lumiso-blue hover:bg-blue-700 text-white px-6 py-6 text-lg h-auto">
          BUILD FOR ME →
        </Button>
      </motion.div>
      
      <motion.div 
        className="w-full md:w-1/2 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="relative w-72 h-72 mx-auto">
          <motion.div 
            className="absolute inset-0 bg-lumiso-yellow rounded-full flex items-center justify-center"
            animate={{ boxShadow: ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 30px rgba(255,215,0,0.3)', '0px 0px 0px rgba(0,0,0,0)'] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-20 h-28 border-2 border-white relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 border-2 border-white rounded-full"></div>
            </div>
          </motion.div>
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 text-sm font-medium text-gray-600">Platform</div>
            <div className="absolute top-1/4 right-0 transform translate-x-6 text-sm font-medium text-gray-600">Ideas</div>
            <div className="absolute bottom-1/4 right-0 transform translate-x-6 text-sm font-medium text-gray-600">Concept</div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 text-sm font-medium text-gray-600">Design</div>
            <div className="absolute bottom-1/4 left-0 transform -translate-x-6 text-sm font-medium text-gray-600">Efficiency</div>
            <div className="absolute top-1/4 left-0 transform -translate-x-6 text-sm font-medium text-gray-600">Innovation</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
