export interface Treatment {
  id: string
  name: string
  description: string
  duration: string
  startingPrice: number
  image: string
  popular: boolean
}

export interface PricingPackage {
  id: string
  name: string
  description: string
  price: number
  duration: string
  features: string[]
  popular: boolean
}

export interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  avatar: string
  treatment: string
}

export interface FAQ {
  id: number
  question: string
  answer: string
}

export interface GalleryImage {
  id: number
  src: string
  alt: string
}

export interface InstagramPost {
  id: number
  src: string
  caption: string
  likes: number
}

export interface SpaExperienceStep {
  id: number
  title: string
  description: string
  image: string
}

export interface BookingStep {
  id: number
  title: string
  description: string
  icon: string
}

export interface TrustBadge {
  id: number
  name: string
  icon: string
}

export interface WhyChooseUs {
  id: number
  title: string
  description: string
  icon: string
}
