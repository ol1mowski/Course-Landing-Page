import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../../hooks/useToast.hook';
import { API_CONFIG } from '../../../config/api.config';

export const useAccountDeletion = () => {
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  const handleDeleteAccount = useCallback(async () => {
    try {
      setIsDeletingAccount(true);
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PROFILE}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('Nie udało się usunąć konta');
      }

      localStorage.clear();
      sessionStorage.clear();
      showSuccess('Konto zostało usunięte');
      navigate('/logowanie');
    } catch (error) {
      showError('Nie udało się usunąć konta. Spróbuj ponownie.');
    } finally {
      setIsDeletingAccount(false);
      setShowDeleteConfirmation(false);
    }
  }, [navigate, showSuccess, showError]);

  return {
    showDeleteConfirmation,
    setShowDeleteConfirmation,
    isDeletingAccount,
    handleDeleteAccount
  };
}; 