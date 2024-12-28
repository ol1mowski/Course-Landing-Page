import { memo } from 'react';

import type { UserProfileProps } from './types';

import { SuccessToast, ErrorToast } from '../UI/Toast';

import { useProfileForm } from './hooks/useProfileForm.hook';
import { useAccountDeletion } from './hooks/useAccountDeletion.hook';

import UserForm from './components/UserForm/UserForm.component';
import DeleteAccount from './components/DeleteAccount/DeleteAccount.component';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner.component';

const UserProfile = memo(({ userData, isLoading, updateProfile, isUpdating }: UserProfileProps) => {
  const {
    formData,
    isEditing,
    setIsEditing,
    handleInputChange,
    handleSubmit
  } = useProfileForm(userData, updateProfile);

  const {
    showDeleteConfirmation,
    setShowDeleteConfirmation,
    isDeletingAccount,
    handleDeleteAccount
  } = useAccountDeletion();

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="w-full mt-20">
      <UserForm 
        formData={formData}
        isEditing={isEditing}
        isUpdating={isUpdating}
        onSubmit={handleSubmit}
        onEdit={() => setIsEditing(true)}
        onChange={handleInputChange}
      />

      <DeleteAccount 
        showConfirmation={showDeleteConfirmation}
        onShowConfirmation={() => setShowDeleteConfirmation(true)}
        onHideConfirmation={() => setShowDeleteConfirmation(false)}
        onDelete={handleDeleteAccount}
        isDeleting={isDeletingAccount}
      />

      <SuccessToast />
      <ErrorToast />
    </section>
  );
});

export default UserProfile; 