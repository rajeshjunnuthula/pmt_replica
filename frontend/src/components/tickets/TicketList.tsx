import tickets from "../../data/tickets";
import TicketCard from "./TicketCard";

function TicketList() {
  return (
    <>
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
        />
      ))}
    </>
  );
}

export default TicketList;