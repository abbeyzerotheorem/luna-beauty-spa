"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import clientData from "@/data/client"
import { Star, Quote } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect } from "react"

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <Section variant="primary" id="testimonials">
      <Container>
        <SectionHeading subtitle="Client Love">
          What Our Clients Say
        </SectionHeading>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {clientData.testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-6">
                      <Quote className="w-8 h-8 text-accent/30 mb-4" />
                      
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-accent"
                          />
                        ))}
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-text">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {testimonial.location}
                          </div>
                          <div className="text-xs text-accent mt-1">
                            {testimonial.treatment}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {clientData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex ? 'bg-accent' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
