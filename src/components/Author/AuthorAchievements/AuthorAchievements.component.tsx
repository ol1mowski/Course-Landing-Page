import { motion } from "framer-motion";

type AuthorAchievementsProps = {
  achievements: string[];
};

const AuthorAchievements = ({ achievements }: AuthorAchievementsProps) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      }
    }}
    className="grid grid-cols-2 gap-4 mt-4"
  >
    {achievements.map((achievement, index) => (
      <div 
        key={index}
        className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg shadow-md"
      >
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span className="text-sm font-medium">{achievement}</span>
      </div>
    ))}
  </motion.div>
);

export default AuthorAchievements; 