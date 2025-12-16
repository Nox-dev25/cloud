"use client"
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { IPPlan } from "@/data/demoData";

interface IPPricingTableProps {
  plans: IPPlan[];
  billingType: string;
  currency: string;
  showStorage?: boolean;
}

export function IPPricingTable({ plans, billingType, currency, showStorage = false }: IPPricingTableProps) {
  const currencySymbol = currency === "INR" ? "₹" : "$";
  const billingLabel = billingType === "monthly" ? "/mo" : "/hr";

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-secondary">
            <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
              Plan Type
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
              {showStorage ? "Storage (GB)" : "Count"}
            </th>
            <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
              Monthly Price
            </th>
            <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
              Payable Price
            </th>
            <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <IPPricingRow
              key={plan.type}
              plan={plan}
              billingType={billingType}
              currency={currency}
              currencySymbol={currencySymbol}
              billingLabel={billingLabel}
              isLast={index === plans.length - 1}
              showStorage={showStorage}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface IPPricingRowProps {
  plan: IPPlan;
  billingType: string;
  currency: string;
  currencySymbol: string;
  billingLabel: string;
  isLast: boolean;
  showStorage: boolean;
}

function IPPricingRow({
  plan,
  billingType,
  currency,
  currencySymbol,
  billingLabel,
  isLast,
  showStorage,
}: IPPricingRowProps) {
  const [count, setCount] = useState(1);

  const getUnitPrice = () => {
    if (billingType === "monthly") {
      return currency === "INR" ? plan.priceMonthlyINR : plan.priceMonthlyUSD;
    }
    return currency === "INR" ? plan.priceHourlyINR : plan.priceHourlyUSD;
  };

  const unitPrice = getUnitPrice();
  const totalPrice = unitPrice * count;

  const formatPrice = (price: number) => {
    if (billingType === "hourly" || showStorage) {
      return price.toFixed(2);
    }
    return price.toLocaleString();
  };

  return (
    <tr
      className={`transition-colors hover:bg-muted/30 ${
        !isLast ? "border-b border-border" : ""
      }`}
    >
      <td className="px-6 py-4">
        <span className="font-medium text-foreground">{plan.type}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCount(Math.max(1, count - 1))}
            className="flex h-8 w-8 items-center justify-center rounded border border-border bg-secondary text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            disabled={count === 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          <div className="flex h-8 min-w-[60px] items-center justify-center rounded border border-border bg-background px-3 text-sm font-medium">
            {count}
          </div>
          <button
            onClick={() => setCount(count + 1)}
            className="flex h-8 w-8 items-center justify-center rounded border border-border bg-secondary text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <span className="text-muted-foreground">
          {currencySymbol} {formatPrice(unitPrice)}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <span className="text-lg font-bold text-foreground">
          {currencySymbol} {formatPrice(totalPrice)}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground">
          {showStorage ? "Add Storage" : "Get IP"}
        </button>
      </td>
    </tr>
  );
}