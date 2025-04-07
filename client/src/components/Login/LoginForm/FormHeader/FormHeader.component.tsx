type FormHeaderProps = {
  isResetMode: boolean;
};

const FormHeader = ({ isResetMode }: FormHeaderProps) => (
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-900">
      {isResetMode ? 'Resetuj hasło' : 'Zaloguj się'}
    </h2>
    <p className="mt-2 text-sm text-gray-600">
      {isResetMode 
        ? 'Podaj swój adres email, a my wyślemy Ci link do resetowania hasła'
        : 'Uzyskaj dostęp do swojego konta kursanta'
      }
    </p>
  </div>
);

export default FormHeader; 