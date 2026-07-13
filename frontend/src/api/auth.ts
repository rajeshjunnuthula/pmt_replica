import { apiFetch } from "./client";
import type { AuthUser, LoginPayload, RegisterPayload } from "../types";

interface LoginResponse {
  data: {
    token: string;
    user: AuthUser;
  };
}

class AuthApi {
  async login(payload: LoginPayload): Promise<AuthUser> {
    const res = await apiFetch<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    return res.data.user;
  }

  async register(payload: RegisterPayload): Promise<void> {
    await apiFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  getUser(): AuthUser | null {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const authApi = new AuthApi();
