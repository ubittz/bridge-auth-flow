// 매칭 관련 mock 데이터
export const categories = [
  { id: 'all', name: '전체' },
  { id: 'manufacturing', name: '제조' },
  { id: 'marketing', name: '마케팅' },
  { id: 'design', name: '디자인' },
  { id: 'content', name: '콘텐츠' }
];

export const subCategories = {
  manufacturing: [
    { id: 'all', name: '전체' },
    { id: 'bag', name: '가방' },
    { id: 'shoes', name: '신발' },
    { id: 'accessories', name: '악세서리' },
    { id: 'etc', name: '기타' }
  ],
  design: [
    { id: 'all', name: '전체' },
    { id: 'brand', name: '브랜드' },
    { id: 'product', name: '제품' },
    { id: 'package', name: '패키지' },
    { id: 'web', name: '웹/모바일' }
  ],
  content: [
    { id: 'all', name: '전체' },
    { id: 'video', name: '영상' },
    { id: 'photo', name: '사진' },
    { id: 'writing', name: '원고' },
    { id: 'marketing', name: '마케팅' }
  ]
};

export const sortFilters = [
  { id: 'region', name: '지역별' },
  { id: 'moq', name: 'MOQ' },
  { id: 'price', name: '단가' },
  { id: 'leadtime', name: '리드타임' }
];

export const companies = [
  {
    id: 1,
    name: '네오팩토리',
    category: 'manufacturing',
    subCategory: 'bag',
    type: '제조',
    address: '서울특별시 금천구 가산디지털로1로 128',
    phone: '02-428-1711',
    rating: 5.0,
    reviewCount: 999,
    coverImage: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0',
    logo: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=100&h=100&fit=crop&crop=center'
  },
  {
    id: 2,
    name: '마케트리',
    category: 'marketing',
    type: '마케팅',
    address: '부산광역시 해운대구 센텀서로 39',
    phone: '051-123-4567',
    rating: 4.8,
    reviewCount: 245,
    coverImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&crop=center'
  },
  {
    id: 3,
    name: '브랜딩아틀리에',
    category: 'design',
    type: '디자인',
    address: '서울특별시 마포구 성미산로 55',
    phone: '02-567-8901',
    rating: 4.9,
    reviewCount: 123,
    coverImage: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c',
    logo: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=100&h=100&fit=crop&crop=center'
  },
  {
    id: 4,
    name: '아이디어스퀘어',
    category: 'design',
    type: '디자인',
    address: '인천광역시 연수구 송도과학로 32',
    phone: '032-345-6789',
    rating: 4.7,
    reviewCount: 89,
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop&crop=center'
  },
  {
    id: 5,
    name: '디자인비엔드',
    category: 'design',
    type: '디자인',
    address: '경기도 성남시 분당구 정자일로 120',
    phone: '031-789-0123',
    rating: 4.6,
    reviewCount: 67,
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=center'
  },
  {
    id: 6,
    name: '콘텐츠 리코드',
    category: 'content',
    type: '콘텐츠',
    address: '서울특별시 성동구 왕십리로 66',
    phone: '02-428-1711',
    rating: 5.0,
    reviewCount: 999,
    coverImage: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    logo: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=100&h=100&fit=crop&crop=center'
  },
  {
    id: 7,
    name: '스토리웨이브',
    category: 'content',
    type: '콘텐츠',
    address: '서울특별시 종로구 자하문로 12길 3',
    phone: '02-987-6543',
    rating: 4.8,
    reviewCount: 156,
    coverImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop&crop=center'
  },
  {
    id: 8,
    name: '메이커필름',
    category: 'content',
    type: '콘텐츠',
    address: '경기도 수원시 영통구 광교로 156',
    phone: '031-456-7890',
    rating: 4.9,
    reviewCount: 234,
    coverImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=center'
  }
];

export const portfolios = [
  {
    id: 1,
    companyId: 6,
    title: '브랜드 필름 - 에코라이프 캠페인',
    description: '지속 가능한 소비를 추구하는 친환경 브랜드의 영상 제작. 드론/인물/내레이션 중심...',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop'
  },
  {
    id: 2,
    companyId: 6,
    title: '제품 소개 영상 - 스냅핏 진공 블렌...',
    description: '제품의 핵심 기능을 강조한 모션그래픽 기반 영상 콘텐츠 제작.',
    thumbnail: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=300&h=200&fit=crop'
  },
  {
    id: 3,
    companyId: 6,
    title: '이벤트 하이라이트 - 2024 뷰티...',
    description: '행사 전 과정 촬영 및 스케치 클립 구성, 스포츠 브랜드 삽입',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop'
  }
];

export const reviews = [
  {
    id: 1,
    companyId: 6,
    userId: 'suji****',
    rating: 5,
    content: '요청 사항에 대한 이해도가 높고 피드백 반영도 빨라서 정말 만족스러웠습니다. 특히 영상 편집 감각이 뛰어나고, 브랜드 컬러를 잘 살려서 재작업 없이 바로 사용했어요.',
    date: '2025.06.23'
  },
  {
    id: 2,
    companyId: 6,
    userId: 'hanj****',
    rating: 4,
    content: '대중 만족도도 정말히 브랜드 톤앤매너를 계차해서 놀랐어요. 이미지 콘텐츠도 전체적으로 감각 있고, SNS 반응도 좋아서 내부 팀 분위기도 올라갔습니다.',
    date: '2025.06.22'
  },
  {
    id: 3,
    companyId: 6,
    userId: 'min9****',
    rating: 5,
    content: '빠른한 일정이었는데 약속한 시간에 맞춰서 컬라볼을 받아볼 수 있었고, 퀄리티도 기대 이상이었어요. 앞으로도 정기 콘텐츠는 여기랑만 작업하려고요.',
    date: '2025.06.22'
  }
];

export const inquiries = [
  {
    id: 1,
    companyId: 6,
    userId: 'jung****',
    type: 'question' as const,
    content: 'Q. 영상 제작 시 레퍼런스가 없어도 컨셉 제안부터 가능할까요?',
    date: '2025.06.23'
  },
  {
    id: 2,
    companyId: 6,
    userId: 'hee0****',
    type: 'question' as const,
    content: 'Q. SNS 콘텐츠 패키지는 어떤 식으로 구성되나요?',
    date: '2025.06.22'
  },
  {
    id: 3,
    companyId: 6,
    userId: 'hee0****',
    type: 'answer' as const,
    content: 'A. 안녕하세요! SNS 콘텐츠는 이미지 + 카피 + 일정표 포함된 패키지로 구성되며, 요청 시 사전기획 회의도 함께 진행됩니다 :)',
    date: '2025.06.22'
  }
];

export const inquiryTypes = [
  { id: 'service', name: '서비스 이용 문의' },
  { id: 'price', name: '가격 문의' },
  { id: 'schedule', name: '일정 문의' },
  { id: 'portfolio', name: '포트폴리오 문의' },
  { id: 'etc', name: '기타' }
];