import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Download, User, BookOpen, Bell, GraduationCap } from "lucide-react";

const DashboardStudent = () => {
  return (
    <div className="min-h-screen bg-college-beige">
      {/* Header */}
      <div className="bg-college-navy text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="bg-college-gold p-3 rounded-full">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-merriweather">Student Dashboard</h1>
              <p className="text-college-gold">Welcome back, Rajesh Sharma</p>
              <p className="text-sm opacity-90">Roll No: 2024SC001 | Class: 12th Science</p>
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
                <Calendar className="h-4 w-4" />
                Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-college-navy mb-2">92%</div>
              <Progress value={92} className="mb-2" />
              <p className="text-sm text-gray-600">186 out of 202 days</p>
            </CardContent>
          </Card>
          
          <Card className="border-college-gold/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-college-navy flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Overall Grade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-college-gold mb-2">A-</div>
              <Progress value={85} className="mb-2" />
              <p className="text-sm text-gray-600">85.4% average</p>
            </CardContent>
          </Card>
          
          <Card className="border-college-gold/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-college-navy flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Next Exam
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold text-college-navy">Mathematics</div>
              <p className="text-sm text-gray-600">March 15, 2024</p>
              <Badge variant="outline" className="mt-2 text-xs">3 days left</Badge>
            </CardContent>
          </Card>

          <Card className="border-college-gold/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-college-navy flex items-center gap-2">
                <Bell className="h-4 w-4" />
                New Notices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600 mb-2">3</div>
              <p className="text-sm text-gray-600">Unread notifications</p>
              <Button variant="outline" size="sm" className="btn-minimal mt-2 text-xs">View All</Button>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="grades" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-college-gold/20">
            <TabsTrigger value="grades" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Grades</TabsTrigger>
            <TabsTrigger value="attendance" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Attendance</TabsTrigger>
            <TabsTrigger value="timetable" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Timetable</TabsTrigger>
            <TabsTrigger value="notices" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Notices</TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="grades" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">Academic Performance</CardTitle>
                <CardDescription>Your latest exam and assignment results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { subject: "Mathematics", grade: "A", marks: "89/100", date: "March 10, 2024", teacher: "Dr. Priya Sharma" },
                    { subject: "Physics", grade: "B+", marks: "82/100", date: "March 8, 2024", teacher: "Prof. Amit Kumar" },
                    { subject: "Chemistry", grade: "A-", marks: "85/100", date: "March 5, 2024", teacher: "Dr. Sunita Patil" },
                    { subject: "English", grade: "A", marks: "91/100", date: "March 3, 2024", teacher: "Mrs. Kavita Singh" },
                    { subject: "Computer Science", grade: "A+", marks: "95/100", date: "March 1, 2024", teacher: "Mr. Ravi Mehta" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-college-gold/10 rounded-lg hover:bg-college-beige/50 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-medium text-college-navy">{item.subject}</h3>
                        <p className="text-sm text-gray-600">{item.teacher}</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                      <div className="text-center">
                        <Badge 
                          variant={item.grade.includes('A') ? 'default' : item.grade.includes('B') ? 'secondary' : 'outline'}
                          className={item.grade.includes('A') ? 'bg-college-gold text-white' : ''}
                        >
                          {item.grade}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">{item.marks}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="attendance" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">Attendance Records</CardTitle>
                <CardDescription>Subject-wise attendance breakdown for current semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { subject: "Mathematics", present: 45, total: 48, percentage: 94, teacher: "Dr. Priya Sharma" },
                    { subject: "Physics", present: 42, total: 46, percentage: 91, teacher: "Prof. Amit Kumar" },
                    { subject: "Chemistry", present: 44, total: 47, percentage: 94, teacher: "Dr. Sunita Patil" },
                    { subject: "English", present: 46, total: 48, percentage: 96, teacher: "Mrs. Kavita Singh" },
                    { subject: "Computer Science", present: 47, total: 48, percentage: 98, teacher: "Mr. Ravi Mehta" },
                  ].map((item, index) => (
                    <div key={index} className="p-4 border border-college-gold/10 rounded-lg hover:bg-college-beige/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-medium text-college-navy">{item.subject}</h3>
                          <p className="text-sm text-gray-600">{item.teacher}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-college-navy">{item.percentage}%</div>
                          <div className={`text-sm ${item.percentage >= 95 ? 'text-green-600' : item.percentage >= 90 ? 'text-blue-600' : item.percentage >= 75 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {item.percentage >= 95 ? 'Excellent' : item.percentage >= 90 ? 'Very Good' : item.percentage >= 75 ? 'Good' : 'Needs Improvement'}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Progress value={item.percentage} className="flex-1" />
                        <span className="text-sm text-gray-600">{item.present}/{item.total} classes</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="timetable" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">Weekly Timetable</CardTitle>
                <CardDescription>Your class schedule for current semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-college-navy text-white">
                        <th className="border border-college-gold/20 p-3 text-left font-merriweather">Time</th>
                        <th className="border border-college-gold/20 p-3 text-left font-merriweather">Monday</th>
                        <th className="border border-college-gold/20 p-3 text-left font-merriweather">Tuesday</th>
                        <th className="border border-college-gold/20 p-3 text-left font-merriweather">Wednesday</th>
                        <th className="border border-college-gold/20 p-3 text-left font-merriweather">Thursday</th>
                        <th className="border border-college-gold/20 p-3 text-left font-merriweather">Friday</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { time: "8:00 - 9:00", classes: ["Mathematics", "Physics", "Chemistry", "Mathematics", "English"] },
                        { time: "9:00 - 10:00", classes: ["Physics", "Chemistry", "English", "Physics", "Computer Sci."] },
                        { time: "10:00 - 10:15", classes: ["Break", "Break", "Break", "Break", "Break"] },
                        { time: "10:15 - 11:15", classes: ["Chemistry", "English", "Mathematics", "Chemistry", "Physics"] },
                        { time: "11:15 - 12:15", classes: ["English", "Mathematics", "Physics", "Computer Sci.", "Chemistry"] },
                        { time: "12:15 - 1:00", classes: ["Lunch Break", "Lunch Break", "Lunch Break", "Lunch Break", "Lunch Break"] },
                        { time: "1:00 - 2:00", classes: ["Computer Sci.", "Lab", "Lab", "English", "Mathematics"] },
                        { time: "2:00 - 3:00", classes: ["Lab", "Computer Sci.", "Sports", "Lab", "Lab"] },
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-college-beige/30"}>
                          <td className="border border-college-gold/20 p-3 font-medium text-college-navy">{row.time}</td>
                          {row.classes.map((subject, dayIndex) => (
                            <td key={dayIndex} className={`border border-college-gold/20 p-3 ${
                              subject.includes('Break') ? 'bg-college-gold/20 text-center font-medium' : 
                              subject === 'Lab' ? 'bg-blue-50 text-blue-800' :
                              subject === 'Sports' ? 'bg-green-50 text-green-800' : 'text-gray-700'
                            }`}>
                              {subject}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notices" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">Important Notices</CardTitle>
                <CardDescription>Latest announcements and updates from the college</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Mid-term Examinations Schedule",
                      content: "Mid-term examinations for Class 12th Science will be conducted from March 20-30, 2024. Detailed schedule has been uploaded to the student portal.",
                      date: "March 12, 2024",
                      priority: "high",
                      author: "Academic Office"
                    },
                    {
                      title: "Extended Library Hours",
                      content: "Library will remain open on weekends from 8 AM to 8 PM during exam period to facilitate student preparation.",
                      date: "March 10, 2024",
                      priority: "medium",
                      author: "Library Department"
                    },
                    {
                      title: "Annual Sports Day 2024",
                      content: "Annual Sports Day will be celebrated on April 15, 2024. Registration for various events is now open. Contact sports department for details.",
                      date: "March 8, 2024",
                      priority: "low",
                      author: "Sports Department"
                    },
                    {
                      title: "Science Exhibition",
                      content: "Inter-college Science Exhibition will be held on March 25, 2024. Students interested in participating should submit their projects by March 18.",
                      date: "March 6, 2024",
                      priority: "medium",
                      author: "Science Department"
                    },
                  ].map((notice, index) => (
                    <div key={index} className={`p-4 border rounded-lg transition-all hover:shadow-md ${
                      notice.priority === 'high' ? 'border-red-200 bg-red-50' : 
                      notice.priority === 'medium' ? 'border-yellow-200 bg-yellow-50' : 
                      'border-blue-200 bg-blue-50'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-college-navy font-merriweather">{notice.title}</h3>
                        <Badge variant={
                          notice.priority === 'high' ? 'destructive' : 
                          notice.priority === 'medium' ? 'default' : 
                          'secondary'
                        }>
                          {notice.priority === 'high' ? 'Urgent' : notice.priority === 'medium' ? 'Important' : 'Info'}
                        </Badge>
                      </div>
                      <p className="text-gray-700 mb-3">{notice.content}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>By: {notice.author}</span>
                        <span>{notice.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">Documents & Downloads</CardTitle>
                <CardDescription>Access your academic documents and important files</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Report Card - Term 1", type: "PDF", size: "245 KB", date: "Jan 15, 2024" },
                    { name: "ID Card", type: "PDF", size: "156 KB", date: "Jun 20, 2023" },
                    { name: "Fee Receipt", type: "PDF", size: "89 KB", date: "Mar 1, 2024" },
                    { name: "Academic Calendar", type: "PDF", size: "423 KB", date: "Apr 1, 2023" },
                    { name: "Syllabus - Class 12", type: "PDF", size: "567 KB", date: "Apr 1, 2023" },
                    { name: "Character Certificate", type: "PDF", size: "123 KB", date: "Jan 10, 2024" },
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-college-gold/10 rounded-lg hover:bg-college-beige/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded">
                          <BookOpen className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-college-navy">{doc.name}</h3>
                          <p className="text-sm text-gray-600">{doc.type} • {doc.size} • {doc.date}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="btn-outline-secondary btn-minimal">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardStudent;
