import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import { useParallaxEffect } from "./hooks/useParallaxEffect";
import { useOfferAnimations } from "./hooks/useOfferAnimations";
import { BackgroundElements } from "./components/BackgroundElements.component";
import { OfferContent } from "./components/OfferContent.component";

const Offer: React.FC = () => {
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
      <BackgroundElements />

      <SectionWrapper>
        <OfferContent 
          mainContainerAnimation={mainContainerAnimation}
          leftColumnAnimation={leftColumnAnimation}
          rightColumnAnimation={rightColumnAnimation}
          y={y}
          opacity={opacity}
          scale={scale}
        />
      </SectionWrapper>
    </section>
  );
};

export default Offer; 