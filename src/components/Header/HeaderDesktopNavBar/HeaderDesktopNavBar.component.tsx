import { MENU_ITEMS } from "../../../data/MenuItems.data";

const HeaderDesktopNavBar = () => {
  return (
    <ul className="hidden xl:flex gap-10">
      {MENU_ITEMS.map((item) => (
        <a href={item.href} key={item.id}>
          <li className="text-lg transition-colors duration-500 hover:text-primary">
            {item.label}
          </li>
        </a>
      ))}
    </ul>
  );
};

export default HeaderDesktopNavBar;