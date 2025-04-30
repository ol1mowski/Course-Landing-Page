import { memo } from 'react';

export const BackgroundEffects = memo(() => {
  return (
    <>
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-50 rounded-full opacity-40 blur-3xl -z-10 transform -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl -z-10 transform translate-y-1/3"></div>
    </>
  );
}); 