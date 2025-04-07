import { memo } from 'react';
import Navigation from '../Navigation/Navigation.component';
import LogoutButton from '../LogoutButton/LogoutButton.component';
import { MenuItem } from '../../../../data/MenuItems.data';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  onLogout: () => void;
  isLoggingOut: boolean;
};

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  menuItems,
  onLogout,
  isLoggingOut 
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 animate-fade-in xl:hidden">
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
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
          <div className="space-y-8">
            <Navigation items={menuItems} onItemClick={onClose} />
            <div className="flex justify-center">
              <LogoutButton 
                onClick={() => {
                  onClose();
                  onLogout();
                }}
                isLoading={isLoggingOut} 
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default memo(MobileMenu); 