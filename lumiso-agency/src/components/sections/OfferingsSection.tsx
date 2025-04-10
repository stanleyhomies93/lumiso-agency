'use client'

import { motion } from "framer-motion"

export default function OfferingsSection() {
  return (
    <section id="offerings" className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our offerings
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our team has experience over the past 5 years helping businesses 
          across different industries to improve their business workflows
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Software Development</h3>
          <p className="text-gray-600 mb-6">
            For startups and businesses launch their products efficiently, to test
            your concept in the market and validate your business model.
          </p>
          <div className="h-40 flex items-center justify-center">
            <motion.div 
              className="relative w-32 h-32 opacity-70"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute top-0 left-0 w-20 h-24 border-2 border-blue-300 rounded-lg"></div>
              <div className="absolute bottom-0 right-0 w-24 h-28 border-2 border-blue-300 rounded-lg"></div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Tech Consultation</h3>
          <p className="text-gray-600 mb-6">
            Assess existing infrastructure and optimize your technology stack,
            aligning with your business goals and opportunities for innovation.
          </p>
          <div className="h-40 flex items-center justify-center">
            <motion.div 
              className="relative w-40 h-32"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="absolute top-0 left-0 w-20 h-20 border-2 border-green-300 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-green-500 text-sm font-medium">API</span>
              </motion.div>
              <motion.div 
                className="absolute bottom-0 right-0 w-20 h-20 border-2 border-green-300 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-green-500 text-sm font-medium">APP</span>
              </motion.div>
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 border-2 border-green-300 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-green-500 text-sm font-medium">WEB</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Enterprise solutions</h3>
          <p className="text-gray-600 mb-6">
            Transform your organization with our comprehensive enterprise
            solutions designed to streamline operations, enhance collaboration,
            and support sustainable growth.
          </p>
          <div className="h-40 flex items-center justify-center">
            <motion.div 
              className="space-y-3"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex space-x-2">
                <motion.div 
                  className="w-8 h-8 rounded-full bg-lumiso-blue"
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
                <motion.div 
                  className="w-8 h-8 rounded-full bg-lumiso-blue"
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
                <motion.div 
                  className="w-8 h-8 rounded-full bg-lumiso-blue"
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
              </div>
              <div className="w-full h-4 bg-blue-200 rounded"></div>
              <div className="w-full h-4 bg-blue-200 rounded"></div>
              <div className="w-full h-4 bg-blue-200 rounded"></div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
          <p className="text-gray-600 mb-6">
            We specialize in developing intelligent systems that automate
            processes, enhance decision-making, and drive innovation across
            various industries.
          </p>
          <div className="h-40 flex items-center justify-center">
            <motion.div 
              className="relative w-48 h-40"
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="absolute top-0 left-0 p-2 border border-purple-300 rounded bg-white shadow-sm"
                whileHover={{ scale: 1.1, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
              >
                <span className="text-purple-500 text-sm font-medium">LLM</span>
              </motion.div>
              <motion.div 
                className="absolute top-4 right-0 p-2 border border-purple-300 rounded bg-white shadow-sm"
                whileHover={{ scale: 1.1, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
              >
                <span className="text-purple-500 text-sm font-medium">AGENTS</span>
              </motion.div>
              <motion.div 
                className="absolute bottom-0 right-8 p-2 border border-purple-300 rounded bg-white shadow-sm"
                whileHover={{ scale: 1.1, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
              >
                <span className="text-purple-500 text-sm font-medium">MCP</span>
              </motion.div>
              <motion.div 
                className="absolute bottom-8 left-4 p-2 border border-purple-300 rounded bg-white shadow-sm"
                whileHover={{ scale: 1.1, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
              >
                <span className="text-purple-500 text-sm font-medium">CHAT BOTS</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
