import TicketCard from "./TicketCard";

import type { Ticket, TicketStatus } from "../../types/ticket";

interface TicketListProps {
  tickets: Ticket[];
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: TicketStatus) => void;
}

function TicketList({ tickets, onDelete, onStatusChange }: TicketListProps) {
  return (
    <>
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </>
  );
}

export default TicketList;
