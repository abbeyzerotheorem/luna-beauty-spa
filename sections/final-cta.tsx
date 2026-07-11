"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import clientData from "@/data/client"
import { MessageCircle, ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <Section variant="accent" id="final-cta">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-text mb-6">
            Your Moment of Relaxation Starts Here.
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Take the first step towards a more relaxed, rejuvenated you. 
            Book your appointment today and experience the Luna difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="xl" className="group">
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a
              href={`https://wa.me/${clientData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          {clientData.specialOffer.enabled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 inline-block bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full"
            >
              <p className="text-sm text-accent font-medium">
                ✨ {clientData.specialOffer.text}
              </p>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Section>
  )
}
