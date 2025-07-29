import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MobileLayout } from '@/components/ui/mobile-layout';
import { RequestTabs } from '@/components/management/RequestTabs';
import { RequestBasicInfo } from '@/components/management/RequestBasicInfo';
import { RequestContract } from '@/components/management/RequestContract';
import { RequestSchedule } from '@/components/management/RequestSchedule';
import { RequestFiles } from '@/components/management/RequestFiles';
import { BottomCTAButton } from '@/components/matching/BottomCTAButton';
import { requestDetail, scheduleItems, fileItems } from '@/data/managementData';

export default function RequestDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('basic');

  const handlePayment = () => {
    console.log('결제하기:', id);
    // 결제 로직 구현
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return <RequestBasicInfo request={requestDetail} />;
      
      case 'contract':
        return <RequestContract request={requestDetail} />;
      
      case 'schedule':
        return <RequestSchedule schedules={scheduleItems} />;
      
      case 'files':
        return <RequestFiles files={fileItems} />;
      
      default:
        return null;
    }
  };

  return (
    <MobileLayout title="요청 상세" showBackButton>
      <div className="flex flex-col min-h-screen">
        {/* 탭 메뉴 */}
        <RequestTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* 탭 콘텐츠 */}
        <div className="flex-1">
          {renderTabContent()}
        </div>

        {/* 하단 여백 (결제 버튼 공간) */}
        <div className="h-20" />
      </div>

      {/* 결제하기 버튼 */}
      <BottomCTAButton onClick={handlePayment} text="결제하기" />
    </MobileLayout>
  );
}