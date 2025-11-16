import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const advancedCardVariants = cva(
  "rounded-lg border text-card-foreground shadow-sm transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-card",
        cyber: "bg-card/50 backdrop-blur-sm border-border hover:border-primary/30",
        glow: "bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AdvancedCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof advancedCardVariants> {}

const AdvancedCard = React.forwardRef<HTMLDivElement, AdvancedCardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(advancedCardVariants({ variant }), className)}
      {...props}
    />
  )
);
AdvancedCard.displayName = "AdvancedCard";

export default AdvancedCard;
