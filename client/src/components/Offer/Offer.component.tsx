import { motion } from "framer-motion";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import OfferHeader from "./OfferHeader/OfferHeader.component";
import OfferBenefits from "./OfferBenefits/OfferBenefits.component";
import OfferCard from "./OfferCard/OfferCard.component";
import {
  LightBackground,
  LightDots,
  BlueParticles,
  AnimatedRings,
  WavyBottom
} from "./BackgroundEffects";
import { useParallaxEffect } from "./hooks/useParallaxEffect";
import { useOfferAnimations } from "./hooks/useOfferAnimations";

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
      className="relative py-36 overflow-hidden text-gray-800 w-screen"
      id="oferta"
      style={{
        margin: "0 calc(50% - 50vw)",
        width: "100vw",
        maxWidth: "100vw"
      }}
    >
      <LightBackground />
      <div className="absolute inset-0 -z-10 opacity-30">
        <LightDots count={100} />
        <BlueParticles number={15} />
      </div>
      <AnimatedRings />

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