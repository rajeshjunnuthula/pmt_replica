import {
  TaskPriority,
  TaskStatus,
  type Task,
} from "../types";

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Design Dashboard",
    description: "Complete the dashboard UI.",
    projectId: 1,
    assigneeId: 1,
    status: TaskStatus.IN_PROGRESS,
    priority: TaskPriority.HIGH,
    dueDate: "2026-07-20",
    createdAt: "2026-07-10",
    updatedAt: "2026-07-10",
  },
  {
    id: 2,
    title: "Create Login API",
    description: "Implement authentication endpoints.",
    projectId: 1,
    assigneeId: 2,
    status: TaskStatus.TODO,
    priority: TaskPriority.CRITICAL,
    dueDate: "2026-07-22",
    createdAt: "2026-07-10",
    updatedAt: "2026-07-10",
  },
];

export default mockTasks;