export const TicketPriority = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
} as const;

export type TicketPriority =
  (typeof TicketPriority)[keyof typeof TicketPriority];

export const TicketStatus = {
  OPEN: "OPEN",
  IN_PROGRESS: "IN PROGRESS",
  CLOSED: "CLOSED",
} as const;

export type TicketStatus =
  (typeof TicketStatus)[keyof typeof TicketStatus];

export interface Ticket {
  id: number;
  title: string;
  projectId: number;
  project?: { id: number; name: string };
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
}
