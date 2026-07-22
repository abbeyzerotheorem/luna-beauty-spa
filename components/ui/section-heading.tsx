import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  subtitle?: string
  centered?: boolean
}

const SectionHeading = React.forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  ({ className, subtitle, centered = true, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "mb-12",
          centered && "text-center mx-auto max-w-3xl"
        )}
      >
        {subtitle && (
          <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 font-sans">
            {subtitle}
          </p>
        )}
        <h2
          ref={ref}
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text leading-tight tracking-tight",
            className
          )}
          {...props}
        >
          {children}
        </h2>
      </div>
    )
  }
)
SectionHeading.displayName = "SectionHeading"

export { SectionHeading }
