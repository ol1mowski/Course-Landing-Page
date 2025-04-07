import { motion } from "framer-motion";
import { securityBadgeVariants } from "../../../animations/paymentAnimations";

const SecurityBadges = () => (
  <motion.div 
    variants={securityBadgeVariants}
    className="mt-4 text-sm text-gray-500 space-y-2"
  >
    <p>✓ Bezpieczna płatność SSL</p>
    <p>✓ 30 dni gwarancji zwrotu</p>
    <p>✓ Natychmiastowy dostęp do kursu</p>
  </motion.div>
);

export default SecurityBadges; 