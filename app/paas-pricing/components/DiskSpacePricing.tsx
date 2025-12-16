
import { DiskSpaceTier, currencySymbols, Currency } from '@/data/pricingData';
import { HardDrive, Gift } from 'lucide-react';

interface DiskSpacePricingProps {
  diskSpace: DiskSpaceTier[];
  currency: Currency;
}

export const DiskSpacePricing = ({ diskSpace, currency }: DiskSpacePricingProps) => {
  const symbol = currencySymbols[currency];
  
  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <HardDrive className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">Disk Space</h2>
      </div>
      <p className="text-muted-foreground text-sm mb-6 ml-12">
        Charged hourly per GB • First 20GB is FREE for every account
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {diskSpace.map((tier, index) => {
          const isFree = tier.pricePerMonth === 'FREE';
          
          return (
            <div
              key={tier.diskUsed}
              className={`glass-card glow-border p-6 opacity-0 animate-fade-up hover:translate-y-[-4px] transition-transform duration-300`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              
              <h3 className="text-lg font-semibold text-foreground mb-4">{tier.diskUsed}</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Per Hour</p>
                  <p className={`text-xl font-bold ${isFree ? 'text-primary' : 'text-foreground'}`}>
                    {isFree ? 'FREE' : `${symbol}${tier.pricePerHour}`}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Per Month</p>
                  <p className={`text-xl font-bold ${isFree ? 'text-primary' : 'price-value'}`}>
                    {isFree ? 'FREE' : `${symbol}${tier.pricePerMonth}`}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};