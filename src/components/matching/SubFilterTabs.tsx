import { subCategories } from '@/data/matchingData';

interface SubFilterTabsProps {
  category: string;
  selectedSubCategory: string;
  onSubCategoryChange: (subCategory: string) => void;
}

export function SubFilterTabs({ category, selectedSubCategory, onSubCategoryChange }: SubFilterTabsProps) {
  const subs = subCategories[category as keyof typeof subCategories] || [];
  
  if (subs.length === 0) return null;

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="px-4 py-3">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {subs.map((sub) => (
            <button
              key={sub.id}
              onClick={() => onSubCategoryChange(sub.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedSubCategory === sub.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}