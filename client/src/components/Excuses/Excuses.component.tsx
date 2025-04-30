import { motion } from "framer-motion";
import { useScrollAnimation } from "./hooks/useScrollAnimation.hook";
import { ExcusesHeader } from "./components/ExcusesHeader.component";
import { Timeline } from "./components/Timeline.component";
import { ExcusesFooter } from "./components/ExcusesFooter.component";
import { BackgroundEffects } from "./components/BackgroundEffects.component";

const Excuses = () => {
  const { containerRef, opacity, y, scale } = useScrollAnimation();
  
  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity, y, scale }}
      className="relative py-40 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      <BackgroundEffects />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ExcusesHeader />
        <Timeline />
        <ExcusesFooter />
      </div>
    </motion.section>
  );
};

export default Excuses;
