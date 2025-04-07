import { UseMutateFunction } from '@tanstack/react-query';

export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  nip: string;
};

export type UserProfileProps = {
  userData: UserData | null;
  isLoading: boolean;
  updateProfile: UseMutateFunction<any, Error, Partial<UserData>>;
  isUpdating: boolean;
};

export type UserFormProps = {
  formData: UserData;
  isEditing: boolean;
  isUpdating: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onEdit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: Record<string, string>;
};

export type UserDataFormProps = {
  userData: UserData;
  isEditing: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  disabled: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  'data-testid'?: string;
  error?: string;
};

export type DeleteAccountProps = {
  showConfirmation: boolean;
  onShowConfirmation: () => void;
  onHideConfirmation: () => void;
  onDelete: () => void;
  isDeleting: boolean;
};
