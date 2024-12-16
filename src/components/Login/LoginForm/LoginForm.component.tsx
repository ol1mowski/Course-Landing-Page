const LoginForm = () => {
  return (
    <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Zaloguj się</h2>
        <p className="mt-2 text-sm text-gray-600">
          Uzyskaj dostęp do swojego konta kursanta
        </p>
      </div>

      <form className="mt-8 space-y-6">
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
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="jan.kowalski@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Hasło
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Zapamiętaj mnie
            </label>
          </div>

          <button
            type="button"
            className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            Nie pamiętam hasła
          </button>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            Zaloguj się
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm; 