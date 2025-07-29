import { ChevronRight } from 'lucide-react';
import { matchingServices } from '@/data/homeData';

export function MatchingCardList() {
  return (
    <div className="px-4 mb-6">
      <div className="space-y-3">
        {matchingServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}