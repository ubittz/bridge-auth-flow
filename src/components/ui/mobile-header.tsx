import { ArrowLeft } from "lucide-react";
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
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onBack}
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