import { memo } from 'react';
import type { FormFieldProps } from '../../types';

const FormField = memo(({ 
  label, 
  name, 
  type = 'text', 
  value, 
  disabled, 
  onChange,
  'data-testid': testId,
  error 
}: FormFieldProps) => (
  <div>
    <label className="text-sm text-gray-500 block mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      data-testid={testId}
      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-50 disabled:text-gray-500 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
    />
    {error && (
      <p className="mt-1 text-sm text-red-600" data-testid={`${name}-error`}>
        {error}
      </p>
    )}
  </div>
));

export default FormField; 