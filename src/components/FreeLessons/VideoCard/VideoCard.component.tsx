import { motion } from "framer-motion";
import { itemWithDelayVariants } from "../../../animations/commonAnimations";
import type { FreeLesson } from "../../../data/FreeLessons.data";

type VideoCardProps = FreeLesson & {
  index: number;
};

const VideoCard = ({ title, duration, thumbnail, videoUrl, index }: VideoCardProps) => (
  <motion.div
    variants={itemWithDelayVariants}
    custom={index}
    whileHover={{ scale: 1.05 }}
    className="relative group cursor-pointer"
  >
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      <img 
        src={thumbnail} 
        alt={title}
        className="w-full aspect-video object-cover"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/play-icon.svg"
          alt="Play"
          className="w-16 h-16"
        />
      </div>
      <div className="absolute bottom-0 right-0 bg-black/70 px-3 py-1 m-2 rounded-md">
        <span className="text-white text-sm">{duration}</span>
      </div>
    </div>
    <h3 className="mt-4 text-lg font-medium group-hover:text-primary transition-colors">
      {title}
    </h3>
  </motion.div>
);

export default VideoCard; 