import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg text-center"
        >
          <div className="mb-8">
            <svg
              className="w-20 h-20 mx-auto text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Dziękujemy za zakup!
          </h1>
          <p className="text-gray-600 mb-8">
            Wysłaliśmy dane logowania na podany adres email. 
            Jeśli nie otrzymasz wiadomości w ciągu 5 minut, 
            sprawdź folder spam lub skontaktuj się z nami.
          </p>

          <div className="space-y-4">
            <a 
              href="mailto:kontakt@example.com"
              className="inline-block w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Kontakt z supportem
            </a>
            
            <div className="mt-4">
              <Link 
                to="/"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Powrót do strony głównej
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PaymentSuccess; 