import { motion } from "framer-motion";
import { FREE_LESSONS } from "../../data/FreeLessons.data";
import { useAnimationInView } from "../../hooks/useAnimationInView";
import { BackgroundEffects } from "./components/BackgroundEffects.component";
import { DesktopLayout } from "./components/DesktopLayout.component";
import { LessonsHeader } from "./components/LessonsHeader.component";
import { MobileLayout } from "./components/MobileLayout.component";
import { SectionConnector } from "./components/SectionConnector.component";
import { TabletLayout } from "./components/TabletLayout.component";
import { useActiveCard } from "./hooks/useActiveCard.hook";
import { useScrollAnimation } from "./hooks/useScrollAnimation.hook";

const FreeLessons = () => {
  const { ref } = useAnimationInView();
  const { containerRef, y, opacity } = useScrollAnimation();
  const { activeCardIndex, handleCardSelect } = useActiveCard({
    totalCards: FREE_LESSONS.length
  });

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-48 overflow-hidden bg-gradient-to-b from-gray-50 to-white text-gray-900 w-screen"
      id="darmowe-lekcje"
      style={{
        margin: "-1px calc(50% - 50vw) 0",
        width: "100vw",
        maxWidth: "100vw"
      }}
    >
      <SectionConnector />
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          style={{ y, opacity }}
          className="flex flex-col items-center justify-center"
        >
          <LessonsHeader />

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

export default FreeLessons; 