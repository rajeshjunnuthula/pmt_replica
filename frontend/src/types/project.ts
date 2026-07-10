export const ProjectStatus = {
  PLANNING: "Planning",
  ACTIVE: "Active",
  ON_HOLD: "On Hold",
  COMPLETED: "Completed",
} as const;

export type ProjectStatus =
  (typeof ProjectStatus)[keyof typeof ProjectStatus];

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}