export type MenuItem = {
  id: number;
  label: string;
  href: string;
};

export const MENU_ITEMS: MenuItem[] = [
  { id: 1, label: "Panel", href: "/mojekonto" },
  { id: 2, label: "Moje dane", href: "/mojekonto/dane" },
];
