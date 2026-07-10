import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
      {children}
    </span>
  );
}

export default Badge;