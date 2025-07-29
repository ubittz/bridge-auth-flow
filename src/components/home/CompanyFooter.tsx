import { companyInfo } from '@/data/homeData';

export function CompanyFooter() {
  return (
    <footer className="bg-gray-50 px-4 py-6 mb-20">
      <div className="space-y-2 text-xs text-muted-foreground">
        <p>{companyInfo.address}</p>
        <p>{companyInfo.businessNumber}</p>
        <p>대표이사 : 대표자명 | 사업자등록번호 4 여기에정보 : 3호 구2</p>
        <p>* 문의업체등록 : 1588-81-17050원</p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="space-y-1 text-xs text-muted-foreground">
          <p className="font-medium">{companyInfo.customerService.hours}</p>
          <p>연락처 : {companyInfo.customerService.phone}</p>
          <p>이메일 : {companyInfo.customerService.email}</p>
        </div>
      </div>
    </footer>
  );
}