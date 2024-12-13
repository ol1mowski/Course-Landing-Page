import { useState, useCallback } from "react";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import { containerVariants } from "../../animations/paymentAnimations";
import { useAnimationInView } from "../../hooks/useAnimationInView";
import type { PaymentFormsProps, PaymentMethodType } from "./Payment.types";
import type { OrderFormData } from "./OrderForm/orderForm.types";

import OrderForm from "./OrderForm/OrderForm.component";
import PaymentMethods from "./PaymentMethods/PaymentMethods.component";
import OrderSummary from "./OrderSummary/OrderSummary.component";
import PaymentError from "./PaymentError/PaymentError.component";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>("p24");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { ref, isInView } = useAnimationInView();

  const handlePayment = useCallback(async (data: OrderFormData) => {
    setIsProcessing(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const successToken = Date.now().toString();
      localStorage.setItem('payment_success', successToken);
      navigate('/sukces', { 
        state: { 
          email: data.email,
          token: successToken
        }
      });
    } catch (error) {
      console.error('Payment failed:', error);
      setError('Wystąpił błąd podczas przetwarzania płatności. Spróbuj ponownie później.');
    } finally {
      setIsProcessing(false);
    }
  }, [navigate]);

  const handleMethodSelect = useCallback((method: PaymentMethodType) => {
    setSelectedMethod(method);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      {error && <PaymentError message={error} onClose={() => setError(null)} />}
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <PaymentForms 
            onSubmit={handlePayment}
            selectedMethod={selectedMethod}
            onMethodSelect={handleMethodSelect}
          />

          <div className="lg:sticky lg:top-8 h-fit">
            <OrderSummary isProcessing={isProcessing} />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

const PaymentForms = ({ 
  onSubmit, 
  selectedMethod, 
  onMethodSelect 
}: PaymentFormsProps) => (
  <div className="space-y-8">
    <OrderForm onSubmit={onSubmit} />
    <PaymentMethods
      selectedMethod={selectedMethod}
      onMethodSelect={onMethodSelect}
    />
  </div>
);

export default Payment; 