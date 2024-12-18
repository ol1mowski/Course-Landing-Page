import { useState } from 'react';
import { UserData } from '../types';

const MOCK_USER: UserData = {
  firstName: "Jan",
  lastName: "Kowalski",
  email: "jan.kowalski@example.com",
  phone: "123456789",
  company: "IT Solutions Sp. z o.o.",
  nip: "1234567890"
};

export const useUserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [userData, setUserData] = useState<UserData>(MOCK_USER);

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

  return {
    userData,
    isEditing,
    showDeleteConfirmation,
    setIsEditing,
    setShowDeleteConfirmation,
    handleInputChange,
    handleSave,
    handleDeleteAccount
  };
}; 