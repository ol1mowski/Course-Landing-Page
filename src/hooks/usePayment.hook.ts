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

  if (!response.ok) {
    const error = await response.json();
    if (error.errors) {
      throw new Error(error.errors[0].message);
    }
    throw new Error(error.error || 'Payment failed');
  }

  return response.json();
};

export const usePayment = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: processPayment,
    onSuccess: (data) => {
      if (!data.success) {
        console.log('No success flag in response');
        throw new Error('Payment processing failed');
      }
      navigate('/sukces', { 
        state: { 
          email: data.data.email,
          password: data.data.password
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