interface Review {
  id: number;
  userId: string;
  rating: number;
  content: string;
  date: string;
}

interface ReviewItemProps {
  review: Review;
}

export function ReviewItem({ review }: ReviewItemProps) {
  return (
    <div className="bg-white p-4 border-b border-gray-100">
      <div className="flex items-start space-x-3">
        {/* 사용자 아이콘 */}
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-xs text-gray-600">👤</span>
        </div>
        
        {/* 리뷰 내용 */}
        <div className="flex-1 min-w-0">
          {/* 사용자 아이디 */}
          <div className="text-sm text-gray-600 mb-1">
            {review.userId}
          </div>
          
          {/* 별점 */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-sm ${
                  index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ⭐
              </span>
            ))}
          </div>
          
          {/* 리뷰 텍스트 */}
          <p className="text-sm text-foreground mb-2 leading-relaxed">
            {review.content}
          </p>
          
          {/* 날짜 */}
          <div className="text-xs text-gray-500">
            {review.date}
          </div>
        </div>
      </div>
    </div>
  );
}