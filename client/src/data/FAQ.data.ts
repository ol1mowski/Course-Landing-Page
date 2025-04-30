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
      },
      {
        id: 4,
        question: "Ile czasu zajmie ukończenie kursu?",
        answer: "Tempo nauki zależy od Ciebie. Większość uczestników kończy kurs w ciągu 2-3 miesięcy, poświęcając około 5-10 godzin tygodniowo na naukę."
      },
      {
        id: 5,
        question: "Czy materiały są aktualizowane?",
        answer: "Tak, regularnie aktualizujemy materiały kursu, aby były zgodne z najnowszymi technologiami i trendami w branży IT. Masz dostęp do wszystkich przyszłych aktualizacji bez dodatkowych opłat."
      },
      {
        id: 6,
        question: "Czy mogę uczyć się na urządzeniach mobilnych?",
        answer: "Tak, platforma jest w pełni responsywna i możesz korzystać z materiałów na smartfonie lub tablecie, choć do wykonywania praktycznych ćwiczeń zalecamy korzystanie z komputera."
      },
      {
        id: 7,
        question: "Czy kurs pomoże mi znaleźć pracę w IT?",
        answer: "Tak, kurs zawiera nie tylko wiedzę techniczną, ale także moduły poświęcone przygotowaniu CV, portfolio oraz przygotowaniu do rozmów kwalifikacyjnych. Dodatkowo, nasi najlepsi absolwenci otrzymują rekomendacje do firm partnerskich."
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
      },
      {
        id: 4,
        question: "Jakie technologie i języki programowania są omawiane w kursie?",
        answer: "W kursie omawiamy HTML, CSS, JavaScript, React, Node.js oraz podstawy baz danych. Poruszamy również tematy związane z narzędziami deweloperskimi, kontrolą wersji Git i metodologiami pracy w zespole."
      },
      {
        id: 5,
        question: "Czy kurs zawiera praktyczne projekty?",
        answer: "Tak, kurs zawiera liczne projekty praktyczne, które pomogą Ci zbudować portfolio. W trakcie kursu stworzysz minimum 5 kompletnych aplikacji webowych."
      },
      {
        id: 6,
        question: "Czy potrzebuję specjalnego oprogramowania?",
        answer: "Wszystkie narzędzia używane w kursie są darmowe lub dostępne w wersji próbnej na czas trwania kursu. Szczegółowe instrukcje instalacji są zawarte w materiałach."
      },
      {
        id: 7,
        question: "Czy materiały są dostępne do pobrania?",
        answer: "Tak, wszystkie materiały, kody źródłowe i przykłady można pobrać i używać offline. Filmy można również oglądać offline po wcześniejszym pobraniu."
      },
      {
        id: 8,
        question: "Czy będę przygotowany do pracy na realnych projektach po ukończeniu kursu?",
        answer: "Tak, kurs został zaprojektowany w oparciu o aktualne wymagania rynku pracy. Projekty, które zrealizujesz, symulują rzeczywiste zadania, z którymi spotkasz się w pracy zawodowej. Nasi absolwenci regularnie zgłaszają, że czuli się dobrze przygotowani do swoich pierwszych zadań w pracy."
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
      },
      {
        id: 4,
        question: "Czy mam dostęp do społeczności innych kursantów?",
        answer: "Tak, kurs obejmuje dostęp do zamkniętej grupy na Discordzie, gdzie możesz komunikować się z innymi uczestnikami, wymieniać doświadczenia i wspólnie rozwiązywać problemy."
      },
      {
        id: 5,
        question: "Czy mogę kontaktować się z mentorem poza wyznaczonymi godzinami konsultacji?",
        answer: "Poza regularnymi konsultacjami możesz zadawać pytania na platformie kursu lub na Discordzie, gdzie mentor i inni instruktorzy regularnie sprawdzają wiadomości i odpowiadają na pytania."
      },
      {
        id: 6,
        question: "Co się stanie, jeśli utknę na jakimś etapie kursu?",
        answer: "Jeśli napotkasz trudności, masz kilka opcji pomocy: możesz skorzystać z konsultacji mentora, zadać pytanie na forum społeczności, skorzystać z dodatkowych materiałów wyjaśniających lub wziąć udział w cotygodniowych sesjach pytań i odpowiedzi."
      },
      {
        id: 7,
        question: "Czy organizujecie dodatkowe wydarzenia dla kursantów?",
        answer: "Tak, regularnie organizujemy webinary, hackathony i sesje codingowe, w których możesz uczestniczyć jako kursant. Są to świetne okazje do pogłębienia wiedzy, pracy zespołowej i networkingu z innymi uczestnikami oraz profesjonalistami z branży."
      }
    ]
  },
  {
    id: 4,
    title: "Płatności i kwestie formalne",
    questions: [
      {
        id: 1,
        question: "Jakie metody płatności są akceptowane?",
        answer: "Akceptujemy płatności kartą kredytową, przelewem bankowym, BLIK oraz przez popularne systemy płatności elektronicznych jak PayPal."
      },
      {
        id: 2,
        question: "Czy mogę rozłożyć płatność na raty?",
        answer: "Tak, oferujemy możliwość płatności w 3 ratach bez dodatkowych kosztów. W przypadku potrzeby dłuższego okresu, prosimy o kontakt indywidualny."
      },
      {
        id: 3,
        question: "Czy otrzymam fakturę za zakup kursu?",
        answer: "Tak, po dokonaniu płatności automatycznie wystawiamy fakturę VAT, która jest dostępna do pobrania w panelu uczestnika. Możesz również otrzymać ją na wskazany adres e-mail."
      },
      {
        id: 4,
        question: "Czy oferujecie zniżki dla studentów lub grup?",
        answer: "Tak, oferujemy 15% zniżki dla studentów (po weryfikacji legitymacji) oraz specjalne stawki dla grup 3+ osób. Skontaktuj się z nami, aby uzyskać indywidualną ofertę."
      },
      {
        id: 5,
        question: "Co obejmuje gwarancja zwrotu pieniędzy?",
        answer: "Jeśli w ciągu pierwszych 30 dni od zakupu kursu uznasz, że nie spełnia on Twoich oczekiwań, możesz zażądać pełnego zwrotu pieniędzy bez podawania przyczyny. Wystarczy wysłać email z prośbą o zwrot."
      }
    ]
  },
  {
    id: 5,
    title: "Po ukończeniu kursu",
    questions: [
      {
        id: 1,
        question: "Jakie mam perspektywy zawodowe po ukończeniu kursu?",
        answer: "Absolwenci naszego kursu znajdują zatrudnienie jako junior frontend developerzy, web developerzy lub specjaliści od UX/UI. Wielu z nich rozpoczyna pracę jako freelancerzy lub zakłada własne firmy zajmujące się tworzeniem stron i aplikacji internetowych."
      },
      {
        id: 2,
        question: "Czy oferujecie pomoc w znalezieniu pracy po kursie?",
        answer: "Tak, po ukończeniu kursu otrzymujesz dostęp do naszej bazy ofert pracy oraz możliwość udziału w programie mentoringowym ukierunkowanym na przygotowanie do procesu rekrutacyjnego. Najlepszym absolwentom oferujemy również rekomendacje do naszych firm partnerskich."
      },
      {
        id: 3,
        question: "Czy mogę kontynuować naukę po ukończeniu tego kursu?",
        answer: "Oczywiście! Dla absolwentów oferujemy kursy zaawansowane oraz 20% zniżki na wszystkie nasze przyszłe szkolenia. Regularnie udostępniamy również darmowe materiały uzupełniające dla naszych absolwentów, by mogli być na bieżąco z nowymi technologiami."
      }
    ]
  }
]; 