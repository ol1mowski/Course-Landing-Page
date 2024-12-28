import { memo } from 'react';
import { FormFieldProps } from '../../types';

const FormField = memo(({ 
  label, 
  name, 
  type = 'text', 
  value, 
  disabled, 
  onChange 
}: FormFieldProps) => (
  <div>
    <label className="text-sm text-gray-500 block mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
    />
  </div>
));

export default FormField; 