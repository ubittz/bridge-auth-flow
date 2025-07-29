import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileLayout } from "@/components/ui/mobile-layout";

const Index = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col items-center justify-center h-screen p-4 space-y-8">
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold">
            <span className="text-foreground">bridge</span>
            <span className="text-primary">M</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">환영합니다!</h1>
          <p className="text-muted-foreground">
            브릿지엠에 성공적으로 로그인하셨습니다.
          </p>
        </div>
        
        <Button 
          onClick={() => navigate('/login')}
          variant="outline"
          className="w-full max-w-xs h-12"
        >
          로그아웃
        </Button>
      </div>
    </MobileLayout>
  );
};

export default Index;
