import { motion } from "framer-motion";
import { OFFER_BENEFITS } from "../../../data/Offer.data";

import OfferBenefit from "../OfferBenefit/OfferBenefit.component";

const OfferBenefits = () => (
  <motion.div 
    className="space-y-4 mt-8 relative"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    {/* Subtelny element dekoracyjny w tle */}
    <div className="absolute -z-10 -bottom-10 -right-20 w-40 h-40 bg-blue-100/50 rounded-full blur-xl"></div>
    
    {OFFER_BENEFITS.map((benefit, index) => (
      <OfferBenefit
        key={benefit.id}
        {...benefit}
        index={index}
      />
    ))}
  </motion.div>
);

export default OfferBenefits; 