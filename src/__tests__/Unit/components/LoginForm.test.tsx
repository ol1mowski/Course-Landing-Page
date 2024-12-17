import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import LoginForm from '../../../components/Login/LoginForm/LoginForm.component';


describe('LoginForm', () => {
  const mockOnLogin = vi.fn();
  const mockOnForgotPassword = vi.fn();

  const renderLoginForm = () => {
    return render(
      <LoginForm
        onLogin={mockOnLogin} 
        onForgotPassword={mockOnForgotPassword} 
      />
    );
  };

  describe('Form Validation', () => {
    it('should validate email format', async () => {
      renderLoginForm();
      
      const emailInput = screen.getByTestId('email-input');
      await userEvent.type(emailInput, 'invalid-email');
      await userEvent.tab();

      await waitFor(() => {
        expect(screen.getByTestId('email-error')).toHaveTextContent('Nieprawidłowy format email');
      });

      await userEvent.clear(emailInput);
      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.tab();

      await waitFor(() => {
        expect(screen.queryByTestId('email-error')).not.toBeInTheDocument();
      });
    });

    it('should validate password length', async () => {
      renderLoginForm();
      
      const passwordInput = screen.getByTestId('password-input');
      await userEvent.type(passwordInput, '12345');
      await userEvent.tab();

      await waitFor(() => {
        expect(screen.getByTestId('password-error')).toHaveTextContent('Hasło musi mieć minimum 6 znaków');
      });

      await userEvent.clear(passwordInput);
      await userEvent.type(passwordInput, '123456');
      await userEvent.tab();

      await waitFor(() => {
        expect(screen.queryByTestId('password-error')).not.toBeInTheDocument();
      });
    });

    it('should validate required fields', async () => {
      renderLoginForm();
      
      const submitButton = screen.getByTestId('submit-button');
      await userEvent.click(submitButton);

      expect(screen.getByTestId('email-error')).toHaveTextContent('Email jest wymagany');
      expect(screen.getByTestId('password-error')).toHaveTextContent('Hasło jest wymagane');
    });

    it('should submit form with valid data', async () => {
      renderLoginForm();
      
      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const rememberMeCheckbox = screen.getByTestId('remember-me-checkbox');

      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'validPassword123');
      await userEvent.click(rememberMeCheckbox);

      const submitButton = screen.getByTestId('submit-button');
      await userEvent.click(submitButton);

      expect(mockOnLogin).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'validPassword123',
        rememberMe: true
      });
    });
  });
});