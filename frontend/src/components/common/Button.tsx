import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

function Button({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;