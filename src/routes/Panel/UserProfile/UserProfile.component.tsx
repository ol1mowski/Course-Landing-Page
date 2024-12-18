import { motion } from "framer-motion";

const MOCK_USER = {
  firstName: "Jan",
  lastName: "Kowalski",
  email: "jan.kowalski@example.com",
  phone: "123456789",
  company: "IT Solutions Sp. z o.o.",
  nip: "1234567890"
};

const UserProfile = () => {
  return (
    <div className="w-full">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Moje dane</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-500 mb-2">Dane osobowe</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Imię i nazwisko</p>
                  <p className="font-medium">{`${MOCK_USER.firstName} ${MOCK_USER.lastName}`}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{MOCK_USER.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefon</p>
                  <p className="font-medium">{MOCK_USER.phone || "Nie podano"}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-500 mb-2">Dane firmowe</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Nazwa firmy</p>
                  <p className="font-medium">{MOCK_USER.company || "Nie podano"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">NIP</p>
                  <p className="font-medium">{MOCK_USER.nip || "Nie podano"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile; 