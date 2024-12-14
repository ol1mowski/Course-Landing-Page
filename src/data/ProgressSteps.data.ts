export type ProgressStep = {
  id: number;
  title: string;
  description: string;
};

export const PROGRESS_STEPS: ProgressStep[] = [
  {
    id: 1,
    title: "Krok 1: Analiza rynku",
    description: "Poznaj aktualne trendy i najbardziej pożądane umiejętności w IT. Dowiedz się, które specjalizacje są odporne na kryzys.",
  },
  {
    id: 2,
    title: "Krok 2: Strategia rozwoju",
    description: "Stwórz indywidualny plan rozwoju kariery. Zidentyfikuj technologie i umiejętności, które zwiększą Twoją wartość na rynku pracy.",
  },
  {
    id: 3,
    title: "Krok 3: Budowanie marki osobistej",
    description: "Naucz się skutecznie prezentować swoje umiejętności. Stwórz profesjonalne CV, profil na LinkedIn i portfolio projektów.",
  },
  {
    id: 4,
    title: "Krok 4: Networking i widoczność",
    description: "Poznaj skuteczne metody nawiązywania kontaktów w branży IT. Dowiedz się, jak być widocznym dla rekruterów nawet w trudnych czasach.",
  },
  {
    id: 5,
    title: "Krok 5: Proces rekrutacyjny",
    description: "Przygotuj się do rozmów kwalifikacyjnych. Poznaj techniki negocjacji i sposoby wyróżnienia się na tle innych kandydatów.",
  },
]; 