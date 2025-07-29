import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { MobileLayout } from "../ui/mobile-layout";
import { MobileHeader } from "../ui/mobile-header";
import { toast } from "@/hooks/use-toast";
import { emailDomains } from "../../data/mockData";

interface EmailVerificationProps {
  mode: 'signup' | 'find-id' | 'find-password';
}

export function EmailVerification({ mode }: EmailVerificationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<'email' | 'verify'>('email');
  const [formData, setFormData] = useState({
    emailId: '',
    domain: '',
    customDomain: '',
    verificationCode: ''
  });
  const [timer, setTimer] = useState(179); // 2:59
  const [loading, setLoading] = useState(false);

  const selectedDomain = formData.domain === 'custom' ? formData.customDomain : formData.domain;
  const fullEmail = formData.emailId && selectedDomain ? `${formData.emailId}@${selectedDomain}` : '';
  
  const isEmailValid = formData.emailId.trim() !== '' && selectedDomain.trim() !== '';
  const isCodeValid = formData.verificationCode.trim() !== '';

  const getTitle = () => {
    switch (mode) {
      case 'signup': return '비밀번호 찾기';
      case 'find-id': return '아이디 찾기';
      case 'find-password': return '비밀번호 찾기';
      default: return '이메일 인증';
    }
  };

  const getDescription = () => {
    switch (mode) {
      case 'signup': 
        return {
          title: '회원가입 시 입력한',
          subtitle: '이메일을 인증해 주세요.'
        };
      case 'find-id':
        return {
          title: '회원님의 아이디는',
          subtitle: `${location.state?.foundId || 'honggildong'}`,
          subtitle2: '입니다.'
        };
      case 'find-password':
        return {
          title: '마지막으로 가입을 위해',
          subtitle: '이메일을 인증해 주세요.'
        };
      default:
        return {
          title: '이메일을 인증해',
          subtitle: '주세요.'
        };
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 'verify' && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendCode = async () => {
    if (!isEmailValid) return;
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStep('verify');
      setTimer(179);
      toast({
        title: "인증번호 전송",
        description: `${fullEmail}로 인증번호를 전송했습니다.`,
      });
    } catch (error) {
      toast({
        title: "오류",
        description: "인증번호 전송 중 오류가 발생했습니다.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!isCodeValid) return;
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock verification
      if (formData.verificationCode === '123456') {
        switch (mode) {
          case 'signup':
            navigate('/signup/complete');
            break;
          case 'find-id':
            navigate('/find-id/result', { 
              state: { foundId: 'honggildong', email: fullEmail } 
            });
            break;
          case 'find-password':
            navigate('/find-password/reset');
            break;
        }
      } else {
        toast({
          title: "인증 실패",
          description: "인증번호가 올바르지 않습니다.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "오류",
        description: "인증 중 오류가 발생했습니다.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const description = getDescription();

  if (step === 'email') {
    return (
      <MobileLayout>
        <MobileHeader 
          title={getTitle()}
          onBack={() => navigate(-1)} 
        />
        
        <div className="p-4 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-foreground">
              {description.title}
            </h2>
            <h2 className="text-xl font-bold text-foreground">
              {description.subtitle}
            </h2>
            {description.subtitle2 && (
              <h2 className="text-xl font-bold text-foreground">
                {description.subtitle2}
              </h2>
            )}
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                이메일
              </label>
              <div className="flex space-x-2">
                <Input
                  placeholder="아이디"
                  value={formData.emailId}
                  onChange={(e) => setFormData(prev => ({ ...prev, emailId: e.target.value }))}
                  className="flex-1 h-12"
                />
                <span className="flex items-center text-muted-foreground">@</span>
                <Select
                  value={formData.domain}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, domain: value }))}
                >
                  <SelectTrigger className="flex-1 h-12">
                    <SelectValue placeholder="선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {emailDomains.map((domain) => (
                      <SelectItem key={domain.value} value={domain.value}>
                        {domain.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  onClick={handleSendCode}
                  disabled={!isEmailValid || loading}
                  variant="outline"
                  className="px-4 h-12 text-primary border-primary hover:bg-primary/10"
                >
                  인증 전송
                </Button>
              </div>
            </div>

            {formData.domain === 'custom' && (
              <Input
                placeholder="직접 입력"
                value={formData.customDomain}
                onChange={(e) => setFormData(prev => ({ ...prev, customDomain: e.target.value }))}
                className="h-12"
              />
            )}
          </div>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout>
      <MobileHeader 
        title={getTitle()}
        onBack={() => setStep('email')} 
      />
      
      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">
            {description.title}
          </h2>
          <h2 className="text-xl font-bold text-foreground">
            {description.subtitle}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              이메일
            </label>
            <div className="flex space-x-2">
              <Input
                placeholder="아이디"
                value={formData.emailId}
                disabled
                className="flex-1 h-12 bg-muted"
              />
              <span className="flex items-center text-muted-foreground">@</span>
              <Input
                value={selectedDomain}
                disabled
                className="flex-1 h-12 bg-muted"
              />
              <Button 
                onClick={handleSendCode}
                disabled={loading}
                variant="outline"
                className="px-4 h-12 text-primary border-primary hover:bg-primary/10"
              >
                인증 전송
              </Button>
            </div>
          </div>

          <div className="relative">
            <Input
              placeholder="인증번호를 입력해 주세요."
              value={formData.verificationCode}
              onChange={(e) => setFormData(prev => ({ ...prev, verificationCode: e.target.value }))}
              className="h-12 pr-16"
            />
            <div className="absolute right-3 top-3 text-primary font-medium">
              {formatTime(timer)}
            </div>
          </div>
        </div>

        <div className="pt-6">
          <Button 
            onClick={handleVerifyCode}
            disabled={!isCodeValid || loading || timer === 0}
            className="w-full h-12 text-base font-medium"
          >
            {loading ? "확인 중..." : "확인"}
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}