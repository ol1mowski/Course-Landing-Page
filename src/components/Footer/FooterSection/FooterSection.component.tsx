type FooterSectionProps = {
  title: string;
  links: Array<{
    id: number;
    text: string;
    href: string;
  }>;
  index: number;
};

const FooterSection = ({ title, links, index }: FooterSectionProps) => (
  <section 
    className="flex flex-col gap-4"
  >
    <h3 className="text-lg font-semibold text-[#fefefe]">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className="text-[#fefefe]/80 hover:text-[#fefefe] transition-colors duration-300"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default FooterSection; 