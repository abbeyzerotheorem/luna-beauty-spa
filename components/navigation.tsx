"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import clientData from "@/data/client"
import { Menu, X, Phone } from "lucide-react"
import { useScroll } from "@/hooks/use-scroll"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { isScrolled } = useScroll()
  const isMobile = React.useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 768
  }, [])

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Treatments", href: "#treatments" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="text-2xl font-serif font-semibold text-text">
              {clientData.businessName}
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text hover:text-accent transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${clientData.phone}`}
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{clientData.phone}</span>
              </a>
              <Button size="sm">Book Now</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto"
            >
              <div className="flex flex-col gap-6 mt-16">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-text hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-6 border-t border-gray-200">
                  <Button className="w-full" size="lg">
                    Book Now
                  </Button>
                  <a
                    href={`tel:${clientData.phone}`}
                    className="flex items-center justify-center gap-2 mt-4 text-accent font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    {clientData.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
