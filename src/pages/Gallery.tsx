import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Calendar, MapPin, Users, Eye, Download, Share2 } from "lucide-react";

const Gallery = () => {
  const galleryImages = [
    // Infrastructure Category
    {
      id: 1,
      src: "/College  image 01.jpeg",
      title: "College Main Building",
      description: "The beautiful main building of Lilabai Tulshiramji Dhokane Senior College showcasing our heritage architecture",
      category: "infrastructure",
      date: "2024",
      location: "Main Campus",
      views: 245,
      tags: ["building", "architecture", "campus", "heritage"]
    },
    {
      id: 2,
      src: "/College Infrastructure.jpeg",
      title: "College Infrastructure",
      description: "Modern infrastructure facilities providing excellent learning environment for students",
      category: "infrastructure",
      date: "2024",
      location: "College Campus",
      views: 189,
      tags: ["infrastructure", "facilities", "modern", "campus"]
    },
    {
      id: 3,
      src: "/College Office.jpeg",
      title: "Administrative Office",
      description: "Well-organized administrative office ensuring smooth college operations and student services",
      category: "infrastructure",
      date: "2024",
      location: "Administration Block",
      views: 156,
      tags: ["office", "administration", "services", "management"]
    },
    {
      id: 4,
      src: "/College PlayGround.jpeg",
      title: "College Playground",
      description: "Spacious playground for various sports activities and physical education programs",
      category: "sports",
      date: "2024",
      location: "Sports Ground",
      views: 321,
      tags: ["playground", "sports", "physical education", "activities"]
    },
    {
      id: 5,
      src: "/College Prachyarayaa.jpeg",
      title: "College Assembly Hall",
      description: "Traditional assembly hall where important college functions and ceremonies take place",
      category: "infrastructure",
      date: "2024",
      location: "Assembly Hall",
      views: 198,
      tags: ["assembly", "functions", "ceremonies", "traditional"]
    },
    {
      id: 6,
      src: "/College surrounding.jpeg",
      title: "College Surroundings",
      description: "Beautiful natural surroundings of the college providing a peaceful learning environment",
      category: "infrastructure",
      date: "2024",
      location: "Campus Grounds",
      views: 276,
      tags: ["surroundings", "nature", "peaceful", "environment"]
    },
    {
      id: 7,
      src: "/College truties  Lilabai Dhokne.jfif",
      title: "College Founder - Lilabai Dhokane",
      description: "Tribute to our revered founder Late Smt. Lilabai Tulshiramji Dhokane",
      category: "heritage",
      date: "Historical",
      location: "Memorial Hall",
      views: 432,
      tags: ["founder", "tribute", "heritage", "history", "lilabai dhokane"]
    },
    {
      id: 8,
      src: "/College truties 01.jpeg",
      title: "College Trustees",
      description: "Honoring the dedicated trustees who have contributed to the college's growth and development",
      category: "heritage",
      date: "2024",
      location: "Trust Office",
      views: 187,
      tags: ["trustees", "leadership", "contribution", "development"]
    },
    {
      id: 9,
      src: "/Dahi Handi Event.jpeg",
      title: "Dahi Handi Celebration",
      description: "Students celebrating the traditional Dahi Handi festival with enthusiasm and cultural pride",
      category: "events",
      date: "August 2024",
      location: "College Grounds",
      views: 567,
      tags: ["dahi handi", "festival", "tradition", "cultural", "celebration"]
    },
    {
      id: 10,
      src: "/Motivation.jpg",
      title: "Motivational Session",
      description: "Inspiring motivational session for students to achieve their academic and career goals",
      category: "academics",
      date: "2024",
      location: "Auditorium",
      views: 298,
      tags: ["motivation", "inspiration", "goals", "career", "guidance"]
    },
    {
      id: 11,
      src: "/WhatsApp Image 2025-03-26 at 9.42.52 AM (2).jpeg",
      title: "College Activities",
      description: "Students engaged in various academic and extracurricular activities",
      category: "academics",
      date: "March 2025",
      location: "College Campus",
      views: 234,
      tags: ["activities", "students", "academic", "extracurricular"]
    },
    {
      id: 12,
      src: "/WhatsApp Image 2025-08-10 at 20.37.11_d2e220cf.jpg",
      title: "Recent College Event",
      description: "Recent college event showcasing student participation and college spirit",
      category: "events",
      date: "August 2025",
      location: "College Campus",
      views: 189,
      tags: ["recent", "event", "participation", "spirit"]
    },
    // Existing images from before
    {
      id: 13,
      src: "/gallery-lab.jpg",
      title: "Science Laboratory",
      description: "Students conducting chemistry experiments in our well-equipped laboratory",
      category: "academics",
      date: "2024",
      location: "Science Block",
      views: 345,
      tags: ["chemistry", "laboratory", "experiments", "science"]
    },
    {
      id: 14,
      src: "/gallery-library.jpg",
      title: "College Library",
      description: "Students studying in our peaceful and resourceful library environment",
      category: "academics",
      date: "2024",
      location: "Main Building",
      views: 289,
      tags: ["library", "study", "books", "learning"]
    },
    {
      id: 15,
      src: "/gallery-event.jpg",
      title: "Cultural Festival",
      description: "Students performing traditional dance at our vibrant cultural celebration",
      category: "events",
      date: "2024",
      location: "Main Auditorium",
      views: 532,
      tags: ["cultural", "dance", "festival", "performance"]
    },
    {
      id: 16,
      src: "/hero-college.jpg",
      title: "College Campus View",
      description: "Beautiful panoramic view of our historic college building and green campus",
      category: "infrastructure",
      date: "2024",
      location: "Main Campus",
      views: 421,
      tags: ["campus", "panoramic", "building", "heritage"]
    }
  ];

  const categories = [
    { id: "all", label: "All Photos", count: galleryImages.length },
    { id: "infrastructure", label: "Infrastructure", count: galleryImages.filter(img => img.category === "infrastructure").length },
    { id: "academics", label: "Academics", count: galleryImages.filter(img => img.category === "academics").length },
    { id: "events", label: "Events", count: galleryImages.filter(img => img.category === "events").length },
    { id: "sports", label: "Sports", count: galleryImages.filter(img => img.category === "sports").length },
    { id: "heritage", label: "Heritage", count: galleryImages.filter(img => img.category === "heritage").length },
  ];

  const filteredImages = (category: string) => {
    return category === "all" ? galleryImages : galleryImages.filter(img => img.category === category);
  };

  return (
    <div className="min-h-screen bg-college-beige">
      {/* Hero Section */}
      <div className="bg-college-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-college-gold p-4 rounded-full">
              <Camera className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-merriweather mb-4">
            College Gallery
          </h1>
          <p className="text-xl text-college-gold mb-6 max-w-3xl mx-auto">
            Explore the vibrant life at Lilabai Tulshiramji Dhokane Senior College through our photo gallery
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              <span>{galleryImages.length} Photos</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Student Life</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Campus Moments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-college-gold/20 mb-8">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id} 
                className="data-[state=active]:bg-college-navy data-[state=active]:text-white relative"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages(category.id).map((image) => (
                  <Card key={image.id} className="group overflow-hidden border-college-gold/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                          <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge 
                          variant="secondary" 
                          className={`
                            ${image.category === 'academics' ? 'bg-blue-100 text-blue-800' : ''}
                            ${image.category === 'events' ? 'bg-purple-100 text-purple-800' : ''}
                            ${image.category === 'sports' ? 'bg-green-100 text-green-800' : ''}
                            ${image.category === 'infrastructure' ? 'bg-gray-100 text-gray-800' : ''}
                          `}
                        >
                          {image.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        <Eye className="h-3 w-3" />
                        <span>{image.views}</span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-college-navy font-merriweather mb-2 line-clamp-1">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {image.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{image.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <MapPin className="h-3 w-3" />
                          <span>{image.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {image.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Featured Gallery Stats */}
        <div className="mt-16 bg-white rounded-lg border border-college-gold/20 p-8">
          <h2 className="text-2xl font-bold text-college-navy font-merriweather text-center mb-8">
            Gallery Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-college-navy p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-college-navy">{galleryImages.length}+</h3>
              <p className="text-gray-600">Total Photos</p>
            </div>
            <div className="text-center">
              <div className="bg-college-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-college-navy">500+</h3>
              <p className="text-gray-600">Students Featured</p>
            </div>
            <div className="text-center">
              <div className="bg-college-navy p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-college-navy">50+</h3>
              <p className="text-gray-600">Events Covered</p>
            </div>
            <div className="text-center">
              <div className="bg-college-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-college-navy">10K+</h3>
              <p className="text-gray-600">Total Views</p>
            </div>
          </div>
        </div>

        {/* Upload Section for Admin */}
        <div className="mt-12 bg-gradient-to-r from-college-navy to-college-navy/90 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold font-merriweather mb-4">
            Share Your College Memories
          </h2>
          <p className="text-college-gold mb-6 max-w-2xl mx-auto">
            Have photos from college events or activities? We'd love to feature them in our gallery! 
            Contact the admin to submit your photos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-secondary shadow-gold hover-bounce">
              <Camera className="h-4 w-4 mr-2" />
              Submit Photos
            </Button>
            <Button variant="outline" className="btn-outline-secondary">
              Photo Guidelines
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
