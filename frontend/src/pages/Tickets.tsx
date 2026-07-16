import { useEffect, useState } from "react";

import PageHeader from "../components/common/PageHeader";
import StatCard from "../components/dashboard/StatCard";
import TicketForm from "../components/tickets/TicketForm";
import TicketList from "../components/tickets/TicketList";

import { ticketApi } from "../api/tickets";
import { projectApi } from "../api/projects";
import { ApiError } from "../api/client";

import { TicketStatus, type Project, type Ticket } from "../types";

function Tickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    ticketApi.getAll().then(setTickets).catch(() => setError("Failed to load tickets"));
    projectApi.getAll().then(setProjects).catch(() => {});
  }, []);

  async function handleAddTicket(ticket: Partial<Ticket>) {
    try {
      const newTicket = await ticketApi.create(ticket);
      setTickets((prev) => [newTicket, ...prev]);
      setShowForm(false);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to create ticket");
    }
  }

  async function handleDeleteTicket(id: number) {
    try {
      await ticketApi.delete(id);
      setTickets((prev) => prev.filter((ticket) => ticket.id !== id));
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to delete ticket");
    }
  }

  async function handleStatusChange(id: number, status: TicketStatus) {
    try {
      const updated = await ticketApi.update(id, { status });
      setTickets((prev) =>
        prev.map((ticket) => (ticket.id === id ? updated : ticket))
      );
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to update ticket");
    }
  }

  const openCount = tickets.filter(
    (ticket) => ticket.status === TicketStatus.OPEN
  ).length;

  const inProgressCount = tickets.filter(
    (ticket) => ticket.status === TicketStatus.IN_PROGRESS
  ).length;

  const closedCount = tickets.filter(
    (ticket) => ticket.status === TicketStatus.CLOSED
  ).length;

  return (
    <>
      <PageHeader
        title="Tickets"
        subtitle="Track and manage support tickets."
        buttonText="New Ticket"
        onButtonClick={() => setShowForm((prev) => !prev)}
      />

      {error && (
        <p className="text-red-600 text-sm mb-4">{error}</p>
      )}

      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard title="Open" value={openCount} />
        <StatCard title="In Progress" value={inProgressCount} />
        <StatCard title="Closed" value={closedCount} />
      </div>

      {showForm && (
        <TicketForm
          projects={projects}
          onSubmit={handleAddTicket}
        />
      )}

      <TicketList
        tickets={tickets}
        onDelete={handleDeleteTicket}
        onStatusChange={handleStatusChange}
      />
    </>
  );
}

export default Tickets;
