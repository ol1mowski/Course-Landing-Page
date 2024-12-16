import { OFFER_DETAILS } from "../../../../data/Offer.data";

type PaymentButtonProps = {
  amount: number;
};

const PaymentButton = ({ amount }: PaymentButtonProps) => (
  <button
    data-testid="payment-button"
    type="submit"
    className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 mt-6"
  >
    Zapłać {amount} {OFFER_DETAILS.currency}
  </button>
);

export default PaymentButton; 