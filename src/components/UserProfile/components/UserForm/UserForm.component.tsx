import { memo } from 'react';
import FormField from '../FormField/FormField.component';
import type { UserFormProps } from '../../types';


const UserForm = memo(({ 
  formData, 
  isEditing, 
  isUpdating, 
  onSubmit,
  onEdit,
  onChange 
}: UserFormProps) => (
  <>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-900">Moje dane</h2>
      <button
        onClick={isEditing ? onSubmit : onEdit}
        disabled={isUpdating}
        className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isEditing ? (isUpdating ? 'Zapisywanie...' : 'Zapisz zmiany') : 'Edytuj dane'}
      </button>
    </div>

    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <FormField
            label="Imię"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <FormField
            label="Nazwisko"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            disabled={true}
          />
        </div>
        <div>
          <FormField
            label="Telefon"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={onChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <FormField
            label="Firma"
            name="company"
            value={formData.company}
            onChange={onChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <FormField
            label="NIP"
            name="nip"
            value={formData.nip}
            onChange={onChange}
            disabled={!isEditing}
          />
        </div>
      </form>
    </div>
  </>
));

export default UserForm; 