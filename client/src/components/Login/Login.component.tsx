import LoginForm from "./LoginForm/LoginForm.component";
import { useAuth } from "../../hooks/useAuth.hook";

const Login = () => {
  const { login, isLoading, error, isError } = useAuth();

  const handleForgotPassword = async (email: string) => {
    console.log('Password reset for:', email);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <LoginForm 
          onLogin={login}
          isLoading={isLoading}
          error={error}
          isError={isError}
          onForgotPassword={handleForgotPassword}
        />

        {isError && error && (
          <div className="mt-4 text-center text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
            {error}
          </div>
        )}

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
