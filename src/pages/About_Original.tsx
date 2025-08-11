import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Target, 
  Eye, 
  Heart, 
  Star,
  Building,
  Calendar,
  Trophy,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { NavLink } from "react-router-dom";

const About = () => {
  const achievements = [
    "NAAC A+ Grade Accreditation",
    "ISO 9001:2015 Quality Certification", 
    "Best College Award 2023",
    "Excellence in Rural Education",
    "Distinguished Alumni Network",
    "Research Publication Excellence"
  ];

  const statistics = [
    { icon: Users, label: "Students", value: "5000+", color: "text-[#D4AF37]" },
    { icon: GraduationCap, label: "Faculty", value: "150+", color: "text-[#D4AF37]" },
    { icon: BookOpen, label: "Programs", value: "25+", color: "text-[#D4AF37]" },
    { icon: Trophy, label: "Awards", value: "50+", color: "text-[#D4AF37]" }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Fostering empathy and understanding in all our interactions"
    },
    {
      icon: Star,
      title: "Excellence", 
      description: "Striving for the highest standards in education and character"
    },
    {
      icon: Building,
      title: "Integrity",
      description: "Upholding honesty, transparency, and ethical conduct"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing new ideas and modern teaching methodologies"
    }
  ];

  const milestones = [
    { year: "1985", event: "College Foundation", description: "Establishment of Lilabai Tulshiramji Dhokane Senior College" },
    { year: "1995", event: "First Graduation Batch", description: "Celebrated the success of our first graduating class" },
    { year: "2005", event: "NAAC Accreditation", description: "Received prestigious NAAC accreditation" },
    { year: "2015", event: "Infrastructure Expansion", description: "Major campus development and modernization" },
    { year: "2020", event: "Digital Transformation", description: "Complete digitalization during pandemic" },
    { year: "2023", event: "A+ Grade Achievement", description: "Upgraded to NAAC A+ grade status" }
  ];

  return (
    <main>
      <Helmet>
        <title>About Us | Lilabai T. Dhokane Senior College</title>
        <meta name="description" content="Learn about the mission, vision, history, and values of Lilabai Tulshiramji Dhokane Senior College, Asalgaon. Discover our journey of academic excellence since 1985." />
        <link rel="canonical" href="/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0C2D48] to-[#0C2D48]/90">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2D48]/95 to-[#0C2D48]/85" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("/College  image 01.jpeg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-[#D4AF37] text-[#0C2D48] font-semibold px-6 py-2">
            About Our Institution
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover the legacy, values, and vision that have shaped Lilabai Tulshiramji Dhokane Senior College 
            into a premier educational institution in Maharashtra.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl font-bold text-[#0C2D48] mb-2">{stat.value}</div>
                  <div className="text-[#0C2D48]/70 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#F8F5F0] text-[#0C2D48] border border-[#D4AF37] font-semibold">
              Our Purpose
            </Badge>
            <h2 className="text-4xl font-bold text-[#0C2D48] mb-4">Mission & Vision</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-[#D4AF37] to-[#B5942D] text-[#0C2D48]">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Target className="w-6 h-6" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-[#0C2D48]/80 leading-relaxed mb-6">
                  To impart quality education that nurtures curiosity, integrity, and service, empowering students 
                  to excel in their academic and professional pursuits while contributing meaningfully to society.
                </p>
                <p className="text-[#0C2D48]/70">
                  We are committed to fostering an environment of intellectual growth, ethical development, 
                  and cultural enrichment that prepares students for leadership roles in their chosen fields.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-[#0C2D48] to-[#0C2D48]/90 text-white">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Eye className="w-6 h-6" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-[#0C2D48]/80 leading-relaxed mb-6">
                  To be a leading institution of higher education that fosters holistic development and societal 
                  contribution through inclusive, innovative, and transformative education.
                </p>
                <p className="text-[#0C2D48]/70">
                  We envision creating global citizens who are academically excellent, socially responsible, 
                  and culturally rooted, capable of addressing the challenges of the 21st century.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#D4AF37] text-[#0C2D48] font-semibold">
              Our Foundation
            </Badge>
            <h2 className="text-4xl font-bold text-[#0C2D48] mb-4">Core Values</h2>
            <p className="text-lg text-[#0C2D48]/70 max-w-2xl mx-auto">
              The principles that guide our educational philosophy and institutional culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0C2D48] mb-3">{value.title}</h3>
                  <p className="text-[#0C2D48]/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#F8F5F0] text-[#0C2D48] border border-[#D4AF37] font-semibold">
              Our Journey
            </Badge>
            <h2 className="text-4xl font-bold text-[#0C2D48] mb-4">History & Milestones</h2>
            <p className="text-lg text-[#0C2D48]/70 max-w-3xl mx-auto">
              From humble beginnings to becoming a renowned center of learning, our journey spans nearly four decades 
              of educational excellence and community service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-[#0C2D48]" />
                    </div>
                  </div>
                  <Card className="flex-1 bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge className="bg-[#0C2D48] text-white font-semibold">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-[#0C2D48]">{milestone.event}</h3>
                      </div>
                      <p className="text-[#0C2D48]/70">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-[#0C2D48] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#D4AF37] text-[#0C2D48] font-semibold">
              Recognition
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Recognition and accolades that reflect our commitment to educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                  <p className="font-medium">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-[#D4AF37]/20 shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <Badge className="mb-4 bg-[#D4AF37] text-[#0C2D48] font-semibold">
                    Principal's Message
                  </Badge>
                  <h2 className="text-3xl font-bold text-[#0C2D48] mb-4">Message from Leadership</h2>
                </div>
                
                <div className="text-lg text-[#0C2D48]/80 leading-relaxed space-y-4">
                  <p>
                    "At Lilabai Tulshiramji Dhokane Senior College, we believe that education is not just about 
                    acquiring knowledge, but about transforming lives and building character. Our motto 
                    'Dnyan Parm Balam' - Knowledge is Supreme Strength - guides every aspect of our educational mission."
                  </p>
                  <p>
                    "We are committed to providing our students with a holistic educational experience that 
                    combines academic rigor with practical application, cultural awareness with global perspective, 
                    and individual growth with social responsibility."
                  </p>
                  <p>
                    "As we move forward, we remain dedicated to maintaining our tradition of excellence while 
                    embracing innovation and adapting to the evolving needs of our students and society."
                  </p>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-[#0C2D48] font-semibold">Dr. [Principal Name]</p>
                  <p className="text-[#0C2D48]/70">Principal</p>
                  <p className="text-[#0C2D48]/70">Lilabai Tulshiramji Dhokane Senior College</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#F8F5F0] text-[#0C2D48] border border-[#D4AF37] font-semibold">
              Get in Touch
            </Badge>
            <h2 className="text-4xl font-bold text-[#0C2D48] mb-4">Contact Information</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0C2D48] mb-3">Address</h3>
                <p className="text-[#0C2D48]/70">
                  Asalgaon, Jalgaon<br />
                  Buldhana, Maharashtra 443402<br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0C2D48] mb-3">Phone</h3>
                <p className="text-[#0C2D48]/70">
                  Office: +91 XXXXX XXXXX<br />
                  Admission: +91 XXXXX XXXXX<br />
                  Emergency: +91 XXXXX XXXXX
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0C2D48] mb-3">Email</h3>
                <p className="text-[#0C2D48]/70">
                  info@ltdhokane.edu.in<br />
                  admission@ltdhokane.edu.in<br />
                  principal@ltdhokane.edu.in
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-[#D4AF37] hover:bg-[#B5942D] text-[#0C2D48] font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              <NavLink to="/contact">
                Contact Us Today
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
