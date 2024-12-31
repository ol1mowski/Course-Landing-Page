import { memo } from 'react';

type LogoutButtonProps = {
  onClick: () => void;
  isLoading: boolean;
};

const LogoutButton = ({ onClick, isLoading }: LogoutButtonProps) => (
  <button
    onClick={onClick}
    disabled={isLoading}
    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
  >
    {isLoading ? "Wylogowywanie..." : "Wyloguj się"}
  </button>
);

export default memo(LogoutButton); 