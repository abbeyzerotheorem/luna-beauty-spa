"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import clientData from "@/data/client"
import { MessageCircle, ArrowUp } from "lucide-react"
import { useScroll } from "@/hooks/use-scroll"
import { useMobile } from "@/hooks/use-mobile"

export function ConversionFeatures() {
  const { isScrolled } = useScroll()
  const isMobile = useMobile()
  const [showBackToTop, setShowBackToTop] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${clientData.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-24 z-40 w-14 h-14 bg-accent text-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent/90 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {isMobile && isScrolled && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 shadow-lg"
          >
            <Button size="lg" className="w-full">
              Book Appointment
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
