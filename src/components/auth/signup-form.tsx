import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MobileLayout } from "../ui/mobile-layout";
import { MobileHeader } from "../ui/mobile-header";
import { toast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

export function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    name: '',
    birthDate: '',
    gender: '' as 'male' | 'female' | '',
    phoneNumber: ''
  });
  const [idChecked, setIdChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid = 
    formData.id.trim() !== '' &&
    formData.password.trim() !== '' &&
    formData.confirmPassword.trim() !== '' &&
    formData.name.trim() !== '' &&
    formData.birthDate.trim() !== '' &&
    formData.gender !== '' &&
    formData.phoneNumber.trim() !== '' &&
    formData.password === formData.confirmPassword &&
    idChecked;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (field === 'id') {
      setIdChecked(false);
    }
  };

  const handleIdCheck = async () => {
    if (!formData.id.trim()) {
      toast({
        title: "오류",
        description: "아이디를 입력해주세요.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Check if ID exists (mock check)
      if (formData.id === 'honggildong') {
        toast({
          title: "사용 불가",
          description: "이미 사용 중인 아이디입니다.",
          variant: "destructive"
        });
        setIdChecked(false);
      } else {
        toast({
          title: "사용 가능",
          description: "사용 가능한 아이디입니다.",
        });
        setIdChecked(true);
      }
    } catch (error) {
      toast({
        title: "오류",
        description: "중복 확인 중 오류가 발생했습니다.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (isFormValid) {
      navigate('/signup/email-verify');
    }
  };

  return (
    <MobileLayout>
      <MobileHeader 
        title="비밀번호 찾기" 
        onBack={() => navigate('/signup')} 
      />
      
      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">
            회원님의 기본 정보를
          </h2>
          <h2 className="text-xl font-bold text-foreground">
            입력해 주세요.
          </h2>
        </div>

        <div className="space-y-4">
          {/* ID with verification */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              아이디
            </label>
            <div className="flex space-x-2">
              <Input
                placeholder="아이디 중복 확인을 해주세요."
                value={formData.id}
                onChange={(e) => handleInputChange('id', e.target.value)}
                className="flex-1 h-12"
              />
              <Button 
                onClick={handleIdCheck}
                disabled={loading || !formData.id.trim()}
                variant="outline"
                className="px-4 h-12 text-primary border-primary hover:bg-primary/10"
              >
                중복 확인
              </Button>
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              비밀번호
            </label>
            <Input
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="h-12"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="비밀번호를 한 번 더 입력해 주세요."
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="h-12"
            />
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              이름
            </label>
            <Input
              placeholder="이름을 입력해 주세요."
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="h-12"
            />
          </div>

          {/* Birth Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              생년월일
            </label>
            <div className="relative">
              <Input
                type="date"
                value={formData.birthDate}
                onChange={(e) => handleInputChange('birthDate', e.target.value)}
                className="h-12 pr-10"
              />
              <Calendar className="absolute right-3 top-3 h-6 w-6 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              성별
            </label>
            <div className="flex space-x-2">
              <Button
                type="button"
                variant={formData.gender === 'male' ? 'default' : 'outline'}
                onClick={() => handleInputChange('gender', 'male')}
                className="flex-1 h-12"
              >
                남성
              </Button>
              <Button
                type="button"
                variant={formData.gender === 'female' ? 'default' : 'outline'}
                onClick={() => handleInputChange('gender', 'female')}
                className="flex-1 h-12"
              >
                여성
              </Button>
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              휴대전화 번호
            </label>
            <Input
              placeholder="휴대전화 번호를 숫자만 입력해 주세요."
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="h-12"
            />
          </div>
        </div>

        <div className="pt-6">
          <Button 
            onClick={handleNext}
            disabled={!isFormValid}
            className="w-full h-12 text-base font-medium"
          >
            다음
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}