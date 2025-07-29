import { UserProfile } from '@/data/myPageData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface ProfileHeaderProps {
  profile: UserProfile;
  onEditClick: () => void;
}

export function ProfileHeader({ profile, onEditClick }: ProfileHeaderProps) {
  return (
    <div className="bg-white p-6 text-center border-b border-gray-100">
      {/* 프로필 이미지 */}
      <div className="flex justify-center mb-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={profile.profileImage} alt={profile.name} />
          <AvatarFallback className="text-xl">{profile.name.substring(0, 1)}</AvatarFallback>
        </Avatar>
      </div>

      {/* 사용자 이름 */}
      <h2 className="text-xl font-medium text-foreground mb-4">{profile.name}</h2>

      {/* 내 정보 수정 버튼 */}
      <Button 
        variant="outline" 
        onClick={onEditClick}
        className="rounded-full px-6 py-2"
      >
        내 정보 수정
      </Button>
    </div>
  );
}