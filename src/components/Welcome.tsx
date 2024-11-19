interface WelcomeProps {
  name: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return (
    <div>
      <h1>Witaj, {name}!</h1>
      <p>Witamy w naszej platformie kursowej</p>
    </div>
  );
};

export default Welcome;
