import { motion } from "framer-motion";
import { COURSE_TARGET } from "../../../data/CourseTarget.data";

interface MobileLayoutProps {
  activeCardIndex: number | null;
  onCardSelect: (index: number) => void;
}

export const MobileLayout = ({ activeCardIndex, onCardSelect }: MobileLayoutProps) => {
  return (
    <div className="sm:hidden grid grid-cols-1 gap-6 w-full">
      {COURSE_TARGET.map((target, index) => (
        <motion.div
          key={`mobile-${target}`}
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          onClick={() => onCardSelect(index)}
        >
          <div className={`rounded-xl bg-white shadow-md border border-gray-100 ${activeCardIndex === index ? "scale-105 shadow-xl border-primary" : ""} transition-all duration-300`}>
            <div className="px-5 py-6 rounded-xl relative overflow-hidden flex flex-col items-center justify-center">
              <div className={`mb-3 p-3 rounded-full text-white bg-gradient-to-r ${index % 2 === 0 ? "from-primary to-indigo-600" : "from-violet-500 to-purple-700"}`}>
                {index % 2 === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  </svg>
                )}
              </div>

              <p className="text-center text-base font-semibold mb-2 text-gray-700">{target}</p>

              <div className="h-1 w-2/5 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent mt-2" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 