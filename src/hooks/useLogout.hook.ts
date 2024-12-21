import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { API_CONFIG } from '../config/api.config';

const logout = async () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken') || 
                      sessionStorage.getItem('refreshToken');

  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGOUT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ refreshToken })
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || 'Błąd wylogowania');
  }

  return response.json();
};

export const useLogout = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // Wyczyść dane użytkownika
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      sessionStorage.removeItem('refreshToken');

      navigate('/logowanie');
    },
    onError: (error) => {
      console.error('Logout error:', error);
      // Nawet w przypadku błędu, wyczyść dane i przekieruj
      localStorage.clear();
      sessionStorage.clear();
      navigate('/logowanie');
    }
  });

  return {
    logout: mutation.mutate,
    isLoading: mutation.isPending
  };
}; 