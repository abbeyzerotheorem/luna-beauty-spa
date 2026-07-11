"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import clientData from "@/data/client"
import { Award, Users, Heart } from "lucide-react"

export function About() {
  return (
    <Section variant="default" id="about">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src={clientData.about.ownerImage}
                alt={clientData.about.ownerName}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-serif font-bold text-accent">
                    {clientData.about.yearsExperience}+
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-accent">
                    {clientData.about.teamSize}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Experts</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-accent">
                    {clientData.about.happyClients}+
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading subtitle="Our Story" className="text-left">
              Meet {clientData.about.ownerName}
            </SectionHeading>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {clientData.about.story}
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-text mb-2">
                    Our Philosophy
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {clientData.about.philosophy}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-text mb-2">
                    Our Mission
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {clientData.about.mission}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sage rounded-full" />
                <span>Vegan Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sage rounded-full" />
                <span>Cruelty-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sage rounded-full" />
                <span>Eco-Friendly</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
