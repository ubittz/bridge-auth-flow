import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/ui/mobile-layout';
import { Button } from '@/components/ui/button';
import { InquiryTabs } from '@/components/mypage/InquiryTabs';
import { InquiryListItem } from '@/components/mypage/InquiryListItem';
import { inquiryTypes, inquiryItems } from '@/data/myPageData';

export default function InquiryListPage() {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState('all');

  const filteredInquiries = activeType === 'all' 
    ? inquiryItems 
    : inquiryItems.filter(item => item.type === activeType);

  const handleInquiryClick = (inquiryId: number) => {
    navigate(`/my/inquiry/${inquiryId}`);
  };

  const handleNewInquiry = () => {
    navigate('/my/inquiry/new');
  };

  return (
    <MobileLayout title="문의 내역" showBackButton>
      <div className="flex flex-col min-h-screen">
        {/* 총 문의 수 */}
        <div className="bg-white p-4 border-b border-gray-100">
          <p className="text-sm text-muted-foreground">총 <span className="font-medium">{filteredInquiries.length}</span>건</p>
        </div>

        {/* 필터 탭 */}
        <InquiryTabs
          types={inquiryTypes}
          activeType={activeType}
          onTypeChange={setActiveType}
        />

        {/* 문의 리스트 */}
        <div className="flex-1 bg-white">
          {filteredInquiries.length > 0 ? (
            filteredInquiries.map((inquiry) => (
              <InquiryListItem
                key={inquiry.id}
                inquiry={inquiry}
                onClick={() => handleInquiryClick(inquiry.id)}
              />
            ))
          ) : (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">등록된 문의가 없습니다.</p>
            </div>
          )}
        </div>

        {/* 하단 여백 (문의하기 버튼 공간) */}
        <div className="h-20" />
      </div>

      {/* 문의하기 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100 z-40">
        <div className="mx-auto max-w-[420px]">
          <Button
            onClick={handleNewInquiry}
            className="w-full h-12 text-base font-medium"
          >
            문의하기
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}