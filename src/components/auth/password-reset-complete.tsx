import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { MobileLayout } from "../ui/mobile-layout";
import { MobileHeader } from "../ui/mobile-header";

export function PasswordResetComplete() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <MobileHeader 
        title="비밀번호 찾기" 
        onBack={() => navigate('/login')} 
      />
      
      <div className="p-4 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">
            비밀번호 설정이 완료되었습니다.
          </h2>
          <h2 className="text-xl font-bold text-foreground">
            다시 로그인해 주세요.
          </h2>
        </div>

        <div className="space-y-3">
          <Button 
            onClick={() => navigate('/login')}
            className="w-full h-12 text-base font-medium"
          >
            로그인 하기
          </Button>
          <Button 
            onClick={() => navigate('/find-id')}
            variant="outline"
            className="w-full h-12 text-base font-medium"
          >
            아이디 찾기
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}