import axios from 'axios';
import { LoginFormData, SignUpFormData, EmailVerificationData } from '../types/auth';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API endpoints
export const authApi = {
  // Login
  login: async (data: LoginFormData) => {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  // Sign up
  signUp: async (data: SignUpFormData) => {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  // Check ID availability
  checkIdAvailability: async (id: string) => {
    const response = await api.get(`/auth/check-id/${id}`);
    return response.data;
  },

  // Send email verification
  sendEmailVerification: async (email: string) => {
    const response = await api.post('/auth/send-verification', { email });
    return response.data;
  },

  // Verify email code
  verifyEmailCode: async (data: EmailVerificationData) => {
    const response = await api.post('/auth/verify-email', data);
    return response.data;
  },

  // Find ID by email
  findIdByEmail: async (email: string) => {
    const response = await api.post('/auth/find-id', { email });
    return response.data;
  },

  // Reset password
  resetPassword: async (email: string, newPassword: string, verificationCode: string) => {
    const response = await api.post('/auth/reset-password', {
      email,
      newPassword,
      verificationCode
    });
    return response.data;
  },

  // Send password reset email
  sendPasswordResetEmail: async (email: string) => {
    const response = await api.post('/auth/send-password-reset', { email });
    return response.data;
  },

  // Logout
  logout: async () => {
    const response = await api.post('/auth/logout');
    localStorage.removeItem('authToken');
    return response.data;
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  }
};

export default api;