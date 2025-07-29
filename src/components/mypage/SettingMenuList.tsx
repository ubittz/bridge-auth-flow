import { ChevronRight, Download, MessageCircle, LogOut } from 'lucide-react';

interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface SettingMenuListProps {
  onDownloadClick: () => void;
  onInquiryClick: () => void;
  onLogoutClick: () => void;
}

export function SettingMenuList({ onDownloadClick, onInquiryClick, onLogoutClick }: SettingMenuListProps) {
  const menuItems: MenuItem[] = [
    {
      id: 'download',
      title: '표준 견적서 양식 다운로드',
      icon: <Download className="w-5 h-5 text-muted-foreground" />,
      onClick: onDownloadClick
    },
    {
      id: 'inquiry',
      title: '1:1 문의',
      icon: <MessageCircle className="w-5 h-5 text-muted-foreground" />,
      onClick: onInquiryClick
    },
    {
      id: 'logout',
      title: '로그아웃',
      icon: <LogOut className="w-5 h-5 text-muted-foreground" />,
      onClick: onLogoutClick
    }
  ];

  return (
    <div className="bg-white">
      {menuItems.map((item, index) => (
        <div key={item.id}>
          <button
            onClick={item.onClick}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              {item.icon}
              <span className="text-foreground font-medium">{item.title}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          {index < menuItems.length - 1 && (
            <div className="border-b border-gray-100 mx-4" />
          )}
        </div>
      ))}
    </div>
  );
}