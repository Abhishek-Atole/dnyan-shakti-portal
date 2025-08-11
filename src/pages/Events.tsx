import { Helmet } from "react-helmet-async";

const events = [
  { date: "2025-08-15", title: "Independence Day Celebration", desc: "Flag hoisting and cultural program." },
  { date: "2025-09-05", title: "Teacher's Day", desc: "Student-led program to honor teachers." },
  { date: "2025-10-01", title: "Science Exhibition", desc: "Student projects and demonstrations." },
];

const Events = () => {
  return (
    <main className="container mx-auto max-w-6xl py-12">
      <Helmet>
        <title>Events | Lilabai T. Dhokane Senior College</title>
        <meta name="description" content="Upcoming events and important dates at Lilabai Tulshiramji Dhokane Senior College, Asalgaon." />
        <link rel="canonical" href="/events" />
      </Helmet>
      <h1 className="mb-6 text-3xl font-heading font-semibold">Events</h1>
      <section className="grid gap-4">
        {events.map((e) => (
          <article key={e.title} className="flex items-start justify-between rounded-lg border bg-card p-4 shadow-sm">
            <div>
              <h2 className="text-lg font-semibold">{e.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
            </div>
            <time className="rounded-md bg-secondary px-3 py-1 text-sm font-medium">{new Date(e.date).toLocaleDateString()}</time>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Events;
