import { useRef } from "react";

import { useScroll, useSpring, useTransform } from "framer-motion";

import { PROGRESS_STEPS } from "../../data/ProgressSteps.data";
import ProgressBar from "./ProgressBar/ProgressBar.component";
import ProgressListItem from "./ProgressListItem/ProgressListItem.component";

const ScrollProgressList = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const progressBarOpacity = useTransform(
    scrollYProgress,
    [0, 0.9, 1],
    [1, 1, 0]
  );

  return (
    <section 
      ref={containerRef}
      className="mt-96 relative min-h-screen py-32"
      aria-label="Lista kroków procesu nauki"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Więc co musisz zrobić ?
      </h2>
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
    </section>
  );
};

export default ScrollProgressList; 