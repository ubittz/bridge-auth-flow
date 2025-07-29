import { useState } from 'react';
import { InquiryType } from '@/data/myPageData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronDown } from 'lucide-react';

interface InquiryFormProps {
  inquiryTypes: InquiryType[];
  onSubmit: (data: { type: string; title: string; content: string }) => void;
}

export function InquirySubmitForm({ inquiryTypes, onSubmit }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    type: '',
    title: '',
    content: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.type && formData.title && formData.content) {
      onSubmit(formData);
    }
  };

  const isFormValid = formData.type && formData.title && formData.content;

  return (
    <div className="bg-white p-4 space-y-6">
      {/* 문의 구분 */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">문의 구분</Label>
        <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
          <SelectTrigger className="w-full h-12 border border-gray-200">
            <SelectValue placeholder="문의 유형을 선택해 주세요." />
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
            {inquiryTypes.filter(type => type.id !== 'all').map((type) => (
              <SelectItem key={type.id} value={type.id}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* 문의 제목 */}
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium text-foreground">문의 제목</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          placeholder="문의 제목을 작성해 주세요."
          className="h-12"
        />
      </div>

      {/* 문의 내용 */}
      <div className="space-y-2">
        <Label htmlFor="content" className="text-sm font-medium text-foreground">문의 내용</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => handleInputChange('content', e.target.value)}
          placeholder="문의하실 내용을 입력해 주세요."
          className="min-h-[200px] resize-none"
        />
      </div>

      {/* 완료 버튼 */}
      <div className="pt-4">
        <Button 
          onClick={handleSubmit} 
          disabled={!isFormValid}
          className="w-full h-12"
        >
          완료
        </Button>
      </div>
    </div>
  );
}