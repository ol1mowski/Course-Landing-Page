import { motion } from "framer-motion";
import { memo } from "react";

export const DecorativeCircles = memo(() => {
  return (
    <>
      <motion.div
        className="absolute -bottom-20 right-0 w-72 h-72 border border-primary/10 rounded-full opacity-30"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <motion.div
        className="absolute top-32 -left-10 w-32 h-32 border border-primary/10 rounded-full opacity-30"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </>
  );
}); 