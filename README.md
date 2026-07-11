# Luna Beauty Spa - Premium Website Template

A world-class, production-ready luxury beauty spa website template built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## 🌟 Features

- **Modern Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Luxury Design**: Elegant, minimal, sophisticated spa aesthetic
- **Framer Motion Animations**: Smooth, luxury-level interactions
- **Fully Responsive**: Perfect on all devices (320px to 1920px)
- **SEO Optimized**: Metadata, Open Graph, Twitter Cards, JSON-LD, sitemap.xml
- **Accessibility**: Keyboard accessible, respects prefers-reduced-motion, ARIA labels
- **Conversion Focused**: WhatsApp button, sticky CTAs, trust badges
- **Easy Customization**: Edit only `/data/client.ts` to customize everything
- **Performance**: Lazy loading, optimized images, minimal JavaScript

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

The entire website content is controlled by a single file: `/data/client.ts`

Edit this file to customize:

- Business name and contact information
- Opening hours
- Social media links
- Brand colors
- Treatments and pricing
- Testimonials
- Gallery images
- SEO metadata
- Special offers

### Example Customization

```typescript
// In /data/client.ts
export const clientData = {
  businessName: "Your Spa Name",
  tagline: "Your Tagline",
  phone: "+1 (555) 123-4567",
  // ... customize all other properties
}
```

### Images

Replace placeholder images in the `/public/images/` directory:

- `/images/hero-bg.jpg` - Hero background
- `/images/treatments/*.jpg` - Treatment images
- `/images/gallery/*.jpg` - Gallery images
- `/images/testimonials/*.jpg` - Customer avatars
- `/images/about/*.jpg` - About section images

## 📁 Project Structure

```
luna-beauty-spa/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with SEO
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   ├── sitemap.ts      # Dynamic sitemap
│   └── not-found.tsx   # 404 page
├── components/         # Reusable components
│   ├── ui/            # Base UI components
│   ├── navigation.tsx  # Header navigation
│   ├── footer.tsx     # Footer
│   └── ...
├── sections/          # Page sections
│   ├── hero.tsx
│   ├── treatments.tsx
│   ├── about.tsx
│   └── ...
├── data/              # All content data
│   └── client.ts      # Main configuration file
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── types/             # TypeScript types
└── public/            # Static assets
```

## 🎯 Sections Included

1. **Hero** - Large calming image with CTAs
2. **Why Choose Us** - Feature cards with icons
3. **Signature Treatments** - Treatment cards with pricing
4. **About** - Owner story and philosophy
5. **Spa Experience** - Customer journey timeline
6. **Gallery** - Pinterest-style image grid
7. **Testimonials** - Animated carousel
8. **Pricing** - Package comparison cards
9. **Booking Process** - Step-by-step timeline
10. **FAQ** - Animated accordion
11. **Instagram Preview** - Social feed integration
12. **Final CTA** - Conversion-focused call-to-action
13. **Contact** - Form, map, and contact info
14. **Footer** - Links and information

## 🔧 Configuration

### Tailwind CSS

Custom colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#F8F5F2',
  text: '#2C2C2C',
  accent: '#B88E6A',
  accentSecondary: '#D9C8B4',
  sage: '#B7C4A8',
}
```

### SEO

Update SEO metadata in `/data/client.ts`:

```typescript
seo: {
  title: "Your Spa Name | Luxury Spa & Wellness Center",
  description: "Your description",
  keywords: ["luxury spa", "beauty spa", "facials"],
  ogImage: "/images/og-image.jpg",
}
```

### Google Maps

Replace the embed URL in `/data/client.ts`:

```typescript
googleMaps: {
  embedUrl: "https://www.google.com/maps/embed?pb=...",
}
```

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- Respects `prefers-reduced-motion`
- High contrast ratios
- Focus indicators

## 🚀 Performance Optimizations

- Next.js Image optimization
- Lazy loading for images
- Code splitting
- Minimal JavaScript
- CSS-in-JS with Tailwind
- Static generation where possible

## 📊 Lighthouse Scores

Target scores:
- Performance: 95+
- Accessibility: 95+
- SEO: 95+
- Best Practices: 95+

## 🎨 Design System

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Colors
- **Primary**: #F8F5F2 (cream)
- **Text**: #2C2C2C (dark gray)
- **Accent**: #B88E6A (gold)
- **Sage**: #B7C4A8 (soft green)

### Spacing
- Generous whitespace
- Consistent padding/margins
- Mobile-first approach

## 🔐 Environment Variables

Create a `.env.local` file for sensitive data:

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

## 📦 Dependencies

### Core
- next@^16.0.0
- react@^19.0.0
- react-dom@^19.0.0
- typescript@^5.3.0

### Styling
- tailwindcss@^4.0.0
- autoprefixer@^10.4.0
- postcss@^8.4.0

### Animations
- framer-motion@^11.0.0

### UI Components
- lucide-react@^0.400.0
- clsx@^2.1.0
- tailwind-merge@^2.2.0
- class-variance-authority@^0.7.0
- embla-carousel-react@^8.0.0

## 🤝 Support

For issues or questions:
- Check the `/data/client.ts` file for customization options
- Review the component files in `/components/` and `/sections/`
- Ensure all dependencies are installed

## 📄 License

This template is provided as-is for commercial use in spa businesses.

## 🎯 Customization Time

You can customize this template for a new spa business in under 10 minutes by:

1. Editing `/data/client.ts` with your business information
2. Replacing images in `/public/images/`
3. Updating the Google Maps embed URL
4. Changing colors in `tailwind.config.ts` if needed
5. Updating SEO metadata

That's it! The template handles the rest.

---

Built with ❤️ for luxury spa businesses
