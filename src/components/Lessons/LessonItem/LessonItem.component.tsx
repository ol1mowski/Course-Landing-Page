import Description from "../../UI/Description/Description.component";

type LessonItemProps = {
  title: string;
  duration: string;
}

const LessonItem = ({ title, duration }: LessonItemProps) => (
  <div className="flex justify-between items-center py-2 px-4 cursor-pointer">
    <Description>{title}</Description>
    <span className="text-gray-500">{duration}</span>
  </div>
);

export default LessonItem; 