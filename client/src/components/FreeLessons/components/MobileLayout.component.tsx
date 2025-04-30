import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FREE_LESSONS } from "../../../data/FreeLessons.data";
import { VideoCard } from "./VideoCard.component";

interface MobileLayoutProps {
  activeCardIndex: number | null;
  onCardSelect: (index: number) => void;
}

export const MobileLayout = ({ activeCardIndex, onCardSelect }: MobileLayoutProps) => {
  return (
    <div className="md:hidden flex flex-col space-y-8 w-full">
      {FREE_LESSONS.slice(0, 3).map((lesson, index) => (
        <VideoCard
          key={`mobile-${lesson.id}`}
          {...lesson}
          index={index}
          isActive={activeCardIndex === index}
          onClick={() => onCardSelect(index)}
        />
      ))}

      <motion.button
        className="mx-auto mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white font-medium flex items-center space-x-2 shadow-md shadow-primary/20"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Zobacz więcej lekcji</span>
        <ArrowRight size={16} />
      </motion.button>
    </div>
  );
}; 