"use client"
import { Cpu, MemoryStick, HardDrive, Wifi, Minus, Plus, Sparkles } from "lucide-react";
import { useState } from "react";
import { Plan, storageAddonPricePerGB } from "@/data/demoData";

interface PlanCardProps {
  plan: Plan;
  billingType: string;
  currency: string;
}

export function PlanCard({ plan, billingType, currency }: PlanCardProps) {
  const [additionalStorage, setAdditionalStorage] = useState(0);

  const getBasePrice = () => {
    if (billingType === "monthly") {
      return currency === "INR" ? plan.priceMonthlyINR : plan.priceMonthlyUSD;
    }
    return currency === "INR" ? plan.priceHourlyINR : plan.priceHourlyUSD;
  };

  const getStoragePrice = () => {
    if (billingType === "monthly") {
      return currency === "INR"
        ? additionalStorage * storageAddonPricePerGB.monthlyINR
        : additionalStorage * storageAddonPricePerGB.monthlyUSD;
    }
    return currency === "INR"
      ? additionalStorage * storageAddonPricePerGB.hourlyINR
      : additionalStorage * storageAddonPricePerGB.hourlyUSD;
  };

  const totalPrice = getBasePrice() + getStoragePrice();
  const currencySymbol = currency === "INR" ? "₹" : "$";
  const billingLabel = billingType === "monthly" ? "/mo" : "/hr";

  const formatPrice = (price: number) => {
    if (billingType === "hourly") {
      return price.toFixed(3);
    }
    return price.toLocaleString();
  };

  return (
    <div
      className={`group relative rounded-lg border transition-all duration-300 ${
        plan.popular
          ? "border-primary/50 bg-card"
          : "border-border bg-card hover:border-muted-foreground/30"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-4 flex items-center gap-1 rounded-full border border-primary/30 bg-secondary px-3 py-1 text-xs font-medium text-primary">
          <Sparkles className="h-3 w-3" />
          Popular
        </div>
      )}

      <div className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Plan Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Cpu className="h-4 w-4" />
              {plan.vcpu} vCPU
            </span>
            <span className="flex items-center gap-1.5">
              <MemoryStick className="h-4 w-4" />
              {plan.ram} GB RAM
            </span>
            <span className="flex items-center gap-1.5">
              <HardDrive className="h-4 w-4" />
              {plan.storage + additionalStorage} GB SSD
            </span>
            <span className="flex items-center gap-1.5">
              <Wifi className="h-4 w-4" />
              {plan.bandwidth}
            </span>
          </div>
        </div>

        {/* Storage Control */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Storage:</span>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-2 py-1">
            <button
              onClick={() => setAdditionalStorage(Math.max(0, additionalStorage - 10))}
              className="rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              disabled={additionalStorage === 0}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-[4rem] text-center text-sm font-medium">
              +{additionalStorage} GB
            </span>
            <button
              onClick={() => setAdditionalStorage(additionalStorage + 10)}
              className="rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-2xl font-bold text-foreground">
              {currencySymbol}
              {formatPrice(totalPrice)}
            </span>
            <span className="text-sm text-muted-foreground">{billingLabel}</span>
          </div>
          <button className="rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
}