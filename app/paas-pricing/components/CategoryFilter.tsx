"use client";
import { Category, categoryLabels } from '@/data/pricingData';
import { Cpu, HardDrive, Wifi, Settings } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categoryIcons: Record<Category, React.ReactNode> = {
  compute: <Cpu className="w-4 h-4" />,
  diskSpace: <HardDrive className="w-4 h-4" />,
  traffic: <Wifi className="w-4 h-4" />,
  options: <Settings className="w-4 h-4" />,
};

const categories: Category[] = ['compute', 'diskSpace', 'traffic', 'options'];

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border ${
            selectedCategory === category
              ? 'bg-primary/10 border-primary/50 text-primary shadow-lg'
              : 'bg-secondary/30 border-border/50 text-muted-foreground hover:bg-secondary hover:text-foreground hover:border-border'
          }`}
          style={selectedCategory === category ? { boxShadow: '0 0 20px hsl(0 0% 98% / 0.2)' } : {}}
        >
          {categoryIcons[category]}
          {categoryLabels[category]}
        </button>
      ))}
    </div>
  );
};