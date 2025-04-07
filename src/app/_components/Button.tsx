import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

const Button = ({ children, className, href = "#" }: ButtonProps) => {
  return (
    <a href={href}>
      <button
        className={`text-white font-bold py-2 px-2 hover:cursor-pointer hover:bg-purple-600 rounded-3xl ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
