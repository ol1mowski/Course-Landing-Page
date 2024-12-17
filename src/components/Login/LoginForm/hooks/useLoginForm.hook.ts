import { useState, useCallback } from 'react';
import { LoginFormData } from '../loginForm.schema';

type UseLoginFormProps = {
  onLogin?: (data: LoginFormData) => Promise<void>;
  onForgotPassword?: (email: string) => Promise<void>;
};

export const useLoginForm = ({ onLogin, onForgotPassword }: UseLoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResetMode, setIsResetMode] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = useCallback((field: string, value: string) => {
    if (!touched[field]) return;

    const newErrors = { ...errors };

    switch (field) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          newErrors.email = 'Email jest wymagany';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Nieprawid��owy format email';
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
  }, [errors, touched]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  }, []);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData] as string);
  }, [formData, validateField]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const allTouched = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);

    validateField('email', formData.email);
    if (!isResetMode) {
      validateField('password', formData.password);
    }

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

  const handleForgotPassword = useCallback(() => {
    setIsResetMode(true);
    setFormData(prev => ({ ...prev, password: '' }));
    setErrors({});
    setTouched({});
  }, []);

  const handleBackToLogin = useCallback(() => {
    setIsResetMode(false);
    setResetEmailSent(false);
    setErrors({});
    setTouched({});
  }, []);

  return {
    isLoading,
    isResetMode,
    resetEmailSent,
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleForgotPassword,
    handleBackToLogin
  };
}; 