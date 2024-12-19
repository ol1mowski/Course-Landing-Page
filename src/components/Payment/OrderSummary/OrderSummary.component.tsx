import { motion } from "framer-motion";
import { formVariants } from "../../../animations/paymentAnimations";
import { OFFER_DETAILS } from "../../../data/Offer.data";

import SecurityBadges from "../SecurityBadges/SecurityBadges.component";
import PriceRow from "./PriceRow/PriceRow.component";
import PaymentButton from "./PaymentButton/PaymentButton.component";

type OrderSummaryProps = {
  isProcessing?: boolean;
};

const OrderSummary = ({ isProcessing = false }: OrderSummaryProps) => {
  const savings = OFFER_DETAILS.regularPrice - OFFER_DETAILS.promoPrice;

  return (
    <motion.section
      variants={formVariants}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-6">Podsumowanie zamówienia</h2>

      <div className="space-y-4">
        <PriceRow 
          label="Kurs 'Kariera w IT'" 
          value={OFFER_DETAILS.promoPrice} 
          isBold 
        />
        <PriceRow 
          label="Regularna cena" 
          value={OFFER_DETAILS.regularPrice} 
          isStrikethrough 
          className="text-gray-500" 
        />
        <PriceRow 
          label="Oszczędzasz" 
          value={savings} 
          className="text-green-600" 
        />

        <hr className="my-4" />

        <PriceRow 
          label="Razem do zapłaty" 
          value={OFFER_DETAILS.promoPrice} 
          isBold 
          className="text-lg" 
        />

        <PaymentButton 
          amount={OFFER_DETAILS.promoPrice} 
          isProcessing={isProcessing}
        />
        <SecurityBadges />
      </div>
    </motion.section>
  );
};

export default OrderSummary; 