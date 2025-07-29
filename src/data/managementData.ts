// 통합관리 관련 Mock 데이터

export interface RequestItem {
  id: number;
  requestNumber: string;
  category: '제조' | '마케팅' | '디자인' | '콘텐츠';
  companyName: string;
  deliveryFormat: string;
  requestDate: string;
  budget: string;
  status: '진행중' | '완료' | '대기중';
}

export interface RequestDetail {
  id: number;
  requestNumber: string;
  category: string;
  companyInfo: {
    name: string;
    address: string;
    image: string;
  };
  requesterInfo: {
    name: string;
    contact: string;
    requestNumber: string;
  };
  paymentInfo: {
    paymentNumber: string;
    status: string;
    method: string;
    date: string;
  };
  finalAmount: number;
  contractInfo: {
    contractNumber: string;
    status: string;
    signDate: string;
    issuer: {
      name: string;
      address: string;
      representative: string;
      contact: string;
      email: string;
    };
    receiver: {
      name: string;
      address: string;
      representative: string;
      contact: string;
      email: string;
    };
  };
}

export interface ScheduleItem {
  id: number;
  title: string;
}

export interface FileItem {
  id: number;
  title: string;
  type: '파일' | '텍스트';
}

export interface FaqItem {
  id: number;
  title: string;
  date: string;
}

export interface NoticeItem {
  id: number;
  title: string;
  date: string;
}

// Mock 데이터
export const requestItems: RequestItem[] = [
  {
    id: 1,
    requestNumber: 'No.123456789',
    category: '제조',
    companyName: 'LG브릿지엠',
    deliveryFormat: '직접롬',
    requestDate: '2025-11-11',
    budget: '10,000,000원',
    status: '진행중'
  },
  {
    id: 2,
    requestNumber: 'No.123456789',
    category: '마케팅',
    companyName: '스냅에드',
    deliveryFormat: 'SNS',
    requestDate: '2025-11-11',
    budget: '10,000,000원',
    status: '완료'
  },
  {
    id: 3,
    requestNumber: 'No.123456789',
    category: '콘텐츠',
    companyName: '콘텐츠라우드',
    deliveryFormat: '영상 (30초)',
    requestDate: '2025-11-11',
    budget: '10,000,000원',
    status: '대기중'
  }
];

export const requestDetail: RequestDetail = {
  id: 1,
  requestNumber: '1234567890',
  category: '제조',
  companyInfo: {
    name: '스냅에드',
    address: '서울특별시 서초구 신반포로 49길 3',
    image: '/placeholder-company.jpg'
  },
  requesterInfo: {
    name: '홍길동',
    contact: '010-1234-5678',
    requestNumber: '123456'
  },
  paymentInfo: {
    paymentNumber: '-',
    status: '-',
    method: '-',
    date: '-'
  },
  finalAmount: 100000,
  contractInfo: {
    contractNumber: '1234567890',
    status: '완료',
    signDate: '2025-11-11',
    issuer: {
      name: '(주)브릿지엠',
      address: '부산광역시 사하구 장평로41번길 42(장림동) 3층 2호',
      representative: '홍길동',
      contact: '010-1234-5678',
      email: 'abcd@naver.com'
    },
    receiver: {
      name: '스냅에드',
      address: '서울특별시 서초구 신반포로 49길 3',
      representative: '홍길동',
      contact: '010-1234-5678',
      email: 'abcd@naver.com'
    }
  }
};

export const scheduleItems: ScheduleItem[] = [
  { id: 7, title: '요청서 전달 요청 범위 및 레퍼런스 공유' },
  { id: 6, title: '기획안 제출 기획 제안서, 견적서, 일정표 확인' },
  { id: 5, title: '계약체결 계약서 작성 및 서명 지급' },
  { id: 4, title: '1차 시안 기획안 기반 1차 디자인/콘텐츠' },
  { id: 3, title: '피드백 반영 최종안 제출' },
  { id: 2, title: '최종납품 원본/포맷별 납품물 전달' },
  { id: 1, title: '잔금 지급 최종 확인 후 정산' }
];

export const fileItems: FileItem[] = [
  { id: 4, title: '최종납품_납품물(파일)', type: '파일' },
  { id: 3, title: '최종안', type: '텍스트' },
  { id: 2, title: '1차 시안', type: '텍스트' },
  { id: 1, title: '기획 제안서, 견적서, 일정표', type: '텍스트' }
];

export const faqItems: FaqItem[] = [
  { id: 1, title: '제품 안내', date: '2025.06.13' },
  { id: 2, title: '서비스 점검 안내', date: '2025.06.13' },
  { id: 3, title: '변경 기능 이벤트 안내', date: '2025.06.13' },
  { id: 4, title: 'BridgeM 런칭 안내', date: '2025.06.13' }
];

export const noticeItems: NoticeItem[] = [
  { id: 1, title: '제품 안내', date: '2025.06.13' },
  { id: 2, title: '서비스 점검 안내', date: '2025.06.13' },
  { id: 3, title: '변경 기능 이벤트 안내', date: '2025.06.13' },
  { id: 4, title: 'BridgeM 런칭 안내', date: '2025.06.13' }
];