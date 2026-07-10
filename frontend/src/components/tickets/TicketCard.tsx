import Card from "../common/Card";
import Badge from "../common/Badge";

import type { Ticket } from "../../types/ticket";

interface TicketCardProps {
  ticket: Ticket;
}

function TicketCard({ ticket }: TicketCardProps) {
  return (
    <Card className="mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold">{ticket.title}</h2>

          <p className="text-sm text-gray-500">
            {ticket.project}
          </p>
        </div>

        <Badge>{ticket.status}</Badge>
      </div>
    </Card>
  );
}

export default TicketCard;