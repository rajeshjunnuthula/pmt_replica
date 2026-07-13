import { ProjectStatus, type Project } from "../types";

export const mockProjects: Project[] = [
  {
    id: 1,
    name: "Project Management Tool",
    description: "Internal project management application.",
    status: ProjectStatus.IN_PROGRESS,
    startDate: "2026-07-01",
    endDate: "2026-10-30",
    createdAt: "2026-07-01",
    updatedAt: "2026-07-10",
  },
  {
    id: 2,
    name: "Employee Portal",
    description: "HR portal for employees.",
    status: ProjectStatus.PLANNING,
    startDate: "2026-08-01",
    endDate: "2026-12-15",
    createdAt: "2026-07-05",
    updatedAt: "2026-07-09",
  },
];

export default mockProjects;