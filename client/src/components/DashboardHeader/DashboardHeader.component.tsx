import { memo, useState } from "react";
import { useLogout } from "../../hooks/useLogout.hook";
import { MENU_ITEMS } from "../../data/MenuItems.data";

import Logo from './components/Logo/Logo.component';
import Navigation from './components/Navigation/Navigation.component';
import LogoutButton from './components/LogoutButton/LogoutButton.component';
import MobileMenu from './components/MobileMenu/MobileMenu.component';

const DashboardHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout, isLoading } = useLogout();

  return (
    <header className="flex bg-white justify-around items-center p-10 mt-5 shadow-headerBoxShadow rounded-xl relative z-10">
      <Logo />

      <nav className="hidden xl:flex items-center space-x-8">
        <Navigation items={MENU_ITEMS} />
        <LogoutButton onClick={logout} isLoading={isLoading} />
      </nav>

      <button
        className="xl:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Otwórz menu"
      >
        <img
          className="cursor-pointer"
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/hamburger_black_cyojcu.svg"
          alt="Menu"
        />
      </button>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={MENU_ITEMS}
        onLogout={logout}
        isLoggingOut={isLoading}
      />
    </header>
  );
};

export default memo(DashboardHeader); 