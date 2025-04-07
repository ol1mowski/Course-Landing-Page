import React, { memo } from 'react';

type SubmitButtonProps = {
  isDisabled: boolean;
  isSubmitting: boolean;
  label: string;
};

export const SubmitButton = memo(({ isDisabled, isSubmitting, label }: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={isDisabled}
    data-testid="submit-comment-button"
    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? 'Wysyłanie...' : label}
  </button>
)); 