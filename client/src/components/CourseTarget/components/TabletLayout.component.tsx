import { motion } from "framer-motion";
import { COURSE_TARGET } from "../../../data/CourseTarget.data";
import { CardIndicators } from "./CardIndicators.component";
import { TargetCard } from "./TargetCard.component";

interface TabletLayoutProps {
  activeCardIndex: number | null;
  onCardSelect: (index: number) => void;
}

export const TabletLayout = ({ activeCardIndex, onCardSelect }: TabletLayoutProps) => {
  return (
    <div className="hidden sm:block md:hidden w-full overflow-hidden mt-8">
      <motion.div
        className="flex transition-all duration-500 ease-out"
        animate={{
          x: activeCardIndex !== null ? `-${activeCardIndex * 100}%` : 0
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        {COURSE_TARGET.map((target, index) => (
          <div key={`carousel-${target}`} className="min-w-full px-4">
            <div className="max-w-xs mx-auto">
              <TargetCard
                text={target}
                index={index}
                isActive={activeCardIndex === index}
                onSelect={() => onCardSelect(index)}
              />
            </div>
          </div>
        ))}
      </motion.div>
      <CardIndicators
        total={COURSE_TARGET.length}
        active={activeCardIndex}
        onSelect={onCardSelect}
      />
    </div>
  );
}; 