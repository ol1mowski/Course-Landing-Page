import { type PaymentMethodType } from "../Payment.types";

import PaymentMethod from "../PaymentMethod/PaymentMethod.component";

type PaymentMethodsProps = {
  selectedMethod: PaymentMethodType;
  onMethodSelect: (method: PaymentMethodType) => void;
};

const PaymentMethods = ({ selectedMethod, onMethodSelect }: PaymentMethodsProps) => (
  <section className="space-y-6">
    <h2 className="text-xl font-semibold">Metoda płatności</h2>
    <div className="space-y-4">
      <PaymentMethod
        id="p24"
        title="Przelewy24"
        description="Szybki płatność BLIK, karta płatnicza, przelew tradycyjny"
        icon="https://res.cloudinary.com/dbbuav0rj/image/upload/v1734590883/Course-site/Przelewy24_logo_hkd63d.svg"
        selected={selectedMethod === "p24"}
        onClick={() => onMethodSelect("p24")}
      />
    </div>
  </section>
);

export default PaymentMethods; 