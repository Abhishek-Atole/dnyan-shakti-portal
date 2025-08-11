import { Helmet } from "react-helmet-async";

const Admissions = () => {
  return (
    <main className="container mx-auto max-w-6xl py-12">
      <Helmet>
        <title>Admissions | Lilabai T. Dhokane Senior College</title>
        <meta name="description" content="Admissions process, eligibility, and application forms for Lilabai Tulshiramji Dhokane Senior College." />
        <link rel="canonical" href="/admissions" />
      </Helmet>
      <h1 className="mb-6 text-3xl font-heading font-semibold">Admissions</h1>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">How to Apply</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Review eligibility criteria for your chosen program.</li>
            <li>Prepare required documents (ID, transcripts, photos).</li>
            <li>Fill out the application form and pay the fee.</li>
            <li>Await confirmation and further instructions via email.</li>
          </ol>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Downloads</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="story-link" href="#">Admission Form (PDF)</a></li>
            <li><a className="story-link" href="#">Prospectus</a></li>
            <li><a className="story-link" href="#">Scholarship Guide</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Admissions;
