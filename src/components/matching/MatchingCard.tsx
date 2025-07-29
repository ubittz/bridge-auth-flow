interface Company {
  id: number;
  name: string;
  type: string;
  address: string;
  logo: string;
  category: string;
}

interface MatchingCardProps {
  company: Company;
  onClick: (id: number) => void;
}

export function MatchingCard({ company, onClick }: MatchingCardProps) {
  return (
    <div 
      className="bg-white p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={() => onClick(company.id)}
    >
      <div className="flex items-center space-x-4">
        {/* 원형 썸네일 이미지 */}
        <div className="flex-shrink-0">
          <img
            src={company.logo}
            alt={`${company.name} 로고`}
            className="w-16 h-16 rounded-full object-cover border border-gray-200"
          />
        </div>
        
        {/* 업체 정보 */}
        <div className="flex-1 min-w-0">
          {/* 업종명 */}
          <div className="text-sm text-gray-500 mb-1">
            {company.type}
          </div>
          
          {/* 업체명 */}
          <h3 className="text-lg font-semibold text-foreground mb-1 truncate">
            {company.name}
          </h3>
          
          {/* 주소 */}
          <p className="text-sm text-muted-foreground truncate">
            {company.address}
          </p>
        </div>
      </div>
    </div>
  );
}