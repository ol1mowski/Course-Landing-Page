const HeaderMobileNavMenu = ({
  setMobileMenuStatus,
}: {
  setMobileMenuStatus: (status: boolean) => void;
}) => {
  return (
    <section className="flex flex-col fixed inset-0 bg-white w-screen h-screen overflow-hidden z-50 animate-slide-in">
      <img
        src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/close_bgh7rx.svg"
        alt="Close menu icon"
        className="absolute top-10 right-10 cursor-pointer w-10 h-10"
        onClick={() => setMobileMenuStatus(false)}
      />
      <ul className="flex flex-col gap-10 items-center justify-center h-full m-0">
        <li className="text-3xl hover:text-primary cursor-pointer transition-colors duration-500">Dla Kogo jest ten kurs ?</li>
        <li className="text-3xl hover:text-primary cursor-pointer transition-colors duration-500">Co Otrzymasz ?</li>
        <li className="text-3xl hover:text-primary cursor-pointer transition-colors duration-500">Bonus</li>
        <li className="text-3xl hover:text-primary cursor-pointer transition-colors duration-500">Oferta</li>
        <li className="text-3xl hover:text-primary cursor-pointer transition-colors duration-500">FAQ</li>
      </ul>
    </section>
  );
};

export default HeaderMobileNavMenu;
