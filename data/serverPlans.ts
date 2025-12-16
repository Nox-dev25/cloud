export interface ServerPlan {
  id: string;
  name: string;
  vCPU: number;
  ram: string;
  baseStorage: number;
  priceUSD: number;
  popular?: boolean;
}

export interface PlanCategory {
  id: string;
  name: string;
  description: string;
  plans: ServerPlan[];
}

export interface OSCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  planCategories: PlanCategory[];
}

export const osCategories: OSCategory[] = [
  {
    id: "linux",
    name: "Linux",
    description: "Ubuntu, CentOS, Debian, and more Linux distributions",
    icon: "linux",
    planCategories: [
      {
        id: "general-purpose",
        name: "General Purpose",
        description: "Balanced compute, memory, and networking",
        plans: [
          { id: "linux-gp-1", name: "GP-Starter", vCPU: 1, ram: "1 GB", baseStorage: 25, priceUSD: 5 },
          { id: "linux-gp-2", name: "GP-Basic", vCPU: 1, ram: "2 GB", baseStorage: 50, priceUSD: 10 },
          { id: "linux-gp-3", name: "GP-Standard", vCPU: 2, ram: "4 GB", baseStorage: 80, priceUSD: 20, popular: true },
          { id: "linux-gp-4", name: "GP-Plus", vCPU: 4, ram: "8 GB", baseStorage: 160, priceUSD: 40 },
          { id: "linux-gp-5", name: "GP-Pro", vCPU: 8, ram: "16 GB", baseStorage: 320, priceUSD: 80 },
          { id: "linux-gp-6", name: "GP-Enterprise", vCPU: 16, ram: "32 GB", baseStorage: 640, priceUSD: 160 },
        ],
      },
      {
        id: "cpu-intensive",
        name: "CPU Intensive",
        description: "High-performance processors for compute-heavy apps",
        plans: [
          { id: "linux-cpu-1", name: "CPU-Starter", vCPU: 2, ram: "2 GB", baseStorage: 25, priceUSD: 12 },
          { id: "linux-cpu-2", name: "CPU-Basic", vCPU: 4, ram: "4 GB", baseStorage: 50, priceUSD: 24 },
          { id: "linux-cpu-3", name: "CPU-Standard", vCPU: 8, ram: "8 GB", baseStorage: 100, priceUSD: 48, popular: true },
          { id: "linux-cpu-4", name: "CPU-Plus", vCPU: 16, ram: "16 GB", baseStorage: 200, priceUSD: 96 },
          { id: "linux-cpu-5", name: "CPU-Pro", vCPU: 32, ram: "32 GB", baseStorage: 400, priceUSD: 192 },
          { id: "linux-cpu-6", name: "CPU-Ultra", vCPU: 64, ram: "64 GB", baseStorage: 800, priceUSD: 384 },
        ],
      },
      {
        id: "memory-optimized",
        name: "Memory Optimized",
        description: "High memory-to-CPU ratio for memory-intensive workloads",
        plans: [
          { id: "linux-mem-1", name: "MEM-Starter", vCPU: 1, ram: "8 GB", baseStorage: 25, priceUSD: 15 },
          { id: "linux-mem-2", name: "MEM-Basic", vCPU: 2, ram: "16 GB", baseStorage: 50, priceUSD: 30 },
          { id: "linux-mem-3", name: "MEM-Standard", vCPU: 4, ram: "32 GB", baseStorage: 100, priceUSD: 60, popular: true },
          { id: "linux-mem-4", name: "MEM-Plus", vCPU: 8, ram: "64 GB", baseStorage: 200, priceUSD: 120 },
          { id: "linux-mem-5", name: "MEM-Pro", vCPU: 16, ram: "128 GB", baseStorage: 400, priceUSD: 240 },
          { id: "linux-mem-6", name: "MEM-Ultra", vCPU: 32, ram: "256 GB", baseStorage: 800, priceUSD: 480 },
        ],
      },
    ],
  },
  {
    id: "windows",
    name: "Windows",
    description: "Windows Server 2019, 2022, and other Windows editions",
    icon: "windows",
    planCategories: [
      {
        id: "general-purpose",
        name: "General Purpose",
        description: "Balanced compute, memory, and networking",
        plans: [
          { id: "win-gp-1", name: "GP-Starter", vCPU: 1, ram: "2 GB", baseStorage: 50, priceUSD: 12 },
          { id: "win-gp-2", name: "GP-Basic", vCPU: 2, ram: "4 GB", baseStorage: 80, priceUSD: 24 },
          { id: "win-gp-3", name: "GP-Standard", vCPU: 4, ram: "8 GB", baseStorage: 120, priceUSD: 48, popular: true },
          { id: "win-gp-4", name: "GP-Plus", vCPU: 8, ram: "16 GB", baseStorage: 200, priceUSD: 96 },
          { id: "win-gp-5", name: "GP-Pro", vCPU: 16, ram: "32 GB", baseStorage: 400, priceUSD: 192 },
          { id: "win-gp-6", name: "GP-Enterprise", vCPU: 32, ram: "64 GB", baseStorage: 800, priceUSD: 384 },
        ],
      },
      {
        id: "cpu-intensive",
        name: "CPU Intensive",
        description: "High-performance processors for compute-heavy apps",
        plans: [
          { id: "win-cpu-1", name: "CPU-Starter", vCPU: 2, ram: "4 GB", baseStorage: 50, priceUSD: 24 },
          { id: "win-cpu-2", name: "CPU-Basic", vCPU: 4, ram: "8 GB", baseStorage: 80, priceUSD: 48 },
          { id: "win-cpu-3", name: "CPU-Standard", vCPU: 8, ram: "16 GB", baseStorage: 120, priceUSD: 96, popular: true },
          { id: "win-cpu-4", name: "CPU-Plus", vCPU: 16, ram: "32 GB", baseStorage: 240, priceUSD: 192 },
          { id: "win-cpu-5", name: "CPU-Pro", vCPU: 32, ram: "64 GB", baseStorage: 480, priceUSD: 384 },
          { id: "win-cpu-6", name: "CPU-Ultra", vCPU: 64, ram: "128 GB", baseStorage: 960, priceUSD: 768 },
        ],
      },
      {
        id: "memory-optimized",
        name: "Memory Optimized",
        description: "High memory-to-CPU ratio for memory-intensive workloads",
        plans: [
          { id: "win-mem-1", name: "MEM-Starter", vCPU: 2, ram: "16 GB", baseStorage: 50, priceUSD: 35 },
          { id: "win-mem-2", name: "MEM-Basic", vCPU: 4, ram: "32 GB", baseStorage: 80, priceUSD: 70 },
          { id: "win-mem-3", name: "MEM-Standard", vCPU: 8, ram: "64 GB", baseStorage: 120, priceUSD: 140, popular: true },
          { id: "win-mem-4", name: "MEM-Plus", vCPU: 16, ram: "128 GB", baseStorage: 240, priceUSD: 280 },
          { id: "win-mem-5", name: "MEM-Pro", vCPU: 32, ram: "256 GB", baseStorage: 480, priceUSD: 560 },
          { id: "win-mem-6", name: "MEM-Ultra", vCPU: 64, ram: "512 GB", baseStorage: 960, priceUSD: 1120 },
        ],
      },
    ],
  },
  {
    id: "ipv4",
    name: "IPv4",
    description: "Dedicated IPv4 addresses with enhanced networking",
    icon: "ipv4",
    planCategories: [
      {
        id: "general-purpose",
        name: "General Purpose",
        description: "Balanced compute, memory, and networking",
        plans: [
          { id: "ipv4-gp-1", name: "GP-Starter", vCPU: 1, ram: "1 GB", baseStorage: 25, priceUSD: 6 },
          { id: "ipv4-gp-2", name: "GP-Basic", vCPU: 1, ram: "2 GB", baseStorage: 50, priceUSD: 12 },
          { id: "ipv4-gp-3", name: "GP-Standard", vCPU: 2, ram: "4 GB", baseStorage: 80, priceUSD: 24, popular: true },
          { id: "ipv4-gp-4", name: "GP-Plus", vCPU: 4, ram: "8 GB", baseStorage: 160, priceUSD: 48 },
          { id: "ipv4-gp-5", name: "GP-Pro", vCPU: 8, ram: "16 GB", baseStorage: 320, priceUSD: 96 },
          { id: "ipv4-gp-6", name: "GP-Enterprise", vCPU: 16, ram: "32 GB", baseStorage: 640, priceUSD: 192 },
        ],
      },
      {
        id: "cpu-intensive",
        name: "CPU Intensive",
        description: "High-performance processors for compute-heavy apps",
        plans: [
          { id: "ipv4-cpu-1", name: "CPU-Starter", vCPU: 2, ram: "2 GB", baseStorage: 25, priceUSD: 14 },
          { id: "ipv4-cpu-2", name: "CPU-Basic", vCPU: 4, ram: "4 GB", baseStorage: 50, priceUSD: 28 },
          { id: "ipv4-cpu-3", name: "CPU-Standard", vCPU: 8, ram: "8 GB", baseStorage: 100, priceUSD: 56, popular: true },
          { id: "ipv4-cpu-4", name: "CPU-Plus", vCPU: 16, ram: "16 GB", baseStorage: 200, priceUSD: 112 },
          { id: "ipv4-cpu-5", name: "CPU-Pro", vCPU: 32, ram: "32 GB", baseStorage: 400, priceUSD: 224 },
          { id: "ipv4-cpu-6", name: "CPU-Ultra", vCPU: 64, ram: "64 GB", baseStorage: 800, priceUSD: 448 },
        ],
      },
      {
        id: "memory-optimized",
        name: "Memory Optimized",
        description: "High memory-to-CPU ratio for memory-intensive workloads",
        plans: [
          { id: "ipv4-mem-1", name: "MEM-Starter", vCPU: 1, ram: "8 GB", baseStorage: 25, priceUSD: 18 },
          { id: "ipv4-mem-2", name: "MEM-Basic", vCPU: 2, ram: "16 GB", baseStorage: 50, priceUSD: 36 },
          { id: "ipv4-mem-3", name: "MEM-Standard", vCPU: 4, ram: "32 GB", baseStorage: 100, priceUSD: 72, popular: true },
          { id: "ipv4-mem-4", name: "MEM-Plus", vCPU: 8, ram: "64 GB", baseStorage: 200, priceUSD: 144 },
          { id: "ipv4-mem-5", name: "MEM-Pro", vCPU: 16, ram: "128 GB", baseStorage: 400, priceUSD: 288 },
          { id: "ipv4-mem-6", name: "MEM-Ultra", vCPU: 32, ram: "256 GB", baseStorage: 800, priceUSD: 576 },
        ],
      },
    ],
  },
];

export const USD_TO_INR = 83;
export const HOURS_IN_MONTH = 720;
export const STORAGE_PRICE_PER_GB_USD = 0.10;