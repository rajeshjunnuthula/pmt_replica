import { type User, UserRole } from "../types";

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Rajesh",
    email: "rajesh@example.com",
    role: UserRole.ADMIN,
    avatar: "",
    createdAt: "2026-07-01",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    role: UserRole.MANAGER,
    avatar: "",
    createdAt: "2026-07-02",
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane@example.com",
    role: UserRole.MEMBER,
    avatar: "",
    createdAt: "2026-07-03",
  },
];