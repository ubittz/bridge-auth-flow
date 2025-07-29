import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
  className?: string;
}

export function MobileLayout({ children, className = "" }: MobileLayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <div className="mx-auto max-w-[420px] bg-white min-h-screen">
        {children}
      </div>
    </div>
  );
}