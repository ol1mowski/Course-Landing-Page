import { motion } from "framer-motion";

export const LightBackground = () => (
  <motion.div 
    className="absolute inset-0 -z-20 bg-gradient-to-tr from-white via-blue-50 to-white"
    animate={{ 
      background: [
        "linear-gradient(to top right, #ffffff, #eff6ff, #ffffff)",
        "linear-gradient(to top right, #eff6ff, #ffffff, #e0f2fe)",
        "linear-gradient(to top right, #e0f2fe, #eff6ff, #ffffff)",
        "linear-gradient(to top right, #ffffff, #e0f2fe, #eff6ff)"
      ]
    }}
    transition={{ 
      duration: 20, 
      repeat: Infinity, 
      repeatType: "reverse",
      ease: "linear"
    }}
  />
); 