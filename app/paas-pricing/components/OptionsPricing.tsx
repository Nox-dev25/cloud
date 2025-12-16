
import { OptionItem, currencySymbols, Currency } from '@/data/pricingData';
import { Shield, Globe, Database } from 'lucide-react';

interface OptionsPricingProps {
  ssl: OptionItem[];
  externalIP: OptionItem[];
  backup: OptionItem[];
  currency: Currency;
}

interface OptionSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: OptionItem[];
  currency: Currency;
  delay: number;
}

const OptionSection = ({ title, description, icon, items, currency, delay }: OptionSectionProps) => {
  const symbol = currencySymbols[currency];
  
  return (
    <div
      className="glass-card glow-border p-6 opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10">{icon}</div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-6 ml-11">{description}</p>
      
      <div className="space-y-4">
        {items.map((item) => {
          const isFree = item.pricePerMonth.toUpperCase() === 'FREE';
          
          return (
            <div
              key={item.name}
              className="flex flex-col sm:flex-col sm:items-start justify-between p-4 rounded-lg bg-secondary/30 border border-border/30"
            >
              <div className="mb-3 sm:mb-0">
                <p className="font-medium text-foreground mb-3">{item.name} {item.count && item.count !== '-' && (
                  <span className="text-sm text-muted-foreground">Count: {item.count}</span>
                )}</p>
                
              </div>
              
              <div className="flex gap-6">
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase">Per Hour</p>
                  <p className={`font-semibold ${isFree ? 'text-primary' : 'text-foreground'}`}>
                    {isFree ? 'FREE' : `${symbol}${item.pricePerHour}`}
                  </p>
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase">Per Month</p>
                  <p className={`font-bold ${isFree ? 'text-primary' : ''}`}>
                    {isFree ? 'FREE' : `${symbol}${item.pricePerMonth}`}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const OptionsPricing = ({ ssl, externalIP, backup, currency }: OptionsPricingProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <OptionSection
        title="SSL Certificate"
        description="Secure connection between client and environment"
        icon={<Shield className="w-5 h-5 text-primary" />}
        items={ssl}
        currency={currency}
        delay={0}
      />
      
      <OptionSection
        title="External IP"
        description="Directly accessible from outside the cluster"
        icon={<Globe className="w-5 h-5 text-primary" />}
        items={externalIP}
        currency={currency}
        delay={100}
      />
      
      <OptionSection
        title="Backup"
        description="Daily backup of your environment"
        icon={<Database className="w-5 h-5 text-primary" />}
        items={backup}
        currency={currency}
        delay={200}
      />
    </div>
  );
};