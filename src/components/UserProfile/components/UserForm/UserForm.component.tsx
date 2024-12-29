import { memo } from 'react';
import FormField from '../FormField/FormField.component';
import type { UserFormProps } from '../../types';


const UserForm = memo(({ 
  formData, 
  isEditing, 
  isUpdating, 
  onSubmit,
  onEdit,
  onChange,
  errors 
}: UserFormProps) => (
  <>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-900">Moje dane</h2>
      <button
        type="button"
        data-testid="profile-edit-button"
        onClick={onEdit}
        disabled={isUpdating}
        className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isEditing ? (isUpdating ? 'Zapisywanie...' : 'Zapisz zmiany') : 'Edytuj dane'}
      </button>
    </div>

    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <form 
        onSubmit={onSubmit} 
        data-testid="profile-form"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <FormField
            label="Imię"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            disabled={!isEditing}
            data-testid="firstName-input"
            error={errors?.firstName}
          />
        </div>
        <div>
          <FormField
            label="Nazwisko"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            disabled={!isEditing}
            data-testid="lastName-input"
            error={errors?.lastName}
          />
        </div>
        <div>
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            disabled={true}
            data-testid="email-input"
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
            data-testid="phone-input"
            error={errors?.phone}
          />
        </div>
        <div>
          <FormField
            label="Firma"
            name="company"
            value={formData.company}
            onChange={onChange}
            disabled={!isEditing}
            data-testid="company-input"
          />
        </div>
        <div>
          <FormField
            label="NIP"
            name="nip"
            value={formData.nip}
            onChange={onChange}
            disabled={!isEditing}
            data-testid="nip-input"
            error={errors?.nip}
          />
        </div>
        
        {isEditing && (
          <button 
            type="submit"
            className="col-span-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
            data-testid="submit-button"
            disabled={isUpdating}
          >
            {isUpdating ? 'Zapisywanie...' : 'Zapisz zmiany'}
          </button>
        )}
      </form>
    </div>
  </>
));

export default UserForm; 