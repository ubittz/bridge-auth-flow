import { ArrowLeft, MapPin, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Company {
  id: number;
  name: string;
  type: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  coverImage: string;
  logo: string;
}

interface CompanyHeaderProps {
  company: Company;
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* 커버 이미지 */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={company.coverImage}
          alt={`${company.name} 커버 이미지`}
          className="w-full h-full object-cover"
        />
        
        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 p-2 bg-white bg-opacity-90 rounded-full shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* 업체 정보 */}
      <div className="bg-white px-4 pb-4">
        {/* 로고 이미지 - 커버 이미지와 겹치게 배치 */}
        <div className="relative -mt-8 mb-4">
          <img
            src={company.logo}
            alt={`${company.name} 로고`}
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm"
          />
        </div>

        {/* 업종 */}
        <div className="text-sm text-gray-500 mb-1">
          {company.type}
        </div>

        {/* 업체명 */}
        <h1 className="text-xl font-bold text-foreground mb-2">
          {company.name}
        </h1>

        {/* 별점 및 리뷰 수 */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="ml-1 font-medium text-foreground">
              {company.rating}
            </span>
            <span className="ml-1 text-sm text-gray-500">
              ({company.reviewCount})
            </span>
          </div>
        </div>

        {/* 주소 */}
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{company.address}</span>
        </div>

        {/* 전화번호 */}
        <div className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 mr-2" />
          <span className="text-sm">{company.phone}</span>
        </div>
      </div>
    </div>
  );
}