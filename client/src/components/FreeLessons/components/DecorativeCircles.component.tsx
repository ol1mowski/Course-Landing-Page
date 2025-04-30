import { motion } from "framer-motion";

export const DecorativeCircles = () => {
  return (
    <>
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full border border-primary/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full border border-primary/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}; 