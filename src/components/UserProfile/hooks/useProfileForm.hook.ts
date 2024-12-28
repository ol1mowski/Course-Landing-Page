import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../../hooks/useToast.hook';
import { API_CONFIG } from '../../../config/api.config';
import type { UserData } from '../types';
import type { UseMutateFunction } from '@tanstack/react-query';

export const useProfileForm = (
  userData: UserData | null,
  updateProfile: UseMutateFunction<any, Error, Partial<UserData>>
) => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
      showSuccess('Twoje dane zostały pomyślnie zaktualizowane!');
      setIsEditing(false);
    } catch (error) {
      showError('Ups! Coś poszło nie tak podczas aktualizacji danych. Spróbuj ponownie.');
    }
  };

  return {
    formData,
    isEditing,
    setIsEditing,
    handleInputChange,
    handleSubmit
  };
}; 