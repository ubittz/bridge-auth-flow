import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { categories } from '@/data/matchingData';

interface CategoryDropdownProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryDropdown({ selectedCategory, onCategoryChange }: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedCategoryName = categories.find(cat => cat.id === selectedCategory)?.name || '전체';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full py-4 bg-white border-b border-gray-100 text-foreground font-medium"
      >
        <span className="text-base">{selectedCategoryName}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 ml-2 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 ml-2 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-100 rounded-lg shadow-lg z-50 py-4">
          <div className="text-center py-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">전체</h3>
          </div>
          <div className="space-y-0">
            {categories.slice(1).map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  setIsOpen(false);
                }}
                className="w-full py-4 text-center text-base text-foreground hover:bg-gray-50 transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}