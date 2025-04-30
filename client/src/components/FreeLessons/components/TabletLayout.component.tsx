import { motion } from "framer-motion";
import { FREE_LESSONS } from "../../../data/FreeLessons.data";
import { CardIndicators } from "./CardIndicators.component";
import { VideoCard } from "./VideoCard.component";

interface TabletLayoutProps {
  activeCardIndex: number | null;
  onCardSelect: (index: number) => void;
}

export const TabletLayout = ({ activeCardIndex, onCardSelect }: TabletLayoutProps) => {
  return (
    <div className="hidden md:block lg:hidden w-full overflow-hidden">
      <motion.div
        className="flex transition-all duration-500 ease-out"
        animate={{
          x: activeCardIndex !== null ? `-${activeCardIndex * 100}%` : 0
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        {FREE_LESSONS.map((lesson, index) => (
          <div key={`carousel-${lesson.id}`} className="min-w-full px-4">
            <div className="max-w-md mx-auto">
              <VideoCard
                {...lesson}
                index={index}
                isActive={activeCardIndex === index}
                onClick={() => onCardSelect(index)}
              />
            </div>
          </div>
        ))}
      </motion.div>
      <CardIndicators
        total={FREE_LESSONS.length}
        active={activeCardIndex}
        onSelect={onCardSelect}
      />
    </div>
  );
}; 