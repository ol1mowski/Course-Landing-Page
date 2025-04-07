import { memo } from 'react';
import { useLoginForm } from './hooks/useLoginForm.hook';

import FormHeader from './FormHeader/FormHeader.component';
import FormInput from './FormInput/FormInput.component';
import RememberMeSection from './RememberMeSection/RememberMeSection.component';
import FormActions from './FormActions/FormActions.component';
import ResetPasswordSuccess from './ResetPasswordSuccess/ResetPasswordSuccess.component';

import type { LoginFormData } from './loginForm.schema';

type LoginFormProps = {
  onLogin: (data: LoginFormData) => void;
  isLoading: boolean;
  error?: string;
  isError?: boolean;
  onForgotPassword: (email: string) => void;
};

const LoginForm = memo(({ onLogin, isLoading, error, isError, onForgotPassword }: LoginFormProps) => {
  const {
    formData,
    errors,
    touched,
    isValid,
    isResetMode,
    showResetSuccess,
    handleInputChange,
    handleBlur,
    handleSubmit,
    handleForgotPassword,
    handleBackToLogin,
    handleRememberMeChange
  } = useLoginForm({ onLogin, onForgotPassword });

  return (
    <>
      {showResetSuccess ? (
        <ResetPasswordSuccess onBackToLogin={handleBackToLogin} />
      ) : (
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <FormHeader isResetMode={isResetMode} />
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <FormInput
                id="email"
                name="email"
                type="email"
                value={formData.email}
                label="Email"
                error={errors.email}
                touched={touched.email}
                placeholder="jan.kowalski@example.com"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />

              {!isResetMode && (
                <FormInput
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  label="Hasło"
                  error={errors.password}
                  touched={touched.password}
                  placeholder="••••••••"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
              )}
            </div>

            {!isResetMode && (
              <RememberMeSection
                rememberMe={formData.rememberMe}
                onChange={handleRememberMeChange}
                onForgotPassword={handleForgotPassword}
              />
            )}

            <FormActions
              isLoading={isLoading}
              isDisabled={!isValid}
              isResetMode={isResetMode}
              onBackToLogin={handleBackToLogin}
            />
          </form>
        </div>
      )}
    </>
  );
});

export default LoginForm; 