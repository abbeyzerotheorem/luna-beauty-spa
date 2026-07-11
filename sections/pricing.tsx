"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import clientData from "@/data/client"
import { formatPrice } from "@/lib/utils"
import { Check, Flame } from "lucide-react"
import type { PricingPackage } from "@/types"

export function Pricing() {
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
    <Section variant="default" id="pricing">
      <Container>
        <SectionHeading subtitle="Investment">
          Pricing Packages
        </SectionHeading>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {clientData.pricing.map((pkg: PricingPackage) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className={`relative ${
                pkg.popular ? 'md:-translate-y-4' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
                  <Flame className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              
              <Card className={`h-full ${
                pkg.popular
                  ? 'border-2 border-accent shadow-xl'
                  : 'border border-gray-100'
              }`}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <p className="text-gray-600">{pkg.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-serif font-bold text-text">
                      {formatPrice(pkg.price)}
                    </span>
                    <span className="text-gray-500 ml-2">/ {pkg.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-sage" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button
                    variant={pkg.popular ? "primary" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    Book This Package
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
