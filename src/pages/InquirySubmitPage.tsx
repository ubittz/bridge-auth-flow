import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/ui/mobile-layout';
import { InquirySubmitForm } from '@/components/mypage/InquirySubmitForm';
import { inquiryTypes } from '@/data/myPageData';

export default function InquirySubmitPage() {
  const navigate = useNavigate();

  const handleSubmit = (data: { type: string; title: string; content: string }) => {
    console.log('문의 제출:', data);
    // API 호출 로직 구현
    navigate('/my/inquiry');
  };

  return (
    <MobileLayout title="문의하기" showBackButton>
      <div className="flex flex-col min-h-screen">
        <InquirySubmitForm 
          inquiryTypes={inquiryTypes}
          onSubmit={handleSubmit}
        />
      </div>
    </MobileLayout>
  );
}