import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

import Login from './Login.component';
import * as useAuthHook from '../../hooks/useAuth.hook';

describe('Login Component', () => {
  const mockLogin = vi.fn();
  const mockUseAuth = vi.fn();

  beforeEach(() => {
    mockUseAuth.mockReturnValue({
      login: mockLogin,
      isLoading: false,
      error: null,
      isError: false
    });

    vi.spyOn(useAuthHook, 'useAuth').mockImplementation(mockUseAuth);
  });

  const renderLogin = () => {
    return render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  };

  describe('Rendering', () => {
    it('should render login form correctly', () => {
      renderLogin();
      
      expect(screen.getByRole('heading', { name: 'Zaloguj się' })).toBeInTheDocument();
      expect(screen.getByTestId('email-input')).toBeInTheDocument();
      expect(screen.getByTestId('password-input')).toBeInTheDocument();
      expect(screen.getByTestId('remember-me-checkbox')).toBeInTheDocument();
      expect(screen.getByTestId('forgot-password-button')).toBeInTheDocument();
      expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });
  });

  describe('Form Interaction', () => {
    it('should handle successful login', async () => {
      renderLogin();
      
      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const submitButton = screen.getByTestId('submit-button');

      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'password123');
      await userEvent.click(submitButton);

      expect(mockLogin).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
        rememberMe: false
      });
    });

    it('should handle remember me checkbox', async () => {
      renderLogin();
      
      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const rememberMeCheckbox = screen.getByTestId('remember-me-checkbox');
      const submitButton = screen.getByTestId('submit-button');

      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'password123');
      await userEvent.click(rememberMeCheckbox);
      await userEvent.click(submitButton);

      expect(mockLogin).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
        rememberMe: true
      });
    });
  });

  describe('Error Handling', () => {
    it('should display error message when login fails', async () => {
      const errorMessage = 'Nieprawidłowy email lub hasło';
      mockUseAuth.mockReturnValue({
        login: mockLogin,
        isLoading: false,
        error: errorMessage,
        isError: true
      });

      renderLogin();
      
      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const submitButton = screen.getByTestId('submit-button');

      await userEvent.type(emailInput, 'wrong@example.com');
      await userEvent.type(passwordInput, 'wrongpassword');
      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
      });
    });
  });

  describe('Loading State', () => {
    it('should disable submit button during loading', () => {
      mockUseAuth.mockReturnValue({
        login: mockLogin,
        isLoading: true,
        error: null,
        isError: false
      });

      renderLogin();
      
      const submitButton = screen.getByTestId('submit-button');
      expect(submitButton).toHaveAttribute('disabled');
    });
  });

  describe('Password Reset', () => {
    it('should handle forgot password click', async () => {
      renderLogin();
      
      const forgotPasswordButton = screen.getByTestId('forgot-password-button');
      await userEvent.click(forgotPasswordButton);

      expect(screen.getByText('Resetuj hasło')).toBeInTheDocument();
    });
  });
}); 