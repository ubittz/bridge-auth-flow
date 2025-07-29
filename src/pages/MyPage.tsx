import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/ui/mobile-layout';
import { ProfileHeader } from '@/components/mypage/ProfileHeader';
import { SettingMenuList } from '@/components/mypage/SettingMenuList';
import { CompanyFooter } from '@/components/home/CompanyFooter';
import { userProfile } from '@/data/myPageData';

export default function MyPage() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/my/edit-profile');
  };

  const handleDownload = () => {
    console.log('표준 견적서 다운로드');
    // 다운로드 로직 구현
  };

  const handleInquiry = () => {
    navigate('/my/inquiry');
  };

  const handleLogout = () => {
    console.log('로그아웃');
    // 로그아웃 로직 구현
    navigate('/login');
  };

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-screen">
        {/* 상단 타이틀 */}
        <div className="bg-white p-4 border-b border-gray-100">
          <h1 className="text-xl font-bold text-foreground">My</h1>
        </div>

        {/* 프로필 헤더 */}
        <ProfileHeader 
          profile={userProfile} 
          onEditClick={handleEditProfile}
        />

        {/* 메뉴 리스트 */}
        <div className="flex-1 mt-8">
          <SettingMenuList
            onDownloadClick={handleDownload}
            onInquiryClick={handleInquiry}
            onLogoutClick={handleLogout}
          />
        </div>

        {/* 회사 정보 푸터 */}
        <CompanyFooter />
      </div>
    </MobileLayout>
  );
}