'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 5 }
  };

  return (
    <motion.footer 
      className="w-full py-16 px-6 md:px-12 bg-blue-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="mb-8 md:mb-0"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="text-2xl font-bold text-lumiso-blue mb-4 block">
                Lumiso
              </Link>
            </motion.div>
            <p className="text-gray-600 max-w-xs mb-6">
              Specialist in custom-build digital solution and tech consultancy for startups and
              enterprises.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-lumiso-blue hover:bg-blue-700 text-white">
                BUILD FOR ME →
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-2"
            variants={itemVariants}
          >
            <h3 className="font-bold mb-3">Contact</h3>
            <motion.p 
              className="text-gray-600"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              13-25-08 Sunny Rock Bldg,
            </motion.p>
            <motion.p 
              className="text-gray-600"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Jalan P.J.U 8/1, Kelana Damansara,
            </motion.p>
            <motion.p 
              className="text-gray-600"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              47820 Subang Jalan
            </motion.p>
            
            <div className="flex space-x-4 mt-4">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="#" className="text-lumiso-blue hover:text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="#" className="text-lumiso-blue hover:text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© 2025 Lumiso Group. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
