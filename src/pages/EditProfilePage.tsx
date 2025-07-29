import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/ui/mobile-layout';
import { EditProfileForm } from '@/components/mypage/EditProfileForm';
import { userProfile } from '@/data/myPageData';

export default function EditProfilePage() {
  const navigate = useNavigate();

  const handleSave = (data: any) => {
    console.log('프로필 저장:', data);
    // API 호출 로직 구현
    navigate('/my');
  };

  return (
    <MobileLayout title="내 정보 수정" showBackButton>
      <div className="flex flex-col min-h-screen">
        <EditProfileForm 
          profile={userProfile}
          onSave={handleSave}
        />
      </div>
    </MobileLayout>
  );
}