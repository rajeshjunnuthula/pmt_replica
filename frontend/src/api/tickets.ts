import type { Ticket } from "../types";
import { apiFetch } from "./client";

class TicketApi {
  async getAll(): Promise<Ticket[]> {
    return apiFetch<Ticket[]>("/tickets");
  }

  async create(ticket: Partial<Ticket>): Promise<Ticket> {
    return apiFetch<Ticket>("/tickets", {
      method: "POST",
      body: JSON.stringify(ticket),
    });
  }

  async update(id: number, ticket: Partial<Ticket>): Promise<Ticket> {
    return apiFetch<Ticket>(`/tickets/${id}`, {
      method: "PATCH",
      body: JSON.stringify(ticket),
    });
  }

  async delete(id: number): Promise<void> {
    await apiFetch(`/tickets/${id}`, { method: "DELETE" });
  }
}

export const ticketApi = new TicketApi();
