import { useState, useEffect, useCallback } from 'react';
import { useToast } from '../../../hooks/useToast.hook';
import type { UserData } from '../types';
import type { UseMutateFunction } from '@tanstack/react-query';

export const useProfileForm = (
  userData: UserData | null,
  updateProfile: UseMutateFunction<any, Error, Partial<UserData>>
) => {
  const { showSuccess, showError } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    nip: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName) newErrors.firstName = 'Imię jest wymagane';
    if (!formData.lastName) newErrors.lastName = 'Nazwisko jest wymagane';
    if (formData.phone && formData.phone.length !== 9) {
      newErrors.phone = 'Numer telefonu musi mieć 9 cyfr';
    }
    if (formData.nip && formData.nip.length !== 10) {
      newErrors.nip = 'NIP musi mieć 10 cyfr';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    try {
      await updateProfile(formData);
      showSuccess('Twoje dane zostały pomyślnie zaktualizowane!');
      setIsEditing(false);
      setErrors({});
    } catch (error) {
      showError('Ups! Coś poszło nie tak podczas aktualizacji danych. Spróbuj ponownie.');
    }
  };

  return {
    formData,
    isEditing,
    setIsEditing,
    handleInputChange,
    handleSubmit,
    errors
  };
}; 