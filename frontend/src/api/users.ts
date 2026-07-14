import type { User } from "../types";
import { apiFetch } from "./client";

class UsersApi {
  async getAll(): Promise<User[]> {
    return apiFetch<User[]>("/users");
  }
}

export const usersApi = new UsersApi();
