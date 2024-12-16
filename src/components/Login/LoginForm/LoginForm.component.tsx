import { useState, useEffect } from 'react';

type LoginFormProps = {
  onLogin?: (data: { email: string; password: string; rememberMe: boolean }) => Promise<void>;
  onForgotPassword?: (email: string) => Promise<void>;
};

type ValidationErrors = {
  email?: string;
  password?: string;
};

const LoginForm = ({ onLogin, onForgotPassword }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResetMode, setIsResetMode] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    validateField('email', formData.email);
  }, [formData.email]);

  useEffect(() => {
    if (!isResetMode) {
      validateField('password', formData.password);
    }
  }, [formData.password, isResetMode]);

  const validateField = (field: string, value: string) => {
    if (!touched[field]) return;

    const newErrors: ValidationErrors = { ...errors };

    switch (field) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          newErrors.email = 'Email jest wymagany';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Nieprawidłowy format email';
        } else {
          delete newErrors.email;
        }
        break;

      case 'password':
        if (!value) {
          newErrors.password = 'Hasło jest wymagane';
        } else if (value.length < 6) {
          newErrors.password = 'Hasło musi mieć minimum 6 znaków';
        } else {
          delete newErrors.password;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData] as string);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Oznacz wszystkie pola jako dotknięte
    const allTouched = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);

    // Zwaliduj wszystkie pola
    validateField('email', formData.email);
    if (!isResetMode) {
      validateField('password', formData.password);
    }

    // Sprawdź czy są błędy
    if (Object.keys(errors).length > 0) return;

    setIsLoading(true);

    try {
      if (isResetMode) {
        await onForgotPassword?.(formData.email);
        setResetEmailSent(true);
      } else {
        await onLogin?.(formData);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setIsResetMode(true);
    setFormData(prev => ({ ...prev, password: '' }));
    setErrors({});
    setTouched({});
  };

  const handleBackToLogin = () => {
    setIsResetMode(false);
    setResetEmailSent(false);
    setErrors({});
    setTouched({});
  };

  if (resetEmailSent) {
    return (
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sprawdź swoją skrzynkę</h2>
          <p className="mt-2 text-sm text-gray-600">
            Wysłaliśmy link do resetowania hasła na podany adres email
          </p>
        </div>
        <button
          onClick={handleBackToLogin}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          Powrót do logowania
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
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

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`block w-full px-4 py-3 rounded-lg border shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm ${
                  errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="jan.kowalski@example.com"
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          {!isResetMode && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Hasło
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`block w-full px-4 py-3 rounded-lg border shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm ${
                    errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="••••••••"
                />
                {errors.password && touched.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {!isResetMode && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                Zapamiętaj mnie
              </label>
            </div>

            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              Nie pamiętam hasła
            </button>
          </div>
        )}

        <div className="space-y-3">
          <button
            type="submit"
            disabled={isLoading || Object.keys(errors).length > 0}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : isResetMode ? 'Wyślij link resetujący' : 'Zaloguj się'}
          </button>

          {isResetMode && (
            <button
              type="button"
              onClick={handleBackToLogin}
              className="w-full text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Powrót do logowania
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm; 