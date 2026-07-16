import type { Milestone } from "../types";
import { apiFetch } from "./client";

class MilestoneApi {
  async getAll(): Promise<Milestone[]> {
    return apiFetch<Milestone[]>("/milestones");
  }

  async create(milestone: Partial<Milestone>): Promise<Milestone> {
    return apiFetch<Milestone>("/milestones", {
      method: "POST",
      body: JSON.stringify(milestone),
    });
  }

  async update(id: number, milestone: Partial<Milestone>): Promise<Milestone> {
    return apiFetch<Milestone>(`/milestones/${id}`, {
      method: "PATCH",
      body: JSON.stringify(milestone),
    });
  }

  async delete(id: number): Promise<void> {
    await apiFetch(`/milestones/${id}`, { method: "DELETE" });
  }
}

export const milestoneApi = new MilestoneApi();
