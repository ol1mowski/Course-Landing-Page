import { type ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="bg-primary text-white px-5 py-3 rounded-xl text-lg w-fit hover:bg-white border border-primary hover:text-primary transition-colors">
      {children}
    </button>
  );
};

export default Button;
