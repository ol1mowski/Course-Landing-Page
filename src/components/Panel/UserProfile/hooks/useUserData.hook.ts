import { useState, useEffect } from 'react';
import { API_CONFIG } from '../../../../config/api.config';

export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  nip: string;
};

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ME}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Nie udało się pobrać danych użytkownika');
        }

        const data = await response.json();
        setUserData(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Wystąpił błąd');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const updateUserData = async (newData: Partial<UserData>) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PROFILE}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });

      if (!response.ok) {
        throw new Error('Nie udało się zaktualizować danych');
      }

      const data = await response.json();
      setUserData(data.data);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystąpił błąd');
      return false;
    }
  };

  return { userData, isLoading, error, updateUserData };
}; 