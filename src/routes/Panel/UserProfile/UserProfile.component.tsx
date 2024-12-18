import { useState } from "react";

const MOCK_USER = {
  firstName: "Jan",
  lastName: "Kowalski",
  email: "jan.kowalski@example.com",
  phone: "123456789",
  company: "IT Solutions Sp. z o.o.",
  nip: "1234567890"
};

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [userData, setUserData] = useState(MOCK_USER);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving user data:', userData);
    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    console.log('Deleting account...');
  };

  return (
    <section className="w-full mt-20">
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Moje dane</h2>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
          >
            {isEditing ? 'Zapisz zmiany' : 'Edytuj dane'}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-500 mb-4">Dane osobowe</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Imię</label>
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Nazwisko</label>
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-500 mb-4">Dane firmowe</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Nazwa firmy</label>
                  <input
                    type="text"
                    name="company"
                    value={userData.company}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">NIP</label>
                  <input
                    type="text"
                    name="nip"
                    value={userData.nip}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Usuwanie konta</h3>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-800 mb-4">
              Usunięcie konta spowoduje utratę dostępu do wszystkich zakupionych kursów i materiałów. 
              Ta operacja jest nieodwracalna.
            </p>
            {!showDeleteConfirmation ? (
              <button
                onClick={() => setShowDeleteConfirmation(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Usuń konto
              </button>
            ) : (
              <div className="space-y-4">
                <p className="font-medium text-red-800">
                  Czy na pewno chcesz usunąć swoje konto?
                </p>
                <div className="space-x-4">
                  <button
                    onClick={handleDeleteAccount}
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Tak, usuń konto
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirmation(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Anuluj
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserProfile; 