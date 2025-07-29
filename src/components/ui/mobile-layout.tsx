import { ReactNode } from "react";
import { MobileHeader } from "./mobile-header";

interface MobileLayoutProps {
  children: ReactNode;
  className?: string;
  title?: string;
  showBackButton?: boolean;
}

export function MobileLayout({ children, className = "", title, showBackButton }: MobileLayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <div className="mx-auto max-w-[420px] bg-white min-h-screen">
        {(title || showBackButton) && (
          <MobileHeader title={title} showBackButton={showBackButton} />
        )}
        {children}
      </div>
    </div>
  );
}