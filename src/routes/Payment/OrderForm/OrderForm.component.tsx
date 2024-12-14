import { motion } from "framer-motion";

const OrderForm = () => (
  <motion.form 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6 bg-white p-6 rounded-xl shadow-lg"
  >
    <h2 className="text-xl font-semibold mb-6">Dane do zamówienia</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          Imię
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Nazwisko
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />
      </div>
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        required
      />
      <p className="mt-1 text-sm text-gray-500">
        Na ten adres wyślemy dostęp do kursu
      </p>
    </div>

    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        Telefon
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      />
      <p className="mt-1 text-sm text-gray-500">
        Opcjonalnie - do kontaktu w razie problemów
      </p>
    </div>

    <div>
      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
        Nazwa firmy
      </label>
      <input
        type="text"
        id="company"
        name="company"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      />
      <p className="mt-1 text-sm text-gray-500">
        Opcjonalnie - jeśli potrzebujesz faktury na firmę
      </p>
    </div>

    <div>
      <label htmlFor="nip" className="block text-sm font-medium text-gray-700">
        NIP
      </label>
      <input
        type="text"
        id="nip"
        name="nip"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      />
      <p className="mt-1 text-sm text-gray-500">
        Opcjonalnie - do faktury
      </p>
    </div>

    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          required
        />
      </div>
      <div className="ml-3">
        <label htmlFor="terms" className="text-sm text-gray-700">
          Akceptuję{" "}
          <a href="#" className="text-primary hover:underline">
            regulamin
          </a>{" "}
          i{" "}
          <a href="#" className="text-primary hover:underline">
            politykę prywatności
          </a>
        </label>
      </div>
    </div>
  </motion.form>
);

export default OrderForm; 