import { type ReactNode } from "react";

const Description = ({ children }: { children: ReactNode }) => {
  return (
    <p className="w-2/3 flex text-lg font-light text-gray-500">
        { children }
    </p>
  )
}

export default Description