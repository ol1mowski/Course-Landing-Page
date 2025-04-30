import { useEffect, useRef, useState } from "react";

interface UseActiveCardProps {
  totalCards: number;
  autoRotationInterval?: number;
}

export const useActiveCard = ({ totalCards, autoRotationInterval = 4000 }: UseActiveCardProps) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);
  const rotationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoRotation = () => {
    rotationIntervalRef.current = setInterval(() => {
      setActiveCardIndex((prevIndex) => {
        if (prevIndex === null) return 0;
        return (prevIndex + 1) % totalCards;
      });
    }, autoRotationInterval);
  };

  useEffect(() => {
    startAutoRotation();

    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }
    };
  }, [totalCards, autoRotationInterval]);

  const handleCardSelect = (index: number) => {
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
    }

    setActiveCardIndex(index);
    startAutoRotation();
  };

  return {
    activeCardIndex,
    handleCardSelect,
  };
}; 