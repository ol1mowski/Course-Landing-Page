import { toast } from 'react-hot-toast';

export const useToast = () => {
  const showSuccess = (message: string) => {
    toast.success(message, {
      duration: 3000,
      position: 'bottom-right'
    });
  };

  const showError = (message: string) => {
    toast.error(message, {
      duration: 5000,
      position: 'bottom-right'
    });
  };

  return { showSuccess, showError };
}; 