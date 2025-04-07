import { useScroll, useSpring, useTransform } from "framer-motion";
import { RefObject } from "react";

export const useScrollProgress = (ref: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
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

  return { scaleY, progressBarOpacity };
}; 