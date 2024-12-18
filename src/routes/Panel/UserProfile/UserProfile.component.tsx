import { useUserProfile } from './hooks/useUserProfile.hook';
import UserDataForm from './components/UserDataForm/UserDataForm.component';
import DeleteAccount from './components/DeleteAccount/DeleteAccount.component';

const UserProfile = () => {
  const {
    userData,
    isEditing,
    showDeleteConfirmation,
    setIsEditing,
    setShowDeleteConfirmation,
    handleInputChange,
    handleSave,
    handleDeleteAccount
  } = useUserProfile();

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

        <UserDataForm 
          userData={userData}
          isEditing={isEditing}
          onInputChange={handleInputChange}
        />

        <DeleteAccount
          showConfirmation={showDeleteConfirmation}
          onShowConfirmation={() => setShowDeleteConfirmation(true)}
          onHideConfirmation={() => setShowDeleteConfirmation(false)}
          onDelete={handleDeleteAccount}
        />
      </section>
    </section>
  );
};

export default UserProfile; 