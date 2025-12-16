export interface Plan {
  name: string;
  vcpu: number;
  ram: number;
  storage: number;
  bandwidth: string;
  priceMonthlyINR: number;
  priceHourlyINR: number;
  priceMonthlyUSD: number;
  priceHourlyUSD: number;
  popular?: boolean;
}

export interface IPPlan {
  type: string;
  priceMonthlyINR: number;
  priceHourlyINR: number;
  priceMonthlyUSD: number;
  priceHourlyUSD: number;
}

export const linuxGeneralPurpose: Plan[] = [
  { name: "GP-Starter", vcpu: 1, ram: 1, storage: 25, bandwidth: "1 TB", priceMonthlyINR: 400, priceHourlyINR: 0.6, priceMonthlyUSD: 5, priceHourlyUSD: 0.007 },
  { name: "GP-Basic", vcpu: 1, ram: 2, storage: 50, bandwidth: "2 TB", priceMonthlyINR: 800, priceHourlyINR: 1.2, priceMonthlyUSD: 10, priceHourlyUSD: 0.014 },
  { name: "GP-Standard", vcpu: 2, ram: 4, storage: 80, bandwidth: "3 TB", priceMonthlyINR: 1600, priceHourlyINR: 2.4, priceMonthlyUSD: 20, priceHourlyUSD: 0.028, popular: true },
  { name: "GP-Plus", vcpu: 4, ram: 8, storage: 160, bandwidth: "4 TB", priceMonthlyINR: 3200, priceHourlyINR: 4.8, priceMonthlyUSD: 40, priceHourlyUSD: 0.056 },
  { name: "GP-Pro", vcpu: 8, ram: 16, storage: 320, bandwidth: "5 TB", priceMonthlyINR: 6400, priceHourlyINR: 9.6, priceMonthlyUSD: 80, priceHourlyUSD: 0.112 },
  { name: "GP-Enterprise", vcpu: 16, ram: 32, storage: 640, bandwidth: "6 TB", priceMonthlyINR: 12800, priceHourlyINR: 19.2, priceMonthlyUSD: 160, priceHourlyUSD: 0.224 },
];

export const linuxCPUIntensive: Plan[] = [
  { name: "CPU-Starter", vcpu: 2, ram: 2, storage: 40, bandwidth: "2 TB", priceMonthlyINR: 1200, priceHourlyINR: 1.8, priceMonthlyUSD: 15, priceHourlyUSD: 0.021 },
  { name: "CPU-Basic", vcpu: 4, ram: 4, storage: 80, bandwidth: "3 TB", priceMonthlyINR: 2400, priceHourlyINR: 3.6, priceMonthlyUSD: 30, priceHourlyUSD: 0.042 },
  { name: "CPU-Standard", vcpu: 8, ram: 8, storage: 160, bandwidth: "4 TB", priceMonthlyINR: 4800, priceHourlyINR: 7.2, priceMonthlyUSD: 60, priceHourlyUSD: 0.084, popular: true },
  { name: "CPU-Plus", vcpu: 16, ram: 16, storage: 320, bandwidth: "5 TB", priceMonthlyINR: 9600, priceHourlyINR: 14.4, priceMonthlyUSD: 120, priceHourlyUSD: 0.168 },
  { name: "CPU-Pro", vcpu: 32, ram: 32, storage: 640, bandwidth: "6 TB", priceMonthlyINR: 19200, priceHourlyINR: 28.8, priceMonthlyUSD: 240, priceHourlyUSD: 0.336 },
];

export const linuxMemoryOptimized: Plan[] = [
  { name: "MEM-Starter", vcpu: 1, ram: 4, storage: 40, bandwidth: "2 TB", priceMonthlyINR: 1000, priceHourlyINR: 1.5, priceMonthlyUSD: 12, priceHourlyUSD: 0.017 },
  { name: "MEM-Basic", vcpu: 2, ram: 8, storage: 80, bandwidth: "3 TB", priceMonthlyINR: 2000, priceHourlyINR: 3.0, priceMonthlyUSD: 25, priceHourlyUSD: 0.035 },
  { name: "MEM-Standard", vcpu: 4, ram: 16, storage: 160, bandwidth: "4 TB", priceMonthlyINR: 4000, priceHourlyINR: 6.0, priceMonthlyUSD: 50, priceHourlyUSD: 0.070, popular: true },
  { name: "MEM-Plus", vcpu: 8, ram: 32, storage: 320, bandwidth: "5 TB", priceMonthlyINR: 8000, priceHourlyINR: 12.0, priceMonthlyUSD: 100, priceHourlyUSD: 0.140 },
  { name: "MEM-Pro", vcpu: 16, ram: 64, storage: 640, bandwidth: "6 TB", priceMonthlyINR: 16000, priceHourlyINR: 24.0, priceMonthlyUSD: 200, priceHourlyUSD: 0.280 },
];

export const windowsGeneralPurpose: Plan[] = [
  { name: "WGP-Starter", vcpu: 1, ram: 2, storage: 40, bandwidth: "1 TB", priceMonthlyINR: 800, priceHourlyINR: 1.2, priceMonthlyUSD: 10, priceHourlyUSD: 0.014 },
  { name: "WGP-Basic", vcpu: 2, ram: 4, storage: 80, bandwidth: "2 TB", priceMonthlyINR: 1600, priceHourlyINR: 2.4, priceMonthlyUSD: 20, priceHourlyUSD: 0.028 },
  { name: "WGP-Standard", vcpu: 4, ram: 8, storage: 160, bandwidth: "3 TB", priceMonthlyINR: 3200, priceHourlyINR: 4.8, priceMonthlyUSD: 40, priceHourlyUSD: 0.056, popular: true },
  { name: "WGP-Plus", vcpu: 8, ram: 16, storage: 320, bandwidth: "4 TB", priceMonthlyINR: 6400, priceHourlyINR: 9.6, priceMonthlyUSD: 80, priceHourlyUSD: 0.112 },
  { name: "WGP-Pro", vcpu: 16, ram: 32, storage: 640, bandwidth: "5 TB", priceMonthlyINR: 12800, priceHourlyINR: 19.2, priceMonthlyUSD: 160, priceHourlyUSD: 0.224 },
];

export const windowsCPUIntensive: Plan[] = [
  { name: "WCPU-Starter", vcpu: 2, ram: 4, storage: 60, bandwidth: "2 TB", priceMonthlyINR: 2000, priceHourlyINR: 3.0, priceMonthlyUSD: 25, priceHourlyUSD: 0.035 },
  { name: "WCPU-Basic", vcpu: 4, ram: 8, storage: 120, bandwidth: "3 TB", priceMonthlyINR: 4000, priceHourlyINR: 6.0, priceMonthlyUSD: 50, priceHourlyUSD: 0.070 },
  { name: "WCPU-Standard", vcpu: 8, ram: 16, storage: 240, bandwidth: "4 TB", priceMonthlyINR: 8000, priceHourlyINR: 12.0, priceMonthlyUSD: 100, priceHourlyUSD: 0.140, popular: true },
  { name: "WCPU-Plus", vcpu: 16, ram: 32, storage: 480, bandwidth: "5 TB", priceMonthlyINR: 16000, priceHourlyINR: 24.0, priceMonthlyUSD: 200, priceHourlyUSD: 0.280 },
];

export const windowsMemoryOptimized: Plan[] = [
  { name: "WMEM-Starter", vcpu: 2, ram: 8, storage: 80, bandwidth: "2 TB", priceMonthlyINR: 2400, priceHourlyINR: 3.6, priceMonthlyUSD: 30, priceHourlyUSD: 0.042 },
  { name: "WMEM-Basic", vcpu: 4, ram: 16, storage: 160, bandwidth: "3 TB", priceMonthlyINR: 4800, priceHourlyINR: 7.2, priceMonthlyUSD: 60, priceHourlyUSD: 0.084 },
  { name: "WMEM-Standard", vcpu: 8, ram: 32, storage: 320, bandwidth: "4 TB", priceMonthlyINR: 9600, priceHourlyINR: 14.4, priceMonthlyUSD: 120, priceHourlyUSD: 0.168, popular: true },
  { name: "WMEM-Plus", vcpu: 16, ram: 64, storage: 640, bandwidth: "5 TB", priceMonthlyINR: 19200, priceHourlyINR: 28.8, priceMonthlyUSD: 240, priceHourlyUSD: 0.336 },
];

export const ipv4Plans: IPPlan[] = [
  { type: "IPv4", priceMonthlyINR: 200, priceHourlyINR: 0.30, priceMonthlyUSD: 2.5, priceHourlyUSD: 0.004 },
  { type: "Additional IPv4", priceMonthlyINR: 180, priceHourlyINR: 0.27, priceMonthlyUSD: 2.25, priceHourlyUSD: 0.003 },
  { type: "IPv4 /29 Block (8 IPs)", priceMonthlyINR: 1400, priceHourlyINR: 2.1, priceMonthlyUSD: 17.5, priceHourlyUSD: 0.025 },
  { type: "IPv4 /28 Block (16 IPs)", priceMonthlyINR: 2600, priceHourlyINR: 3.9, priceMonthlyUSD: 32.5, priceHourlyUSD: 0.046 },
];

export const floatingIPv4Plans: IPPlan[] = [
  { type: "Floating IPv4", priceMonthlyINR: 250, priceHourlyINR: 0.38, priceMonthlyUSD: 3.1, priceHourlyUSD: 0.004 },
  { type: "Reserved Floating IP", priceMonthlyINR: 220, priceHourlyINR: 0.33, priceMonthlyUSD: 2.75, priceHourlyUSD: 0.004 },
  { type: "Failover IP", priceMonthlyINR: 320, priceHourlyINR: 0.48, priceMonthlyUSD: 4, priceHourlyUSD: 0.006 },
];

export const objectStoragePlans: IPPlan[] = [
  { type: "Standard Storage", priceMonthlyINR: 3.10, priceHourlyINR: 0.0046, priceMonthlyUSD: 0.04, priceHourlyUSD: 0.00006 },
  { type: "Infrequent Access", priceMonthlyINR: 2.20, priceHourlyINR: 0.0033, priceMonthlyUSD: 0.028, priceHourlyUSD: 0.00004 },
  { type: "Archive Storage", priceMonthlyINR: 1.00, priceHourlyINR: 0.0015, priceMonthlyUSD: 0.012, priceHourlyUSD: 0.00002 },
];

export const storageAddonPricePerGB = {
  monthlyINR: 8,
  hourlyINR: 0.012,
  monthlyUSD: 0.10,
  hourlyUSD: 0.00014,
};