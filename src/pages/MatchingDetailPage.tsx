import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/ui/mobile-layout';
import { CompanyHeader } from '@/components/matching/CompanyHeader';
import { CompanyTabMenu } from '@/components/matching/CompanyTabMenu';
import { PortfolioItem } from '@/components/matching/PortfolioItem';
import { ReviewItem } from '@/components/matching/ReviewItem';
import { InquiryItem } from '@/components/matching/InquiryItem';
import { InquiryForm } from '@/components/matching/InquiryForm';
import { BottomCTAButton } from '@/components/matching/BottomCTAButton';
import { Button } from '@/components/ui/button';
import { companies, portfolios, reviews, inquiries } from '@/data/matchingData';

export default function MatchingDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('details');
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const company = useMemo(() => {
    return companies.find(c => c.id === Number(id));
  }, [id]);

  const companyPortfolios = useMemo(() => {
    return portfolios.filter(p => p.companyId === Number(id));
  }, [id]);

  const companyReviews = useMemo(() => {
    return reviews.filter(r => r.companyId === Number(id));
  }, [id]);

  const companyInquiries = useMemo(() => {
    return inquiries.filter(i => i.companyId === Number(id));
  }, [id]);

  if (!company) {
    return (
      <MobileLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-gray-500">업체 정보를 찾을 수 없습니다.</p>
        </div>
      </MobileLayout>
    );
  }

  if (showInquiryForm) {
    return (
      <InquiryForm
        onSubmit={(data) => {
          console.log('문의 제출:', data);
          setShowInquiryForm(false);
        }}
        onCancel={() => setShowInquiryForm(false)}
      />
    );
  }

  const handleQuoteRequest = () => {
    console.log('견적 요청:', company.id);
    // 견적 요청 로직 구현
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div className="p-4 bg-white">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">업체 정보</h3>
                <p className="text-sm text-muted-foreground">
                  {company.name}는 {company.type} 전문 업체입니다.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">주소</h3>
                <p className="text-sm text-muted-foreground">
                  {company.address}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">연락처</h3>
                <p className="text-sm text-muted-foreground">
                  {company.phone}
                </p>
              </div>
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className="bg-white">
            {companyPortfolios.length > 0 ? (
              companyPortfolios.map((portfolio) => (
                <PortfolioItem key={portfolio.id} portfolio={portfolio} />
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">등록된 포트폴리오가 없습니다.</p>
              </div>
            )}
          </div>
        );

      case 'reviews':
        return (
          <div className="bg-white">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground">
                  리뷰 {companyReviews.length}건
                </h3>
              </div>
            </div>
            {companyReviews.length > 0 ? (
              companyReviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">등록된 리뷰가 없습니다.</p>
              </div>
            )}
          </div>
        );

      case 'inquiry':
        return (
          <div className="bg-white">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-medium text-foreground">
                문의 {companyInquiries.length}건
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowInquiryForm(true)}
              >
                문의하기
              </Button>
            </div>
            {companyInquiries.length > 0 ? (
              companyInquiries.map((inquiry) => (
                <InquiryItem key={inquiry.id} inquiry={inquiry} />
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">등록된 문의가 없습니다.</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-screen">
        {/* 업체 헤더 */}
        <CompanyHeader company={company} />

        {/* 탭 메뉴 */}
        <CompanyTabMenu
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* 탭 콘텐츠 */}
        <div className="flex-1">
          {renderTabContent()}
        </div>

        {/* 하단 여백 (CTA 버튼 공간) */}
        <div className="h-20" />
      </div>

      {/* 견적 요청 버튼 */}
      <BottomCTAButton onClick={handleQuoteRequest} />
    </MobileLayout>
  );
}