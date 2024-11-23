import Button from "../../UI/Button/Button.component";
import Description from "../../UI/Description/Description.component";

const HeroContent = () => (
  <section className="flex flex-col gap-8">
    <h1 className="text-6xl font-bold leading-tight">
      Zostań programistą <br /> nawet w czasach kryzysu
    </h1>
    <Description>
      Dołącz do naszego ekskluzywnego kursu i zdobądź umiejętności, które
      otworzą przed Tobą nowe możliwości zawodowe!
    </Description>
    <Button>Dowiedz się więcej</Button>
  </section>
);

export default HeroContent; 