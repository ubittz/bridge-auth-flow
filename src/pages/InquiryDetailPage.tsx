import { useParams } from 'react-router-dom';
import { MobileLayout } from '@/components/ui/mobile-layout';
import { InquiryDetailContent } from '@/components/mypage/InquiryDetailContent';
import { inquiryItems } from '@/data/myPageData';

export default function InquiryDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  const inquiry = inquiryItems.find(item => item.id === Number(id));

  if (!inquiry) {
    return (
      <MobileLayout title="문의 상세" showBackButton>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">문의를 찾을 수 없습니다.</p>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout title="문의 상세" showBackButton>
      <div className="flex flex-col min-h-screen">
        <InquiryDetailContent inquiry={inquiry} />
        
        {/* 하단 여백 */}
        <div className="h-20" />
      </div>
    </MobileLayout>
  );
}