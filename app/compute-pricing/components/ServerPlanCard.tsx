import { useState } from "react";
import { Cpu, MemoryStick, HardDrive, Sparkles, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServerPlan } from "@/data/serverPlans";
import { USD_TO_INR, HOURS_IN_MONTH, STORAGE_PRICE_PER_GB_USD } from "@/data/serverPlans";

interface ServerPlanCardProps {
  plan: ServerPlan;
  currency: "USD" | "INR";
  interval: "monthly" | "hourly";
  className?: string;
}

export function ServerPlanCard({
  plan,
  currency,
  interval,
  className,
}: ServerPlanCardProps) {
  const [additionalStorage, setAdditionalStorage] = useState(0);

  const handleDecrement = () => {
    if (additionalStorage >= 25) {
      setAdditionalStorage(additionalStorage - 25);
    }
  };

  const handleIncrement = () => {
    if (additionalStorage < 1000) {
      setAdditionalStorage(additionalStorage + 25);
    }
  };

  const totalStorage = plan.baseStorage + additionalStorage;
  const storagePrice = additionalStorage * STORAGE_PRICE_PER_GB_USD;
  const basePrice = plan.priceUSD + storagePrice;
  
  let displayPrice = basePrice;
  if (interval === "hourly") {
    displayPrice = basePrice / HOURS_IN_MONTH;
  }
  if (currency === "INR") {
    displayPrice = displayPrice * USD_TO_INR;
  }

  const formatPrice = (price: number) => {
    if (interval === "hourly") {
      return price.toFixed(4);
    }
    return price.toFixed(2);
  };

  const currencySymbol = currency === "USD" ? "$" : "₹";
  const intervalLabel = interval === "monthly" ? "/mo" : "/hr";

  return (
    <div
        className={cn(
            "group relative flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 sm:p-5",
            "bg-cmpt_card/10 border border-cmpt_border rounded-cmpt_lg",
            "hover:bg-cmpt_card hover:border-cmpt_primary/30",
            "transition-all duration-300",
            plan.popular && "border-cmpt_primary/50 bg-cmpt_primary/5",
            className
        )}
        >
        {plan.popular && (
            <div className="absolute -top-3 left-4 flex items-center gap-1 px-3 py-1 bg-cmpt_primary text-cmpt_primary-foreground text-xs font-semibold rounded-full">
            <Sparkles className="w-3 h-3" />
            Popular
            </div>
        )}

        {/* Plan Info */}
        <div className="flex-1 min-w-0">
            <h4 className="text-cmpt_foreground font-semibold text-lg mb-2">{plan.name}</h4>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-cmpt_muted-foreground">
            <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-cmpt_primary" />
                <span>{plan.vCPU} vCPU</span>
            </div>
            <div className="flex items-center gap-1.5">
                <MemoryStick className="w-4 h-4 text-cmpt_primary" />
                <span>{plan.ram} RAM</span>
            </div>
            <div className="flex items-center gap-1.5">
                <HardDrive className="w-4 h-4 text-cmpt_primary" />
                <span>{totalStorage} GB SSD</span>
            </div>
            </div>
        </div>

        {/* Storage Counter */}
        <div className="flex items-center gap-2">
            <span className="text-xs text-cmpt_muted-foreground whitespace-nowrap">Storage:</span>

            <div className="flex items-center gap-1">
            {/* Decrement */}
            <button
                type="button"
                onClick={handleDecrement}
                disabled={additionalStorage === 0}
                className={cn(
                "flex items-center justify-center w-7 h-7",
                "bg-cmpt_secondary/50 border border-cmpt_border rounded-cmpt_sm",
                "text-cmpt_foreground hover:bg-cmpt_secondary hover:border-cmpt_primary/30",
                "transition-all duration-200",
                "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-cmpt_secondary/50 disabled:hover:border-cmpt_border"
                )}
            >
                <Minus className="w-3 h-3" />
            </button>

            {/* Storage Amount */}
            <div
                className={cn(
                "flex items-center justify-center min-w-[70px] h-7 px-2",
                "bg-cmpt_secondary/30 border border-cmpt_border rounded-cmpt_sm",
                "text-cmpt_foreground font-mono text-xs font-medium"
                )}
            >
                +{additionalStorage} GB
            </div>

            {/* Increment */}
            <button
                type="button"
                onClick={handleIncrement}
                disabled={additionalStorage >= 1000}
                className={cn(
                "flex items-center justify-center w-7 h-7",
                "bg-cmpt_secondary/50 border border-cmpt_border rounded-cmpt_sm",
                "text-cmpt_foreground hover:bg-cmpt_secondary hover:border-cmpt_primary/30",
                "transition-all duration-200",
                "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-cmpt_secondary/50 disabled:hover:border-cmpt_border"
                )}
            >
                <Plus className="w-3 h-3" />
            </button>
            </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between lg:justify-end gap-4">
            <div className="text-right">
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold price-text">
                {currencySymbol}
                {formatPrice(displayPrice)}
                </span>
                <span className="text-sm text-cmpt_muted-foreground">{intervalLabel}</span>
            </div>

            {additionalStorage > 0 && (
                <div className="text-xs text-cmpt_muted-foreground">
                +{additionalStorage} GB extra
                </div>
            )}
            </div>

            {/* CTA Button */}
            <button
            className={cn(
                "px-5 py-2.5 rounded-cmpt_md text-sm font-semibold transition-all duration-200",
                plan.popular
                ? "bg-cmpt_primary text-cmpt_primary-foreground hover:bg-cmpt_primary/90 glow-subtle"
                : "bg-cmpt_secondary/50 text-cmpt_foreground border border-cmpt_border hover:bg-cmpt_secondary hover:border-cmpt_primary/30"
            )}
            >
            Select Plan
            </button>
        </div>
    </div>
  );
}