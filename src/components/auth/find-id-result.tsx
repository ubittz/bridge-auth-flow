import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { MobileLayout } from "../ui/mobile-layout";
import { MobileHeader } from "../ui/mobile-header";

export function FindIdResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const foundId = location.state?.foundId || 'honggildong';

  return (
    <MobileLayout>
      <MobileHeader 
        title="아이디 찾기" 
        onBack={() => navigate('/login')} 
      />
      
      <div className="p-4 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">
            회원님의 아이디는
          </h2>
          <h2 className="text-xl font-bold text-primary">
            {foundId}
          </h2>
          <h2 className="text-xl font-bold text-foreground">
            입니다.
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
            onClick={() => navigate('/find-password')}
            variant="outline"
            className="w-full h-12 text-base font-medium"
          >
            비밀번호 찾기
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}