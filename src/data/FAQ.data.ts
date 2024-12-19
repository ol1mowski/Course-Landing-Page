type Question = {
  id: number;
  question: string;
  answer: string;
}

type FAQSection = {
  id: number;
  title: string;
  questions: Question[];
}

export const FAQ_SECTIONS: FAQSection[] = [
  {
    id: 1,
    title: "Ogólne pytania",
    questions: [
      {
        id: 1,
        question: "Dla kogo jest ten kurs?",
        answer: "Kurs jest przeznaczony dla osób, które chcą rozpocząć karierę w IT, niezależnie od aktualnego doświadczenia. Szczególnie polecany dla początkujących."
      },
      {
        id: 2,
        question: "Jak długo mam dostęp do kursu?",
        answer: "Otrzymujesz dożywotni dostęp do wszystkich materiałów kursu. Możesz wracać do nich w dowolnym momencie."
      },
      {
        id: 3,
        question: "Czy otrzymam certyfikat ukończenia?",
        answer: "Tak, po ukończeniu kursu otrzymasz certyfikat potwierdzający zdobyte umiejętności."
      }
    ]
  },
  {
    id: 2,
    title: "Techniczne szczegóły",
    questions: [
      {
        id: 1,
        question: "Jakie są wymagania techniczne?",
        answer: "Potrzebujesz jedynie komputera z dostępem do internetu. Wszystkie niezbędne narzędzia są darmowe i zostaną omówione w kursie."
      },
      {
        id: 2,
        question: "Czy potrzebuję wcześniejszego doświadczenia?",
        answer: "Nie, kurs zaczyna się od podstaw. Wcześniejsze doświadczenie nie jest wymagane."
      },
      {
        id: 3,
        question: "W jakim języku jest kurs?",
        answer: "Kurs jest prowadzony w języku polskim, z wykorzystaniem angielskich terminów technicznych."
      }
    ]
  },
  {
    id: 3,
    title: "Wsparcie i pomoc",
    questions: [
      {
        id: 1,
        question: "Jak wygląda wsparcie mentora?",
        answer: "Masz dostęp do indywidualnych konsultacji z mentorem, który pomoże Ci rozwiązać problemy i odpowie na pytania."
      },
      {
        id: 2,
        question: "Co jeśli nie będę zadowolony z kursu?",
        answer: "Oferujemy 30-dniową gwarancję zwrotu pieniędzy, jeśli kurs nie spełni Twoich oczekiwań."
      },
      {
        id: 3,
        question: "Jak szybko otrzymam odpowiedź na pytania?",
        answer: "Staramy się odpowiadać na wszystkie pytania w ciągu 24 godzin w dni robocze."
      }
    ]
  }
]; 