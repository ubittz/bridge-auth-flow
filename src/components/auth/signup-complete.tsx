import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { MobileLayout } from "../ui/mobile-layout";
import { Dialog, DialogContent } from "../ui/dialog";
import { useState, useEffect } from "react";

export function SignUpComplete() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleLogin = () => {
    setShowModal(false);
    navigate('/login');
  };

  return (
    <MobileLayout>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="w-[90%] max-w-sm mx-auto rounded-xl p-0 overflow-hidden">
          <div className="p-8 text-center space-y-6">
            <h2 className="text-xl font-bold text-foreground">
              회원가입을 축하합니다.
            </h2>
            <p className="text-muted-foreground">
              이제 브릿지엠과 함께 특별한
              <br />
              순간을 만나보세요!
            </p>
            <Button 
              onClick={handleLogin}
              className="w-full h-12 text-base font-medium"
            >
              로그인
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </MobileLayout>
  );
}