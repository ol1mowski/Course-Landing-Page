import { motion } from "framer-motion";

export const SectionConnector = () => {
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