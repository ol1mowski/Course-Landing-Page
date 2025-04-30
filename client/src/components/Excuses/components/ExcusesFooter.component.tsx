import { motion } from 'framer-motion';
import { memo } from 'react';

export const ExcusesFooter = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="text-center mt-24 max-w-2xl mx-auto"
    >
      <p className="text-2xl font-medium text-gray-700">
        Te wymówki nie określają Twojej przyszłości!
      </p>
      <p className="mt-4 text-lg text-gray-600">
        Z naszym kursem zyskasz umiejętności i pewność siebie
      </p>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "180px" }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="h-1 bg-primary mx-auto mt-6 rounded-full"
      />
    </motion.div>
  );
}); 