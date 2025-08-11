import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "@/assets/hero-college.jpg";
import { NavLink } from "react-router-dom";

const Index = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Lilabai T. Dhokane Senior College, Asalgaon</title>
        <meta name="description" content="Official website of Lilabai Tulshiramji Dhokane Senior College — Dnyan Parm Balam. Explore admissions, events, gallery, and contact information." />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            name: "Lilabai Tulshiramji Dhokane Senior College",
            alternateName: "LILAB-LD-SRIMATI-DHOPINI-VIDYALAYI-SAVARTHANA",
            slogan: "Dnyan Parm Balam",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Asalgaon, Akharao, Jalgaon",
              addressRegion: "Maharashtra",
              postalCode: "443402",
              addressCountry: "IN",
            },
            url: typeof window !== 'undefined' ? window.location.origin : '',
          })}
        </script>
      </Helmet>

      <section
        className="relative overflow-hidden border-b bg-gradient-to-b from-background to-secondary"
        style={{
          // signature glow following the cursor (respects tokens)
          backgroundImage: `radial-gradient(600px at ${pos.x}% ${pos.y}%, hsl(var(--accent)/0.18), transparent 60%), linear-gradient(to bottom, hsl(var(--background)), hsl(var(--secondary)))`,
        } as any}
      >
        <div className="container mx-auto grid max-w-6xl items-center gap-10 py-16 md:grid-cols-2">
          <div className="animate-enter">
            <p className="text-sm font-medium text-accent">Dnyan Parm Balam</p>
            <h1 className="mt-2 font-heading text-4xl font-semibold leading-tight md:text-5xl">
              Lilabai Tulshiramji Dhokane Senior College
            </h1>
            <p className="mt-4 max-w-prose text-base text-muted-foreground">
              An institution committed to excellence in education and holistic development for the students of Asalgaon and surrounding regions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <NavLink to="/admissions" className="rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground shadow hover:opacity-90">
                Admissions
              </NavLink>
              <NavLink to="/events" className="rounded-md border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary/5">
                Upcoming Events
              </NavLink>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border bg-card shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Elegant academic hero with torch and book motif"
                className="h-[320px] w-full object-cover md:h-[420px]"
                loading="eager"
                width={1600}
                height={896}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-3">
        {[{
          title: 'Quality Education',
          text: 'Experienced faculty, modern facilities, and a student-centric approach.'
        }, {
          title: 'Inclusive Community',
          text: 'We foster a welcoming environment that celebrates diversity.'
        }, {
          title: 'Beyond the Classroom',
          text: 'Clubs, events, and community programs for holistic development.'
        }].map((c) => (
          <article key={c.title} className="animate-fade-in rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Index;
