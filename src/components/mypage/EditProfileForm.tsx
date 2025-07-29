import { useState } from 'react';
import { UserProfile } from '@/data/myPageData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Camera } from 'lucide-react';

interface EditProfileFormProps {
  profile: UserProfile;
  onSave: (data: Partial<UserProfile>) => void;
}

export function EditProfileForm({ profile, onSave }: EditProfileFormProps) {
  const [formData, setFormData] = useState({
    name: profile.name,
    password: '',
    confirmPassword: '',
    phone: profile.phone,
    emailLocal: profile.email.split('@')[0],
    emailDomain: profile.email.split('@')[1],
    verificationCode: ''
  });

  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState('02:59');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleVerify = () => {
    // 인증 로직 구현
    console.log('인증 요청');
    setIsVerified(true);
  };

  const handleConfirmVerify = () => {
    // 인증 확인 로직 구현
    console.log('인증 확인');
  };

  const handleSave = () => {
    const email = `${formData.emailLocal}@${formData.emailDomain}`;
    onSave({
      name: formData.name,
      phone: formData.phone,
      email: email
    });
  };

  return (
    <div className="bg-white p-4 space-y-6">
      {/* 프로필 이미지 변경 */}
      <div className="flex flex-col items-center space-y-3">
        <div className="relative">
          <Avatar className="w-20 h-20">
            <AvatarImage src={profile.profileImage} alt={profile.name} />
            <AvatarFallback className="text-xl">{profile.name.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <button className="absolute -bottom-1 -right-1 bg-gray-100 rounded-full p-2 border border-gray-200">
            <Camera className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
        <Button variant="outline" size="sm" className="rounded-full">
          사진 변경
        </Button>
      </div>

      {/* 이름 */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">이름</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder="홍길동"
        />
      </div>

      {/* 아이디 (비활성화) */}
      <div className="space-y-2">
        <Label htmlFor="userId" className="text-sm font-medium text-foreground">아이디</Label>
        <Input
          id="userId"
          value={profile.userId}
          disabled
          className="bg-gray-50 text-muted-foreground"
        />
        <p className="text-xs text-muted-foreground">*아이디는 수정이 불가능합니다.</p>
      </div>

      {/* 비밀번호 */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-foreground">비밀번호</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          placeholder="비밀번호를 입력해 주세요."
        />
      </div>

      <div className="space-y-2">
        <Input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          placeholder="비밀번호를 한 번 더 입력해 주세요."
        />
      </div>

      {/* 휴대전화 번호 */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-foreground">휴대전화 번호</Label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="010-1234-5678"
        />
      </div>

      {/* 이메일 */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">이메일</Label>
        <div className="flex items-center space-x-2">
          <Input
            value={formData.emailLocal}
            onChange={(e) => handleInputChange('emailLocal', e.target.value)}
            placeholder="honggildong123"
            className="flex-1"
          />
          <span className="text-muted-foreground">@</span>
          <Select value={formData.emailDomain} onValueChange={(value) => handleInputChange('emailDomain', value)}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
              <SelectItem value="naver.com">naver.com</SelectItem>
              <SelectItem value="gmail.com">gmail.com</SelectItem>
              <SelectItem value="daum.net">daum.net</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="sm"
            onClick={handleVerify}
            className="whitespace-nowrap"
          >
            인증 전송
          </Button>
        </div>
      </div>

      {/* 인증번호 입력 */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Input
            value={formData.verificationCode}
            onChange={(e) => handleInputChange('verificationCode', e.target.value)}
            placeholder="인증번호를 입력해 주세요."
            className="flex-1"
          />
          <span className="text-sm text-primary font-medium min-w-[40px]">{timer}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleConfirmVerify}
            className="whitespace-nowrap"
          >
            {isVerified ? '인증 확인' : '인증 확인'}
          </Button>
        </div>
      </div>

      {/* 완료 버튼 */}
      <div className="pt-4">
        <Button onClick={handleSave} className="w-full h-12">
          완료
        </Button>
      </div>
    </div>
  );
}