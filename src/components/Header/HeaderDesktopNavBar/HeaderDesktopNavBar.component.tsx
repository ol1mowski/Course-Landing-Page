const HeaderDesktopNavBar = () => {
  return (
    <ul className="hidden lg:flex gap-10">
      <a href="#for-who">
        <li className="text-xl">Dla Kogo jest ten kurs ?</li>
      </a>
      <a href="#gain">
        <li className="text-xl">Co Otrzymasz ?</li>
      </a>
      <a href="#bonus">
        <li className="text-xl">Bonus</li>
      </a>
      <a href="#offer">
        <li className="text-xl">Oferta</li>
      </a>
      <a href="#faq">
        <li className="text-xl">FAQ</li>
      </a>
    </ul>
  );
};

export default HeaderDesktopNavBar;
