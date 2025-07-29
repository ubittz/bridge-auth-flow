import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MobileLayout } from "../ui/mobile-layout";
import { toast } from "@/hooks/use-toast";

export function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = async () => {
    if (!isFormValid) return;
    
    setLoading(true);
    try {
      // Mock login - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo: check if credentials match mock data
      if (formData.email === 'honggildong@naver.com' && formData.password === 'password123') {
        toast({
          title: "로그인 성공",
          description: "환영합니다!",
        });
        navigate('/home');
      } else {
        toast({
          title: "로그인 실패",
          description: "이메일 또는 비밀번호가 올바르지 않습니다.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "오류",
        description: "로그인 중 오류가 발생했습니다.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <MobileLayout>
      <div className="flex flex-col h-screen">
        {/* Logo */}
        <div className="flex items-center justify-center pt-20 pb-16">
          <div className="text-4xl font-bold">
            <span className="text-foreground">bridge</span>
            <span className="text-primary">M</span>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 px-4 space-y-4">
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="아이디 입력"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="h-12 text-base"
            />
            <Input
              type="password"
              placeholder="비밀번호 입력"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="h-12 text-base"
            />
          </div>

          <Button 
            onClick={handleLogin}
            disabled={!isFormValid || loading}
            className="w-full h-12 text-base font-medium"
          >
            {loading ? "로그인 중..." : "로그인"}
          </Button>

          {/* Links */}
          <div className="flex items-center justify-center space-x-4 pt-4 text-sm text-muted-foreground">
            <button 
              onClick={() => navigate('/signup')}
              className="hover:text-primary"
            >
              이메일로 가입
            </button>
            <span>|</span>
            <button 
              onClick={() => navigate('/find-id')}
              className="hover:text-primary"
            >
              아이디 찾기
            </button>
            <span>|</span>
            <button 
              onClick={() => navigate('/find-password')}
              className="hover:text-primary"
            >
              비밀번호 찾기
            </button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}