import { TrafficTier, currencySymbols, Currency } from '@/data/pricingData';
import { Wifi, Gift, ArrowDownRight } from 'lucide-react';

interface TrafficPricingProps {
  traffic: TrafficTier[];
  currency: Currency;
}

export const TrafficPricing = ({ traffic, currency }: TrafficPricingProps) => {
  const symbol = currencySymbols[currency];
  
  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <Wifi className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">Traffic</h2>
      </div>
      <p className="text-muted-foreground text-sm mb-6 ml-12">
        Charged hourly • 1GB free every hour • Internal traffic is always FREE
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {traffic.map((tier, index) => {
          const isFree = tier.pricePerGB === 'FREE';
          
          return (
            <div
              key={tier.trafficRange}
              className={`glass-card glow-border p-6 opacity-0 animate-fade-up hover:translate-y-[-4px] transition-transform duration-300`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              
              {!isFree && index === traffic.length - 1 && (
                <div className="flex items-center gap-1 text-primary text-xs font-medium mb-3">
                  <ArrowDownRight className="w-3 h-3" />
                  <span>BEST RATE</span>
                </div>
              )}
              
              <h3 className="text-lg font-semibold text-foreground mb-1">{tier.trafficRange}</h3>
              <p className="text-sm text-muted-foreground mb-4">External traffic last month</p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Free/Hour</p>
                  <p className={`text-lg font-semibold ${isFree ? ' text-primary' : 'text-foreground'}`}>
                    {tier.freePerHour}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price per GB</p>
                  <p className={`text-2xl font-bold ${isFree ? ' text-primary' : 'price-value'}`}>
                    {isFree ? 'FREE' : `${symbol}${tier.pricePerGB}`}
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