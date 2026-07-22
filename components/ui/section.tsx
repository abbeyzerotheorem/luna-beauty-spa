import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  variant?: "default" | "primary" | "accent" | "cream"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", id, ...props }, ref) => {
    const variantClasses = {
      default: "bg-white",
      primary: "bg-[#FAF8F5]",
      accent: "bg-accent/5",
      cream: "bg-[#F5F0EB]",
    }

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-16 sm:py-20 lg:py-24",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }
