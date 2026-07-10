export interface Ticket {
  id: number;
  title: string;
  project: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: "OPEN" | "IN PROGRESS" | "CLOSED";
}