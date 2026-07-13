import type { Project } from "./project";
import type { Task } from "./task";

export interface DashboardSummary {
  totalProjects: number;
  activeProjects: number;
  totalTasks: number;
  completedTasks: number;
  myTasks: Task[];
  recentProjects: Project[];
}
