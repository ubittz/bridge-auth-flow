import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/ui/mobile-layout';
import { Button } from '@/components/ui/button';
import { RequestCard } from '@/components/management/RequestCard';
import { FaqList } from '@/components/management/FaqList';
import { NoticeList } from '@/components/home/NoticeList';
import { CompanyFooter } from '@/components/home/CompanyFooter';
import { requestItems, faqItems, noticeItems } from '@/data/managementData';

export default function IntegratedManagementPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('전체');

  const categories = ['전체', '제조', '마케팅', '디자인', '콘텐츠'];

  const filteredRequests = activeCategory === '전체' 
    ? requestItems 
    : requestItems.filter(item => item.category === activeCategory);

  const handleRequestClick = (requestId: number) => {
    navigate(`/management/request/${requestId}`);
  };

  return (
    <MobileLayout title="요청내역" showBackButton>
      <div className="flex flex-col min-h-screen">
        {/* 카테고리 필터 */}
        <div className="bg-white border-b border-gray-200">
          <div className="flex overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeCategory === category
                    ? 'text-primary border-primary'
                    : 'text-muted-foreground border-transparent hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 요청 리스트 */}
        <div className="bg-white">
          {filteredRequests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              onClick={() => handleRequestClick(request.id)}
            />
          ))}
        </div>

        {/* 더보기 버튼 */}
        <div className="bg-white p-4 border-b border-gray-200">
          <Button variant="outline" className="w-full">
            더보기 ▼
          </Button>
        </div>

        {/* FAQ 섹션 */}
        <div className="mt-4">
          <FaqList faqs={faqItems} />
        </div>

        {/* 공지사항 섹션 */}
        <div className="mt-4">
          <div className="bg-white">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-medium text-foreground">공지사항</h2>
            </div>
            <NoticeList notices={noticeItems} />
          </div>
        </div>

        {/* 회사 정보 푸터 */}
        <CompanyFooter />
      </div>
    </MobileLayout>
  );
}