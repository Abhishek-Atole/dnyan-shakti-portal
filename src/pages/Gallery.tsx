import { Helmet } from "react-helmet-async";
import hero1 from "@/assets/gallery-library.jpg";
import hero2 from "@/assets/gallery-event.jpg";
import hero3 from "@/assets/gallery-lab.jpg";

const Gallery = () => {
  const images = [
    { src: hero1, alt: "College library with students studying" },
    { src: hero2, alt: "Cultural event on campus stage" },
    { src: hero3, alt: "Science laboratory practical session" },
  ];

  return (
    <main className="container mx-auto max-w-6xl py-12">
      <Helmet>
        <title>Gallery | Lilabai T. Dhokane Senior College</title>
        <meta name="description" content="Explore the gallery of events, facilities, and student life at Lilabai Tulshiramji Dhokane Senior College." />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <h1 className="mb-6 text-3xl font-heading font-semibold">Gallery</h1>
      <section className="grid gap-6 md:grid-cols-3">
        {images.map((img) => (
          <figure key={img.alt} className="overflow-hidden rounded-lg border bg-card shadow-sm">
            <img
              loading="lazy"
              src={img.src}
              alt={img.alt}
              className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">{img.alt}</figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
};

export default Gallery;
