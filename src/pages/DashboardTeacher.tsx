import { Helmet } from "react-helmet-async";

const DashboardTeacher = () => {
  return (
    <main className="container mx-auto max-w-6xl py-12">
      <Helmet>
        <title>Teacher Dashboard | Lilabai T. Dhokane Senior College</title>
        <meta name="description" content="Teacher dashboard for classes, attendance input, grade submissions, and resources." />
        <link rel="canonical" href="/dashboard/teacher" />
      </Helmet>
      <h1 className="mb-6 text-3xl font-heading font-semibold">Teacher Dashboard (Preview)</h1>
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Classes</div><p className="text-sm text-muted-foreground">Assigned classes and schedules.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Attendance</div><p className="text-sm text-muted-foreground">Input and review attendance.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Grades</div><p className="text-sm text-muted-foreground">Submit and manage grades.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Resources</div><p className="text-sm text-muted-foreground">Upload study materials.</p></div>
      </section>
    </main>
  );
};

export default DashboardTeacher;
