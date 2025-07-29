import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/ui/mobile-layout';
import { CategoryDropdown } from '@/components/matching/CategoryDropdown';
import { SubFilterTabs } from '@/components/matching/SubFilterTabs';
import { SortFilterButtons } from '@/components/matching/SortFilterButtons';
import { MatchingCard } from '@/components/matching/MatchingCard';
import { BottomTabBar } from '@/components/home/BottomTabBar';
import { companies } from '@/data/matchingData';

export default function MatchingListPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // 필터링된 업체 목록
  const filteredCompanies = useMemo(() => {
    return companies.filter(company => {
      if (selectedCategory === 'all') return true;
      return company.category === selectedCategory;
    });
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubCategory('all');
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const handleCompanyClick = (companyId: number) => {
    navigate(`/matching/${companyId}`);
  };

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-screen">
        {/* 카테고리 드롭다운 */}
        <CategoryDropdown
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* 서브 카테고리 탭 */}
        {selectedCategory !== 'all' && (
          <SubFilterTabs
            category={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            onSubCategoryChange={setSelectedSubCategory}
          />
        )}

        {/* 정렬/필터 버튼 */}
        <SortFilterButtons
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />

        {/* 결과 수 */}
        <div className="bg-white px-4 py-3 border-b border-gray-100">
          <span className="text-sm text-gray-600">
            총 {filteredCompanies.length}개
          </span>
        </div>

        {/* 업체 리스트 */}
        <div className="flex-1 bg-white">
          {filteredCompanies.map((company) => (
            <MatchingCard
              key={company.id}
              company={company}
              onClick={handleCompanyClick}
            />
          ))}
        </div>

        {/* 하단 여백 (탭바 공간) */}
        <div className="h-20" />
      </div>

      {/* 하단 탭바 */}
      <BottomTabBar />
    </MobileLayout>
  );
}