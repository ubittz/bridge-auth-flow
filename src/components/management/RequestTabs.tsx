interface RequestTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function RequestTabs({ activeTab, onTabChange }: RequestTabsProps) {
  const tabs = [
    { id: 'basic', name: '기본 정보' },
    { id: 'contract', name: '계약' },
    { id: 'schedule', name: '일정' },
    { id: 'files', name: '공유함' }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
              activeTab === tab.id
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}