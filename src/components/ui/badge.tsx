
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success: "border-transparent bg-success-500/20 text-success-500 border-success-500/30",
        warning: "border-transparent bg-warning-500/20 text-warning-500 border-warning-500/30",
        danger: "border-transparent bg-danger-500/20 text-danger-500 border-danger-500/30",
        blue: "border-transparent bg-nexblue-500/20 text-nexblue-400 border-nexblue-500/30",
        teal: "border-transparent bg-nexteal-500/20 text-nexteal-400 border-nexteal-500/30",
        purple: "border-transparent bg-nexpurple-500/20 text-nexpurple-400 border-nexpurple-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
