export const MilestoneStatus = {
  UPCOMING: "Upcoming",
  COMPLETED: "Completed",
} as const;

export type MilestoneStatus =
  (typeof MilestoneStatus)[keyof typeof MilestoneStatus];

export interface Milestone {
  id: number;
  title: string;
  projectId: number;
  project?: { id: number; name: string };
  dueDate: string;
  status: MilestoneStatus;
  createdAt: string;
  updatedAt: string;
}
