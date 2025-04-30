import { motion, MotionValue } from "framer-motion";
import { memo } from "react";
import BenefitsHeader from "../BenefitsHeader/BenefitsHeader.component";
import BenefitsList from "../BenefitsList/BenefitsList.component";
import BenefitsCTA from "../BenefitsCTA/BenefitsCTA.component";

interface BenefitsContentProps {
  headerY: MotionValue<number>;
  headerOpacity: MotionValue<number>;
  activeCardIndex: number | null;
  onCardActive: (index: number | null) => void;
}

export const BenefitsContent = memo(({
  headerY,
  headerOpacity,
  activeCardIndex,
  onCardActive
}: BenefitsContentProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 relative">
      <motion.div 
        style={{ y: headerY, opacity: headerOpacity }}
        className="mb-20 relative z-10"
      >
        <BenefitsHeader />
      </motion.div>
      
      <div className="relative z-10">
        <BenefitsList 
          activeCardIndex={activeCardIndex}
          onCardActive={onCardActive}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] 
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 flex justify-center"
        >
          <BenefitsCTA />
        </motion.div>
      </div>
    </div>
  );
}); 