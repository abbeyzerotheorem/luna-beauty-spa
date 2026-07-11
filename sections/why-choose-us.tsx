"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import clientData from "@/data/client"
import { Award, Sparkles, Home, Heart } from "lucide-react"

const iconMap = {
  award: Award,
  sparkles: Sparkles,
  home: Home,
  heart: Heart,
}

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <Section variant="default" id="why-choose-us">
      <Container>
        <SectionHeading subtitle="Why Choose Us">
          Experience the Luna Difference
        </SectionHeading>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {clientData.whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Sparkles
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group text-center p-6 rounded-2xl hover:bg-accent/5 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-text mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
