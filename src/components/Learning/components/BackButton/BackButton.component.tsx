import { memo } from 'react';
import { Link } from 'react-router-dom';

const BackButton = memo(() => (
  <div className="bg-white shadow-sm">
    <div className="max-w-8xl mx-auto px-4">
      <div className="h-16 flex items-center">
        <Link 
          to="/mojekonto" 
          className="flex items-center text-gray-600 hover:text-primary transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Powrót do mojego konta
        </Link>
      </div>
    </div>
  </div>
));

export default BackButton; 