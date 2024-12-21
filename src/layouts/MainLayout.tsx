import { Outlet, Link, useLocation } from "react-router-dom";
import { useLogout } from '../hooks/useLogout.hook';

const MainLayout = () => {
  const { logout, isLoading } = useLogout();
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token');

  const navLinks = [
    { path: '/mojekonto', label: 'Moje kursy' },
    { path: '/mojekonto/dane', label: 'Dane konta' },
  ];

  return (
    <>
      {/* Header z nawigacją */}
      {isAuthenticated && (
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <nav className="flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <button
                onClick={() => logout()}
                disabled={isLoading}
                className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Wylogowywanie...' : 'Wyloguj się'}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Główna zawartość */}
      <Outlet />
    </>
  );
};

export default MainLayout; 