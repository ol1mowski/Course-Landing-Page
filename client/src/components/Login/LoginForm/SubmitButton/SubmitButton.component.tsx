import { memo } from 'react';
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner.component';

type SubmitButtonProps = {
  isLoading: boolean;
  isDisabled: boolean;
  text: string;
};

const SubmitButton = memo(({ isLoading, isDisabled, text }: SubmitButtonProps) => (
  <button
    data-testid="submit-button"
    type="submit"
    disabled={isLoading || isDisabled ? true : undefined}
    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isLoading ? <LoadingSpinner /> : text}
  </button>
));

export default SubmitButton; 