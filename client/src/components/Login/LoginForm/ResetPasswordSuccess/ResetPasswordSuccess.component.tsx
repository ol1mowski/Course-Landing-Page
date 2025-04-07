type ResetPasswordSuccessProps = {
  onBackToLogin: () => void;
};

const ResetPasswordSuccess = ({ onBackToLogin }: ResetPasswordSuccessProps) => (
  <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">Sprawdź swoją skrzynkę</h2>
      <p className="mt-2 text-sm text-gray-600">
        Wysłaliśmy link do resetowania hasła na podany adres email
      </p>
    </div>
    <button
      onClick={onBackToLogin}
      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
    >
      Powrót do logowania
    </button>
  </div>
);

export default ResetPasswordSuccess; 