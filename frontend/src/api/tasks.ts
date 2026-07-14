import type { Task } from "../types";
import { apiFetch } from "./client";

class TaskApi {
  async getAll(): Promise<Task[]> {
    return apiFetch<Task[]>("/tasks");
  }

  async create(task: Partial<Task>): Promise<Task> {
    return apiFetch<Task>("/tasks", {
      method: "POST",
      body: JSON.stringify(task),
    });
  }

  async delete(id: number): Promise<void> {
    await apiFetch(`/tasks/${id}`, { method: "DELETE" });
  }
}

export const taskApi = new TaskApi();
