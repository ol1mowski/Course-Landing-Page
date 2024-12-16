import LoginForm from "./LoginForm/LoginForm.component";
import type { LoginFormData } from "./LoginForm/loginForm.schema";

const Login = () => {
  const handleLogin = async (data: LoginFormData) => {
    // Tutaj implementacja logowania
    console.log('Login attempt:', data);
  };

  const handleForgotPassword = async (email: string) => {
    // Tutaj implementacja resetowania hasła
    console.log('Password reset for:', email);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <LoginForm 
          onLogin={handleLogin}
          onForgotPassword={handleForgotPassword}
        />

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Potrzebujesz pomocy?{" "}
            <button className="font-medium text-primary hover:text-primary-dark transition-colors">
              Skontaktuj się z nami
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
