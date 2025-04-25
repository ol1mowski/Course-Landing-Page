import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxEffectResult {
  containerRef: React.RefObject<HTMLElement>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export const useParallaxEffect = (): ParallaxEffectResult => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return {
    containerRef,
    y,
    opacity,
    scale
  };
}; 