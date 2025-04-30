import { FREE_LESSONS } from "../../../data/FreeLessons.data";
import { VideoCard } from "./VideoCard.component";

interface DesktopLayoutProps {
  activeCardIndex: number | null;
  onCardSelect: (index: number) => void;
}

export const DesktopLayout = ({ activeCardIndex, onCardSelect }: DesktopLayoutProps) => {
  return (
    <div className="hidden lg:grid grid-cols-3 gap-8 w-full">
      {FREE_LESSONS.map((lesson, index) => (
        <VideoCard
          key={`grid-${lesson.id}`}
          {...lesson}
          index={index}
          isActive={activeCardIndex === index}
          onClick={() => onCardSelect(index)}
        />
      ))}
    </div>
  );
}; 