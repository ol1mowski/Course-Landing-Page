import { motion } from "framer-motion";
import { itemWithDelayVariants } from "../../../animations/commonAnimations";

const FooterBrand = () => (
  <motion.div
    variants={itemWithDelayVariants}
    custom={0}
    className="col-span-1 lg:col-span-2"
  >
    <img
      src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg"
      alt="Logo"
      className="h-12 mb-6 brightness-0 invert"
    />
    <p className="text-[#fefefe]/90 max-w-md">
      Rozpocznij swoją przygodę z programowaniem już dziś. Dołącz do
      naszej społeczności i rozwijaj się razem z nami.
    </p>
  </motion.div>
);

export default FooterBrand; 