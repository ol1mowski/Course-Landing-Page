import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FREE_LESSONS } from "../../data/FreeLessons.data";
import { useAnimationInView } from "../../hooks/useAnimationInView";
import { Play, ArrowRight, Star } from "lucide-react";
import Heading from "../UI/Heading/Heading.component";

const SectionConnector = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-40 -translate-y-full z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50" />
      <svg
        className="absolute bottom-0 w-full text-gray-50"
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0L48 10.7C96 21.3 192 42.7 288 53.3C384 64 480 64 576 53.3C672 42.7 768 21.3 864 16C960 10.7 1056 21.3 1152 26.7C1248 32 1344 32 1392 32H1440V96H1392C1344 96 1248 96 1152 96C1056 96 960 96 864 96C768 96 672 96 576 96C480 96 384 96 288 96C192 96 96 96 48 96H0V0Z"
          fill="currentColor"
        />
      </svg>

      <motion.div
        className="absolute left-1/4 bottom-0 w-[300px] h-[300px] rounded-full border border-primary/10"
        style={{ translateY: '50%' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-1/4 bottom-0 w-[200px] h-[200px] rounded-full border border-primary/10"
        style={{ translateY: '50%' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`connector-star-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/80"
          style={{
            left: `${15 + (i * 18)}%`,
            bottom: `${10 + Math.sin(i * 2) * 20}%`,
            boxShadow: '0 0 10px rgba(99, 102, 241, 0.6)'
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
};

const LightAccents = ({ count = 50 }: { count?: number }) => {
  const accents = Array(count).fill(0);

  return (
    <>
      {accents.map((_, index) => {
        const size = Math.random() * 2 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={`accent-${index}`}
            className="absolute rounded-full bg-primary"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              boxShadow: "0 0 3px rgba(99, 102, 241, 0.5)"
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        );
      })}
    </>
  );
};

interface VideoCardProps {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  duration,
  thumbnail,
  videoUrl,
  index,
  isActive,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getGradient = () => {
    const gradients = [
      "from-purple-500/90 to-blue-600/90",
      "from-blue-500/90 to-cyan-600/90",
      "from-primary/90 to-indigo-600/90",
      "from-amber-500/90 to-orange-600/90",
      "from-rose-500/90 to-pink-600/90",
      "from-indigo-500/90 to-violet-600/90",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <motion.div
      className="relative cursor-pointer group rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isActive ? 1.05 : 1,
        zIndex: isActive ? 10 : 1,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.1
      }}
      whileHover={{
        scale: 1.03,
        zIndex: 5,
      }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Obramowanie gradientowe */}
      <motion.div
        className={`absolute inset-0 p-0.5 rounded-2xl bg-gradient-to-br ${getGradient()} z-10`}
        animate={{
          opacity: isActive || isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Kontener zawartości */}
      <div className="relative overflow-hidden w-full h-full rounded-2xl z-20">
        {/* Miniaturka z efektem hover */}
        <div className="relative aspect-video overflow-hidden rounded-t-xl">
          <motion.img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered || isActive ? 1.05 : 1,
              filter: isHovered || isActive ? "brightness(0.8)" : "brightness(0.95)"
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Nakładka z przyciskiem odtwarzania */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered || isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={28} fill="white" />
            </motion.div>
          </motion.div>

          {/* Czas trwania */}
          <div className="absolute bottom-3 right-3 bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-lg">
            <span className="text-white text-sm font-medium">{duration}</span>
          </div>

          {/* Gwiazdka dla aktywnego wideo */}
          {isActive && (
            <motion.div
              className="absolute top-3 left-3 text-yellow-400"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Star size={24} fill="currentColor" />
            </motion.div>
          )}
        </div>

        {/* Treść karty */}
        <div className={`p-5 rounded-b-xl bg-white shadow-sm relative z-10`}>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Przycisk z linkiem */}
          <motion.div
            className="flex items-center text-primary text-sm font-medium mt-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isHovered || isActive ? 1 : 0,
              x: isHovered || isActive ? 0 : -10
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="mr-1">Obejrzyj lekcję</span>
            <motion.div
              animate={{
                x: isHovered || isActive ? [0, 5, 0] : 0
              }}
              transition={{
                repeat: isHovered || isActive ? Infinity : 0,
                repeatDelay: 1,
                duration: 0.5
              }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Efekt cienia */}
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-primary/5 blur-md -z-10"
        initial={{ opacity: 0, y: 5 }}
        animate={{
          opacity: isHovered || isActive ? 0.2 : 0.1,
          y: isHovered || isActive ? 10 : 5,
          scale: isHovered || isActive ? 0.98 : 1
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const LessonsHeader: React.FC = () => {
  return (
    <div className="text-center relative mb-20">
      <motion.div
        className="absolute w-16 h-16 opacity-80 pointer-events-none -z-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: ['-10vh', '10vh'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), rgba(255, 255, 255, 0))',
          filter: 'blur(15px)',
          borderRadius: '50%',
        }}
      />

      <Heading>
        Zobacz <span className="text-primary">darmowe lekcje</span>
      </Heading>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg max-w-3xl mx-auto text-gray-600"
      >
        Zapoznaj się z jakością naszych materiałów dzięki darmowym lekcjom
      </motion.p>

      {/* Podkreślenie */}
      <motion.div
        className="h-1 w-20 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full mx-auto mt-8"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "5rem", opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </div>
  );
};

const CardIndicators: React.FC<{ total: number, active: number | null, onSelect: (index: number) => void }> = ({
  total,
  active,
  onSelect
}) => {
  return (
    <div className="flex justify-center items-center space-x-3 mt-12">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={`indicator-${index}`}
          className="w-3 h-3 rounded-full bg-gray-300 focus:outline-none"
          initial={{ scale: 0.8 }}
          animate={{
            scale: active === index ? 1 : 0.8,
            backgroundColor: active === index ? 'rgb(99, 102, 241)' : 'rgba(209, 213, 219, 0.8)'
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onSelect(index)}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
};

const FreeLessons: React.FC = () => {
  const { ref, isInView } = useAnimationInView();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const cardRotationInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    cardRotationInterval.current = setInterval(() => {
      setActiveCardIndex((prevIndex) => {
        if (prevIndex === null) return 0;
        return (prevIndex + 1) % FREE_LESSONS.length;
      });
    }, 4000);

    return () => {
      if (cardRotationInterval.current) {
        clearInterval(cardRotationInterval.current);
      }
    };
  }, []);

  const handleCardSelect = (index: number) => {
    if (cardRotationInterval.current) {
      clearInterval(cardRotationInterval.current);
    }

    setActiveCardIndex(index);

    cardRotationInterval.current = setInterval(() => {
      setActiveCardIndex((prevIndex) => {
        if (prevIndex === null) return 0;
        return (prevIndex + 1) % FREE_LESSONS.length;
      });
    }, 4000);
  };

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-48 overflow-hidden bg-gradient-to-b from-gray-50 to-white text-gray-900 w-screen"
      id="darmowe-lekcje"
      style={{
        margin: "-1px calc(50% - 50vw) 0",
        width: "100vw",
        maxWidth: "100vw"
      }}
    >
      <SectionConnector />

      <div className="absolute inset-0 -z-10 opacity-30">
        <LightAccents count={70} />
      </div>

      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full border border-primary/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full border border-primary/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        ref={ref}
          style={{ y, opacity }}
          className="flex flex-col items-center justify-center"
      >
        <LessonsHeader />

          <div className="hidden lg:grid grid-cols-3 gap-8 w-full">
            {FREE_LESSONS.map((lesson, index) => (
              <VideoCard
                key={`grid-${lesson.id}`}
                {...lesson}
                index={index}
                isActive={activeCardIndex === index}
                onClick={() => handleCardSelect(index)}
              />
            ))}
          </div>

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
                      onClick={() => handleCardSelect(index)}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
            <CardIndicators
              total={FREE_LESSONS.length}
              active={activeCardIndex}
              onSelect={handleCardSelect}
            />
          </div>

          <div className="md:hidden flex flex-col space-y-8 w-full">
            {FREE_LESSONS.slice(0, 3).map((lesson, index) => (
              <VideoCard
                key={`mobile-${lesson.id}`}
                {...lesson}
                index={index}
                isActive={activeCardIndex === index}
                onClick={() => handleCardSelect(index)}
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
      </motion.div>
      </div>
    </section>
  );
};

export default FreeLessons; 