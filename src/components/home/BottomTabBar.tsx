import { Home, Users, Clipboard, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { tabMenus } from '@/data/homeData';

const iconMap = {
  home: Home,
  users: Users,
  folder: Clipboard,
  user: User
};

export function BottomTabBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="mx-auto max-w-[420px] bg-white">
        <div className="grid grid-cols-4">
          {tabMenus.map((tab) => {
            const Icon = iconMap[tab.icon as keyof typeof iconMap];
            const isActive = location.pathname === tab.path;
            
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.path)}
                className={`flex flex-col items-center py-2 px-1 ${
                  isActive ? 'text-primary' : 'text-gray-500'
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{tab.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}