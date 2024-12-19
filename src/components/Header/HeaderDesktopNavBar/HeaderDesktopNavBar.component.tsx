import { Link, useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../../../data/MenuItems.data";

const PANEL_ITEMS = [
  { id: 'courses', label: 'Moje kursy', href: '/panel' },
  { id: 'profile', label: 'Moje dane', href: '/panel/dane' },
  { id: 'logout', label: 'Wyloguj', href: '/wyloguj' }
];

const HeaderDesktopNavBar = () => {
  const location = useLocation();
  const isUserLoggedIn = location.pathname.startsWith('/panel');
  const items = isUserLoggedIn ? PANEL_ITEMS : MENU_ITEMS;

  return (
    <ul className="hidden xl:flex gap-10">
      {items.map((item) => (
        <Link to={item.href} key={item.id}>
          <li className={`text-lg transition-colors duration-500 hover:text-primary ${
            location.pathname === item.href ? 'text-primary' : ''
          }`}>
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default HeaderDesktopNavBar;
