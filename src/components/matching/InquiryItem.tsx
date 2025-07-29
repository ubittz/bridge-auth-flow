interface Inquiry {
  id: number;
  userId: string;
  type: 'question' | 'answer';
  content: string;
  date: string;
}

interface InquiryItemProps {
  inquiry: Inquiry;
}

export function InquiryItem({ inquiry }: InquiryItemProps) {
  return (
    <div className="bg-white p-4 border-b border-gray-100">
      <div className="flex items-start space-x-3">
        {/* 사용자 아이콘 */}
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-xs text-gray-600">
            {inquiry.type === 'question' ? '👤' : '💼'}
          </span>
        </div>
        
        {/* 문의/답변 내용 */}
        <div className="flex-1 min-w-0">
          {/* 사용자 아이디 */}
          <div className="text-sm text-gray-600 mb-2">
            {inquiry.userId}
          </div>
          
          {/* 문의/답변 텍스트 */}
          <p className="text-sm text-foreground mb-2 leading-relaxed">
            {inquiry.content}
          </p>
          
          {/* 날짜 */}
          <div className="text-xs text-gray-500">
            {inquiry.date}
          </div>
        </div>
      </div>
    </div>
  );
}