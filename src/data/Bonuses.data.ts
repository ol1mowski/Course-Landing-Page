export type Bonus = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const BONUSES: Bonus[] = [
  {
    id: 1,
    title: "30 dni gwarancji satysfakcji",
    description: "Jeśli w ciągu 30 dni stwierdzisz, że kurs nie spełnia Twoich oczekiwań, zwrócimy Ci pieniądze. Bez zbędnych pytań i formalności.",
    image: "https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/guarantee_icon.svg"
  },
  {
    id: 2,
    title: "Bezpłatne Mapy Myśli oraz Notatki",
    description: "Otrzymasz komplet profesjonalnie przygotowanych materiałów, które pomogą Ci usystematyzować wiedzę i szybciej przyswoić nowe zagadnienia.",
    image: "https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/mindmap_icon.svg"
  },
  {
    id: 3,
    title: "Darmowe Wsparcie Mentorów",
    description: "Przez cały okres trwania kursu możesz liczyć na wsparcie doświadczonych mentorów, którzy pomogą Ci rozwiązać problemy i odpowiedzą na pytania.",
    image: "https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/mentor_icon.svg"
  }
]; 