import { RequestItem } from '@/data/managementData';

interface RequestCardProps {
  request: RequestItem;
  onClick?: () => void;
}

export function RequestCard({ request, onClick }: RequestCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case '진행중':
        return 'text-blue-600 bg-blue-50';
      case '완료':
        return 'text-green-600 bg-green-50';
      case '대기중':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div 
      className="bg-white p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      {/* 요청 번호 및 상태 */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted-foreground">{request.requestNumber}</span>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
          {request.status}
        </span>
      </div>

      {/* 업종 및 업체명 */}
      <div className="mb-2">
        <span className="text-sm text-muted-foreground">{request.category}</span>
        <h3 className="text-base font-medium text-foreground">{request.companyName}</h3>
      </div>

      {/* 납품형식 */}
      <div className="mb-3">
        <span className="text-sm text-muted-foreground">납품형식 (구분) </span>
        <span className="text-sm text-foreground">{request.deliveryFormat}</span>
      </div>

      {/* 요청일 및 예산 */}
      <div className="flex items-center justify-between text-sm">
        <div>
          <span className="text-muted-foreground">요청일 </span>
          <span className="text-foreground">{request.requestDate}</span>
        </div>
        <div>
          <span className="text-muted-foreground">예산 </span>
          <span className="text-foreground font-medium">{request.budget}</span>
        </div>
      </div>
    </div>
  );
}