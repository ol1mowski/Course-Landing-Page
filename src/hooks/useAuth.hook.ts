import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { API_CONFIG } from '../config/api.config';
import type { LoginFormData } from '../components/Login/LoginForm/loginForm.schema';

const login = async (data: LoginFormData) => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGIN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.error || 'Login failed');
  }

  return responseData;
};

export const useAuth = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      if (!response.success) {
        throw new Error('Login failed');
      }

      const { token, refreshToken } = response.data;

      // Zapisz tokeny
      localStorage.setItem('token', token);
      if (response.data.rememberMe) {
        localStorage.setItem('refreshToken', refreshToken);
      } else {
        sessionStorage.setItem('refreshToken', refreshToken);
      }

      navigate('/panel');
    },
  });

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error?.message || 'Wystąpił błąd podczas logowania',
    isError: mutation.isError,
  };
}; 