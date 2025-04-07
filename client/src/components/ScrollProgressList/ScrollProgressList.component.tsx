import { useRef } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../../animations/progressAnimations";
import { PROGRESS_STEPS } from "../../data/ProgressSteps.data";
import { useScrollProgress } from "../../hooks/useScrollProgress";

import ProgressBar from "./ProgressBar/ProgressBar.component";
import ProgressHeader from "./ProgressHeader/ProgressHeader.component";
import ProgressListItem from "./ProgressListItem/ProgressListItem.component";

const ScrollProgressList = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scaleY, progressBarOpacity } = useScrollProgress(containerRef);

  return (
    <section 
      ref={containerRef}
      className="mt-96 relative min-h-screen py-32"
      aria-label="Lista kroków procesu nauki"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProgressHeader />
        <ProgressBar 
          scaleY={scaleY} 
          opacity={progressBarOpacity} 
        />

        <div className="max-w-4xl mx-auto ml-[calc(15%+8rem)]">
          {PROGRESS_STEPS.map((step) => (
            <ProgressListItem
              key={step.id}
              {...step}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ScrollProgressList; 