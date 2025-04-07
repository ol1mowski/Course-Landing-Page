import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            transition: { 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" 
            }
          }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-primary">404</h1>
        </motion.div>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Ups! Strona nie została znaleziona
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md">
          Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
        </p>

        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            />
          </svg>
          Wróć do strony głównej
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound; 