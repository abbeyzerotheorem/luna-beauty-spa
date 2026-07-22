// ============================================================================
// LUNA BEAUTY SPA - CLIENT DATA
// ============================================================================
// Edit this file to customize the website for your spa business.
// All website content is pulled from this file.
// ============================================================================

export const clientData = {
  // Business Information
  businessName: "Luna Beauty Spa",
  tagline: "Relax. Rejuvenate. Glow.",
  logo: "/logo.svg",
  
  // Contact Information
  phone: "+1 (555) 123-4567",
  whatsapp: "+15551234567",
  email: "hello@lunabeautyspa.com",
  address: {
    street: "123 Serenity Lane",
    city: "Beverly Hills",
    state: "CA",
    zip: "90210",
    country: "USA",
  },
  
  // Opening Hours
  openingHours: {
    monday: { open: "9:00 AM", close: "8:00 PM", closed: false },
    tuesday: { open: "9:00 AM", close: "8:00 PM", closed: false },
    wednesday: { open: "9:00 AM", close: "8:00 PM", closed: false },
    thursday: { open: "9:00 AM", close: "8:00 PM", closed: false },
    friday: { open: "9:00 AM", close: "9:00 PM", closed: false },
    saturday: { open: "10:00 AM", close: "7:00 PM", closed: false },
    sunday: { open: "11:00 AM", close: "5:00 PM", closed: false },
  },
  
  // Social Media Links
  socialLinks: {
    instagram: "https://instagram.com/lunabeautyspa",
    facebook: "https://facebook.com/lunabeautyspa",
    tiktok: "https://tiktok.com/@lunabeautyspa",
    pinterest: "https://pinterest.com/lunabeautyspa",
  },
  
  // Brand Colors (override default theme colors)
  colors: {
    primary: "#F8F5F2",
    text: "#2C2C2C",
    accent: "#B88E6A",
    accentSecondary: "#D9C8B4",
    sage: "#B7C4A8",
  },
  
  // Special Offers
  specialOffer: {
    enabled: true,
    text: "First-time clients receive 20% off their first treatment!",
    ctaText: "Book Now & Save",
    validUntil: "2024-12-31",
  },
  
  // Treatments/Services
  treatments: [
    {
      id: "facials",
      name: "Facials",
      description: "Rejuvenating facial treatments tailored to your skin type, from deep cleansing to anti-aging therapies.",
      duration: "60-90 min",
      startingPrice: 120,
      image: "/facials.jpeg",
      popular: true,
    },
    {
      id: "massage",
      name: "Massage Therapy",
      description: "Therapeutic massages including Swedish, deep tissue, hot stone, and aromatherapy to melt away stress.",
      duration: "60-120 min",
      startingPrice: 95,
      image: "/MassagTherapy.jpeg",
      popular: true,
    },
    {
      id: "body",
      name: "Body Treatments",
      description: "Luxurious body wraps, scrubs, and polishes that nourish and revitalize your skin from head to toe.",
      duration: "60-90 min",
      startingPrice: 150,
      image: "/BodyTreatments.jpeg",
      popular: false,
    },
    {
      id: "skincare",
      name: "Skin Care",
      description: "Advanced skincare treatments including microdermabrasion, chemical peels, and LED light therapy.",
      duration: "45-90 min",
      startingPrice: 135,
      image: "/skincare.jpeg",
      popular: false,
    },
    {
      id: "waxing",
      name: "Waxing",
      description: "Professional waxing services using premium products for smooth, long-lasting results.",
      duration: "15-60 min",
      startingPrice: 35,
      image: "/waxing.jpeg",
      popular: false,
    },
    {
      id: "nails",
      name: "Nail Care",
      description: "Manicures, pedicures, and nail art in a relaxing atmosphere with premium products.",
      duration: "30-90 min",
      startingPrice: 45,
      image: "/nails.jpeg",
      popular: false,
    },
    {
      id: "packages",
      name: "Spa Packages",
      description: "Curated combination treatments for the ultimate spa experience and maximum relaxation.",
      duration: "2-4 hours",
      startingPrice: 250,
      image: "/packages.jpeg",
      popular: true,
    },
  ],
  
  // Pricing Packages
  pricing: [
    {
      id: "essential",
      name: "Essential Glow",
      description: "Perfect for beginners",
      price: 180,
      duration: "90 min",
      features: [
        "60-minute facial",
        "30-minute massage",
        "Complimentary tea",
      ],
      popular: false,
    },
    {
      id: "signature",
      name: "Signature Experience",
      description: "Our most popular package",
      price: 320,
      duration: "3 hours",
      features: [
        "90-minute facial",
        "60-minute massage",
        "Body scrub treatment",
        "Champagne & refreshments",
      ],
      popular: true,
    },
    {
      id: "luxury",
      name: "Luxury Retreat",
      description: "The ultimate indulgence",
      price: 550,
      duration: "5 hours",
      features: [
        "90-minute facial",
        "90-minute massage",
        "Body wrap treatment",
        "Manicure & pedicure",
        "Gourmet lunch",
        "Gift bag",
      ],
      popular: false,
    },
  ],
  
  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Los Angeles, CA",
      rating: 5,
      text: "The most relaxing spa experience I've ever had. The attention to detail and personalized service made me feel like royalty. I've been a loyal client for three years now.",
      avatar: "/amanda.jpeg",
      treatment: "Signature Experience",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Beverly Hills, CA",
      rating: 5,
      text: "As someone who was skeptical about spa treatments, Luna Beauty Spa completely changed my perspective. The massage therapists are world-class and the atmosphere is incredibly peaceful.",
      avatar: "/aina.jpeg",
      treatment: "Massage Therapy",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Santa Monica, CA",
      rating: 5,
      text: "I've tried many spas in LA, but Luna stands out for their consistency and quality. Every visit feels like a mini-vacation. The facial treatments have transformed my skin!",
      avatar: "/emily.jpeg",
      treatment: "Facials",
    },
    {
      id: 4,
      name: "David Williams",
      location: "West Hollywood, CA",
      rating: 5,
      text: "The perfect place to escape the city chaos. Professional staff, beautiful facilities, and treatments that actually deliver results. Highly recommend the luxury package.",
      avatar: "/david.jpeg",
      treatment: "Luxury Retreat",
    },
    {
      id: 5,
      name: "Jennifer Park",
      location: "Pasadena, CA",
      rating: 5,
      text: "From the moment you walk in, you're transported to a sanctuary of calm. The staff genuinely cares about your experience. My go-to place for self-care.",
      avatar: "/jennifer.jpeg",
      treatment: "Spa Packages",
    },
  ],
  
  // FAQ
  faqs: [
    {
      id: 1,
      question: "Do I need an appointment?",
      answer: "Yes, we highly recommend booking appointments in advance to ensure availability and to provide you with the best possible experience. Walk-ins are welcome but subject to therapist availability.",
    },
    {
      id: 2,
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows will be charged 50% of the scheduled service. This policy allows us to maintain availability for all our clients.",
    },
    {
      id: 3,
      question: "Do you offer gift vouchers?",
      answer: "Yes! We offer beautiful gift vouchers for any treatment or package. Gift vouchers can be purchased online or in-spa, and are valid for 12 months from the date of purchase. Perfect for special occasions.",
    },
    {
      id: 4,
      question: "How long do treatments typically last?",
      answer: "Treatment durations vary by service. Individual treatments range from 30 minutes to 2 hours, while our spa packages can last 3-5 hours. Each treatment page shows the specific duration, and we recommend arriving 15 minutes early.",
    },
    {
      id: 5,
      question: "What should I wear to my appointment?",
      answer: "We provide robes, slippers, and all necessary amenities for your comfort. For most treatments, you'll change into our provided robe. We recommend wearing comfortable clothing to your appointment and avoiding heavy makeup or lotions.",
    },
    {
      id: 6,
      question: "Are your products vegan and cruelty-free?",
      answer: "Yes, we exclusively use premium, vegan, and cruelty-free products from reputable brands. We're committed to sustainability and ethical practices in all aspects of our business.",
    },
    {
      id: 7,
      question: "Do you offer couples treatments?",
      answer: "Absolutely! We have dedicated couples suites and offer romantic packages for two. Perfect for anniversaries, dates, or simply enjoying quality time together. Please book at least 48 hours in advance.",
    },
    {
      id: 8,
      question: "Is parking available?",
      answer: "Yes, we offer complimentary valet parking for all clients. Self-parking is also available in our adjacent lot. Both options are free of charge for the duration of your treatment.",
    },
  ],
  
  // Gallery Images
  gallery: [
    { id: 1, src: "/receptionarea.jpeg", alt: "Spa interior reception area" },
    { id: 2, src: "/Treatmentroom.jpeg", alt: "Treatment room with calming ambiance" },
    { id: 3, src: "/Luxuryfacial.jpeg", alt: "Luxury facial treatment in progress" },
    { id: 4, src: "/therapyroom.jpeg", alt: "Massage therapy room" },
    { id: 5, src: "/herbaltea.jpeg", alt: "Relaxation lounge with herbal tea" },
    { id: 6, src: "/skincareproducts.jpeg", alt: "Premium skincare products display" },
    { id: 7, src: "/Bodypreparation.jpeg", alt: "Body treatment preparation" },
    { id: 8, src: "/Nailcarestation.jpeg", alt: "Nail care station" },
    { id: 9, src: "/Outdoormeditation.jpeg", alt: "Outdoor meditation garden" },
    { id: 10, src: "/Sparefreshments.jpeg", alt: "Spa package refreshments" },
    { id: 11, src: "/Couplestreatment.jpeg", alt: "Couples treatment suite" },
    { id: 12, src: "/Aromatherapy.jpeg", alt: "Aromatherapy essentials" },
  ],
  
  // Instagram Feed (simulated)
  instagramPosts: [
    { id: 1, src: "/Sparefreshments.jpeg", caption: "Morning zen 🧘‍♀️", likes: 234 },
    { id: 2, src: "/herbaltea.jpeg", caption: "New facial treatment available ✨", likes: 189 },
    { id: 3, src: "/Couplestreatment.jpeg", caption: "Self-care isn't selfish 💆‍♀️", likes: 312 },
    { id: 4, src: "/skincareproducts.jpeg", caption: "Weekend vibes at Luna", likes: 156 },
    { id: 5, src: "/Aromatherapy.jpeg", caption: "Treat yourself today", likes: 278 },
    { id: 6, src: "/Nailcarestation.jpeg", caption: "Relaxation redefined", likes: 201 },
  ],
  
  // About Section
  about: {
    ownerName: "Isabella Martinez",
    ownerImage: "/owner.jpeg",
    story: "After 15 years in the luxury hospitality industry, I dreamed of creating a sanctuary where people could truly disconnect from the world and reconnect with themselves. Luna Beauty Spa is that dream realized.",
    philosophy: "We believe that self-care is not a luxury—it's essential. Our approach combines ancient wellness traditions with modern techniques to deliver transformative experiences that nurture both body and soul.",
    mission: "To provide an exceptional spa experience that exceeds expectations, using only the finest products and techniques, delivered by passionate professionals who genuinely care about your well-being.",
    yearsExperience: 15,
    teamSize: 12,
    happyClients: 5000,
  },
  
  // Spa Experience Steps
  spaExperience: [
    {
      id: 1,
      title: "Arrival",
      description: "Step into our tranquil sanctuary and leave the outside world behind. Enjoy welcome refreshments as you prepare for your journey.",
      image: "/Arrival.jpeg",
    },
    {
      id: 2,
      title: "Consultation",
      description: "Your therapist will discuss your needs and preferences to customize your treatment specifically for you.",
      image: "/Consultation.jpeg",
    },
    {
      id: 3,
      title: "Treatment",
      description: "Experience expert care using premium products in our beautifully designed treatment rooms.",
      image: "/skincareproducts.jpeg",
    },
    {
      id: 4,
      title: "Relaxation",
      description: "Unwind in our relaxation lounge with herbal tea and healthy refreshments after your treatment.",
      image: "/Relaxation.jpeg",
    },
    {
      id: 5,
      title: "Results",
      description: "Leave feeling refreshed, rejuvenated, and glowing with a personalized aftercare routine.",
      image: "/result.jpeg",
    },
  ],
  
  // Booking Process
  bookingProcess: [
    {
      id: 1,
      title: "Choose Treatment",
      description: "Browse our treatments and select the perfect service for your needs.",
      icon: "spa",
    },
    {
      id: 2,
      title: "Select Date",
      description: "Pick a convenient time from our available slots.",
      icon: "calendar",
    },
    {
      id: 3,
      title: "Confirm Details",
      description: "Provide your information and any special requests.",
      icon: "check-circle",
    },
    {
      id: 4,
      title: "Relax",
      description: "Arrive 15 minutes early and let us take care of everything.",
      icon: "heart",
    },
  ],
  
  // Trust Badges
  trustBadges: [
    { id: 1, name: "Certified Therapists", icon: "award" },
    { id: 2, name: "Premium Products", icon: "sparkles" },
    { id: 3, name: "5-Star Rated", icon: "star" },
    { id: 4, name: "Eco-Friendly", icon: "leaf" },
  ],
  
  // Why Choose Us
  whyChooseUs: [
    {
      id: 1,
      title: "Certified Therapists",
      description: "Our team consists of licensed professionals with extensive training and experience.",
      icon: "award",
    },
    {
      id: 2,
      title: "Premium Products",
      description: "We use only the finest, vegan, and cruelty-free products for optimal results.",
      icon: "sparkles",
    },
    {
      id: 3,
      title: "Relaxing Environment",
      description: "Our spa is designed to transport you to a state of complete tranquility.",
      icon: "home",
    },
    {
      id: 4,
      title: "Personalized Treatments",
      description: "Every treatment is customized to address your specific needs and preferences.",
      icon: "heart",
    },
  ],
  
  // SEO
  seo: {
    title: "Luna Beauty Spa | Luxury Spa & Wellness Center",
    description: "Experience ultimate relaxation at Luna Beauty Spa. Premium facials, massages, body treatments, and skincare services in Beverly Hills. Book your appointment today.",
    keywords: ["luxury spa", "beauty spa", "facials", "massage therapy", "body treatments", "skincare", "Beverly Hills spa", "wellness center"],
    ogImage: "/therapyroom.jpeg",
  },
  
  // Google Maps (placeholder)
  googleMaps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.40069768478173!3d34.06897048060467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzA4LjMiTiAxMTjCsDIzJzU2LjUiVw!5e0!3m2!1sen!2sus!4v1234567890",
  },
};

export default clientData;
