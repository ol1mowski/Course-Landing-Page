import { COURSE_TARGET } from "../../../data/CourseTarget.data";
import { TargetCard } from "./TargetCard.component";

interface DesktopLayoutProps {
  activeCardIndex: number | null;
  onCardSelect: (index: number) => void;
}

export const DesktopLayout = ({ activeCardIndex, onCardSelect }: DesktopLayoutProps) => {
  return (
    <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-10 mt-4 relative">
      {COURSE_TARGET.map((target, index) => (
        <TargetCard
          key={`grid-${target}`}
          text={target}
          index={index}
          isActive={activeCardIndex === index}
          onSelect={() => onCardSelect(index)}
        />
      ))}
    </div>
  );
}; 