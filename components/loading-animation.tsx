"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 z-[100] bg-primary flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 bg-accent rounded-full mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-serif font-semibold text-text"
        >
          Luna Beauty Spa
        </motion.p>
      </motion.div>
    </div>
  )
}
