import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formVariants } from "../../../animations/paymentAnimations";
import { orderFormSchema } from "./orderForm.schema";
import type { OrderFormData } from "./orderForm.types";

import FormField from "./FormField/FormField.component";
import FormCheckbox from "./FormCheckbox/FormCheckbox.component";

const OrderForm = () => {
  const {
    register,
    formState: { errors, dirtyFields },
    watch,
    handleSubmit
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

  const onSubmit = (data: OrderFormData) => {
    console.log(data);
  };

  return (
    <motion.form
      variants={formVariants}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-6">Dane do zamówienia</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="firstName"
          label="Imię"
          register={register}
          errors={errors}
          dirtyFields={dirtyFields}
          autoComplete="given-name"
          watch={watch}
        />

        <FormField
          id="lastName"
          label="Nazwisko"
          register={register}
          errors={errors}
          dirtyFields={dirtyFields}
          autoComplete="family-name"
          watch={watch}
        />
      </div>

      <FormField
        id="email"
        label="Email"
        type="email"
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        autoComplete="email"
        watch={watch}
        description="Na ten adres wyślemy dostęp do kursu"
      />

      <FormField
        id="phone"
        label="Telefon"
        type="tel"
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        autoComplete="tel"
        watch={watch}
        description="Opcjonalnie - do kontaktu w razie problemów"
      />

      <FormField
        id="company"
        label="Nazwa firmy"
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        autoComplete="organization"
        watch={watch}
        description={
          isCompanyFieldRequired
            ? "Wymagane przy podaniu NIP"
            : "Opcjonalnie - jeśli potrzebujesz faktury na firmę"
        }
      />

      <FormField
        id="nip"
        label="NIP"
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        watch={watch}
        description={
          isCompanyFieldRequired
            ? "Wymagane przy podaniu nazwy firmy"
            : "Opcjonalnie - do faktury"
        }
      />

      <FormCheckbox
        id="terms"
        register={register}
        errors={errors}
      >
        Akceptuję{" "}
        <a href="#" className="text-primary hover:underline">
          regulamin
        </a>{" "}
        i{" "}
        <a href="#" className="text-primary hover:underline">
          politykę prywatności
        </a>
      </FormCheckbox>
    </motion.form>
  );
};

export default OrderForm;
