'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.header 
      className="w-full py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-2xl font-bold text-lumiso-blue">
        Lumiso
      </Link>
      
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="#about" className="text-gray-700 hover:text-lumiso-blue transition-colors">
          About
        </Link>
        <Link href="#offerings" className="text-gray-700 hover:text-lumiso-blue transition-colors">
          Offerings
        </Link>
        <Link href="#technologies" className="text-gray-700 hover:text-lumiso-blue transition-colors">
          Technologies
        </Link>
        <Link href="#portfolio" className="text-gray-700 hover:text-lumiso-blue transition-colors">
          Portfolio
        </Link>
      </nav>
      
      <Button className="bg-lumiso-blue hover:bg-blue-700 text-white font-medium">
        BUILD FOR ME →
      </Button>
    </motion.header>
  )
}
