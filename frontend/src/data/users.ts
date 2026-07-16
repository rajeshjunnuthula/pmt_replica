import { type User, UserRole } from "../types";

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Rajesh",
    email: "rajesh@example.com",
    role: UserRole.ADMIN,
    avatar: "",
    createdAt: "2026-07-01",
  }
  
];