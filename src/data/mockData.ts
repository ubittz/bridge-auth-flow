import { TermsAgreement } from '../types/auth';

export const emailDomains = [
  { value: 'gmail.com', label: 'gmail.com' },
  { value: 'naver.com', label: 'naver.com' },
  { value: 'daum.net', label: 'daum.net' },
  { value: 'hanmail.net', label: 'hanmail.net' },
  { value: 'yahoo.com', label: 'yahoo.com' },
  { value: 'hotmail.com', label: 'hotmail.com' },
  { value: 'custom', label: '직접 입력' }
];

export const termsAgreements: TermsAgreement[] = [
  {
    id: 'terms-of-use',
    title: '[필수] 이용약관 동의',
    required: true,
    content: `
제1조 (목적)
이 약관은 브릿지엠 서비스 이용에 관한 조건 및 절차와 회원과 회사의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.

제2조 (정의)
1. "서비스"라 함은 브릿지엠이 제공하는 모든 서비스를 의미합니다.
2. "회원"이라 함은 회사와 서비스 이용계약을 체결한 자를 말합니다.
    `,
    agreed: false
  },
  {
    id: 'personal-info',
    title: '[필수] 개인 정보 수집 및 이용',
    required: true,
    content: `
수집하는 개인정보 항목
- 필수항목: 이메일, 비밀번호, 이름, 생년월일, 성별, 휴대폰번호
- 선택항목: 마케팅 정보 수신 동의

개인정보의 수집 및 이용목적
- 서비스 제공 및 본인 확인
- 고객 상담 및 불만 처리
    `,
    agreed: false
  },
  {
    id: 'personal-info-third-party',
    title: '[필수] 개인 정보 위탁',
    required: true,
    content: `
개인정보 처리위탁 현황
회사는 서비스 향상을 위해 개인정보를 외부에 위탁하여 처리할 수 있습니다.

위탁업체 및 위탁업무 내용
- SMS 발송: 휴대폰 본인인증 및 알림톡 발송
- 클라우드 서비스: 데이터 보관 및 백업
    `,
    agreed: false
  },
  {
    id: 'marketing',
    title: '[선택] 마케팅 정보 활용',
    required: false,
    content: `
마케팅 활용 동의
- 새로운 서비스 및 이벤트 정보 안내
- 맞춤형 광고 및 콘텐츠 제공
- 서비스 이용 통계 분석

수신 방법
- 이메일, SMS, 앱 푸시 알림
    `,
    agreed: false
  },
  {
    id: 'location-based',
    title: '[선택] 위치 기반 서비스 동의',
    required: false,
    content: `
위치정보 수집 및 이용
- 현재 위치 기반 맞춤 서비스 제공
- 주변 정보 및 추천 서비스
- 위치 기반 이벤트 및 혜택 안내

위치정보 보유 및 이용기간
- 서비스 이용 종료 시까지
    `,
    agreed: false
  }
];

export const mockUsers = [
  {
    id: 'honggildong',
    email: 'honggildong@naver.com',
    name: '홍길동',
    phoneNumber: '010-1234-5678'
  }
];