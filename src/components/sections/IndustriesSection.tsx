'use client'

import { motion } from "framer-motion"

export default function IndustriesSection() {
  const industries = [
    { name: "Field service", color: "bg-gray-200" },
    { name: "Inspections", color: "bg-blue-200" },
    { name: "E-wallet", color: "bg-green-200" },
    { name: "Social media", color: "bg-yellow-200" },
    { name: "Finance", color: "bg-blue-200" },
    { name: "Health tech", color: "bg-green-200" },
    { name: "Security", color: "bg-red-200" },
    { name: "On-demand services", color: "bg-purple-200" },
    { name: "Education", color: "bg-blue-200" },
    { name: "E-commerce", color: "bg-yellow-200" },
    { name: "Mobility", color: "bg-gray-200" },
    { name: "Metaverse", color: "bg-purple-200" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="industries" className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience in more than 20<br />various industries
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our team has experience over the past 5 years helping businesses across different
          industries to improve their business workflows
        </motion.p>
      </div>
      
      <motion.div 
        className="flex flex-wrap gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className={`px-4 py-2 rounded-full flex items-center ${industry.color} shadow-sm cursor-pointer`}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className={`w-2 h-2 rounded-full mr-2 ${industry.color.replace('200', '500')}`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            ></motion.div>
            <span className="text-sm font-medium">{industry.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
