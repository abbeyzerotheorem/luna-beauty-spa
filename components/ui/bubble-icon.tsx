import * as React from "react"
import { cn } from "@/lib/utils"

interface BubbleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number
}

const BubbleIcon = React.forwardRef<SVGSVGElement, BubbleIconProps>(
  ({ className, size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("currentColor", className)}
      {...props}
    >
      <circle cx="12" cy="14" r="8" fill="currentColor" opacity="0.2" />
      <circle cx="12" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="8" cy="8" r="4" fill="currentColor" opacity="0.15" />
      <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="17" cy="7" r="3" fill="currentColor" opacity="0.15" />
      <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="6" cy="15" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="16" cy="17" r="1.2" fill="currentColor" opacity="0.3" />
      <circle cx="11" cy="6" r="1" fill="currentColor" opacity="0.25" />
    </svg>
  )
)
BubbleIcon.displayName = "BubbleIcon"

export { BubbleIcon }
