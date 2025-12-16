"use client"
import { Server, Cpu, MemoryStick } from "lucide-react";
import { Plan } from "@/data/demoData";
import { PlanCard } from "./PlanCard";

interface PlanSectionProps {
  title: string;
  description: string;
  plans: Plan[];
  billingType: string;
  currency: string;
  icon: "server" | "cpu" | "memory";
}

export function PlanSection({
  title,
  description,
  plans,
  billingType,
  currency,
  icon,
}: PlanSectionProps) {
  const IconComponent = {
    server: Server,
    cpu: Cpu,
    memory: MemoryStick,
  }[icon];

  return (
    <section className="space-y-6 container mx-auto pt-10 pb-24">
      <div className="flex items-center gap-3">
        <div className="rounded-lg border border-border bg-secondary p-2">
          <IconComponent className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            billingType={billingType}
            currency={currency}
          />
        ))}
      </div>
    </section>
  );
}