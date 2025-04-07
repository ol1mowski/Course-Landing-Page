import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from '../../../../data/MenuItems.data';

type NavigationProps = {
  items: MenuItem[];
  onItemClick?: () => void;
};

const Navigation = ({ items, onItemClick }: NavigationProps) => {
  const location = useLocation();
  
  return (
    <ul className="flex space-x-8">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            to={item.href}
            onClick={onItemClick}
            className={`text-base font-medium transition-colors ${
              location.pathname === item.href
                ? "text-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(Navigation); 