import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const orderFormSchema = z.object({
  firstName: z.string().min(2, "Imię musi mieć minimum 2 znaki"),
  lastName: z.string().min(2, "Nazwisko musi mieć minimum 2 znaki"),
  email: z.string().email("Nieprawidłowy format email"),
  phone: z
    .string()
    .regex(/^\d{9}$/, "Numer telefonu musi mieć 9 cyfr")
    .optional()
    .or(z.literal("")),
  company: z.string().optional(),
  nip: z
    .string()
    .regex(/^\d{10}$/, "NIP musi mieć 10 cyfr")
    .optional()
    .or(z.literal("")),
  terms: z.literal(true, {
    errorMap: () => ({ message: "Musisz zaakceptować regulamin" }),
  }),
});

type OrderFormData = z.infer<typeof orderFormSchema>;

const OrderForm = () => {
  const {
    register,
    formState: { errors, dirtyFields },
    watch,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      nip: "",
      terms: true,
    },
  });

  const companyName = watch("company");
  const nip = watch("nip");
  const isCompanyFieldRequired = companyName || nip;

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 bg-white p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-6">Dane do zamówienia</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            Imię
            {dirtyFields.firstName && !errors.firstName && (
              <span className="text-green-500 ml-2">✓</span>
            )}
          </label>
          <input
            id="firstName"
            {...register("firstName")}
            autoComplete="given-name"
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
              errors.firstName
                ? "border-red-500"
                : dirtyFields.firstName
                ? "border-green-500"
                : "border-gray-300"
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Nazwisko
            {dirtyFields.lastName && !errors.lastName && (
              <span className="text-green-500 ml-2">✓</span>
            )}
          </label>
          <input
            id="lastName"
            {...register("lastName")}
            autoComplete="family-name"
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
              errors.lastName
                ? "border-red-500"
                : dirtyFields.lastName
                ? "border-green-500"
                : "border-gray-300"
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
          {dirtyFields.email && !errors.email && (
            <span className="text-green-500 ml-2">✓</span>
          )}
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          autoComplete="email"
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
            errors.email
              ? "border-red-500"
              : dirtyFields.email
              ? "border-green-500"
              : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
        <p className="mt-1 text-sm text-gray-500">
          Na ten adres wyślemy dostęp do kursu
        </p>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Telefon
          {dirtyFields.phone && !errors.phone && (
            <span className="text-green-500 ml-2">✓</span>
          )}
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          autoComplete="tel"
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
            errors.phone
              ? "border-red-500"
              : dirtyFields.phone && watch("phone")
              ? "border-green-500"
              : "border-gray-300"
          }`}
        />
        <p className="mt-1 text-sm text-gray-500">
          Opcjonalnie - do kontaktu w razie problemów
        </p>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          Nazwa firmy
          {dirtyFields.company && !errors.company && (
            <span className="text-green-500 ml-2">✓</span>
          )}
        </label>
        <input
          id="company"
          {...register("company")}
          autoComplete="organization"
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
            errors.company
              ? "border-red-500"
              : dirtyFields.company && watch("company")
              ? "border-green-500"
              : "border-gray-300"
          }`}
        />
        <p className="mt-1 text-sm text-gray-500">
          {isCompanyFieldRequired
            ? "Wymagane przy podaniu NIP"
            : "Opcjonalnie - jeśli potrzebujesz faktury na firmę"}
        </p>
      </div>

      <div>
        <label
          htmlFor="nip"
          className="block text-sm font-medium text-gray-700"
        >
          NIP
          {dirtyFields.nip && !errors.nip && (
            <span className="text-green-500 ml-2">✓</span>
          )}
        </label>
        <input
          id="nip"
          {...register("nip")}
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
            errors.nip
              ? "border-red-500"
              : dirtyFields.nip && watch("nip")
              ? "border-green-500"
              : "border-gray-300"
          }`}
        />
        <p className="mt-1 text-sm text-gray-500">
          {isCompanyFieldRequired
            ? "Wymagane przy podaniu nazwy firmy"
            : "Opcjonalnie - do faktury"}
        </p>
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            {...register("terms")}
            className={`h-4 w-4 rounded focus:ring-primary ${
              errors.terms ? "border-red-500" : "border-gray-300"
            }`}
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
          {errors.terms && (
            <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>
          )}
        </div>
      </div>
    </motion.form>
  );
};

export default OrderForm;
