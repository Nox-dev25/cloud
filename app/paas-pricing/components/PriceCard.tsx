import { ReactNode } from 'react';

interface PriceCardProps {
  title: string;
  subtitle?: string;
  price: string | number;
  priceLabel: string;
  badge?: string;
  icon?: ReactNode;
  delay?: number;
  highlight?: boolean;
}

export const PriceCard = ({
  title,
  subtitle,
  price,
  priceLabel,
  badge,
  icon,
  delay = 0,
  highlight = false,
}: PriceCardProps) => {
  const isFree = typeof price === 'string' && price.toUpperCase() === 'FREE';
  
  return (
    <div
      className={`glass-card glow-border p-6 opacity-0 animate-fade-up hover:translate-y-[-4px] transition-transform duration-300 ${
        highlight ? '' : ''
      }`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {badge && (
        <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-md mb-3">
          {badge}
        </span>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="text-primary/70">{icon}</div>}
      </div>
      
      <div className="mt-auto">
        <div className={isFree ? 'text-3xl font-bold text-accent' : 'price-value'}>
          {price}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{priceLabel}</p>
      </div>
    </div>
  );
};