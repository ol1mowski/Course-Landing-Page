type FooterLink = {
  id: number;
  text: string;
  href: string;
};

type FooterSection = {
  id: number;
  title: string;
  links: FooterLink[];
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: 1,
    title: "Nawigacja",
    links: [
      { id: 1, text: "Strona główna", href: "#" },
      { id: 2, text: "O kursie", href: "#o-kursie" },
      { id: 3, text: "Program", href: "#program" },
      { id: 4, text: "FAQ", href: "#faq" },
    ],
  },
  {
    id: 2,
    title: "Kontakt",
    links: [
      { id: 1, text: "YouTube", href: "#" },
      { id: 2, text: "LinkedIn", href: "#" },
      { id: 3, text: "Discord", href: "#" },
      { id: 4, text: "Email", href: "mailto:kontakt@example.com" },
    ],
  },
];

export const CURRENT_YEAR = new Date().getFullYear();
