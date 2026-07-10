import { ProjectStatus, type Project } from "../types";

export const mockProjects: Project[] = [
  {
    id: "P001",
    name: "Project Management Tool",
    description: "Internal project management application.",
    status: ProjectStatus.ACTIVE,
    startDate: "2026-07-01",
    endDate: "2026-10-30",
    createdAt: "2026-07-01",
    updatedAt: "2026-07-10",
  },
  {
    id: "P002",
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