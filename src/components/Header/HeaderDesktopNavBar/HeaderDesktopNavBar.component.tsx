import { Link } from 'react-router-dom';
import { MENU_ITEMS } from "../../../data/MenuItems.data";

const PANEL_ITEMS = [
  { name: 'Moje kursy', href: '/panel' },
  { name: 'Moje dane', href: '/panel/dane' },
  { name: 'Wyloguj', href: '/wyloguj' }
];

const HeaderDesktopNavBar = () => {
  const isUserLoggedIn = true; // TODO: Replace with actual auth state

  return (
    <ul className="hidden xl:flex gap-10">
      {isUserLoggedIn ? (
        PANEL_ITEMS.map((item) => (
          <Link to={item.href} key={item.name}>
            <li className="text-lg transition-colors duration-500 hover:text-primary">
              {item.name}
            </li>
          </Link>
        ))
      ) : (
        MENU_ITEMS.map((item) => (
          <Link to={item.href} key={item.id}>
            <li className="text-lg transition-colors duration-500 hover:text-primary">
              {item.label}
            </li>
          </Link>
        ))
      )}
    </ul>
  );
};

export default HeaderDesktopNavBar;
