import { Helmet } from "react-helmet-async";

const events = [
  { date: "2025-08-15", title: "Independence Day Celebration", desc: "Flag hoisting and cultural program." },
  { date: "2025-09-05", title: "Teacher's Day", desc: "Student-led program to honor teachers." },
  { date: "2025-10-01", title: "Science Exhibition", desc: "Student projects and demonstrations." },
];

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star,
  BookOpen,
  Trophy,
  Music,
  Microscope,
  FileText,
  ArrowRight
} from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Science Exhibition 2024",
      description: "Showcase of innovative science projects by students from classes 9-12. Explore cutting-edge experiments and research work.",
      date: "March 25, 2024",
      time: "9:00 AM - 4:00 PM",
      venue: "Main Auditorium & Science Block",
      category: "academic",
      organizer: "Science Department",
      participants: "All Classes",
      registrationRequired: true,
      featured: true,
      image: "/Motivation.jpg",
      highlights: ["100+ Projects", "Guest Judges", "Awards Ceremony", "Interactive Demos"]
    },
    {
      id: 2,
      title: "Annual Sports Day Championship",
      description: "Inter-house sports competition featuring athletics, team sports, and cultural performances.",
      date: "April 10, 2024",
      time: "8:00 AM - 5:00 PM",
      venue: "College Sports Ground",
      category: "sports",
      organizer: "Sports Department",
      participants: "All Students",
      registrationRequired: true,
      featured: true,
      image: "/Dahi Handi Event.jpeg",
      highlights: ["20+ Sports Events", "House Competitions", "Prize Distribution", "Cultural Show"]
    },
    {
      id: 3,
      title: "Cultural Festival - Dnyan Mahotsav",
      description: "Annual cultural celebration featuring dance, music, drama, and art competitions.",
      date: "April 20, 2024",
      time: "6:00 PM - 10:00 PM",
      venue: "Main Auditorium",
      category: "cultural",
      organizer: "Cultural Committee",
      participants: "All Students",
      registrationRequired: true,
      featured: false,
      image: "/College Prachyarayaa.jpeg",
      highlights: ["Dance Competition", "Musical Performances", "Drama Festival", "Art Exhibition"]
    },
    {
      id: 4,
      title: "Parent-Teacher Conference",
      description: "Important meeting to discuss student progress and academic planning for the upcoming term.",
      date: "March 20, 2024",
      time: "10:00 AM - 2:00 PM",
      venue: "All Classrooms",
      category: "academic",
      organizer: "Academic Office",
      participants: "Parents & Teachers",
      registrationRequired: false,
      featured: false,
      image: "/College  image 01.jpeg",
      highlights: ["Individual Meetings", "Progress Reports", "Academic Guidance", "Q&A Sessions"]
    },
    {
      id: 5,
      title: "Mathematics Olympiad",
      description: "Inter-college mathematics competition to promote problem-solving skills and mathematical thinking.",
      date: "May 5, 2024",
      time: "10:00 AM - 1:00 PM",
      venue: "Examination Hall",
      category: "academic",
      organizer: "Mathematics Department",
      participants: "Classes 9-12",
      registrationRequired: true,
      featured: false,
      image: "/College Infrastructure.jpeg",
      highlights: ["Problem Solving", "Cash Prizes", "Certificates", "College Recognition"]
    },
    {
      id: 6,
      title: "Environmental Awareness Week",
      description: "Week-long program focusing on environmental conservation and sustainable practices.",
      date: "June 1-7, 2024",
      time: "Various Times",
      venue: "College Campus",
      category: "social",
      organizer: "Environmental Club",
      participants: "All Students",
      registrationRequired: false,
      featured: false,
      image: "/College surrounding.jpeg",
      highlights: ["Tree Plantation", "Clean Campus Drive", "Awareness Sessions", "Eco Projects"]
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: "Republic Day Celebration 2024",
      description: "Patriotic celebration with flag hoisting ceremony and cultural programs.",
      date: "January 26, 2024",
      venue: "College Ground",
      category: "national",
      images: 45,
      participants: 800
    },
    {
      id: 8,
      title: "Annual Function 2023",
      description: "Grand celebration marking the college's achievements and student performances.",
      date: "December 15, 2023",
      venue: "Main Auditorium",
      category: "cultural",
      images: 120,
      participants: 1200
    },
    {
      id: 9,
      title: "Science Model Competition",
      description: "Students presented innovative working models in science and technology.",
      date: "November 20, 2023",
      venue: "Science Block",
      category: "academic",
      images: 78,
      participants: 200
    }
  ];

  const categories = [
    { id: "all", label: "All Events", icon: Calendar, color: "text-college-navy" },
    { id: "academic", label: "Academic", icon: BookOpen, color: "text-blue-600" },
    { id: "sports", label: "Sports", icon: Trophy, color: "text-green-600" },
    { id: "cultural", label: "Cultural", icon: Music, color: "text-purple-600" },
    { id: "social", label: "Social", icon: Users, color: "text-orange-600" }
  ];

  const getEventIcon = (category: string) => {
    switch (category) {
      case 'academic': return BookOpen;
      case 'sports': return Trophy;
      case 'cultural': return Music;
      case 'social': return Users;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'sports': return 'bg-green-100 text-green-800';
      case 'cultural': return 'bg-purple-100 text-purple-800';
      case 'social': return 'bg-orange-100 text-orange-800';
      case 'national': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredEvents = (category: string) => {
    return category === "all" ? upcomingEvents : upcomingEvents.filter(event => event.category === category);
  };

  return (
    <div className="min-h-screen bg-college-beige">
      {/* Hero Section */}
      <div className="bg-college-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-college-gold p-4 rounded-full">
              <Calendar className="h-10 w-10 text-college-navy" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-merriweather mb-4">
            College Events
          </h1>
          <p className="text-xl text-college-gold mb-6 max-w-3xl mx-auto">
            Stay updated with all the exciting events and activities at Lilabai Tulshiramji Dhokane Senior College
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{upcomingEvents.length} Upcoming Events</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Open to All</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>Featured Events</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Events */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-college-navy font-merriweather mb-8 text-center">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event) => {
              const Icon = getEventIcon(event.category);
              return (
                <Card key={event.id} className="overflow-hidden border-college-gold/20 hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(event.category)}>
                        <Icon className="h-3 w-3 mr-1" />
                        {event.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-college-gold text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-college-navy font-merriweather">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-college-gold" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-college-gold" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-college-gold" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-college-gold" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">Event Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="bg-college-navy hover:bg-college-navy/90 flex-1">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      {event.registrationRequired && (
                        <Button variant="outline" className="border-college-gold text-college-navy">
                          Register
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* All Events with Filters */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-college-gold/20 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger 
                  key={category.id}
                  value={category.id} 
                  className="data-[state=active]:bg-college-navy data-[state=active]:text-white"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredEvents(category.id).map((event) => {
                  const Icon = getEventIcon(event.category);
                  return (
                    <Card key={event.id} className="border-college-gold/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg text-college-navy font-merriweather line-clamp-2">
                            {event.title}
                          </CardTitle>
                          <Badge className={getCategoryColor(event.category)}>
                            <Icon className="h-3 w-3 mr-1" />
                            {event.category}
                          </Badge>
                        </div>
                        <CardDescription className="line-clamp-3">
                          {event.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-college-gold" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-college-gold" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-college-gold" />
                            <span>{event.venue}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-college-gold" />
                            <span>{event.participants}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            Details
                          </Button>
                          {event.registrationRequired && (
                            <Button size="sm" className="bg-college-gold text-white hover:bg-college-gold/90">
                              Register
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Past Events */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-college-navy font-merriweather mb-8 text-center">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="border-college-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-college-navy font-merriweather">
                      {event.title}
                    </CardTitle>
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    View Gallery ({event.images} photos)
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Submission */}
        <div className="mt-16 bg-gradient-to-r from-college-navy to-college-navy/90 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold font-merriweather mb-4">
            Organize an Event
          </h2>
          <p className="text-college-gold mb-6 max-w-2xl mx-auto">
            Have an idea for a college event? We encourage student-led initiatives and club activities. 
            Submit your event proposal for review and approval.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-college-gold text-white hover:bg-college-gold/90">
              <FileText className="h-4 w-4 mr-2" />
              Submit Proposal
            </Button>
            <Button variant="outline" className="border-college-gold text-college-gold hover:bg-college-gold hover:text-white">
              Event Guidelines
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
