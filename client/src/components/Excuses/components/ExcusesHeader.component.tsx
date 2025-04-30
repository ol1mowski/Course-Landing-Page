import { motion } from 'framer-motion';
import Heading from '../../UI/Heading/Heading.component';

export const ExcusesHeader = () => {
  return (
    <div className="text-center space-y-4 mb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Heading>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Myślisz, że
          </motion.span>{" "}
          <motion.span 
            className="text-red-500 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            nie dostaniesz
            <motion.span 
              className="absolute -bottom-1 left-0 w-full h-1 bg-red-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            pracy w IT gdyż:
          </motion.span>
        </Heading>
      </motion.div>
    </div>
  );
}; 