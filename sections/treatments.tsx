"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import clientData from "@/data/client"
import { formatPrice } from "@/lib/utils"
import { Clock, ArrowRight, Flame } from "lucide-react"
import type { Treatment } from "@/types"

export function Treatments() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <Section variant="primary" id="treatments">
      <Container>
        <SectionHeading subtitle="Our Services">
          Signature Treatments
        </SectionHeading>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clientData.treatments.map((treatment: Treatment) => (
            <motion.div
              key={treatment.id}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {treatment.popular && (
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      Popular
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-text mb-3">
                    {treatment.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {treatment.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{treatment.duration}</span>
                    </div>
                    <div className="font-semibold text-accent">
                      From {formatPrice(treatment.startingPrice)}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
