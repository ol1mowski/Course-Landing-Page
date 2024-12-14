import { useState } from "react";
import { motion } from "framer-motion";
import { OFFER_DETAILS } from "../../data/Offer.data";
import PaymentMethod from "./PaymentMethod/PaymentMethod.component";
import OrderForm from "./OrderForm/OrderForm.component";

type PaymentMethodType = "card" | "p24" | "blik";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] =
    useState<PaymentMethodType>("card");

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="space-y-8">
            <OrderForm />

            <section className="space-y-6">
              <h2 className="text-xl font-semibold">Metoda płatności</h2>

              <div className="space-y-4">
                <PaymentMethod
                  id="p24"
                  title="Przelewy24"
                  description="Szybki płatność BLIK, karta płatnicza, przelew tradycyjny"
                  icon="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/p24-icon.svg"
                  selected={selectedMethod === "p24"}
                  onClick={() => setSelectedMethod("p24")}
                />
              </div>
            </section>
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <section className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-6">
                Podsumowanie zamówienia
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Kurs "Kariera w IT"</span>
                  <span className="font-medium">
                    {OFFER_DETAILS.promoPrice} {OFFER_DETAILS.currency}
                  </span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>Regularna cena</span>
                  <span className="line-through">
                    {OFFER_DETAILS.regularPrice} {OFFER_DETAILS.currency}
                  </span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Oszczędzasz</span>
                  <span>
                    {OFFER_DETAILS.regularPrice - OFFER_DETAILS.promoPrice}{" "}
                    {OFFER_DETAILS.currency}
                  </span>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between font-bold text-lg">
                  <span>Razem do zapłaty</span>
                  <span>
                    {OFFER_DETAILS.promoPrice} {OFFER_DETAILS.currency}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 mt-6"
                >
                  Zapłać {OFFER_DETAILS.promoPrice} {OFFER_DETAILS.currency}
                </button>

                <div className="mt-4 text-sm text-gray-500 space-y-2">
                  <p>✓ Bezpieczna płatność SSL</p>
                  <p>✓ 30 dni gwarancji zwrotu</p>
                  <p>✓ Natychmiastowy dostęp do kursu</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Payment;
