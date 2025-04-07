import { UseFormRegister, FieldErrors } from "react-hook-form";
import { OrderFormData } from "../orderForm.types";
import clsx from "clsx";

type FormCheckboxProps = {
  id: keyof OrderFormData;
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors<OrderFormData>;
  children: React.ReactNode;
};

const FormCheckbox = ({
  id,
  register,
  errors,
  children
}: FormCheckboxProps) => {
  const error = errors[id];

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          {...register(id)}
          className={clsx(
            "h-4 w-4 rounded focus:ring-primary",
            error ? "border-red-500" : "border-gray-300"
          )}
        />
      </div>
      <div className="ml-3">
        <label htmlFor={id} className="text-sm text-gray-700">
          {children}
        </label>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error.message as string}</p>
        )}
      </div>
    </div>
  );
};

export default FormCheckbox; 