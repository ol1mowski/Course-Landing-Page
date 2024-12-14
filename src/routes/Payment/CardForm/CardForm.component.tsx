import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import valid from "card-validator";

const cardFormSchema = z.object({
  cardName: z.string().min(3, "Wprowadź pełne imię i nazwisko"),
  cardNumber: z.string().refine((val) => valid.number(val).isValid, {
    message: "Nieprawidłowy numer karty",
  }),
  expiry: z.string().refine((val) => valid.expirationDate(val).isValid, {
    message: "Nieprawidłowa data ważności",
  }),
  cvv: z.string().refine((val) => valid.cvv(val).isValid, {
    message: "Nieprawidłowy kod CVV",
  }),
});

type CardFormData = z.infer<typeof cardFormSchema>;

const CardForm = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useForm<CardFormData>({
    resolver: zodResolver(cardFormSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  return (
    <form className="space-y-4 bg-white p-6 rounded-xl shadow-lg mt-4">
      <div>
        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
          Imię i nazwisko na karcie
        </label>
        <input
          {...register("cardName")}
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
            errors.cardName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.cardName && (
          <p className="mt-1 text-sm text-red-500">{errors.cardName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
          Numer karty
        </label>
        <Controller
          name="cardNumber"
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              value={value}
              onChange={(e) => {
                const formatted = e.target.value
                  .replace(/\s/g, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim();
                onChange(formatted);
              }}
              maxLength={19}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                errors.cardNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
          )}
        />
        {errors.cardNumber && (
          <p className="mt-1 text-sm text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
            Data ważności
          </label>
          <Controller
            name="expiry"
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                value={value}
                onChange={(e) => {
                  const formatted = e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d{2})(\d)/, "$1/$2")
                    .slice(0, 5);
                  onChange(formatted);
                }}
                placeholder="MM/RR"
                maxLength={5}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                  errors.expiry ? "border-red-500" : "border-gray-300"
                }`}
              />
            )}
          />
          {errors.expiry && (
            <p className="mt-1 text-sm text-red-500">{errors.expiry.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
            CVV
          </label>
          <input
            {...register("cvv")}
            type="password"
            maxLength={3}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
              errors.cvv ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.cvv && (
            <p className="mt-1 text-sm text-red-500">{errors.cvv.message}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default CardForm;