import { motion, AnimatePresence } from 'framer-motion';

interface ErrorMessageProps {
  message: string;
  onClose?: () => void;
}

const ErrorMessage = ({ message, onClose }: ErrorMessageProps) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-4 right-4 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg shadow-lg max-w-md"
    >
      <div className="flex items-center space-x-3">
        <svg 
          className="w-5 h-5 flex-shrink-0" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <p className="text-sm font-medium">{message}</p>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  </AnimatePresence>
);

export default ErrorMessage; 