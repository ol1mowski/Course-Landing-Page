import { motion } from "framer-motion";
import { useParallaxScrolling } from "./hooks/useParallaxScrolling.hook";
import { useActiveCard } from "./hooks/useActiveCard.hook";
import { BackgroundGradient } from "./components/BackgroundGradient.component";
import { DecorativeCircles } from "./components/DecorativeCircles.component";
import { BenefitsContent } from "./components/BenefitsContent.component";

const CourseBenefits = () => {
  const {
    sectionRef,
    headerY,
    headerOpacity,
    gradientX,
    gradientY,
    gradientScale,
    gradientOpacity
  } = useParallaxScrolling();
  
  const { activeCardIndex, handleCardActive } = useActiveCard();

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      id="benefits"
    >
      <BackgroundGradient 
        gradientX={gradientX}
        gradientY={gradientY}
        gradientScale={gradientScale}
        gradientOpacity={gradientOpacity}
      />
      
      <BenefitsContent 
        headerY={headerY}
        headerOpacity={headerOpacity}
        activeCardIndex={activeCardIndex}
        onCardActive={handleCardActive}
      />
      
      <DecorativeCircles />
    </section>
  );
};

export default CourseBenefits; 