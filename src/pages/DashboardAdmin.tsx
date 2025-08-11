import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  Bell,
  Settings,
  PlusCircle,
  Edit,
  Trash2,
  UserPlus
} from "lucide-react";

const DashboardAdmin = () => {
  return (
    <div className="min-h-screen bg-college-beige">
      {/* Header */}
      <div className="bg-college-navy text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="bg-college-gold p-3 rounded-full">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-merriweather">Admin Dashboard</h1>
              <p className="text-college-gold">Welcome, Dr. Rajesh Kulkarni (Principal)</p>
              <p className="text-sm opacity-90">Lilabai Tulshiramji Dhokane Senior College</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-college-gold/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-college-navy flex items-center gap-2">
                <Users className="h-4 w-4" />
                Total Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-college-navy mb-2">1,247</div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600">+5.2% from last year</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-college-gold/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-college-navy flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Teaching Staff
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-college-gold mb-2">64</div>
              <p className="text-sm text-gray-600">Faculty Members</p>
            </CardContent>
          </Card>
          
          <Card className="border-college-gold/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-college-navy flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Active Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-2">42</div>
              <p className="text-sm text-gray-600">Std 1-12 & Degree</p>
            </CardContent>
          </Card>

          <Card className="border-college-gold/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-college-navy flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Pending Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <p className="text-sm text-gray-600">Require attention</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-white border border-college-gold/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="students" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Students</TabsTrigger>
            <TabsTrigger value="teachers" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Teachers</TabsTrigger>
            <TabsTrigger value="academics" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Academics</TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Events</TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-college-gold/20">
                <CardHeader>
                  <CardTitle className="text-college-navy font-merriweather">Academic Performance</CardTitle>
                  <CardDescription>Overall institution performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Class 10 Board Results</span>
                        <span className="text-sm font-bold text-green-600">94.5%</span>
                      </div>
                      <Progress value={94.5} className="mb-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Class 12 Board Results</span>
                        <span className="text-sm font-bold text-green-600">91.2%</span>
                      </div>
                      <Progress value={91.2} className="mb-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Average Attendance</span>
                        <span className="text-sm font-bold text-blue-600">88.7%</span>
                      </div>
                      <Progress value={88.7} className="mb-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Parent Satisfaction</span>
                        <span className="text-sm font-bold text-college-gold">96.3%</span>
                      </div>
                      <Progress value={96.3} className="mb-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-college-gold/20">
                <CardHeader>
                  <CardTitle className="text-college-navy font-merriweather">Recent Activities</CardTitle>
                  <CardDescription>Latest events and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        activity: "New admission application received", 
                        time: "2 hours ago", 
                        type: "admission",
                        details: "Priya Sharma - Class 11 Science"
                      },
                      { 
                        activity: "Teacher leave request approved", 
                        time: "4 hours ago", 
                        type: "staff",
                        details: "Dr. Amit Kumar - Medical Leave"
                      },
                      { 
                        activity: "Event proposal submitted", 
                        time: "6 hours ago", 
                        type: "event",
                        details: "Annual Science Exhibition 2024"
                      },
                      { 
                        activity: "Fee payment reminder sent", 
                        time: "1 day ago", 
                        type: "finance",
                        details: "Class 12 - Semester 2 fees"
                      },
                      { 
                        activity: "Parent-teacher meeting scheduled", 
                        time: "2 days ago", 
                        type: "meeting",
                        details: "March 20, 2024 - All classes"
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border border-college-gold/10 rounded-lg">
                        <div className={`p-2 rounded-full ${
                          item.type === 'admission' ? 'bg-green-100' :
                          item.type === 'staff' ? 'bg-blue-100' :
                          item.type === 'event' ? 'bg-purple-100' :
                          item.type === 'finance' ? 'bg-yellow-100' :
                          'bg-gray-100'
                        }`}>
                          <Bell className={`h-3 w-3 ${
                            item.type === 'admission' ? 'text-green-600' :
                            item.type === 'staff' ? 'text-blue-600' :
                            item.type === 'event' ? 'text-purple-600' :
                            item.type === 'finance' ? 'text-yellow-600' :
                            'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-college-navy">{item.activity}</p>
                          <p className="text-xs text-gray-600">{item.details}</p>
                          <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="students" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-college-navy font-merriweather">Student Management</CardTitle>
                    <CardDescription>Manage student records and admissions</CardDescription>
                  </div>
                  <Button className="bg-college-navy hover:bg-college-navy/90">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Student
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Input placeholder="Search students..." className="max-w-sm" />
                    <select className="px-3 py-2 border border-gray-300 rounded-md">
                      <option value="">All Classes</option>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-college-navy text-white">
                        <tr>
                          <th className="text-left p-3 font-merriweather">Student ID</th>
                          <th className="text-left p-3 font-merriweather">Name</th>
                          <th className="text-left p-3 font-merriweather">Class</th>
                          <th className="text-left p-3 font-merriweather">Status</th>
                          <th className="text-left p-3 font-merriweather">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: "2024001", name: "Aarav Sharma", class: "10th A", status: "Active", attendance: 94 },
                          { id: "2024002", name: "Diya Patel", class: "12th Science", status: "Active", attendance: 96 },
                          { id: "2024003", name: "Arjun Kumar", class: "11th Commerce", status: "Active", attendance: 89 },
                          { id: "2024004", name: "Sneha Singh", class: "9th B", status: "Active", attendance: 92 },
                          { id: "2024005", name: "Rahul Mehta", class: "12th Arts", status: "Inactive", attendance: 76 },
                        ].map((student, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-college-beige/30"}>
                            <td className="p-3 font-mono text-sm">{student.id}</td>
                            <td className="p-3 font-medium">{student.name}</td>
                            <td className="p-3">{student.class}</td>
                            <td className="p-3">
                              <Badge variant={student.status === 'Active' ? 'default' : 'secondary'}>
                                {student.status}
                              </Badge>
                            </td>
                            <td className="p-3">
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  View
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="teachers" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-college-navy font-merriweather">Faculty Management</CardTitle>
                    <CardDescription>Manage teaching staff and their assignments</CardDescription>
                  </div>
                  <Button className="bg-college-navy hover:bg-college-navy/90">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Teacher
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { 
                      name: "Dr. Priya Sharma", 
                      subject: "Mathematics", 
                      experience: "15 years", 
                      classes: ["10th A", "10th B", "11th Science"],
                      qualification: "Ph.D. Mathematics"
                    },
                    { 
                      name: "Prof. Amit Kumar", 
                      subject: "Physics", 
                      experience: "12 years", 
                      classes: ["11th Science", "12th Science"],
                      qualification: "M.Sc. Physics"
                    },
                    { 
                      name: "Dr. Sunita Patil", 
                      subject: "Chemistry", 
                      experience: "18 years", 
                      classes: ["11th Science", "12th Science A"],
                      qualification: "Ph.D. Chemistry"
                    },
                    { 
                      name: "Mrs. Kavita Singh", 
                      subject: "English", 
                      experience: "10 years", 
                      classes: ["9th A", "10th A", "11th Arts"],
                      qualification: "M.A. English"
                    },
                    { 
                      name: "Mr. Ravi Mehta", 
                      subject: "Computer Science", 
                      experience: "8 years", 
                      classes: ["11th Science", "12th Science"],
                      qualification: "M.Tech. Computer Science"
                    },
                    { 
                      name: "Dr. Anita Joshi", 
                      subject: "Biology", 
                      experience: "14 years", 
                      classes: ["11th Science", "12th Science B"],
                      qualification: "Ph.D. Biology"
                    },
                  ].map((teacher, index) => (
                    <Card key={index} className="border-college-gold/10 hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base text-college-navy">{teacher.name}</CardTitle>
                        <CardDescription>{teacher.subject} • {teacher.experience}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium">Qualification:</span>
                            <p className="text-gray-600">{teacher.qualification}</p>
                          </div>
                          <div>
                            <span className="font-medium">Classes:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {teacher.classes.map((cls, clsIndex) => (
                                <Badge key={clsIndex} variant="outline" className="text-xs">
                                  {cls}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            View Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="academics" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">Academic Management</CardTitle>
                <CardDescription>Manage curriculum, exams, and academic calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-college-navy">Upcoming Exams</h3>
                    {[
                      { exam: "Unit Test 3", class: "Class 10", date: "March 20, 2024", subjects: 5 },
                      { exam: "Mid-term Exams", class: "Class 12", date: "March 25, 2024", subjects: 6 },
                      { exam: "Annual Exams", class: "Class 11", date: "April 15, 2024", subjects: 6 },
                      { exam: "Board Exams", class: "Class 10", date: "May 1, 2024", subjects: 8 },
                    ].map((exam, index) => (
                      <div key={index} className="p-4 border border-college-gold/10 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-college-navy">{exam.exam}</h4>
                            <p className="text-sm text-gray-600">{exam.class} • {exam.subjects} subjects</p>
                            <p className="text-xs text-gray-500">{exam.date}</p>
                          </div>
                          <Button size="sm" variant="outline">Manage</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-college-navy">Academic Calendar</h3>
                    <div className="space-y-3">
                      {[
                        { event: "Term 2 Begins", date: "March 15, 2024", type: "term" },
                        { event: "Parent-Teacher Meeting", date: "March 20, 2024", type: "meeting" },
                        { event: "Science Exhibition", date: "March 25, 2024", type: "event" },
                        { event: "Sports Day", date: "April 10, 2024", type: "event" },
                        { event: "Annual Function", date: "April 20, 2024", type: "event" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-college-gold/10 rounded-lg">
                          <div>
                            <p className="font-medium text-college-navy">{item.event}</p>
                            <p className="text-sm text-gray-600">{item.date}</p>
                          </div>
                          <Badge variant={
                            item.type === 'term' ? 'default' : 
                            item.type === 'meeting' ? 'secondary' : 
                            'outline'
                          }>
                            {item.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-college-navy font-merriweather">Event Management</CardTitle>
                    <CardDescription>Organize and manage college events</CardDescription>
                  </div>
                  <Button className="bg-college-navy hover:bg-college-navy/90">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Create Event
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Annual Science Exhibition",
                      date: "March 25, 2024",
                      time: "9:00 AM - 4:00 PM",
                      venue: "Main Auditorium",
                      status: "Planning",
                      participants: 150,
                      organizer: "Science Department"
                    },
                    {
                      title: "Sports Day 2024",
                      date: "April 10, 2024",
                      time: "8:00 AM - 5:00 PM",
                      venue: "College Ground",
                      status: "Confirmed",
                      participants: 800,
                      organizer: "Sports Department"
                    },
                    {
                      title: "Cultural Festival",
                      date: "April 20, 2024",
                      time: "6:00 PM - 10:00 PM",
                      venue: "Main Auditorium",
                      status: "Planning",
                      participants: 300,
                      organizer: "Cultural Committee"
                    },
                    {
                      title: "Parent-Teacher Meeting",
                      date: "March 20, 2024",
                      time: "10:00 AM - 2:00 PM",
                      venue: "Classrooms",
                      status: "Confirmed",
                      participants: 500,
                      organizer: "Academic Office"
                    },
                  ].map((event, index) => (
                    <Card key={index} className="border-college-gold/10 hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base text-college-navy">{event.title}</CardTitle>
                          <Badge variant={event.status === 'Confirmed' ? 'default' : 'secondary'}>
                            {event.status}
                          </Badge>
                        </div>
                        <CardDescription>{event.organizer}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500">Time:</span>
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500">Venue:</span>
                            <span>{event.venue}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span>{event.participants} participants</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">System Settings</CardTitle>
                <CardDescription>Configure college management system settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-college-navy">General Settings</h3>
                    <div className="space-y-3">
                      <div className="p-4 border border-college-gold/10 rounded-lg">
                        <h4 className="font-medium mb-2">College Information</h4>
                        <p className="text-sm text-gray-600">Update basic college details and contact information</p>
                        <Button size="sm" variant="outline" className="mt-2">Configure</Button>
                      </div>
                      <div className="p-4 border border-college-gold/10 rounded-lg">
                        <h4 className="font-medium mb-2">Academic Year</h4>
                        <p className="text-sm text-gray-600">Manage academic year settings and terms</p>
                        <Button size="sm" variant="outline" className="mt-2">Configure</Button>
                      </div>
                      <div className="p-4 border border-college-gold/10 rounded-lg">
                        <h4 className="font-medium mb-2">User Permissions</h4>
                        <p className="text-sm text-gray-600">Set access levels for different user roles</p>
                        <Button size="sm" variant="outline" className="mt-2">Configure</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-college-navy">System Maintenance</h3>
                    <div className="space-y-3">
                      <div className="p-4 border border-college-gold/10 rounded-lg">
                        <h4 className="font-medium mb-2">Database Backup</h4>
                        <p className="text-sm text-gray-600">Create and manage system backups</p>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline">Create Backup</Button>
                          <Button size="sm" variant="outline">Schedule</Button>
                        </div>
                      </div>
                      <div className="p-4 border border-college-gold/10 rounded-lg">
                        <h4 className="font-medium mb-2">System Updates</h4>
                        <p className="text-sm text-gray-600">Check for and install system updates</p>
                        <Button size="sm" variant="outline" className="mt-2">Check Updates</Button>
                      </div>
                      <div className="p-4 border border-college-gold/10 rounded-lg">
                        <h4 className="font-medium mb-2">Activity Logs</h4>
                        <p className="text-sm text-gray-600">View system activity and audit logs</p>
                        <Button size="sm" variant="outline" className="mt-2">View Logs</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardAdmin;
