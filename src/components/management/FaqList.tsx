import { FaqItem } from '@/data/managementData';

interface FaqListProps {
  faqs: FaqItem[];
}

export function FaqList({ faqs }: FaqListProps) {
  return (
    <div className="bg-white">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-foreground">FAQ</h2>
      </div>
      
      <div className="divide-y divide-gray-100">
        {faqs.map((faq) => (
          <div key={faq.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-foreground">{faq.title}</h3>
              <span className="text-xs text-muted-foreground">{faq.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}