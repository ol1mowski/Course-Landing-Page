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
    throw new Error(responseData.error || 'Nieprawidłowy email lub hasło');
  }

  return responseData;
};

export const useAuth = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      if (!response.success) {
        throw new Error('Logowanie nie powiodło się');
      }

      const { token, refreshToken, rememberMe } = response.data;

      // Zapisz tokeny
      localStorage.setItem('token', token);
      if (rememberMe) {
        localStorage.setItem('refreshToken', refreshToken);
      } else {
        sessionStorage.setItem('refreshToken', refreshToken);
      }

      // Zapisz dane użytkownika
      localStorage.setItem('user', JSON.stringify({
        id: response.data.id,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName
      }));

      navigate('/mojekonto');
    },
    onError: (error) => {
      console.error('Login error:', error);
    }
  });

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error?.message || 'Wystąpił błąd podczas logowania',
    isError: mutation.isError,
  };
}; 