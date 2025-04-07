import { memo, useRef } from "react";

import { motion, useInView } from "framer-motion";

import type { ProgressStep } from "../../../data/ProgressSteps.data";

type ProgressListItemProps = ProgressStep;

const ProgressListItem = ({ title, description }: ProgressListItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    amount: 0.3 
  });

  const animationVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 }
  };

  return (
    <motion.div
      ref={ref}
      className="flex gap-12 items-start py-32"
      variants={animationVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ 
        duration: 0.7, 
        ease: "easeOut",
        delay: 0.2 
      }}
    >
      <div className="w-5 h-5 bg-primary rounded-full mt-3" />
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="text-gray-600 text-xl leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default memo(ProgressListItem); 