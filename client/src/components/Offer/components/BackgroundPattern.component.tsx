import React from "react";

export const LightBluePattern = () => (
  <div className="absolute inset-0 -z-10 opacity-10">
    <div className="h-full w-full" style={{ 
      backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
      backgroundSize: '50px 50px' 
    }} />
  </div>
); 