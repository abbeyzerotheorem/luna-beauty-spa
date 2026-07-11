"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import clientData from "@/data/client"
import { ChevronRight } from "lucide-react"

export function SpaExperience() {
  return (
    <Section variant="default" id="experience">
      <Container>
        <SectionHeading subtitle="Your Journey">
          The Luna Spa Experience
        </SectionHeading>

        <div className="space-y-24">
          {clientData.spaExperience.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${
                index % 2 === 1 ? 'lg:order-2' : ''
              }`}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                
                {/* Step Number */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-accent">
                    {String(step.id).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h3 className="text-3xl sm:text-4xl font-serif font-semibold text-text mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>
                
                {index < clientData.spaExperience.length - 1 && (
                  <div className="flex items-center gap-2 text-accent">
                    <span className="text-sm font-medium">Next Step</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
