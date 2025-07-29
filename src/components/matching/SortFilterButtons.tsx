import { ChevronDown } from 'lucide-react';
import { sortFilters } from '@/data/matchingData';

interface SortFilterButtonsProps {
  selectedFilters: string[];
  onFilterChange: (filter: string) => void;
}

export function SortFilterButtons({ selectedFilters, onFilterChange }: SortFilterButtonsProps) {
  return (
    <div className="bg-white px-4 py-3 border-b border-gray-100">
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
        {sortFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`flex items-center whitespace-nowrap px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
              selectedFilters.includes(filter.id)
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
            }`}
          >
            <span>{filter.name}</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        ))}
      </div>
    </div>
  );
}