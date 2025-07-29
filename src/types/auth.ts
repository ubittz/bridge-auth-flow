export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignUpFormData {
  id: string;
  password: string;
  confirmPassword: string;
  name: string;
  birthDate: string;
  gender: 'male' | 'female';
  phoneNumber: string;
}

export interface EmailVerificationData {
  email: string;
  domain: string;
  verificationCode: string;
}

export interface TermsAgreement {
  id: string;
  title: string;
  required: boolean;
  content: string;
  agreed: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phoneNumber: string;
}