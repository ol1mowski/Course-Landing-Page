type Lesson = {
  id: number;
  title: string;
  duration: string;
}

type Section = {
  id: number;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export const COURSE_SECTIONS: Section[] = [
  {
    id: 1,
    title: "Moduł 1: Tworzenie profesjonalnego CV i portfolio",
    duration: "2h 30min",
    lessons: [
      { id: 1, title: "Jak pisać skuteczne CV dla IT", duration: "30min" },
      {
        id: 2,
        title: "Budowanie portfolio z projektami IT",
        duration: "45min",
      },
      {
        id: 3,
        title: "Dostosowanie CV do różnych ról w IT",
        duration: "45min",
      },
      {
        id: 4,
        title: "Wskazówki dotyczące wizualnej prezentacji",
        duration: "30min",
      },
    ],
  },
  {
    id: 2,
    title: "Moduł 2: Przygotowanie do rozmowy kwalifikacyjnej",
    duration: "3h",
    lessons: [
      {
        id: 1,
        title: "Najczęściej zadawane pytania na rozmowach w IT",
        duration: "45min",
      },
      {
        id: 2,
        title: "Jak skutecznie opowiadać o swoich projektach",
        duration: "45min",
      },
      { id: 3, title: "Symulacja rozmowy technicznej", duration: "45min" },
      {
        id: 4,
        title: "Budowanie pewności siebie na rozmowach",
        duration: "45min",
      },
    ],
  },
  {
    id: 3,
    title: "Moduł 3: Budowanie sieci kontaktów w branży IT",
    duration: "2h",
    lessons: [
      {
        id: 1,
        title: "Wykorzystanie LinkedIn w poszukiwaniu pracy",
        duration: "30min",
      },
      {
        id: 2,
        title:
          "Jak efektywnie nawiązywać kontakty na meetupach i konferencjach",
        duration: "45min",
      },
      { id: 3, title: "Pisanie wiadomości do rekruterów", duration: "45min" },
    ],
  },
];
