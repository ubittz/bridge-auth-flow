export function PromotionBanner() {
  return (
    <div className="px-4 mb-6">
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-sm opacity-90 mb-1">브랜드 매칭 플랫폼 도입하기!</p>
          <h3 className="text-lg font-bold">BridgeM과 함께하세요!</h3>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">💼</span>
          </div>
        </div>
        
        <div className="absolute -right-6 -top-6 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute -right-2 -bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
    </div>
  );
}