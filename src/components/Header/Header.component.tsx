import { useState } from "react";

import HeaderDesktopNavBar from "./HeaderDesktopNavBar/HeaderDesktopNavBar.component";
import HeaderMobileNavMenu from "./HeaderMobileNavMenu/HeaderMobileNavMenu.component";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState<boolean>(false);

  return (
    <header className="flex bg-white justify-around items-center p-10 mt-5 shadow-headerBoxShadow rounded-xl relative z-10">
      <section>
        <Link to="/">
          <img
            className="w-3/4 cursor-pointer hover:scale-105 transition-all duration-300"
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg"
            alt="Logo platformy Kariera W IT"
          />
        </Link>
      </section>
      <nav className="flex items-center">
        <img
          className="xl:hidden cursor-pointer"
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/hamburger_black_cyojcu.svg"
          alt="Hamburger menu icon"
          onClick={() => setMobileMenuStatus(!mobileMenuStatus)}
        />
        <HeaderDesktopNavBar />
        {mobileMenuStatus && (
          <HeaderMobileNavMenu setMobileMenuStatus={setMobileMenuStatus} />
        )}
      </nav>
    </header>
  );
};

export default Header;
