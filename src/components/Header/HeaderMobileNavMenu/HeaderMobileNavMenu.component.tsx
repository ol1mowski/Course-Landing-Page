import { memo, useCallback } from "react";

import { MENU_ITEMS } from "../../../data/MenuItems.data";

import MenuItem from "../../UI/MenuItem/MenuItem.component";

type HeaderMobileNavMenuProps = {
  setMobileMenuStatus: (status: boolean) => void;
}

const HeaderMobileNavMenu = ({
  setMobileMenuStatus,
}: HeaderMobileNavMenuProps) => {
  const handleCloseMenu = useCallback(() => {
    setMobileMenuStatus(false);
  }, [setMobileMenuStatus]);


  return (
    <section className="flex flex-col fixed inset-0 bg-white w-screen h-screen overflow-hidden z-50 animate-fade-in">
      <button
        type="button"
        className="absolute top-10 right-10 cursor-pointer w-10 h-10"
        onClick={handleCloseMenu}
        aria-label="Zamknij menu"
      >
        <img
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/close_bgh7rx.svg"
          alt="Close menu icon"
          className="w-full h-full"
        />
      </button>
      <nav className="flex items-center justify-center h-full">
        <ul className="flex flex-col gap-10 items-center justify-center h-full m-0">
          {MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.id}
              id={item.id}
              label={item.label}
              href={item.href}
              handleCloseMenu={handleCloseMenu}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default memo(HeaderMobileNavMenu);
