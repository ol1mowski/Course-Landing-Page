import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUserData, UserData } from './hooks/useUserData.hook';

const UserProfile = () => {
  const { userData, isLoading, error, updateUserData } = useUserData();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    nip: ''
  });

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: UserData) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await updateUserData(formData);
    if (success) {
      setIsEditing(false);
    }
  };

  const handleDeleteAccount = async () => {
    // TODO: Implement account deletion
    console.log('Deleting account...');
  };

  return (
    <section className="w-full mt-20">
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Moje dane</h2>
          <button
            onClick={() => isEditing ? handleSubmit : setIsEditing(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
          >
            {isEditing ? 'Zapisz zmiany' : 'Edytuj dane'}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Imię</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Nazwisko</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Telefon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Firma</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">NIP</label>
              <input
                type="text"
                name="nip"
                value={formData.nip}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:bg-gray-50"
              />
            </div>
          </form>
        </div>

        {/* Sekcja usuwania konta */}
        <div className="bg-red-100 border-2 border-red-500 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-700 mb-4">Usuwanie konta</h3>
          <p className="text-red-700 mb-4 font-medium">
            Uwaga: Usunięcie konta jest nieodwracalne. Wszystkie Twoje dane zostaną permanentnie usunięte.
          </p>
          {showDeleteConfirmation ? (
            <div className="space-y-4">
              <p className="font-bold text-red-700">
                Czy na pewno chcesz usunąć swoje konto?
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleDeleteAccount}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 transition-colors"
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
          ) : (
            <button
              onClick={() => setShowDeleteConfirmation(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 transition-colors"
            >
              Usuń konto
            </button>
          )}
        </div>
      </section>
    </section>
  );
};

export default UserProfile; 