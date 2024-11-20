const HeaderDesktopNavBar = () => {
  return (
    <ul className="hidden lg:flex gap-10">
      <a href="#for-who">
        <li className="text-lg transition-colors duration-500 hover:text-primary">Dla Kogo jest ten kurs ?</li>
      </a>
      <a href="#gain">
        <li className="text-lg transition-colors duration-500 hover:text-primary">Co Otrzymasz ?</li>
      </a>
      <a href="#bonus">
        <li className="text-lg transition-colors duration-500 hover:text-primary">Bonus</li>
      </a>
      <a href="#offer">
        <li className="text-lg transition-colors duration-500 hover:text-primary">Oferta</li>
      </a>
      <a href="#faq">
        <li className="text-lg transition-colors duration-500 hover:text-primary">FAQ</li>
      </a>
    </ul>
  );
};

export default HeaderDesktopNavBar;
