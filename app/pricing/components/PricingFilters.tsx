"use client"
import { Server, MonitorDot, Globe, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

interface PricingFiltersProps {
  resourceType: string;
  setResourceType: (type: string) => void;
  planCategory: string;
  setPlanCategory: (category: string) => void;
  billingType: string;
  setBillingType: (type: string) => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

export function PricingFilters({
  resourceType,
  setResourceType,
  planCategory,
  setPlanCategory,
  billingType,
  setBillingType,
  currency,
  setCurrency,
}: PricingFiltersProps) {
  const getCategoriesForResource = () => {
    if (resourceType === "ip") {
      return [
        { id: "ipv4", label: "IPv4" },
        { id: "floating-ipv4", label: "Floating IPv4" },
        { id: "object-storage", label: "Object Storage" },
      ];
    }
    return [
      { id: "general-purpose", label: "General Purpose" },
      { id: "cpu-intensive", label: "CPU Intensive" },
      { id: "memory-optimized", label: "Memory Optimized" },
    ];
  };

  const categories = getCategoriesForResource();

  return (
    <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto container px-4 py-4">
        <div className="flex flex-wrap items-center gap-4">
          {/* Resource Type */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Resource:</span>
            <Select
              value={resourceType}
              onValueChange={(value) => {
                setResourceType(value);
                if (value === "ip") {
                  setPlanCategory("ipv4");
                } else {
                  setPlanCategory("general-purpose");
                }
              }}
            >
              <SelectTrigger className="w-[140px] border-border bg-secondary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-border bg-card">
                <SelectItem value="linux">
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4" />
                    Linux
                  </div>
                </SelectItem>
                <SelectItem value="windows">
                  <div className="flex items-center gap-2">
                    <MonitorDot className="h-4 w-4" />
                    Windows
                  </div>
                </SelectItem>
                <SelectItem value="ip">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    IP
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Plan Category */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Category:</span>
            <Select value={planCategory} onValueChange={setPlanCategory}>
              <SelectTrigger className="w-[180px] border-border bg-secondary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-border bg-card">
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Billing Type */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Billing:</span>
            <Select value={billingType} onValueChange={setBillingType}>
              <SelectTrigger className="w-[120px] border-border bg-secondary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-border bg-card">
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="hourly">Hourly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Currency */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Currency:</span>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="w-[100px] border-border bg-secondary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-border bg-card">
                <SelectItem value="INR">INR</SelectItem>
                <SelectItem value="USD">USD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}