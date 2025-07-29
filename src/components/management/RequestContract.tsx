import { RequestDetail } from '@/data/managementData';
import { Button } from '@/components/ui/button';

interface RequestContractProps {
  request: RequestDetail;
}

export function RequestContract({ request }: RequestContractProps) {
  const { contractInfo } = request;

  return (
    <div className="bg-white p-4 space-y-6">
      {/* 계약 정보 */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">계약 정보 (계약서)</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">계약번호</span>
              <span className="text-sm text-foreground">{contractInfo.contractNumber}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">계약 상태</span>
              <span className="text-sm text-foreground">{contractInfo.status}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">체결일자</span>
              <span className="text-sm text-foreground">{contractInfo.signDate}</span>
            </div>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          계약서 보기
        </Button>
      </div>

      <hr className="border-gray-100" />

      {/* 발주자 정보 */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">발주자</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">상호</span>
            <span className="text-sm text-foreground">{contractInfo.issuer.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">주소</span>
            <span className="text-sm text-foreground text-right max-w-[200px]">
              {contractInfo.issuer.address}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">담당자명</span>
            <span className="text-sm text-foreground">{contractInfo.issuer.representative}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">담당자 연락처</span>
            <span className="text-sm text-foreground">{contractInfo.issuer.contact}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">담당자 이메일</span>
            <span className="text-sm text-foreground">{contractInfo.issuer.email}</span>
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 수탁자 정보 */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">수탁자</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">상호</span>
            <span className="text-sm text-foreground">{contractInfo.receiver.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">주소</span>
            <span className="text-sm text-foreground text-right max-w-[200px]">
              {contractInfo.receiver.address}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">담당자명</span>
            <span className="text-sm text-foreground">{contractInfo.receiver.representative}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">담당자 연락처</span>
            <span className="text-sm text-foreground">{contractInfo.receiver.contact}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">담당자 이메일</span>
            <span className="text-sm text-foreground">{contractInfo.receiver.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}