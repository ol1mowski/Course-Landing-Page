import { motion } from "framer-motion";
import { FOOTER_SECTIONS, CURRENT_YEAR } from "../../data/Footer.data";
import FooterSection from "./FooterSection/FooterSection.component";

const Footer = () => {
  return (
    <footer className="bg-[#007acc] mt-96 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 lg:col-span-2"
          >
            <img
              src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg"
              alt="Logo"
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-[#fefefe]/90 max-w-md">
              Rozpocznij swoją przygodę z programowaniem już dziś. Dołącz do
              naszej społeczności i rozwijaj się razem z nami.
            </p>
          </motion.div>

          {FOOTER_SECTIONS.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FooterSection {...section} />
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-[#fefefe]/20 my-8" />

        <div className="text-center text-[#fefefe]/70">
          <p>© {CURRENT_YEAR} Kariera w IT. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
