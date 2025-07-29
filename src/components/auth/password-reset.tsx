import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MobileLayout } from "../ui/mobile-layout";
import { MobileHeader } from "../ui/mobile-header";
import { toast } from "@/hooks/use-toast";

export function PasswordReset() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const isFormValid = 
    formData.password.trim() !== '' &&
    formData.confirmPassword.trim() !== '' &&
    formData.password === formData.confirmPassword &&
    formData.password.length >= 6;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/password-reset/complete');
    } catch (error) {
      toast({
        title: "오류",
        description: "비밀번호 변경 중 오류가 발생했습니다.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <MobileLayout>
      <MobileHeader 
        title="비밀번호 찾기" 
        onBack={() => navigate(-1)} 
      />
      
      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">
            새로운 비밀번호를
          </h2>
          <h2 className="text-xl font-bold text-foreground">
            입력해 주세요.
          </h2>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              비밀번호 재설정
            </label>
            <Input
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="h-12"
            />
          </div>

          <Input
            type="password"
            placeholder="비밀번호를 한 번 더 입력해 주세요."
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            className="h-12"
          />

          {formData.password !== formData.confirmPassword && formData.confirmPassword && (
            <p className="text-sm text-destructive">
              비밀번호가 일치하지 않습니다.
            </p>
          )}
        </div>

        <div className="pt-6">
          <Button 
            onClick={handleSubmit}
            disabled={!isFormValid || loading}
            className="w-full h-12 text-base font-medium"
          >
            {loading ? "변경 중..." : "확인"}
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}