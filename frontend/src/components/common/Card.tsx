import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-white border rounded-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;