interface Ticket {
    id: string
    title: string
    body: string
    prority: string
    user_mail: string
}

async function getTickets(): Promise<Ticket[]> {
    const res = await fetch('https://localost://4000/tickets')

    return res.json()
}

export default async function TicketsList() {
    const tickets: Ticket[] = await getTickets()

  return (
    <div>
      <>
        {tickets.map((ticket) => (
            <div key={ticket.id} className="card my-5">
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}</p>
            </div>
        ))}
      </>
    </div>
  )
}

