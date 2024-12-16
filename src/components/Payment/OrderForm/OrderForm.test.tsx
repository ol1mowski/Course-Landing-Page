import { describe, it, expect } from 'vitest';
import { orderFormSchema } from './orderForm.schema';

describe("OrderForm validation", () => {
  it("should accept valid data", () => {
    const validData = {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "jan@example.com",
      phone: "123456789",
      company: "Firma Sp. z o.o.",
      nip: "1234567890",
      terms: true
    };

    const result = orderFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  describe("Validation of first name", () => {
    it("should reject too short first name", () => {
      const data = {
        firstName: "J",
        lastName: "Kowalski",
        email: "jan@example.com",
        terms: true,
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Imię musi mieć minimum 2 znaki");
      }
    });
  });

  describe("Validation of email", () => {
    it("should reject invalid email format", () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "nieprawidlowy-email",
        terms: true,
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Nieprawidłowy format email");
      }
    });
  });

  describe("Validation of phone number", () => {
    it("should accept empty phone number", () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "jan@example.com",
        phone: "",
        terms: true,
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it("should reject invalid phone number format", () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "jan@example.com",
        phone: "123",
        terms: true,
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Numer telefonu musi mieć 9 cyfr");
      }
    });
  });

  describe("Validation of NIP", () => {
    it("should accept empty NIP", () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "jan@example.com",
        nip: "",
        terms: true,
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it("should reject invalid NIP format", () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "jan@example.com",
        nip: "123",
        terms: true,
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("NIP musi mieć 10 cyfr");
      }
    });
  });

  describe("Validation of terms", () => {
    it("should reject unaccepted terms", () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "jan@example.com",
        terms: false,
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Musisz zaakceptować regulamin");
      }
    });
  });
}); 