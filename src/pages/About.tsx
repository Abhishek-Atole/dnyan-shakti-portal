import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <main className="container mx-auto max-w-6xl py-12">
      <Helmet>
        <title>About | Lilabai T. Dhokane Senior College</title>
        <meta name="description" content="Learn about the mission, vision, and history of Lilabai Tulshiramji Dhokane Senior College, Asalgaon." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <h1 className="mb-6 text-3xl font-heading font-semibold">About Us</h1>
      <section className="prose prose-slate max-w-none dark:prose-invert">
        <h2>Mission</h2>
        <p>
          To impart quality education that nurtures curiosity, integrity, and service, empowering students to excel in their academic and professional pursuits.
        </p>
        <h2>Vision</h2>
        <p>
          To be a leading institution fostering holistic development and societal contribution through inclusive and innovative education.
        </p>
        <h2>History</h2>
        <p>
          Lilabai Tulshiramji Dhokane Senior College was established to serve the educational needs of Asalgaon and surrounding regions. Guided by the motto “Dnyan Parm Balam,” the college has continued to grow with a commitment to excellence and community service.
        </p>
      </section>
    </main>
  );
};

export default About;
