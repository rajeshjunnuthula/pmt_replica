export interface Milestone {
  id: number;
  title: string;
  project: string;
  dueDate: string;
  status: "UPCOMING" | "COMPLETED";
}