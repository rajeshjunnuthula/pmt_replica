import type { Ticket } from "../types/ticket";

const tickets: Ticket[] = [
  {
    id: 1,
    title: "Login page bug",
    project: "CampX",
    priority: "HIGH",
    status: "OPEN",
  },
  {
    id: 2,
    title: "Dashboard alignment",
    project: "PMT",
    priority: "MEDIUM",
    status: "IN PROGRESS",
  },
  {
    id: 3,
    title: "Navbar color issue",
    project: "Agentic Automation",
    priority: "LOW",
    status: "CLOSED",
  },
];

export default tickets;