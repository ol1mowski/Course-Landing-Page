export interface MenuItem {
  id: number;
  label: string;
  href: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { id: 1, label: "Dla Kogo jest ten kurs ?", href: "#dla-kogo" },
  { id: 2, label: "Co Otrzymasz ?", href: "#co-otrzymasz" },
  { id: 3, label: "Bonus", href: "#bonus" },
  { id: 4, label: "Oferta", href: "#oferta" },
  { id: 5, label: "FAQ", href: "#faq" },
];
