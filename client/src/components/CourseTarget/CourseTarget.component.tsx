import { motion } from "framer-motion";
import { COURSE_TARGET } from "../../data/CourseTarget.data";
import { BackgroundEffects } from "./components/BackgroundEffects.component";
import { DesktopLayout } from "./components/DesktopLayout.component";
import { MobileLayout } from "./components/MobileLayout.component";
import { SectionHeader } from "./components/SectionHeader.component";
import { TabletLayout } from "./components/TabletLayout.component";
import { useActiveCard } from "./hooks/useActiveCard.hook";
import { useScrollAnimation } from "./hooks/useScrollAnimation.hook";

const CourseTarget = () => {
  const { containerRef, y, opacity } = useScrollAnimation();
  const { activeCardIndex, handleCardSelect } = useActiveCard({
    totalCards: COURSE_TARGET.length
  });

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-b from-white to-blue-50 text-gray-800 w-screen"
      id="dla-kogo"
      style={{
        margin: "0 calc(50% - 50vw)",
        width: "100vw",
        maxWidth: "100vw"
      }}
    >
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col items-center justify-center"
        >
          <SectionHeader />

          <DesktopLayout 
            activeCardIndex={activeCardIndex} 
            onCardSelect={handleCardSelect} 
          />
          
          <TabletLayout 
            activeCardIndex={activeCardIndex} 
            onCardSelect={handleCardSelect} 
          />

          <MobileLayout 
            activeCardIndex={activeCardIndex} 
            onCardSelect={handleCardSelect} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CourseTarget; 