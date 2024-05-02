interface Params {
    id: string
}

interface Ticket {
    id: string
    title: string
    body: string
    priority: string
    user_mail: string
}

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/tickets')

    const tickets = await res.json()

    tickets.map((ticket: {id: string}) => ({
        id: ticket.id
    }))
}

async function getTicket(id: string): Promise<Ticket>{
    const res = await fetch(`http://localhost:4000/tickets/${id}`,{
        next: {
        revalidate: 60
      }}
    )

    return res.json()
}


export default async function TicketDetails({ params }: {params: Params}) {
    const ticket = await getTicket(params.id)
  return (
    <main>
        <nav>
            <h2>Ticket details</h2>
        </nav>
        <div className="card">
            <h3>
                {ticket.title}
            </h3>
            <small>
                created by {ticket.user_mail}
            </small>
            <p>
                {ticket.body}
            </p>
            <div className={`pill ${ticket.priority}`} >
                  {ticket.priority} priority
            </div>
        </div>
    </main>
  )
}
