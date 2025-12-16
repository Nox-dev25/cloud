"use client";
import { CloudletTier, currencySymbols, Currency } from '@/data/pricingData';
import { PriceCard } from './PriceCard';
import { Server, Zap } from 'lucide-react';

interface ComputePricingProps {
  reservedCloudlets: CloudletTier[];
  dynamicCloudlets: CloudletTier[];
  currency: Currency;
}

export const ComputePricing = ({ reservedCloudlets, dynamicCloudlets, currency }: ComputePricingProps) => {
  const symbol = currencySymbols[currency];
  
  return (
    <div className="space-y-10">
      {/* Reserved Cloudlets */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Server className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Reserved Cloudlets</h2>
        </div>
        <p className="text-muted-foreground text-sm mb-6 ml-12">
          1 Cloudlet = 128MB RAM + 100MHz CPU • Reserved in advance, pay even if unused
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reservedCloudlets.map((tier, index) => (
            <PriceCard
              key={tier.range}
              title={`${tier.range} Cloudlets`}
              subtitle={tier.ram}
              price={`${symbol}${tier.pricePerMonth.toFixed(2)}`}
              priceLabel="per cloudlet / month"
              delay={index * 100}
              highlight={index === 0}
              badge={index === reservedCloudlets.length - 1 ? 'Best Value' : undefined}
            />
          ))}
        </div>
      </section>

      {/* Dynamic Cloudlets */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Dynamic Cloudlets</h2>
        </div>
        <p className="text-muted-foreground text-sm mb-6 ml-12">
          Instant auto-scaling • Pay only for what you use • Billed hourly
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dynamicCloudlets.map((tier, index) => (
            <PriceCard
              key={tier.range}
              title={`${tier.range} Cloudlets`}
              subtitle={tier.ram}
              price={`${symbol}${tier.pricePerMonth.toFixed(2)}`}
              priceLabel="per cloudlet / month"
              delay={index * 100}
              icon={<Zap className="w-4 h-4" />}
            />
          ))}
        </div>
      </section>
    </div>
  );
};