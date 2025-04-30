import { motion } from "framer-motion";

export const SectionHeader = () => {
  return (
    <>
      <div className="text-center relative mb-2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-0">
          Dla kogo jest ten kurs?
        </h2>

        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full mx-auto mt-4"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "5rem", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </div>

      <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-8 font-medium">
        Ten kurs jest idealny dla osób, które chcą rozwinąć swoje umiejętności w następujących obszarach:
      </p>
    </>
  );
}; 