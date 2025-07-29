import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { portfolioData } from '@/data/homeData';

export function PortfolioCarousel() {
  return (
    <div className="mb-6">
      <div className="px-4 mb-4">
        <h2 className="text-lg font-semibold text-foreground">
          브릿지엠 추천 포트폴리오
        </h2>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {portfolioData.map((portfolio) => (
            <CarouselItem key={portfolio.id} className="pl-2 md:pl-4 basis-[280px]">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-video bg-gray-100 relative">
                  <img
                    src={portfolio.thumbnail}
                    alt={portfolio.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-primary font-medium mb-2">
                    {portfolio.category}
                  </div>
                  <h3 className="font-medium text-foreground mb-2 line-clamp-2">
                    {portfolio.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {portfolio.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}