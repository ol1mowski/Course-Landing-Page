import HeaderDesktopNavBar from "./HeaderDesktopNavBar/HeaderDesktopNavBar.component";

const Header = () => {
  return (
    <header className="flex justify-around items-center p-10 mt-5 shadow-headerBoxShadow rounded-xl">
      <section>
        <img
          className="w-3/4 cursor-pointer"
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg"
          alt="Logo platformy Kariera W IT"
        />
      </section>
      <nav className="flex items-center">
        <img
          className="lg:hidden"
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/hamburger_black_cyojcu.svg"
          alt="Hamburger menu icon"
        />
        <HeaderDesktopNavBar />
      </nav>
    </header>
  );
};

export default Header;
