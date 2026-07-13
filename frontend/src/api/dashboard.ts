import type { DashboardSummary } from "../types";
import { apiFetch } from "./client";

class DashboardApi {
  async getSummary(): Promise<DashboardSummary> {
    return apiFetch<DashboardSummary>("/dashboard");
  }
}

export const dashboardApi = new DashboardApi();
