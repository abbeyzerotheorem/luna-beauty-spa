"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { Hero } from "@/sections/hero"
import { WhyChooseUs } from "@/sections/why-choose-us"
import { Treatments } from "@/sections/treatments"
import { About } from "@/sections/about"
import { SpaExperience } from "@/sections/spa-experience"
import { Gallery } from "@/sections/gallery"
import { Testimonials } from "@/sections/testimonials"
import { Pricing } from "@/sections/pricing"
import { BookingProcess } from "@/sections/booking-process"
import { FAQ } from "@/sections/faq"
import { InstagramPreview } from "@/sections/instagram"
import { FinalCTA } from "@/sections/final-cta"
import { Contact } from "@/sections/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ConversionFeatures } from "@/components/conversion-features"
import { LoadingAnimation } from "@/components/loading-animation"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingAnimation />}
      
      <main className={`min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navigation />
        
        <Hero />
        <WhyChooseUs />
        <Treatments />
        <About />
        <SpaExperience />
        <Gallery />
        <Testimonials />
        <Pricing />
        <BookingProcess />
        <FAQ />
        <InstagramPreview />
        <FinalCTA />
        <Contact />
        
        <Footer />
        
        <ConversionFeatures />
      </main>
    </>
  )
}
