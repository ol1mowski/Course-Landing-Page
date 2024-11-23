const Hero = () => {
  return (
    <main className="flex h-screen flex-col xl:pl-32 gap-20 items-end justify-self-start mt-20 md:mt-32 md:items-start">
      <img
        src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732108538/Course-site/circle_ml7st7.svg"
        alt="circle icon"
        className="hidden xl:block lg:absolute top-0 right-0 z-[-10]"
      />
      <section className="flex flex-col gap-8">
        <h1 className="text-6xl font-bold leading-tight">
          Zostań programistą <br /> nawet w czasach kryzysu
        </h1>
        <p className="w-2/3 flex text-lg font-light  text-gray-500">
          Dołącz do naszego ekskluzywnego kursu i zdobądź umiejętności, które
          otworzą przed Tobą nowe możliwości zawodowe!
        </p>
        <button className="bg-primary text-white px-5 py-3 rounded-xl text-lg w-fit hover:bg-white border border-primary hover:text-primary transition-colors">
          Dowiedz się więcej
        </button>
      </section>
      <section className="flex w-full flex-row flex-wrap gap-5">
        <div className="flex w-full flex-row flex-wrap gap-3 items-center">
          <img
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/check_xddkrs.svg"
            alt="check icon"
            className="w-7 h-7"
          />
          <span className="text-md">30 dniowa gwarancja satysfakcji</span>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/check_xddkrs.svg"
            alt="check icon"
            className="w-7 h-7"
          />
          <span className="text-md">Wsparcie mentorów</span>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/check_xddkrs.svg"
            alt="check icon"
            className="w-7 h-7"
          />
          <span className="text-md">
            Dostęp do elitarnej grupy społeczności
          </span>
        </div>
      </section>
    </main>
  );
};

export default Hero;
