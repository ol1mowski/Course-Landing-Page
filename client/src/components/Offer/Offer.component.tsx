import { motion } from "framer-motion";
import { containerVariants } from "../../animations/offerAnimations";
import { useAnimationInView } from "../../hooks/useAnimationInView";

import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import OfferHeader from "./OfferHeader/OfferHeader.component";
import OfferBenefits from "./OfferBenefits/OfferBenefits.component";
import OfferCard from "./OfferCard/OfferCard.component";

const Offer = () => {
  const { ref, isInView } = useAnimationInView();

  return (
    <section className="relative py-20" id="oferta">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
      
      <SectionWrapper>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          <div className="flex-1 space-y-4">
            <OfferHeader />
            <OfferBenefits />
          </div>

          <div className="flex-1 flex justify-center">
            <OfferCard />
          </div>
        </motion.div>
      </SectionWrapper>
    </section>
  );
};

export default Offer; 