import { Helmet } from "react-helmet-async";

const DashboardAdmin = () => {
  return (
    <main className="container mx-auto max-w-6xl py-12">
      <Helmet>
        <title>Admin Dashboard | Lilabai T. Dhokane Senior College</title>
        <meta name="description" content="Admin dashboard for managing students, teachers, events, gallery, and timetables." />
        <link rel="canonical" href="/dashboard/admin" />
      </Helmet>
      <h1 className="mb-6 text-3xl font-heading font-semibold">Admin Dashboard (Preview)</h1>
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Students</div><p className="text-sm text-muted-foreground">Create, update, and manage records.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Teachers</div><p className="text-sm text-muted-foreground">Assign classes and manage profiles.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Events</div><p className="text-sm text-muted-foreground">Create and publish events.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Gallery</div><p className="text-sm text-muted-foreground">Upload and organize images.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Timetable</div><p className="text-sm text-muted-foreground">Publish schedules and exams.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Reports</div><p className="text-sm text-muted-foreground">Attendance and results analytics.</p></div>
      </section>
    </main>
  );
};

export default DashboardAdmin;
