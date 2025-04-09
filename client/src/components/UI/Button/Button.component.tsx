import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className = "" }: ButtonProps) => {
  return (
    <button className={`bg-primary text-white px-5 py-3 rounded-xl text-lg w-fit hover:bg-white border border-primary hover:text-primary transition-colors ${className}`}>
      {children}
    </button>
  );
};

export default Button;
