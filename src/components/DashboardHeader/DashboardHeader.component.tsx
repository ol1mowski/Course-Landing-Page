import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout.hook";

const DashboardHeader = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
  const { logout, isLoading } = useLogout();
  const location = useLocation();

  const menuItems = [
    { id: 1, label: "Panel", href: "/mojekonto" },
    { id: 2, label: "Moje dane", href: "/mojekonto/dane" },
  ];

  return (
    <header className="flex bg-white justify-around items-center p-10 mt-5 shadow-headerBoxShadow rounded-xl relative z-10">
      <section>
        <Link to="/mojekonto">
          <img
            className="w-3/4 cursor-pointer hover:scale-105 transition-all duration-300"
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg"
            alt="Logo platformy Kariera W IT"
          />
        </Link>
      </section>

      {/* Desktop Menu */}
      <nav className="hidden xl:flex items-center space-x-8">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className={`text-base font-medium transition-colors ${
              location.pathname === item.href
                ? "text-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <button
          onClick={() => logout()}
          disabled={isLoading}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? "Wylogowywanie..." : "Wyloguj się"}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="xl:hidden"
        onClick={() => setMobileMenuStatus(!mobileMenuStatus)}
      >
        <img
          className="cursor-pointer"
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/hamburger_black_cyojcu.svg"
          alt="Menu"
        />
      </button>

      {/* Mobile Menu */}
      {mobileMenuStatus && (
        <div className="fixed inset-0 bg-white z-50 animate-fade-in xl:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuStatus(false)}
                className="p-2"
                aria-label="Zamknij menu"
              >
                <img
                  src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/close_bgh7rx.svg"
                  alt="Zamknij"
                  className="w-6 h-6"
                />
              </button>
            </div>
            <nav className="flex-1 flex items-center justify-center">
              <ul className="space-y-8">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuStatus(false)}
                      className={`text-xl font-medium ${
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-gray-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      setMobileMenuStatus(false);
                      logout();
                    }}
                    disabled={isLoading}
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? "Wylogowywanie..." : "Wyloguj się"}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader; 