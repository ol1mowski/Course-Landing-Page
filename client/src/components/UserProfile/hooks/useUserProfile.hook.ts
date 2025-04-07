import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { API_CONFIG } from '../../../config/api.config';
import { UserData } from '../types';

export const useUserProfile = () => {
  const queryClient = useQueryClient();
  const USER_PROFILE_KEY = ['userProfile'];

  const { data: userData, isLoading } = useQuery({
    queryKey: USER_PROFILE_KEY,
    queryFn: async () => {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ME}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('Nie udało się pobrać danych użytkownika');
      }

      return response.json();
    }
  });

  const updateProfileMutation = useMutation({
    mutationFn: async (data: Partial<UserData>) => {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PROFILE}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(data)
        }
      );

      if (!response.ok) {
        throw new Error('Nie udało się zaktualizować danych');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USER_PROFILE_KEY });
    }
  });

  return {
    userData: userData?.data,
    isLoading,
    updateProfile: updateProfileMutation.mutate,
    isUpdating: updateProfileMutation.isPending
  };
}; 