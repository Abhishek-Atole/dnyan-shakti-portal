import { NavLink } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  BookOpen,
  Flame
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institution Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold/80">
                <Flame className="h-6 w-6 text-navy absolute -top-1 -left-1 z-10" />
                <BookOpen className="h-10 w-10 text-navy" />
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-white">
                  Lilabai Tulshiramji Dhokane
                </div>
                <div className="font-heading text-lg font-semibold text-white">
                  Senior College
                </div>
                <div className="text-gold font-medium italic text-sm">
                  "Dnyan Parm Balam"
                </div>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Empowering minds and shaping futures since 1985. Located in the heart of Asalgaon, 
              we provide world-class education from School to Post-Graduation with a commitment to excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <div className="text-white/80">
                  Asalgaon, Jalgaon,Buldhana Maharashtra 443402
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <div className="text-white/80">
                  +91 XXXXX XXXXX
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <div className="text-white/80">
                  info@ltdhokane.edu.in
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "Admissions", to: "/admissions" },
                { label: "Academic Programs", to: "/academics" },
                { label: "Events", to: "/events" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to} 
                    className="text-white/80 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Portals */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">Student Portals</h3>
            <ul className="space-y-3">
              {[
                { label: "Student Login", to: "/login" },
                { label: "Teacher Portal", to: "/dashboard/teacher" },
                { label: "Admin Panel", to: "/dashboard/admin" },
                { label: "Online Admission", to: "/admissions" },
                { label: "E-Library", to: "/library" },
                { label: "Alumni", to: "/alumni" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to} 
                    className="text-white/80 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-heading font-semibold text-white mb-3">Connect With Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="font-heading font-semibold text-white mb-3">Stay Updated</h4>
              <p className="text-white/80 text-sm mb-4">Subscribe to our newsletter for latest updates</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold"
                />
                <button className="px-4 py-2 bg-college-gold text-white rounded-lg font-medium hover:bg-college-gold/90 hover:scale-105 transition-all duration-300 shadow-lg focus:ring-2 focus:ring-college-gold/50">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/20 bg-navy/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <div>
              © {new Date().getFullYear()} Lilabai Tulshiramji Dhokane Senior College. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-gold transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-gold transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
