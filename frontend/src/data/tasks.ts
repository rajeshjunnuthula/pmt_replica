import {
  TaskPriority,
  TaskStatus,
  type Task,
} from "../types";

export const mockTasks: Task[] = [
  {
    id: "T001",
    title: "Design Login UI",
    description: "Create responsive login page.",
    projectId: "P001",
    assigneeId: "U001",
    status: TaskStatus.TODO,
    priority: TaskPriority.HIGH,
    dueDate: "2026-07-15",
    createdAt: "2026-07-10",
    updatedAt: "2026-07-10",
  },
  {
    id: "T002",
    title: "Implement Authentication",
    description: "Implement JWT authentication.",
    projectId: "P001",
    assigneeId: "U002",
    status: TaskStatus.IN_PROGRESS,
    priority: TaskPriority.CRITICAL,
    dueDate: "2026-07-18",
    createdAt: "2026-07-10",
    updatedAt: "2026-07-10",
  },
  {
    id: "T003",
    title: "Create Dashboard",
    description: "Develop dashboard with analytics cards.",
    projectId: "P001",
    assigneeId: "U003",
    status: TaskStatus.IN_REVIEW,
    priority: TaskPriority.MEDIUM,
    dueDate: "2026-07-22",
    createdAt: "2026-07-10",
    updatedAt: "2026-07-10",
  },
  {
    id: "T004",
    title: "Employee Module",
    description: "Develop employee management module.",
    projectId: "P002",
    assigneeId: "U001",
    status: TaskStatus.DONE,
    priority: TaskPriority.LOW,
    dueDate: "2026-07-25",
    createdAt: "2026-07-10",
    updatedAt: "2026-07-10",
  },
];

export default mockTasks;