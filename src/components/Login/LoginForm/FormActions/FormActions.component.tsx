import SubmitButton from "../SubmitButton/SubmitButton.component";

type FormActionsProps = {
  isLoading: boolean;
  isDisabled: boolean;
  isResetMode: boolean;
  onBackToLogin?: () => void;
};

const FormActions = ({ isLoading, isDisabled, isResetMode, onBackToLogin }: FormActionsProps) => (
  <div className="space-y-3">
    <SubmitButton
      isLoading={isLoading}
      isDisabled={isDisabled}
      text={isResetMode ? 'Wyślij link resetujący' : 'Zaloguj się'}
    />

    {isResetMode && onBackToLogin && (
      <button
        type="button"
        onClick={onBackToLogin}
        className="w-full text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
      >
        Powrót do logowania
      </button>
    )}
  </div>
);

export default FormActions; 