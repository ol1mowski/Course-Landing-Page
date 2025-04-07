import { OrderFormData } from "./OrderForm/orderForm.types";

export type PaymentMethodType = "p24"; 

export type PaymentFormsProps = {
  onSubmit: (data: OrderFormData) => Promise<void>;
  selectedMethod: PaymentMethodType;
  onMethodSelect: (method: PaymentMethodType) => void;
};