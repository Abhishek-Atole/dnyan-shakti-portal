import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <main className="container mx-auto max-w-6xl py-12">
      <Helmet>
        <title>Contact | Lilabai T. Dhokane Senior College</title>
        <meta name="description" content="Contact Lilabai Tulshiramji Dhokane Senior College, Asalgaon. Phone, email, address, and map." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <h1 className="mb-6 text-3xl font-heading font-semibold">Contact Us</h1>
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Reach Us</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><span className="font-medium text-foreground/90">Address:</span> Asalgaon, Akharao, Jalgaon, Maharashtra, District Guldana, PIN 443402</li>
            <li><span className="font-medium text-foreground/90">Phone:</span> +91-00000 00000</li>
            <li><span className="font-medium text-foreground/90">Email:</span> info@ltdsc.ac.in</li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-lg border shadow-sm">
          <iframe
            title="Lilabai T. Dhokane Senior College Map"
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Jalgaon,%20Maharashtra&output=embed"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;
