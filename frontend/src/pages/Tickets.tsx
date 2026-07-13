import PageHeader from "../components/common/PageHeader";
import TicketList from "../components/tickets/TicketList";

function Tickets() {
  return (
    <>
      <PageHeader
        title="Tickets"
        subtitle="Track and manage support tickets."
        buttonText="New Ticket"
      />

      <TicketList />
    </>
  );
}

export default Tickets;