export type MenuItem = {
  id: number;
  label: string;
  href: string;
};

export const MENU_ITEMS: MenuItem[] = [
  { id: 1, label: "O kursie", href: "#o-kursie" },
  { id: 2, label: "Dla kogo jest kurs?", href: "#dla-kogo-jest-kurs" },
  { id: 3, label: "Korzyści z kursu", href: "#korzysci-z-kursu" },
  { id: 4, label: "Czego się nauczysz?", href: "#czego-sie-nauczysz" },
  { id: 5, label: "O autorze", href: "#o-autorze" },
  { id: 6, label: "FAQ", href: "#faq" },
  { id: 7, label: "Oferta", href: "#oferta" },
];
