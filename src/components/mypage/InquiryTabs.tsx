import { InquiryType } from '@/data/myPageData';

interface InquiryTabsProps {
  types: InquiryType[];
  activeType: string;
  onTypeChange: (type: string) => void;
}

export function InquiryTabs({ types, activeType, onTypeChange }: InquiryTabsProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex overflow-x-auto scrollbar-hide">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => onTypeChange(type.id)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
              activeType === type.id
                ? 'text-primary border-primary'
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
}