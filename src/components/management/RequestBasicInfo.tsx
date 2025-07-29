import { RequestDetail } from '@/data/managementData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface RequestBasicInfoProps {
  request: RequestDetail;
}

export function RequestBasicInfo({ request }: RequestBasicInfoProps) {
  return (
    <div className="bg-white p-4 space-y-6">
      {/* 업체 정보 */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">업체 정보</h3>
        <div className="flex items-center space-x-3">
          <Avatar className="w-16 h-16">
            <AvatarImage src={request.companyInfo.image} alt={request.companyInfo.name} />
            <AvatarFallback>{request.companyInfo.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-foreground">{request.companyInfo.name}</h4>
            <p className="text-sm text-muted-foreground">{request.companyInfo.address}</p>
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 요청자 정보 */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">요청자</span>
          <span className="text-sm text-foreground">{request.requesterInfo.name}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">요청자 연락처</span>
          <span className="text-sm text-foreground">{request.requesterInfo.contact}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">요청번호</span>
          <span className="text-sm text-foreground">{request.requesterInfo.requestNumber}</span>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 결제 정보 */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">결제 정보</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">결제번호</span>
            <span className="text-sm text-foreground">{request.paymentInfo.paymentNumber}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">결제상태</span>
            <span className="text-sm text-foreground">{request.paymentInfo.status}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">결제수단</span>
            <span className="text-sm text-foreground">{request.paymentInfo.method}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">결제일시</span>
            <span className="text-sm text-foreground">{request.paymentInfo.date}</span>
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 최종 결제 금액 */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium text-foreground">최종결제금액</span>
        <span className="text-lg font-bold text-primary">
          {request.finalAmount.toLocaleString()}원
        </span>
      </div>
    </div>
  );
}