"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import clientData from "@/data/client"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <Section variant="default" id="contact">
      <Container>
        <SectionHeading subtitle="Get In Touch">
          Contact Us
        </SectionHeading>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Phone</h3>
                    <a
                      href={`tel:${clientData.phone}`}
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      {clientData.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${clientData.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      {clientData.whatsapp}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Email</h3>
                    <a
                      href={`mailto:${clientData.email}`}
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      {clientData.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Address</h3>
                    <p className="text-gray-600">
                      {clientData.address.street}<br />
                      {clientData.address.city}, {clientData.address.state} {clientData.address.zip}<br />
                      {clientData.address.country}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-3">Opening Hours</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      {Object.entries(clientData.openingHours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="capitalize">{day}</span>
                          <span>
                            {hours.closed ? 'Closed' : `${hours.open} - ${hours.close}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-text mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={clientData.googleMaps.embedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
