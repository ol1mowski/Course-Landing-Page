import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const orderFormSchema = z.object({
  firstName: z.string().min(2, "Imię musi mieć minimum 2 znaki"),
  lastName: z.string().min(2, "Nazwisko musi mieć minimum 2 znaki"),
  email: z.string().email("Nieprawidłowy format email"),
  phone: z.string().regex(/^\d{9}$/, "Numer telefonu musi mieć 9 cyfr").optional(),
  company: z.string().optional(),
  nip: z.string().regex(/^\d{10}$/, "NIP musi mieć 10 cyfr").optional(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "Musisz zaakceptować regulamin" }),
  }),
});

type OrderFormData = z.infer<typeof orderFormSchema>;

const OrderForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
  });

  return (
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
            {...register("firstName")}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
          )}
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
            {...register("terms")}
            type="checkbox"
            className={`h-4 w-4 rounded focus:ring-primary ${
              errors.terms ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        <div className="ml-3">
          <label className="text-sm text-gray-700">
            Akceptuję{" "}
            <a href="#" className="text-primary hover:underline">
              regulamin
            </a>{" "}
            i{" "}
            <a href="#" className="text-primary hover:underline">
              politykę prywatności
            </a>
          </label>
          {errors.terms && (
            <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>
          )}
        </div>
      </div>
    </motion.form>
  );
};

export default OrderForm; 