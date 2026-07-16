import Card from "../common/Card";
import Badge from "../common/Badge";

import { TicketStatus, type Ticket } from "../../types/ticket";

interface TicketCardProps {
  ticket: Ticket;
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: TicketStatus) => void;
}

function TicketCard({ ticket, onDelete, onStatusChange }: TicketCardProps) {
  return (
    <Card className="mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold">{ticket.title}</h2>

          <p className="text-sm text-gray-500">
            {ticket.project?.name ?? ""}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge>{ticket.priority}</Badge>

          <select
            value={ticket.status}
            onChange={(event) =>
              onStatusChange(ticket.id, event.target.value as TicketStatus)
            }
            className="border rounded-lg px-3 py-1 text-sm"
          >
            {Object.values(TicketStatus).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button
            onClick={() => onDelete(ticket.id)}
            className="text-red-600 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
}

export default TicketCard;
