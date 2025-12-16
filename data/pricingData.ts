export type Region = 'india' | 'us' | 'germany';
export type Category = 'compute' | 'diskSpace' | 'traffic' | 'options';
export type Currency = 'INR' | 'USD' | 'EUR';

export interface CloudletTier {
  range: string;
  ram: string;
  pricePerMonth: number;
}

export interface DiskSpaceTier {
  diskUsed: string;
  pricePerHour: string;
  pricePerMonth: string;
}

export interface TrafficTier {
  trafficRange: string;
  freePerHour: string;
  pricePerGB: string;
}

export interface OptionItem {
  name: string;
  count?: string;
  pricePerHour: string;
  pricePerMonth: string;
}

export interface RegionData {
  reservedCloudlets: CloudletTier[];
  dynamicCloudlets: CloudletTier[];
  diskSpace: DiskSpaceTier[];
  traffic: TrafficTier[];
  ssl: OptionItem[];
  externalIP: OptionItem[];
  backup: OptionItem[];
}

export const pricingData: Record<Region, RegionData> = {
  india: {
    reservedCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 70 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 68 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 65 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 63 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 60 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 55 },
    ],
    dynamicCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 92 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 88 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 84 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 82 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 78 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 74 },
    ],
    diskSpace: [
      { diskUsed: 'First 20GB', pricePerHour: 'FREE', pricePerMonth: 'FREE' },
      { diskUsed: '20GB - 99GB', pricePerHour: '0.005479', pricePerMonth: '4.00' },
      { diskUsed: '100GB - 499GB', pricePerHour: '0.004110', pricePerMonth: '3.00' },
      { diskUsed: '500GB - ∞', pricePerHour: '0.002740', pricePerMonth: '2.00' },
    ],
    traffic: [
      { trafficRange: '0GB - 730GB', freePerHour: 'FREE', pricePerGB: 'FREE' },
      { trafficRange: '731GB - 999GB', freePerHour: '1GB', pricePerGB: '8.00' },
      { trafficRange: '1000GB - 1999GB', freePerHour: '1GB', pricePerGB: '7.00' },
      { trafficRange: '2000GB - 4999GB', freePerHour: '1GB', pricePerGB: '6.00' },
      { trafficRange: '5000GB - 6999GB', freePerHour: '1GB', pricePerGB: '5.00' },
      { trafficRange: '7000GB - ∞', freePerHour: '1GB', pricePerGB: '3.50' },
    ],
    ssl: [{ name: 'Cantech Cloud SSL', pricePerHour: 'FREE', pricePerMonth: 'FREE' }],
    externalIP: [{ name: 'Public IPv4', count: '1', pricePerHour: '0.137', pricePerMonth: '100' }],
    backup: [{ name: 'Daily Backup', count: '-', pricePerHour: 'Free', pricePerMonth: 'Free' }],
  },
  us: {
    reservedCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 0.95 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 0.92 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 0.88 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 0.85 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 0.81 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 0.75 },
    ],
    dynamicCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 1.25 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 1.20 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 1.14 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 1.11 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 1.06 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 1.00 },
    ],
    diskSpace: [
      { diskUsed: 'First 20GB', pricePerHour: 'FREE', pricePerMonth: 'FREE' },
      { diskUsed: '20GB - 99GB', pricePerHour: '0.000075', pricePerMonth: '0.055' },
      { diskUsed: '100GB - 499GB', pricePerHour: '0.000056', pricePerMonth: '0.041' },
      { diskUsed: '500GB - ∞', pricePerHour: '0.000037', pricePerMonth: '0.027' },
    ],
    traffic: [
      { trafficRange: '0GB - 730GB', freePerHour: 'FREE', pricePerGB: 'FREE' },
      { trafficRange: '731GB - 999GB', freePerHour: '1GB', pricePerGB: '0.11' },
      { trafficRange: '1000GB - 1999GB', freePerHour: '1GB', pricePerGB: '0.095' },
      { trafficRange: '2000GB - 4999GB', freePerHour: '1GB', pricePerGB: '0.081' },
      { trafficRange: '5000GB - 6999GB', freePerHour: '1GB', pricePerGB: '0.068' },
      { trafficRange: '7000GB - ∞', freePerHour: '1GB', pricePerGB: '0.047' },
    ],
    ssl: [{ name: 'Cantech Cloud SSL', pricePerHour: 'FREE', pricePerMonth: 'FREE' }],
    externalIP: [{ name: 'Public IPv4', count: '1', pricePerHour: '0.00185', pricePerMonth: '1.35' }],
    backup: [{ name: 'Daily Backup', count: '-', pricePerHour: 'Free', pricePerMonth: 'Free' }],
  },
  germany: {
    reservedCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 0.85 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 0.82 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 0.79 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 0.76 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 0.73 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 0.67 },
    ],
    dynamicCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 1.12 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 1.07 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 1.02 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 1.00 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 0.95 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 0.90 },
    ],
    diskSpace: [
      { diskUsed: 'First 20GB', pricePerHour: 'FREE', pricePerMonth: 'FREE' },
      { diskUsed: '20GB - 99GB', pricePerHour: '0.000067', pricePerMonth: '0.049' },
      { diskUsed: '100GB - 499GB', pricePerHour: '0.000050', pricePerMonth: '0.037' },
      { diskUsed: '500GB - ∞', pricePerHour: '0.000033', pricePerMonth: '0.024' },
    ],
    traffic: [
      { trafficRange: '0GB - 730GB', freePerHour: 'FREE', pricePerGB: 'FREE' },
      { trafficRange: '731GB - 999GB', freePerHour: '1GB', pricePerGB: '0.10' },
      { trafficRange: '1000GB - 1999GB', freePerHour: '1GB', pricePerGB: '0.085' },
      { trafficRange: '2000GB - 4999GB', freePerHour: '1GB', pricePerGB: '0.073' },
      { trafficRange: '5000GB - 6999GB', freePerHour: '1GB', pricePerGB: '0.061' },
      { trafficRange: '7000GB - ∞', freePerHour: '1GB', pricePerGB: '0.043' },
    ],
    ssl: [{ name: 'Cantech Cloud SSL', pricePerHour: 'FREE', pricePerMonth: 'FREE' }],
    externalIP: [{ name: 'Public IPv4', count: '1', pricePerHour: '0.00166', pricePerMonth: '1.21' }],
    backup: [{ name: 'Daily Backup', count: '-', pricePerHour: 'Free', pricePerMonth: 'Free' }],
  },
};

export const currencySymbols: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  EUR: '€',
};

export const regionToCurrency: Record<Region, Currency> = {
  india: 'INR',
  us: 'USD',
  germany: 'EUR',
};

export const regionLabels: Record<Region, string> = {
  india: 'India',
  us: 'US',
  germany: 'Germany',
};

export const categoryLabels: Record<Category, string> = {
  compute: 'Compute',
  diskSpace: 'Disk Space',
  traffic: 'Traffic',
  options: 'Options',
};