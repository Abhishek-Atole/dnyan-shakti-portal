const Footer = () => {
  return (
    <footer className="mt-20 border-t bg-background/80">
      <div className="container mx-auto grid gap-6 py-10 md:grid-cols-3">
        <div>
          <div className="font-heading text-lg font-semibold">Lilabai T. Dhokane Senior College</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Asalgaon, Akharao, Jalgaon, Maharashtra, District Guldana, PIN 443402
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Motto: Dnyan Parm Balam</p>
        </div>
        <div>
          <div className="text-sm font-medium text-foreground/90">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:underline" href="/admissions">Admissions</a></li>
            <li><a className="hover:underline" href="/events">Events</a></li>
            <li><a className="hover:underline" href="/gallery">Gallery</a></li>
            <li><a className="hover:underline" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium text-foreground/90">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Phone: +91-00000 00000</li>
            <li>Email: info@ltdsc.ac.in</li>
            <li>Office Hours: Mon–Sat, 9:00–17:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lilabai T. Dhokane Senior College. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
