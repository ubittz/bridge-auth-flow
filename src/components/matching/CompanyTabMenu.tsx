interface CompanyTabMenuProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function CompanyTabMenu({ activeTab, onTabChange }: CompanyTabMenuProps) {
  const tabs = [
    { id: 'details', name: '상세 정보' },
    { id: 'portfolio', name: '포트폴리오' },
    { id: 'reviews', name: '리뷰' },
    { id: 'inquiry', name: '문의' }
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