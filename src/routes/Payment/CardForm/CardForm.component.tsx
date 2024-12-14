const CardForm = () => (
  <form className="space-y-4 bg-white p-6 rounded-xl shadow-lg mt-4">
    <div>
      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
        Imię i nazwisko na karcie
      </label>
      <input
        type="text"
        id="cardName"
        name="cardName"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        required
      />
    </div>

    <div>
      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
        Numer karty
      </label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        pattern="\d*"
        maxLength={16}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        required
      />
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
          Data ważności
        </label>
        <input
          type="text"
          id="expiry"
          name="expiry"
          placeholder="MM/RR"
          maxLength={5}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          pattern="\d*"
          maxLength={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />
      </div>
    </div>
  </form>
);

export default CardForm; 