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
      className={`bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;