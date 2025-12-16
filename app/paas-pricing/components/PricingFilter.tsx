"use client";

import { useState } from 'react';
import { Region, Category, pricingData, regionToCurrency, regionLabels } from '@/data/pricingData';
import { RegionSelector } from "./RegionSelector";
import { CategoryFilter } from "./CategoryFilter";
import { ComputePricing } from "./ComputePricing";
import { DiskSpacePricing } from "./DiskSpacePricing";
import { TrafficPricing } from "./TrafficPricing";
import { OptionsPricing } from "./OptionsPricing";
import { Cloud, Sparkles } from 'lucide-react';

export const PricingFilter = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>('india');
  const [selectedCategory, setSelectedCategory] = useState<Category>('compute');
  
  const regionData = pricingData[selectedRegion];
  const currency = regionToCurrency[selectedRegion];
  
  const renderPricing = () => {
    switch (selectedCategory) {
      case 'compute':
        return (
          <ComputePricing
            reservedCloudlets={regionData.reservedCloudlets}
            dynamicCloudlets={regionData.dynamicCloudlets}
            currency={currency}
          />
        );
      case 'diskSpace':
        return <DiskSpacePricing diskSpace={regionData.diskSpace} currency={currency} />;
      case 'traffic':
        return <TrafficPricing traffic={regionData.traffic} currency={currency} />;
      case 'options':
        return (
          <OptionsPricing
            ssl={regionData.ssl}
            externalIP={regionData.externalIP}
            backup={regionData.backup}
            currency={currency}
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Transparent Pricing</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cloud className="w-10 h-10 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Cloud Pricing
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            West 1 {regionLabels[selectedRegion]} - Pay only for what you use with no hidden fees
          </p>
        </header>
        
        {/* Filters */}
        <div className="glass-card p-4 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <RegionSelector
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
            />
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>
        
        {/* Pricing Content */}
        <div key={`${selectedRegion}-${selectedCategory}`}>
          {renderPricing()}
        </div>
        
        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          * All prices are billed hourly. Prices may vary based on usage and region.
        </p>
      </div>
    </div>
  );
};