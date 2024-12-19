import { OFFER_DETAILS } from "../../../../data/Offer.data";

type PaymentButtonProps = {
  amount: number;
  isFormValid?: boolean;
  isProcessing?: boolean;
};

const PaymentButton = ({ 
  amount, 
  isFormValid = true, 
  isProcessing = false 
}: PaymentButtonProps) => (
  <button
    data-testid="payment-button"
    type="submit"
    form="payment-form"
    disabled={!isFormValid || isProcessing}
    className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isProcessing ? (
      <div className="flex items-center justify-center">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Przetwarzanie...
      </div>
    ) : (
      `Zapłać ${amount} ${OFFER_DETAILS.currency}`
    )}
  </button>
);

export default PaymentButton; 