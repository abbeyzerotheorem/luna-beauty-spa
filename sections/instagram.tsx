"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Section } from "@/components/ui/section"
import clientData from "@/data/client"
import { Instagram, Heart } from "lucide-react"

export function InstagramPreview() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <Section variant="default" id="instagram">
      <Container>
        <SectionHeading subtitle="@lunabeautyspa">
          Follow Our Journey
        </SectionHeading>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {clientData.instagramPosts.map((post) => (
            <motion.a
              key={post.id}
              href={clientData.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src={post.src}
                alt={post.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <Heart className="w-6 h-6 mx-auto mb-1 fill-white" />
                  <span className="text-sm">{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href={clientData.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-colors font-medium"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
