import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

interface MobileHeaderProps {
  title: string;
  onBack?: () => void;
  showBackButton?: boolean;
}

export function MobileHeader({ 
  title, 
  onBack, 
  showBackButton = true 
}: MobileHeaderProps) {
  const navigate = useNavigate();
  
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleBack}
            className="p-0 w-6 h-6"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        )}
        <h1 className="text-lg font-medium text-foreground">{title}</h1>
      </div>
    </header>
  );
}