// ============================================
// API Service — Axios Instance with Interceptors
// ============================================
// Centralized API client with CSRF-safe defaults.
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  withCredentials: true,                // Send HTTP-only cookies
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor — handle 401 globally
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // TODO: Attempt token refresh or redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
