import React from "react";

export const LightBlueBackground = () => (
  <div className="absolute inset-0 -z-20">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
    
    <div className="absolute inset-0">
      {[...Array(3)].map((_, i) => (
        <div 
          key={`line-${i}`} 
          className="absolute h-px w-full left-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent"
          style={{ top: `${i * 25 + 20}%` }}
        />
      ))}
    </div>
  </div>
); 