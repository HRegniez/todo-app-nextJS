import Link from "next/link";

interface Ticket {
  id: string;
  title: string;
  body: string;
  priority: string;
  user_mail: string;
}

async function getTickets(): Promise<Ticket[]> {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

interface TicketsListProps {
  tickets: Ticket[];
}

export default function TicketsList({ tickets }: TicketsListProps) {
  return (
    <div>
      <>
        {tickets.map((ticket) => (
          <Link href={`/tickets/${ticket.id}`} key={ticket.id}>
            <div className="card my-5">
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </div>
          </Link>
        ))}
        {tickets.length === 0 && (
          <p className="text-center">There are no open tickets</p>
        )}
      </>
    </div>
  );
}

export async function generateStaticProps() {
  const tickets: Ticket[] = await getTickets();

  return {
    props: {
      tickets,
    },
    revalidate: 60, // Revalidate at most once every 60 seconds
  };
}
