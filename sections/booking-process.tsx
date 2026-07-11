"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Section } from "@/components/ui/section"
import clientData from "@/data/client"
import { Spa, Calendar, CheckCircle, Heart } from "lucide-react"

const iconMap = {
  spa: Spa,
  calendar: Calendar,
  "check-circle": CheckCircle,
  heart: Heart,
}

export function BookingProcess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <Section variant="primary" id="booking">
      <Container>
        <SectionHeading subtitle="How It Works">
          Booking Process
        </SectionHeading>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-accent/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientData.bookingProcess.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] || CheckCircle
              
              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                    <div className="absolute inset-0 bg-accent/10 rounded-full" />
                    <div className="relative w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for mobile */}
                  {index < clientData.bookingProcess.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <svg
                        className="w-6 h-6 text-accent/50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to begin your journey to relaxation?
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
