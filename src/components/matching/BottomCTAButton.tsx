import { Button } from '@/components/ui/button';

interface BottomCTAButtonProps {
  onClick: () => void;
  text?: string;
}

export function BottomCTAButton({ onClick, text = '견적 요청' }: BottomCTAButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100 z-40">
      <div className="mx-auto max-w-[420px]">
        <Button
          onClick={onClick}
          className="w-full h-12 text-base font-medium"
        >
          {text}
        </Button>
      </div>
    </div>
  );
}