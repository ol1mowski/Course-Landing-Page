import { memo } from 'react';

type FormInputProps = {
  id: string;
  name: string;
  type: string;
  value: string;
  label: string;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const FormInput = memo(({
  id,
  name,
  type,
  value,
  label,
  error,
  touched,
  placeholder,
  onChange,
  onBlur
}: FormInputProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="mt-1">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`block w-full px-4 py-3 rounded-lg border shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm ${
          error && touched ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder={placeholder}
      />
      {error && touched && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  </div>
));


export default FormInput; 