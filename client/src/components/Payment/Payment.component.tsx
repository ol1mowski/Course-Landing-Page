import { useState, useCallback } from "react";
import { motion } from "framer-motion";

import { containerVariants } from "../../animations/paymentAnimations";
import { useAnimationInView } from "../../hooks/useAnimationInView";
import type { PaymentFormsProps, PaymentMethodType } from "./Payment.types";
import type { OrderFormData } from "./OrderForm/orderForm.types";
import { usePayment } from "../../hooks/usePayment.hook";

import OrderForm from "./OrderForm/OrderForm.component";
import PaymentMethods from "./PaymentMethods/PaymentMethods.component";
import OrderSummary from "./OrderSummary/OrderSummary.component";
import PaymentError from "./PaymentError/PaymentError.component";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>("p24");
  const { ref, isInView } = useAnimationInView();
  const { processPayment, isProcessing, error, isError } = usePayment();

  const handlePayment = useCallback(async (data: OrderFormData) => {
    processPayment(data);
  }, [processPayment]);

  const handleMethodSelect = useCallback((method: PaymentMethodType) => {
    setSelectedMethod(method);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      {isError && error && <PaymentError message={error} onClose={() => window.location.reload()} />}
      
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