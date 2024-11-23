import Button from "../../UI/Button/Button.component";

const HeroContent = () => (
  <section className="flex flex-col gap-8">
    <h1 className="text-6xl font-bold leading-tight">
      Zostań programistą <br /> nawet w czasach kryzysu
    </h1>
    <p className="w-2/3 flex text-lg font-light text-gray-500">
      Dołącz do naszego ekskluzywnego kursu i zdobądź umiejętności, które
      otworzą przed Tobą nowe możliwości zawodowe!
    </p>
    <Button>Dowiedz się więcej</Button>
  </section>
);

export default HeroContent; 