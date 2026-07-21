import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium px-3 py-1 rounded-full">
      {children}
    </span>
  );
}

export default Badge;