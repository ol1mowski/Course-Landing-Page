import { motion } from "framer-motion";

interface CardIndicatorsProps {
  total: number;
  active: number | null;
  onSelect: (index: number) => void;
}

export const CardIndicators = ({ total, active, onSelect }: CardIndicatorsProps) => {
  return (
    <div className="flex justify-center items-center space-x-3 mt-12">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={`indicator-${index}`}
          className="w-3 h-3 rounded-full bg-gray-300 focus:outline-none"
          initial={{ scale: 0.8 }}
          animate={{
            scale: active === index ? 1 : 0.8,
            backgroundColor: active === index ? 'rgb(99, 102, 241)' : 'rgba(209, 213, 219, 0.8)'
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onSelect(index)}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
}; 