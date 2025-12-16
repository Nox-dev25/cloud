"use client"
import { useState } from "react";
import Navbar from "../components/Navbar";
import { HeroSection } from "../compute-pricing/components/HeroSection";
import { PricingFilters } from "./components/PricingFilters";
import { PlanSection } from "./components/PlanSection";
import { IPPricingTable } from "./components/IPPricingTable";
import {
  linuxGeneralPurpose,
  linuxCPUIntensive,
  linuxMemoryOptimized,
  windowsGeneralPurpose,
  windowsCPUIntensive,
  windowsMemoryOptimized,
  ipv4Plans,
  floatingIPv4Plans,
  objectStoragePlans,
} from "@/data/demoData";

export default function DemoPricing() {

const [resourceType, setResourceType] = useState("linux");
const [planCategory, setPlanCategory] = useState("general-purpose");
const [billingType, setBillingType] = useState("monthly");
const [currency, setCurrency] = useState("INR");

  const getPlansConfig = () => {
    if (resourceType === "linux") {
      switch (planCategory) {
        case "cpu-intensive":
          return {
            plans: linuxCPUIntensive,
            title: "Linux CPU Intensive",
            description: "High-performance compute for CPU-bound workloads",
            icon: "cpu" as const,
          };
        case "memory-optimized":
          return {
            plans: linuxMemoryOptimized,
            title: "Linux Memory Optimized",
            description: "Enhanced memory for data-intensive applications",
            icon: "memory" as const,
          };
        default:
          return {
            plans: linuxGeneralPurpose,
            title: "Linux General Purpose",
            description: "Balanced compute, memory, and networking",
            icon: "server" as const,
          };
      }
    }

    if (resourceType === "windows") {
      switch (planCategory) {
        case "cpu-intensive":
          return {
            plans: windowsCPUIntensive,
            title: "Windows CPU Intensive",
            description: "High-performance Windows compute instances",
            icon: "cpu" as const,
          };
        case "memory-optimized":
          return {
            plans: windowsMemoryOptimized,
            title: "Windows Memory Optimized",
            description: "Memory-rich Windows instances for enterprise apps",
            icon: "memory" as const,
          };
        default:
          return {
            plans: windowsGeneralPurpose,
            title: "Windows General Purpose",
            description: "Versatile Windows instances for various workloads",
            icon: "server" as const,
          };
      }
    }

    return null;
  };

  const plansConfig = getPlansConfig();

  const getIPConfig = () => {
    switch (planCategory) {
      case "floating-ipv4":
        return {
          plans: floatingIPv4Plans,
          title: "Floating IPv4 Pricing and Plans",
          description: "Portable IPs that can be reassigned between instances",
          showStorage: false,
        };
      case "object-storage":
        return {
          plans: objectStoragePlans,
          title: "Object Storage Pricing and Plans",
          description: "Scalable storage solution priced per GB",
          showStorage: true,
        };
      default:
        return {
          plans: ipv4Plans,
          title: "IPv4 Pricing and Plans",
          description: "Static IP addresses for your cloud infrastructure",
          showStorage: false,
        };
    }
  };

  const ipConfig = getIPConfig();

  return (

  <main >
    <Navbar />
    <div className="min-h-screen bg-background">
            <HeroSection />
            {/* Filters */}
            <PricingFilters
                resourceType={resourceType}
                setResourceType={setResourceType}
                planCategory={planCategory}
                setPlanCategory={setPlanCategory}
                billingType={billingType}
                setBillingType={setBillingType}
                currency={currency}
                setCurrency={setCurrency}
            />

            {/* Pricing Content */}

            {resourceType === "ip" ? (
            <section className="space-y-6 container mx-auto pt-10 pb-24">
                <div>
                <h2 className="text-xl font-semibold text-foreground">{ipConfig.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                    {ipConfig.description}
                </p>
                </div>
                <IPPricingTable
                plans={ipConfig.plans}
                billingType={billingType}
                currency={currency}
                showStorage={ipConfig.showStorage}
                />
            </section>
            ) : plansConfig ? (
            <PlanSection
                title={plansConfig.title}
                description={plansConfig.description}
                plans={plansConfig.plans}
                billingType={billingType}
                currency={currency}
                icon={plansConfig.icon}
            />
            ) : null}

        </div>
    </main>
  );
}