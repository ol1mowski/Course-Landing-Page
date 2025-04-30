import { motion } from "framer-motion";
import Heading from "../../UI/Heading/Heading.component";

export const LessonsHeader = () => {
  return (
    <div className="text-center relative mb-20">
      <motion.div
        className="absolute w-16 h-16 opacity-80 pointer-events-none -z-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: ['-10vh', '10vh'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), rgba(255, 255, 255, 0))',
          filter: 'blur(15px)',
          borderRadius: '50%',
        }}
      />

      <Heading>
        Zobacz <span className="text-primary">darmowe lekcje</span>
      </Heading>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg max-w-3xl mx-auto text-gray-600"
      >
        Zapoznaj się z jakością naszych materiałów dzięki darmowym lekcjom
      </motion.p>

      <motion.div
        className="h-1 w-20 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full mx-auto mt-8"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "5rem", opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </div>
  );
}; 