import { useState, useCallback } from "react";

interface ActiveCardState {
  activeCardIndex: number | null;
  handleCardActive: (index: number | null) => void;
}

export const useActiveCard = (): ActiveCardState => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  
  const handleCardActive = useCallback((index: number | null) => {
    setActiveCardIndex(index);
  }, []);
  
  return {
    activeCardIndex,
    handleCardActive
  };
}; 