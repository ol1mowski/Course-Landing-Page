import { memo } from 'react';
import FormField from '../FormField/FormField.component';
import { UserData } from '../../types';

type UserDataFormProps = {
  userData: UserData;
  isEditing: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UserDataForm = memo(({ userData, isEditing, onInputChange }: UserDataFormProps) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-medium text-gray-500 mb-4">Dane osobowe</h3>
        <div className="space-y-4">
          <FormField
            label="Imię"
            name="firstName"
            value={userData.firstName}
            onChange={onInputChange}
            disabled={!isEditing}
          />
          <FormField
            label="Nazwisko"
            name="lastName"
            value={userData.lastName}
            onChange={onInputChange}
            disabled={!isEditing}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={userData.email}
            onChange={onInputChange}
            disabled={!isEditing}
          />
          <FormField
            label="Telefon"
            name="phone"
            type="tel"
            value={userData.phone}
            onChange={onInputChange}
            disabled={!isEditing}
          />
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-gray-500 mb-4">Dane firmowe</h3>
        <div className="space-y-4">
          <FormField
            label="Nazwa firmy"
            name="company"
            value={userData.company}
            onChange={onInputChange}
            disabled={!isEditing}
          />
          <FormField
            label="NIP"
            name="nip"
            value={userData.nip}
            onChange={onInputChange}
            disabled={!isEditing}
          />
        </div>
      </div>
    </div>
  </div>
));

export default UserDataForm; 