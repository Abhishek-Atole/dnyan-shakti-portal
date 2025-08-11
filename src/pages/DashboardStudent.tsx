import { Helmet } from "react-helmet-async";

const DashboardStudent = () => {
  return (
    <main className="container mx-auto max-w-6xl py-12">
      <Helmet>
        <title>Student Dashboard | Lilabai T. Dhokane Senior College</title>
        <meta name="description" content="Student dashboard with profile, grades, timetable, exam schedules, and notices." />
        <link rel="canonical" href="/dashboard/student" />
      </Helmet>
      <h1 className="mb-6 text-3xl font-heading font-semibold">Student Dashboard (Preview)</h1>
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Profile</div><p className="text-sm text-muted-foreground">Roll number and personal info.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Grades</div><p className="text-sm text-muted-foreground">View term-wise results.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Timetable</div><p className="text-sm text-muted-foreground">Daily and weekly schedules.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Exams</div><p className="text-sm text-muted-foreground">Upcoming exams and halls.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Attendance</div><p className="text-sm text-muted-foreground">Track attendance statistics.</p></div>
        <div className="rounded-lg border bg-card p-4 shadow-sm"><div className="font-medium">Notices</div><p className="text-sm text-muted-foreground">Latest announcements.</p></div>
      </section>
    </main>
  );
};

export default DashboardStudent;
