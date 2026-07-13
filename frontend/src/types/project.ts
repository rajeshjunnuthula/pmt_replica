export const ProjectStatus = {
  PLANNING: "Planning",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
  ON_HOLD: "On Hold",
  CANCELLED: "Cancelled",
} as const;

export type ProjectStatus =
  (typeof ProjectStatus)[keyof typeof ProjectStatus];

export interface Project {
  id: number;
  name: string;
  description?: string;
  status: ProjectStatus;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}