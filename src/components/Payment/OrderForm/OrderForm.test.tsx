import { describe, it, expect } from 'vitest';
import { orderFormSchema } from './orderForm.schema';

describe('OrderForm walidacja', () => {
  it('powinien zaakceptować poprawne dane', () => {
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

  describe('Walidacja imienia', () => {
    it('powinien odrzucić za krótkie imię', () => {
      const data = {
        firstName: "J",
        lastName: "Kowalski",
        email: "jan@example.com",
        terms: true
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Imię musi mieć minimum 2 znaki");
      }
    });
  });

  describe('Walidacja emaila', () => {
    it('powinien odrzucić nieprawidłowy format emaila', () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "nieprawidlowy-email",
        terms: true
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Nieprawidłowy format email");
      }
    });
  });

  describe('Walidacja telefonu', () => {
    it('powinien zaakceptować pusty numer telefonu', () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "jan@example.com",
        phone: "",
        terms: true
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it('powinien odrzucić nieprawidłowy format telefonu', () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "jan@example.com",
        phone: "123", 
        terms: true
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Numer telefonu musi mieć 9 cyfr");
      }
    });
  });

  describe('Walidacja NIP', () => {
    it('powinien zaakceptować pusty NIP', () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "jan@example.com",
        nip: "",
        terms: true
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it('powinien odrzucić nieprawidłowy format NIP', () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "jan@example.com",
        nip: "123",
        terms: true
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("NIP musi mieć 10 cyfr");
      }
    });
  });

  describe('Walidacja regulaminu', () => {
    it('powinien odrzucić niezaakceptowany regulamin', () => {
      const data = {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "jan@example.com",
        terms: false
      };

      const result = orderFormSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Musisz zaakceptować regulamin");
      }
    });
  });
}); 