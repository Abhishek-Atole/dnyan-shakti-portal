import { Helmet } from "react-helmet-async";
import { 
  BookOpen, 
  Users, 
  Award, 
  GraduationCap,
  Building,
  Microscope,
  Calculator,
  Palette,
  Globe,
  ChevronRight,
  Clock,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Academics = () => {
  const schoolPrograms = [
    {
      level: "Primary (Std. 1-5)",
      icon: Building,
      description: "Strong foundation with activity-based learning",
      subjects: ["Mathematics", "English", "Marathi", "Environmental Science", "Arts & Crafts"],
      features: ["Interactive Learning", "Play Method", "Regular Assessment", "Skill Development"]
    },
    {
      level: "Secondary (Std. 6-10)",
      icon: BookOpen,
      description: "Comprehensive curriculum preparing for board exams",
      subjects: ["Mathematics", "Science", "Social Science", "Languages", "Computer Education"],
      features: ["Laboratory Work", "Project-based Learning", "Career Guidance", "Board Preparation"]
    },
    {
      level: "Higher Secondary (Std. 11-12)",
      icon: GraduationCap,
      description: "Specialized streams for career preparation",
      subjects: ["Science Stream", "Commerce Stream", "Arts Stream"],
      features: ["Stream Specialization", "Competitive Exam Prep", "Career Counseling", "College Guidance"]
    }
  ];

  const collegePrograms = [
    {
      title: "Bachelor of Science in Education (BSE)",
      duration: "2 Years",
      eligibility: "12th Pass with 50% marks",
      icon: Award,
      description: "Professional teacher training program combining education theory with practical teaching experience.",
      curriculum: [
        "Educational Psychology",
        "Teaching Methodology", 
        "Curriculum Development",
        "Assessment & Evaluation",
        "Classroom Management",
        "Educational Technology"
      ],
      features: [
        "100% Placement Assistance",
        "Practical Teaching Experience",
        "Government Recognition",
        "Industry-Ready Curriculum"
      ]
    },
    {
      title: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation with 50% marks",
      icon: Users,
      description: "Advanced business management program with industry partnerships and 100% placement record.",
      curriculum: [
        "Financial Management",
        "Marketing Management",
        "Human Resource Management",
        "Operations Management",
        "Strategic Management", 
        "Entrepreneurship"
      ],
      features: [
        "100% Placement Record",
        "Industry Mentorship",
        "Live Projects",
        "International Exposure"
      ]
    }
  ];

  const facilities = [
    {
      name: "Modern Laboratories",
      icon: Microscope,
      description: "Well-equipped physics, chemistry, biology, and computer labs"
    },
    {
      name: "Digital Library",
      icon: BookOpen,
      description: "Extensive collection of books, journals, and e-resources"
    },
    {
      name: "Smart Classrooms",
      icon: Globe,
      description: "Technology-enabled classrooms with interactive boards"
    },
    {
      name: "Sports Complex",
      icon: Award,
      description: "Indoor and outdoor sports facilities for holistic development"
    }
  ];

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Academic Programs - L.T. Dhokane Senior College</title>
        <meta name="description" content="Explore our comprehensive academic programs from School (Std. 1-12) to Post-Graduation (BSE, MBA) at L.T. Dhokane Senior College, Jalgaon." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy to-navy/90 text-white py-24">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-gold text-navy font-medium">Academic Excellence</Badge>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Academic Programs
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive education from foundation to post-graduation with industry-relevant curriculum 
            and modern teaching methodologies.
          </p>
        </div>
      </section>

      {/* Program Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="school" className="w-full">
            <TabsList className="grid w-full md:w-fit mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="school" className="px-8 py-3">School Education</TabsTrigger>
              <TabsTrigger value="college" className="px-8 py-3">College Programs</TabsTrigger>
            </TabsList>

            <TabsContent value="school" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-bold text-navy mb-4">
                  School Education (Std. 1-12)
                </h2>
                <p className="text-lg text-navy/70 max-w-2xl mx-auto">
                  Building strong foundations with comprehensive curriculum and modern teaching methods
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {schoolPrograms.map((program, index) => (
                  <Card key={index} className="border-navy/10 hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gold/10">
                          <program.icon className="w-8 h-8 text-gold" />
                        </div>
                        <div>
                          <CardTitle className="text-navy font-heading">{program.level}</CardTitle>
                          <CardDescription>{program.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-navy mb-3">Core Subjects</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {program.subjects.map((subject, i) => (
                            <Badge key={i} variant="outline" className="border-navy/20 text-navy/80">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-navy mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {program.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-navy/80">
                              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="college" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-bold text-navy mb-4">
                  Post-Graduate Programs
                </h2>
                <p className="text-lg text-navy/70 max-w-2xl mx-auto">
                  Professional programs designed for career advancement and industry readiness
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {collegePrograms.map((program, index) => (
                  <Card key={index} className="border-navy/10 hover:shadow-elegant transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="p-4 rounded-lg bg-gold/10">
                          <program.icon className="w-10 h-10 text-gold" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-navy font-heading text-xl mb-2">
                            {program.title}
                          </CardTitle>
                          <div className="flex flex-wrap gap-4 text-sm text-navy/70">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {program.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <GraduationCap className="w-4 h-4" />
                              {program.eligibility}
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-navy mb-3">Curriculum Highlights</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {program.curriculum.map((subject, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-navy/80">
                              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                              {subject}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-navy mb-3">Program Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {program.features.map((feature, i) => (
                            <Badge key={i} className="bg-navy/5 text-navy border-navy/20">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-navy text-white hover:bg-navy/90">
                        Apply Now
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-navy text-white">Infrastructure</Badge>
            <h2 className="font-heading text-4xl font-bold text-navy mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-navy/70 max-w-2xl mx-auto">
              State-of-the-art infrastructure supporting modern education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center border-navy/10 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                      <facility.icon className="w-8 h-8 text-gold" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-navy mb-2">{facility.name}</h3>
                  <p className="text-sm text-navy/70">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful alumni who started their journey at L.T. Dhokane Senior College
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 font-semibold">
              Apply for Admission
              <GraduationCap className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
              Download Prospectus
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;
