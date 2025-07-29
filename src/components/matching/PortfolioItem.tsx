interface Portfolio {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface PortfolioItemProps {
  portfolio: Portfolio;
}

export function PortfolioItem({ portfolio }: PortfolioItemProps) {
  return (
    <div className="bg-white p-4 border-b border-gray-100">
      <div className="flex space-x-4">
        {/* 썸네일 이미지 */}
        <div className="flex-shrink-0">
          <img
            src={portfolio.thumbnail}
            alt={portfolio.title}
            className="w-20 h-16 rounded-lg object-cover border border-gray-200"
          />
        </div>
        
        {/* 포트폴리오 정보 */}
        <div className="flex-1 min-w-0">
          {/* 프로젝트명 */}
          <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
            {portfolio.title}
          </h3>
          
          {/* 설명 */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {portfolio.description}
          </p>
        </div>
      </div>
    </div>
  );
}