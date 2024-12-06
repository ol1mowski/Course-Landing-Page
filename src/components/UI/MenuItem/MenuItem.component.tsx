import { MenuItem as MenuItemType } from "../../../data/MenuItems.data";

interface MenuItemProps {
  handleCloseMenu: () => void;
}

const MenuItem = ({
  id,
  label,
  href,
  handleCloseMenu,
}: MenuItemType & MenuItemProps) => {
  return (
    <li key={id}>
      <a
        href={href}
        className="text-3xl hover:text-primary cursor-pointer transition-colors duration-500"
        onClick={handleCloseMenu}
      >
        {label}
      </a>
    </li>
  );
};

export default MenuItem;
