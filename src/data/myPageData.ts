// 마이페이지 관련 Mock 데이터

export interface UserProfile {
  id: number;
  name: string;
  userId: string;
  email: string;
  phone: string;
  profileImage: string;
}

export interface InquiryType {
  id: string;
  name: string;
}

export interface InquiryItem {
  id: number;
  type: string;
  title: string;
  content: string;
  status: '답변완료' | '답변대기';
  createdAt: string;
  answer?: {
    title: string;
    content: string;
    createdAt: string;
  };
}

// Mock 데이터
export const userProfile: UserProfile = {
  id: 1,
  name: '홍길동',
  userId: 'honggildong123',
  email: 'honggildong123@naver.com',
  phone: '010-1234-5678',
  profileImage: '/placeholder-profile.jpg'
};

export const inquiryTypes: InquiryType[] = [
  { id: 'all', name: '전체' },
  { id: 'service', name: '서비스 이용 문의' },
  { id: 'withdrawal', name: '탈퇴 문의' },
  { id: 'refund', name: '환불 문의' }
];

export const inquiryItems: InquiryItem[] = [
  {
    id: 1,
    type: '답변완료',
    title: '문의 제목입니다.',
    content: '문의하실 내용을 입력해 주세요.',
    status: '답변완료',
    createdAt: '2025.05.05',
    answer: {
      title: "'결제가 두 번 진행되었습니다...'의 답변입니다.",
      content: `안녕하세요, 고객님.

먼저, 결제 관련하여 볼편을 드린 점 진심으로 죄송합니다.

고객님께서 말씀하신 결제가 두 번된 건에 대하여 시스템 결제 내역을 확인한 결과, 해당 결제는 중복 결제된 부분이 맞는 것 같습니다. 현재 백그라 처리 중이며, 추가 결제 금액은 최대한 빠른 환불 절차를 진행해 드리겠습니다.

환불 진행 사항:
1. 환불은 영업일 기준 3~5일 내에 처리될 예정입니다.
2. 환불이 완료되면, 회원님의 휴대전화번호와 이메일 주소로 바로 안내 차 연락 보내드리겠습니다.

혹시 더 궁금한 사항이나 추가 도움이 필요하시면, 언제든지 문의해 주세요. 다시 한 번 불편을 드려 죄송합니다.

감사합니다.`,
      createdAt: '2025.05.22 (화)'
    }
  },
  {
    id: 2,
    type: '답변대기',
    title: '문의 제목입니다.',
    content: '문의하실 내용을 입력해 주세요.',
    status: '답변대기',
    createdAt: '2025.05.05'
  }
];