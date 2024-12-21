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
  isLoading?: boolean;
  error?: string;
  onForgotPassword: (email: string) => void;
};

const LoginForm = memo(({ onLogin, onForgotPassword }: LoginFormProps) => {
  const {
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
  } = useLoginForm({ onLogin, onForgotPassword });

  if (resetEmailSent) {
    return <ResetPasswordSuccess onBackToLogin={handleBackToLogin} />;
  }

  return (
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
            onChange={handleChange}
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
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>

        {!isResetMode && (
          <RememberMeSection
            rememberMe={formData.rememberMe}
            onChange={handleChange}
            onForgotPassword={handleForgotPassword}
          />
        )}

        <FormActions
          isLoading={isLoading}
          isDisabled={Object.keys(errors).length > 0}
          isResetMode={isResetMode}
          onBackToLogin={isResetMode ? handleBackToLogin : undefined}
        />
      </form>
    </div>
  );
});

export default LoginForm; 