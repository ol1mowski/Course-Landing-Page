const HeaderMobileNavMenu = () => {
  return (
    <section className="flex flex-col">
      <img
        src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/close_bgh7rx.svg"
        alt="Close menu icon"
      />
      <ul className="flex flex-col gap-10">
        <li className="text-3xl hover:text-primary">Dla Kogo jest ten kurs ?</li>
        <li className="text-3xl hover:text-primary">Co Otrzymasz ?</li>
        <li className="text-3xl hover:text-primary">Bonus</li>
        <li className="text-3xl hover:text-primary">Oferta</li>
        <li className="text-3xl hover:text-primary">FAQ</li>
      </ul>
    </section>
  );
};

export default HeaderMobileNavMenu;
