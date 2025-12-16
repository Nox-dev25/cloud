import { Region, regionLabels } from '@/data/pricingData';
import { Globe } from 'lucide-react';

interface RegionSelectorProps {
  selectedRegion: Region;
  onRegionChange: (region: Region) => void;
}

const regions: Region[] = ['india', 'us', 'germany'];

export const RegionSelector = ({ selectedRegion, onRegionChange }: RegionSelectorProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">Region</span>
      </div>
      <div className="flex items-center gap-1 p-1 bg-secondary/50 rounded-full border border-border/50">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onRegionChange(region)}
            className={`filter-pill ${
              selectedRegion === region ? 'filter-pill-active' : 'filter-pill-inactive'
            }`}
          >
            {regionLabels[region]}
          </button>
        ))}
      </div>
    </div>
  );
};