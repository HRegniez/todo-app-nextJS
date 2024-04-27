import Link from "next/link"

interface Ticket {
    id: string
    title: string
    body: string
    priority: string
    user_mail: string
}

async function getTickets(): Promise<Ticket[]> {
    const res = await fetch('http://localhost:4000/tickets',{
        next: {
        revalidate: 0
      }}
    )

    return res.json()
}

export default async function TicketsList() {
    const tickets: Ticket[] = await getTickets()

  return (
    <div>
      <>
        {tickets.map((ticket) => (
          <Link href={`/tickets/${ticket.id}`}>
            <div key={ticket.id} className="card my-5">
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}</p>
                <div className={`pill ${ticket.priority}`} >
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
  )
}

