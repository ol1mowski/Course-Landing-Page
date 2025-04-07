import { motion } from "framer-motion";
import Button from "../../UI/Button/Button.component";
import { OFFER_DETAILS } from "../../../data/Offer.data";
import { Link } from "react-router-dom";

const OfferCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full hover:shadow-3xl transition-shadow duration-300"
  >
    <div className="flex flex-col items-center text-center">
      <img
        src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg"
        alt="Logo"
        className="h-16 mb-8"
      />

      <section className="space-y-4 mb-8">
        <div className="relative">
          <span className="text-gray-500 text-2xl line-through">
            {OFFER_DETAILS.regularPrice} {OFFER_DETAILS.currency}
          </span>
          <div className="absolute -right-12 -top-3 bg-red-500 text-white text-sm px-2 py-1 rounded-full transform rotate-12">
            -25%
          </div>
        </div>
        <div className="text-4xl font-bold text-primary">
          {OFFER_DETAILS.promoPrice} {OFFER_DETAILS.currency}
        </div>
      </section>

      <Link to={"/platnosc"}>
        <Button>Dołącz do kursu</Button>
      </Link>

      <p className="text-sm text-gray-500 mt-4">
        Jednorazowa płatność, dożywotni dostęp
      </p>
    </div>
  </motion.div>
);

export default OfferCard;
