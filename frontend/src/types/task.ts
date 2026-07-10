export const TaskStatus = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  IN_REVIEW: "In Review",
  DONE: "Done",
} as const;

export type TaskStatus =
  (typeof TaskStatus)[keyof typeof TaskStatus];

export const TaskPriority = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  CRITICAL: "Critical",
} as const;

export type TaskPriority =
  (typeof TaskPriority)[keyof typeof TaskPriority];

export interface Task {
  id: string;
  title: string;
  description: string;
  projectId: string;
  assigneeId: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}