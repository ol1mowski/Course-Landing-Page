import LoginForm from "./LoginForm/LoginForm.component";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <LoginForm />

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
