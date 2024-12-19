import { OFFER_DETAILS } from "../../../../data/Offer.data";

type PaymentButtonProps = {
  amount: number;
  isFormValid?: boolean;
};

const PaymentButton = ({ amount, isFormValid = true }: PaymentButtonProps) => (
  <button
    data-testid="payment-button"
    type="submit"
    form="payment-form"
    disabled={!isFormValid}
    className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    Zapłać {amount} {OFFER_DETAILS.currency}
  </button>
);

export default PaymentButton; 