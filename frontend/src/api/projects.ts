import type { Project } from "../types";
import { apiFetch } from "./client";

class ProjectApi {
  async getAll(search?: string): Promise<Project[]> {
    const query = search ? `?search=${encodeURIComponent(search)}` : "";
    return apiFetch<Project[]>(`/projects${query}`);
  }

  async getById(id: number): Promise<Project> {
    return apiFetch<Project>(`/projects/${id}`);
  }

  async create(project: Partial<Project>): Promise<Project> {
    return apiFetch<Project>("/projects", {
      method: "POST",
      body: JSON.stringify(project),
    });
  }

  async update(id: number, project: Partial<Project>): Promise<Project> {
    return apiFetch<Project>(`/projects/${id}`, {
      method: "PATCH",
      body: JSON.stringify(project),
    });
  }

  async delete(id: number): Promise<void> {
    await apiFetch(`/projects/${id}`, { method: "DELETE" });
  }
}

export const projectApi = new ProjectApi();
