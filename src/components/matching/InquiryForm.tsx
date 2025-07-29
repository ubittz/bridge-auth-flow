import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { inquiryTypes } from '@/data/matchingData';

interface InquiryFormProps {
  onSubmit: (data: { type: string; content: string }) => void;
  onCancel: () => void;
}

export function InquiryForm({ onSubmit, onCancel }: InquiryFormProps) {
  const [selectedType, setSelectedType] = useState('');
  const [content, setContent] = useState('');
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

  const handleSubmit = () => {
    if (!selectedType || !content.trim()) return;
    
    onSubmit({
      type: selectedType,
      content: content.trim()
    });
  };

  const selectedTypeName = inquiryTypes.find(type => type.id === selectedType)?.name || '서비스 이용 문의';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <h1 className="text-lg font-semibold text-foreground text-center">
          문의하기
        </h1>
      </div>

      <div className="p-4 space-y-6">
        {/* 문의 구분 */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            문의 구분
          </label>
          <div className="relative">
            <button
              onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-left flex items-center justify-between"
            >
              <span className={selectedType ? 'text-foreground' : 'text-gray-500'}>
                {selectedTypeName}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </button>

            {isTypeDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {inquiryTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedType(type.id);
                      setIsTypeDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 문의 내용 */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            문의 내용
          </label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="문의 내용을 입력해 주세요."
            className="min-h-[120px] resize-none"
          />
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100">
        <div className="mx-auto max-w-[420px]">
          <Button
            onClick={handleSubmit}
            className="w-full h-12 text-base font-medium"
            disabled={!selectedType || !content.trim()}
          >
            완료
          </Button>
        </div>
      </div>
    </div>
  );
}