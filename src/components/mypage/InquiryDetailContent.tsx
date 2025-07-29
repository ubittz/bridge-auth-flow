import { InquiryItem } from '@/data/myPageData';

interface InquiryDetailContentProps {
  inquiry: InquiryItem;
}

export function InquiryDetailContent({ inquiry }: InquiryDetailContentProps) {
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
    <div className="bg-white">
      {/* 문의 내용 */}
      <div className="p-4">
        {/* 문의 유형 및 제목 */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(inquiry.status)}`}>
              [{inquiry.type}]
            </span>
          </div>
          <h1 className="text-lg font-medium text-foreground mb-2">{inquiry.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>제목...ㅍㅍㅍ</span>
            <span>{inquiry.createdAt}</span>
          </div>
        </div>

        {/* 구분선 */}
        <hr className="border-gray-100 my-4" />

        {/* 문의 내용 */}
        <div className="space-y-4">
          <p className="text-sm text-foreground whitespace-pre-wrap">
            {inquiry.content}
          </p>
        </div>
      </div>

      {/* 답변 영역 */}
      {inquiry.answer && (
        <div className="bg-gray-50 p-4 border-t border-gray-200">
          <div className="mb-3">
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full text-blue-600 bg-blue-50">
              [답변]
            </span>
          </div>
          
          <h2 className="text-base font-medium text-foreground mb-3">
            {inquiry.answer.title}
          </h2>
          
          <div className="space-y-4">
            <p className="text-sm text-foreground whitespace-pre-wrap">
              {inquiry.answer.content}
            </p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-muted-foreground">{inquiry.answer.createdAt}</p>
          </div>
        </div>
      )}
    </div>
  );
}