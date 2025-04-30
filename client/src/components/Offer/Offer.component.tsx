import { motion } from "framer-motion";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import OfferHeader from "./OfferHeader/OfferHeader.component";
import OfferBenefits from "./OfferBenefits/OfferBenefits.component";
import OfferCard from "./OfferCard/OfferCard.component";
import { WavyBottom } from "./BackgroundEffects";
import { useParallaxEffect } from "./hooks/useParallaxEffect";
import { useOfferAnimations } from "./hooks/useOfferAnimations";

const LightBlueBackground = () => (
  <div className="absolute inset-0 -z-20">
    {/* Jasne i niebieskie tło */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
    
    {/* Delikatne niebieskie linie */}
    <div className="absolute inset-0">
      {[...Array(3)].map((_, i) => (
        <div 
          key={`line-${i}`} 
          className="absolute h-px w-full left-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent"
          style={{ top: `${i * 25 + 20}%` }}
        />
      ))}
    </div>
  </div>
);

// Bardzo subtelny niebieski wzór
const LightBluePattern = () => (
  <div className="absolute inset-0 -z-10 opacity-10">
    <div className="h-full w-full" style={{ 
      backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
      backgroundSize: '50px 50px' 
    }} />
  </div>
);

const Offer = () => {
  const { containerRef, y, opacity, scale } = useParallaxEffect();
  const {
    mainContainerAnimation,
    leftColumnAnimation,
    rightColumnAnimation
  } = useOfferAnimations();

  return (
    <section
      ref={containerRef}
      className="relative py-36 overflow-hidden text-gray-800 w-screen bg-white"
      id="oferta"
      style={{
        margin: "0 calc(50% - 50vw)",
        width: "100vw",
        maxWidth: "100vw"
      }}
    >
      <LightBlueBackground />
      <LightBluePattern />

      <SectionWrapper>
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-14"
          {...mainContainerAnimation}
        >
          <motion.div
            className="w-full lg:w-1/2 space-y-10"
            {...leftColumnAnimation}
          >
            <OfferHeader />
            <OfferBenefits />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center lg:pl-8"
            {...rightColumnAnimation}
          >
            <OfferCard />
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <WavyBottom />
    </section>
  );
};

export default Offer; 