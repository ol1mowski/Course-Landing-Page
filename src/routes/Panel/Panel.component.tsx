import { motion } from "framer-motion";

const Panel = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Hi</h1>
      </div>
    </motion.main>
  );
};

export default Panel; 