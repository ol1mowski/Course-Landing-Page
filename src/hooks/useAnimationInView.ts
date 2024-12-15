import { useRef } from "react";
import { useInView } from "framer-motion";

export const useAnimationInView = (margin = "-100px") => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin
  });

  return { ref, isInView };
}; 