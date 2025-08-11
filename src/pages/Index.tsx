import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ChevronRight,
  Star,
  Award,
  GraduationCap,
  Building,
  Camera,
  ExternalLink,
  Flame,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [currentNotice, setCurrentNotice] = useState(0);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const notices = [
    "Admissions open for Academic Year 2025-26 - Apply Now!",
    "Annual Science Exhibition - March 15-17, 2025",
    "Cultural Festival Registration closes on February 28",
    "Parent-Teacher Meeting scheduled for March 5, 2025"
  ];

  const events = [
    {
      date: "15",
      month: "MAR",
      title: "Annual Science Exhibition",
      time: "9:00 AM - 5:00 PM",
      location: "Main Campus"
    },
    {
      date: "22",
      month: "MAR", 
      title: "Cultural Festival 2025",
      time: "6:00 PM onwards",
      location: "Auditorium"
    },
    {
      date: "30",
      month: "MAR",
      title: "Alumni Meet",
      time: "2:00 PM - 8:00 PM", 
      location: "Conference Hall"
    }
  ];

  const achievements = [
    "100% placement record in MBA program",
    "State level winners in Science Olympiad",
    "Accredited with NAAC A+ Grade",
    "Best College Award 2024 - District Level"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "BSE Graduate 2023",
      text: "The education quality and faculty support helped me secure a position in a top IT company."
    },
    {
      name: "Rajesh Patil",
      role: "Parent",
      text: "Excellent infrastructure and caring teachers. My child has shown remarkable improvement."
    },
    {
      name: "Dr. Anita Joshi",
      role: "Alumni",
      text: "This institution shaped my career and values. Proud to be an alumna of L.T. Dhokane College."
    }
  ];

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotice((prev) => (prev + 1) % notices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Lilabai Tulshiramji Dhokane Senior College - Dnyan Parm Balam</title>
        <meta name="description" content="Premier educational institution in Asalgaon, Jalgaon. Offering quality education from Std. 1-12, BSE, MBA programs. Accredited with NAAC A+ Grade." />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            name: "Lilabai Tulshiramji Dhokane Senior College",
            alternateName: "L.T. Dhokane Senior College",
            slogan: "Dnyan Parm Balam",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Asalgaon, Akharao",
              addressLocality: "Jalgaon",
              addressRegion: "Maharashtra",
              postalCode: "443402",
              addressCountry: "IN",
            },
            url: typeof window !== 'undefined' ? window.location.origin : '',
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#0C2D48] via-[#0C2D48]/95 to-[#0C2D48]/90"
        style={{
          backgroundImage: `radial-gradient(800px at ${pos.x}% ${pos.y}%, rgba(212, 175, 55, 0.15), transparent 70%)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2D48]/90 to-[#0C2D48]/70" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("/College  image 01.jpeg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 container mx-auto flex min-h-[90vh] items-center px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B5942D] shadow-lg">
                <Flame className="h-8 w-8 text-[#0C2D48] absolute -top-2 -left-2 z-10" />
                <BookOpen className="h-12 w-12 text-[#0C2D48]" />
              </div>
              <div>
                <Badge className="mb-2 bg-[#D4AF37] text-white font-medium hover:bg-[#B5942D] transition-colors duration-300 cursor-pointer">
                  Since 1985 • NAAC A+ Accredited
                </Badge>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Lilabai Tulshiramji
              <span className="block text-[#D4AF37]">Dhokane Senior College</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-[#D4AF37] italic mb-2">
              "Dnyan Parm Balam"
            </p>
            <p className="text-lg text-white/90 mb-8 max-w-2xl">
              Knowledge is Supreme Strength - Empowering minds and shaping futures since 1985. 
              Located in the heart of Asalgaon, we provide world-class education from School to Post-Graduation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#D4AF37] text-white font-semibold hover:bg-[#B5942D] hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
                <NavLink to="/admissions">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Admissions Open 2025-26
                </NavLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white bg-white/95 text-[#0C2D48] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm">
                <NavLink to="/about">
                  Explore Our Legacy
                  <ChevronRight className="w-5 h-5 ml-2" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section className="bg-[#D4AF37] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Badge className="bg-[#0C2D48] text-white font-semibold">
              Latest Updates
            </Badge>
            <div className="flex-1 overflow-hidden h-8 relative">
              <div 
                className="text-[#0C2D48] font-medium transition-transform duration-500 ease-in-out absolute inset-0"
                style={{ transform: `translateY(-${currentNotice * 100}%)` }}
              >
                {notices.map((notice, index) => (
                  <div key={index} className="h-8 flex items-center">
                    {notice}
                  </div>
                ))}
              </div>
            </div>
            <Bell className="h-5 w-5 text-[#0C2D48] animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Institution */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#D4AF37] text-[#0C2D48] font-semibold">About Our Institution</Badge>
              <h2 className="text-4xl font-bold text-[#0C2D48] mb-6">
                Excellence in Education Since 1985
              </h2>
              <p className="text-lg text-[#0C2D48]/80 mb-6 leading-relaxed">
                Lilabai Tulshiramji Dhokane Senior College stands as a beacon of quality education 
                in Jalgaon district. With our motto "Dnyan Parm Balam" (Knowledge is Supreme Strength), 
                we have been nurturing young minds for over three decades.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <Card className="bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Users className="w-10 h-10 text-[#D4AF37] mb-3" />
                    <h3 className="font-semibold text-[#0C2D48] mb-2">5000+ Students</h3>
                    <p className="text-sm text-[#0C2D48]/70">Active enrollment across all programs</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Award className="w-10 h-10 text-[#D4AF37] mb-3" />
                    <h3 className="font-semibold text-[#0C2D48] mb-2">NAAC A+ Grade</h3>
                    <p className="text-sm text-[#0C2D48]/70">Accredited for academic excellence</p>
                  </CardContent>
                </Card>
              </div>

              <Button asChild className="bg-[#D4AF37] hover:bg-[#B5942D] text-[#0C2D48] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                <NavLink to="/about">
                  Learn More About Us
                  <ChevronRight className="w-4 h-4 ml-2" />
                </NavLink>
              </Button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/College Infrastructure.jpeg" 
                  alt="Library" 
                  className="rounded-lg shadow-lg h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="/College PlayGround.jpeg" 
                  alt="Laboratory" 
                  className="rounded-lg shadow-lg h-48 w-full object-cover mt-8 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D48]/10 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#F8F5F0] text-[#0C2D48] border border-[#D4AF37] font-semibold">Academic Excellence</Badge>
            <h2 className="text-4xl font-bold text-[#0C2D48] mb-4">
              Our Academic Programs
            </h2>
            <p className="text-lg text-[#0C2D48]/70 max-w-2xl mx-auto">
              Comprehensive education from foundation to post-graduation with industry-relevant curriculum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "School Education",
                subtitle: "Std. 1 to 12",
                description: "Strong foundation with Science, Commerce, and Arts streams",
                highlights: ["CBSE/State Board", "Modern Labs", "Sports & Arts"]
              },
              {
                icon: GraduationCap,
                title: "Bachelor of Science in Education",
                subtitle: "BSE Program", 
                description: "Professional teaching preparation with practical training",
                highlights: ["B.Ed Integration", "Teaching Practice", "Research Methods"]
              },
              {
                icon: Award,
                title: "Master of Business Administration",
                subtitle: "MBA Program",
                description: "Advanced business education with industry partnerships",
                highlights: ["100% Placement", "Industry Mentors", "Live Projects"]
              }
            ].map((program, index) => (
              <Card key={index} className="bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-colors">
                      <program.icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div>
                      <CardTitle className="text-[#0C2D48]">{program.title}</CardTitle>
                      <CardDescription className="text-[#D4AF37] font-medium">{program.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#0C2D48]/70 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#0C2D48]/80">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="mt-4 text-[#0C2D48] hover:text-[#D4AF37] p-0 group">
                    View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="py-16 bg-[#0C2D48] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#F8F5F0] text-[#0C2D48] border border-[#D4AF37] font-semibold">Campus Life</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Upcoming Events & Activities
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Stay updated with our vibrant campus events and academic activities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#D4AF37]">{event.date}</div>
                      <div className="text-sm text-white/80">{event.month}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-white/80 mb-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="text-white border-white hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all duration-300">
              <NavLink to="/events">
                View All Events
                <Calendar className="w-4 h-4 ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-navy text-white">Recognition</Badge>
            <h2 className="text-4xl font-bold text-[#0C2D48] mb-4">
              Achievements & Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 border-[#0C2D48]/10 hover:shadow-xl transition-all duration-300">
                <Trophy className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <p className="font-medium text-[#0C2D48]">{achievement}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#F8F5F0] text-[#0C2D48] border border-[#D4AF37] font-semibold">Campus Life</Badge>
            <h2 className="text-4xl font-bold text-[#0C2D48] mb-4">
              Gallery Highlights
            </h2>
            <p className="text-lg text-[#0C2D48]/70">
              Glimpse into our vibrant campus life and academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { img: "/Dahi Handi Event.jpeg", title: "Cultural Events", desc: "Annual festivals and celebrations" },
              { img: "/College Office.jpeg", title: "Modern Facilities", desc: "State-of-the-art infrastructure" },
              { img: "/College surrounding.jpeg", title: "Beautiful Campus", desc: "Serene learning environment" }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D48]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-[#D4AF37] hover:bg-[#B5942D] text-[#0C2D48] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              <NavLink to="/gallery">
                <Camera className="w-4 h-4 mr-2" />
                View Full Gallery
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#D4AF37] text-[#0C2D48] font-semibold">Testimonials</Badge>
            <h2 className="text-4xl font-bold mb-4">
              What Our Community Says
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-[#D4AF37]">{testimonial.name}</div>
                    <div className="text-sm text-white/70">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-[#0C2D48] text-white font-semibold">Get In Touch</Badge>
              <h2 className="text-4xl font-bold text-[#0C2D48] mb-6">
                Contact & Location
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  <div>
                    <div className="font-semibold text-[#0C2D48]">Address</div>
                    <div className="text-[#0C2D48]/70">Asalgaon,Jalgaon,Buldhana Maharashtra 443402</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                  <div>
                    <div className="font-semibold text-[#0C2D48]">Phone</div>
                    <div className="text-[#0C2D48]/70">+91 XXXXX XXXXX</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                  <div>
                    <div className="font-semibold text-[#0C2D48]">Email</div>
                    <div className="text-[#0C2D48]/70">info@ltdhokane.edu.in</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                  <div>
                    <div className="font-semibold text-[#0C2D48]">Office Hours</div>
                    <div className="text-[#0C2D48]/70">Mon - Sat: 9:00 AM - 5:00 PM</div>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-[#D4AF37] hover:bg-[#B5942D] text-[#0C2D48] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                <NavLink to="/contact">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contact Us
                </NavLink>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-elegant p-4">
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.78385207160292!2d76.49531096220018!3d21.011003246230526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd761cc4b14af27%3A0xebc35b63986b1974!2sS%20T%20Dhokane%20vidyalay!5e0!3m2!1sen!2sin!4v1754917510835!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="S T Dhokane Vidyalay Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 border-t border-[#0C2D48]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0C2D48] mb-4">Quick Links</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Admission Forms", link: "/admissions" },
              { title: "Academic Calendar", link: "/academics" },
              { title: "Syllabus Download", link: "/academics" },
              { title: "E-Library", link: "/library" }
            ].map((item, index) => (
              <Button key={index} asChild variant="outline" className="border border-[#D4AF37] text-[#0C2D48] hover:bg-[#D4AF37] hover:text-[#0C2D48] transition-all duration-300">
                <NavLink to={item.link}>
                  {item.title}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </NavLink>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
