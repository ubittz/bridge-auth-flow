import { User } from "lucide-react";
import { MobileLayout } from "@/components/ui/mobile-layout";
import { RequestStatusGrid } from "@/components/home/RequestStatusGrid";
import { PromotionBanner } from "@/components/home/PromotionBanner";
import { MatchingCardList } from "@/components/home/MatchingCardList";
import { PortfolioCarousel } from "@/components/home/PortfolioCarousel";
import { NoticeList } from "@/components/home/NoticeList";
import { CompanyFooter } from "@/components/home/CompanyFooter";
import { BottomTabBar } from "@/components/home/BottomTabBar";

const Index = () => {
  return (
    <MobileLayout>
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
        <div className="text-2xl font-bold">
          <span className="text-foreground">bridge</span>
          <span className="text-primary">M</span>
        </div>
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-600" />
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gray-50 min-h-screen">
        <RequestStatusGrid />
        <PromotionBanner />
        <MatchingCardList />
        <PortfolioCarousel />
        <NoticeList />
        <CompanyFooter />
      </main>

      {/* Bottom Tab Bar */}
      <BottomTabBar />
    </MobileLayout>
  );
};

export default Index;
