import { UseFormRegister, FieldErrors } from "react-hook-form";
import { OrderFormData } from "../orderForm.types";
import clsx from "clsx";

type FormFieldProps = {
  id: keyof OrderFormData;
  label: string;
  type?: string;
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors<OrderFormData>;
  dirtyFields: Record<string, boolean>;
  autoComplete?: string;
  maxLength?: number;
  description?: string;
  watch?: (name: keyof OrderFormData) => string;
};

const FormField = ({
  id,
  label,
  type = "text",
  register,
  errors,
  dirtyFields,
  autoComplete,
  maxLength,
  description,
  watch
}: FormFieldProps) => {
  const error = errors[id];
  const isDirty = dirtyFields[id];
  const value = watch ? watch(id) : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {isDirty && !error && (
          <span className="text-green-500 ml-2">✓</span>
        )}
      </label>
      <input
        id={id}
        type={type}
        {...register(id)}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className={clsx(
          "mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary",
          {
            "border-red-500": error,
            "border-green-500": isDirty && value && !error,
            "border-gray-300": !error && (!isDirty || !value)
          }
        )}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message as string}
        </p>
      )}
      {description && (
        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
};

export default FormField; 