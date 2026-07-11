import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  variant?: "default" | "primary" | "accent"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", id, ...props }, ref) => {
    const variantClasses = {
      default: "bg-white",
      primary: "bg-primary",
      accent: "bg-accent/5",
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
