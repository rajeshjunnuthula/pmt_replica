export const UserRole = {
  ADMIN: "Admin",
  MANAGER: "Manager",
  MEMBER: "Member",
} as const;

export type UserRole =
  (typeof UserRole)[keyof typeof UserRole];

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;

  avatar?: string;

  createdAt: string;
}