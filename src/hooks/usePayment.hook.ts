import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import type { OrderFormData } from '../components/Payment/OrderForm/orderForm.types';
import { API_CONFIG } from '../config/api.config';

const processPayment = async (data: OrderFormData) => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PAYMENT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.error || 'Payment failed');
  }

  return responseData;
};

export const usePayment = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: processPayment,
    onSuccess: (response) => {

      if (!response.success) {
        throw new Error('Payment processing failed');
      }

      const { email, password, paymentToken } = response.data;

      if (!email || !password || !paymentToken) {
        throw new Error('Invalid response data');
      }

      sessionStorage.setItem('paymentToken', paymentToken);

      navigate('/sukces', { 
        state: { 
          email,
          password,
          paymentToken
        },
        replace: true
      });
    },
    onError: (error) => {
      console.error('Payment error:', error);
    }
  });

  return {
    processPayment: mutation.mutate,
    isProcessing: mutation.isPending,
    error: mutation.error?.message || 'Wystąpił błąd podczas przetwarzania płatności',
    isError: mutation.isError,
  };
}; 