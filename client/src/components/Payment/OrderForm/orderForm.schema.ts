import { z } from "zod";

export const orderFormSchema = z.object({
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