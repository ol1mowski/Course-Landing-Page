import { motion } from "framer-motion";
import { gridVariants } from "../../../animations/lessonsAnimations";
import { FREE_LESSONS } from "../../../data/FreeLessons.data";
import VideoCard from "../VideoCard/VideoCard.component";

const VideoGrid = () => (
  <motion.div
    variants={gridVariants}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
  >
    {FREE_LESSONS.map((lesson, index) => (
      <VideoCard
        key={lesson.id}
        {...lesson}
        index={index}
      />
    ))}
  </motion.div>
);

export default VideoGrid; 