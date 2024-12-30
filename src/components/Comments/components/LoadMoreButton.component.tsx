import { memo } from 'react';

type LoadMoreButtonProps = {
  onClick: () => void;
  isLoading: boolean;
};

export const LoadMoreButton = memo(({ onClick, isLoading }: LoadMoreButtonProps) => (
  <button
    onClick={onClick}
    disabled={isLoading}
    className="w-full py-2 text-primary hover:text-primary-dark transition-colors disabled:opacity-50"
  >
    {isLoading ? 'Ładowanie...' : 'Załaduj więcej'}
  </button>
)); 