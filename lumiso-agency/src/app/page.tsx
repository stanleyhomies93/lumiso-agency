'use client'

import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import OfferingsSection from '@/components/sections/OfferingsSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <OfferingsSection />
        <IndustriesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
