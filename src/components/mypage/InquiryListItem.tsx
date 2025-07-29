import { InquiryItem } from '@/data/myPageData';

interface InquiryListItemProps {
  inquiry: InquiryItem;
  onClick: () => void;
}

export function InquiryListItem({ inquiry, onClick }: InquiryListItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case '답변완료':
        return 'text-blue-600 bg-blue-50';
      case '답변대기':
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
      {/* 상태 태그 */}
      <div className="mb-2">
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(inquiry.status)}`}>
          {inquiry.status}
        </span>
      </div>

      {/* 제목 */}
      <h3 className="text-base font-medium text-foreground mb-2">
        {inquiry.title}
      </h3>

      {/* 작성일 */}
      <div className="text-sm text-muted-foreground">
        {inquiry.createdAt}
      </div>
    </div>
  );
}