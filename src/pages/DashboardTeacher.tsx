import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, BookOpen, Calendar, FileText, PlusCircle, Upload, UserCheck } from "lucide-react";

const DashboardTeacher = () => {
  return (
    <div className="min-h-screen bg-college-beige">
      {/* Header */}
      <div className="bg-college-navy text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="bg-college-gold p-3 rounded-full">
              <UserCheck className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-merriweather">Teacher Dashboard</h1>
              <p className="text-college-gold">Welcome, Dr. Priya Sharma</p>
              <p className="text-sm opacity-90">Department: Mathematics | Employee ID: TCH001</p>
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
              <div className="text-3xl font-bold text-college-navy mb-2">247</div>
              <p className="text-sm text-gray-600">Across 6 classes</p>
            </CardContent>
          </Card>
          
          <Card className="border-college-gold/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-college-navy flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Classes Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-college-gold mb-2">5</div>
              <p className="text-sm text-gray-600">Next: 10th A at 10:00 AM</p>
            </CardContent>
          </Card>
          
          <Card className="border-college-gold/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-college-navy flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Pending Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
              <p className="text-sm text-gray-600">Assignments to grade</p>
            </CardContent>
          </Card>

          <Card className="border-college-gold/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-college-navy flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold text-college-navy">Math Exam</div>
              <p className="text-sm text-gray-600">Friday, March 15</p>
              <Badge variant="outline" className="mt-2 text-xs">2 days left</Badge>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="classes" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-college-gold/20">
            <TabsTrigger value="classes" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">My Classes</TabsTrigger>
            <TabsTrigger value="attendance" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Attendance</TabsTrigger>
            <TabsTrigger value="grades" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Grades</TabsTrigger>
            <TabsTrigger value="materials" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Materials</TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-college-navy data-[state=active]:text-white">Schedule</TabsTrigger>
          </TabsList>
          
          <TabsContent value="classes" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">My Classes</CardTitle>
                <CardDescription>Overview of all classes you're teaching this semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { class: "10th A", subject: "Mathematics", students: 42, room: "Room 201", time: "10:00 - 11:00", nextClass: "Today" },
                    { class: "10th B", subject: "Mathematics", students: 38, room: "Room 202", time: "11:15 - 12:15", nextClass: "Today" },
                    { class: "11th Science", subject: "Advanced Math", students: 45, room: "Room 301", time: "1:00 - 2:00", nextClass: "Tomorrow" },
                    { class: "12th Science A", subject: "Calculus", students: 40, room: "Room 302", time: "2:00 - 3:00", nextClass: "Tomorrow" },
                    { class: "12th Science B", subject: "Calculus", students: 43, room: "Room 303", time: "9:00 - 10:00", nextClass: "Friday" },
                    { class: "9th A", subject: "Basic Math", students: 39, room: "Room 101", time: "3:00 - 4:00", nextClass: "Monday" },
                  ].map((classInfo, index) => (
                    <Card key={index} className="border-college-gold/10 hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg text-college-navy">{classInfo.class}</CardTitle>
                          <Badge variant={classInfo.nextClass === 'Today' ? 'default' : 'secondary'}>
                            {classInfo.nextClass}
                          </Badge>
                        </div>
                        <CardDescription>{classInfo.subject}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span>{classInfo.students} students</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-gray-500" />
                            <span>{classInfo.room}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>{classInfo.time}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline" className="flex-1">View Details</Button>
                          <Button size="sm" className="bg-college-navy hover:bg-college-navy/90">Take Attendance</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="attendance" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">Attendance Management</CardTitle>
                <CardDescription>Mark attendance for your classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Select>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Select Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10a">10th A - Mathematics</SelectItem>
                        <SelectItem value="10b">10th B - Mathematics</SelectItem>
                        <SelectItem value="11sci">11th Science - Advanced Math</SelectItem>
                        <SelectItem value="12scia">12th Science A - Calculus</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input type="date" className="w-[200px]" defaultValue="2024-03-12" />
                    <Button className="bg-college-navy hover:bg-college-navy/90">Load Class</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium text-college-navy mb-4">10th A - Mathematics (42 students)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: "Aarav Sharma", rollNo: "001", status: "present" },
                        { name: "Diya Patel", rollNo: "002", status: "present" },
                        { name: "Arjun Kumar", rollNo: "003", status: "absent" },
                        { name: "Sneha Singh", rollNo: "004", status: "present" },
                        { name: "Rahul Mehta", rollNo: "005", status: "late" },
                        { name: "Priya Joshi", rollNo: "006", status: "present" },
                      ].map((student, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-college-gold/10 rounded-lg">
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-sm text-gray-600">Roll: {student.rollNo}</p>
                          </div>
                          <Select defaultValue={student.status}>
                            <SelectTrigger className="w-[100px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="present">Present</SelectItem>
                              <SelectItem value="absent">Absent</SelectItem>
                              <SelectItem value="late">Late</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t">
                      <div className="text-sm text-gray-600">
                        Present: 4 | Absent: 1 | Late: 1 | Total: 6
                      </div>
                      <Button className="bg-college-gold text-white hover:bg-college-gold/90">
                        Save Attendance
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="grades" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">Grade Management</CardTitle>
                <CardDescription>Enter and manage student grades for assignments and exams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Select>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Select Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10a">10th A - Mathematics</SelectItem>
                        <SelectItem value="10b">10th B - Mathematics</SelectItem>
                        <SelectItem value="11sci">11th Science - Advanced Math</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Assessment Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="assignment">Assignment</SelectItem>
                        <SelectItem value="test">Unit Test</SelectItem>
                        <SelectItem value="exam">Term Exam</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Assessment Name" className="w-[200px]" />
                    <Button className="bg-college-navy hover:bg-college-navy/90">Load Assessment</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium text-college-navy mb-4">Unit Test 2 - Algebra (Max: 100)</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Aarav Sharma", rollNo: "001", grade: "89", outOf: "100" },
                        { name: "Diya Patel", rollNo: "002", grade: "92", outOf: "100" },
                        { name: "Arjun Kumar", rollNo: "003", grade: "", outOf: "100" },
                        { name: "Sneha Singh", rollNo: "004", grade: "87", outOf: "100" },
                        { name: "Rahul Mehta", rollNo: "005", grade: "75", outOf: "100" },
                        { name: "Priya Joshi", rollNo: "006", grade: "94", outOf: "100" },
                      ].map((student, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-college-gold/10 rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium">{student.name}</p>
                            <p className="text-sm text-gray-600">Roll: {student.rollNo}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Input 
                              type="number" 
                              placeholder="Grade" 
                              className="w-20" 
                              defaultValue={student.grade}
                              max={student.outOf}
                            />
                            <span className="text-sm text-gray-600">/ {student.outOf}</span>
                            <Badge variant={
                              student.grade ? 
                                (parseInt(student.grade) >= 90 ? 'default' : 
                                 parseInt(student.grade) >= 75 ? 'secondary' : 'outline') : 
                                'outline'
                            }>
                              {student.grade ? 
                                (parseInt(student.grade) >= 90 ? 'A' : 
                                 parseInt(student.grade) >= 75 ? 'B' : 
                                 parseInt(student.grade) >= 60 ? 'C' : 'D') : 
                                'Pending'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t">
                      <div className="text-sm text-gray-600">
                        Graded: 5 | Pending: 1 | Class Average: 87.4%
                      </div>
                      <Button className="bg-college-gold text-white hover:bg-college-gold/90">
                        Save Grades
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="materials" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">Course Materials</CardTitle>
                <CardDescription>Upload and manage study materials for your students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Button className="bg-college-navy hover:bg-college-navy/90">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add New Material
                    </Button>
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Files
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { 
                        title: "Chapter 5: Quadratic Equations", 
                        type: "PDF", 
                        size: "2.4 MB", 
                        class: "10th A, 10th B", 
                        uploaded: "March 10, 2024",
                        downloads: 45
                      },
                      { 
                        title: "Practice Problems - Algebra", 
                        type: "PDF", 
                        size: "1.8 MB", 
                        class: "11th Science", 
                        uploaded: "March 8, 2024",
                        downloads: 32
                      },
                      { 
                        title: "Calculus Video Lecture", 
                        type: "Video", 
                        size: "125 MB", 
                        class: "12th Science A, B", 
                        uploaded: "March 5, 2024",
                        downloads: 78
                      },
                      { 
                        title: "Assignment 3 - Solutions", 
                        type: "PDF", 
                        size: "892 KB", 
                        class: "10th A", 
                        uploaded: "March 3, 2024",
                        downloads: 28
                      },
                    ].map((material, index) => (
                      <Card key={index} className="border-college-gold/10 hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base text-college-navy">{material.title}</CardTitle>
                          <CardDescription>{material.class}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex justify-between">
                              <span>Type:</span>
                              <Badge variant="outline">{material.type}</Badge>
                            </div>
                            <div className="flex justify-between">
                              <span>Size:</span>
                              <span>{material.size}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Uploaded:</span>
                              <span>{material.uploaded}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Downloads:</span>
                              <span className="font-medium">{material.downloads}</span>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" variant="outline" className="flex-1">Edit</Button>
                            <Button size="sm" variant="outline" className="flex-1">Download</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="mt-6">
            <Card className="border-college-gold/20">
              <CardHeader>
                <CardTitle className="text-college-navy font-merriweather">Teaching Schedule</CardTitle>
                <CardDescription>Your weekly teaching schedule and upcoming classes</CardDescription>
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
                        { 
                          time: "9:00 - 10:00", 
                          classes: [
                            { class: "12th Science B", room: "Room 303" },
                            { class: "10th A", room: "Room 201" },
                            { class: "11th Science", room: "Room 301" },
                            { class: "Free Period", room: "" },
                            { class: "10th B", room: "Room 202" }
                          ]
                        },
                        { 
                          time: "10:00 - 11:00", 
                          classes: [
                            { class: "10th A", room: "Room 201" },
                            { class: "12th Science A", room: "Room 302" },
                            { class: "10th B", room: "Room 202" },
                            { class: "12th Science B", room: "Room 303" },
                            { class: "11th Science", room: "Room 301" }
                          ]
                        },
                        { 
                          time: "10:00 - 10:15", 
                          classes: [
                            { class: "Break", room: "" },
                            { class: "Break", room: "" },
                            { class: "Break", room: "" },
                            { class: "Break", room: "" },
                            { class: "Break", room: "" }
                          ]
                        },
                        { 
                          time: "11:15 - 12:15", 
                          classes: [
                            { class: "10th B", room: "Room 202" },
                            { class: "11th Science", room: "Room 301" },
                            { class: "12th Science A", room: "Room 302" },
                            { class: "10th A", room: "Room 201" },
                            { class: "Free Period", room: "" }
                          ]
                        },
                        { 
                          time: "12:15 - 1:00", 
                          classes: [
                            { class: "Lunch Break", room: "" },
                            { class: "Lunch Break", room: "" },
                            { class: "Lunch Break", room: "" },
                            { class: "Lunch Break", room: "" },
                            { class: "Lunch Break", room: "" }
                          ]
                        },
                        { 
                          time: "1:00 - 2:00", 
                          classes: [
                            { class: "11th Science", room: "Room 301" },
                            { class: "Free Period", room: "" },
                            { class: "10th A", room: "Room 201" },
                            { class: "12th Science A", room: "Room 302" },
                            { class: "Faculty Meeting", room: "Staff Room" }
                          ]
                        },
                        { 
                          time: "2:00 - 3:00", 
                          classes: [
                            { class: "12th Science A", room: "Room 302" },
                            { class: "10th B", room: "Room 202" },
                            { class: "Free Period", room: "" },
                            { class: "11th Science", room: "Room 301" },
                            { class: "9th A", room: "Room 101" }
                          ]
                        },
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-college-beige/30"}>
                          <td className="border border-college-gold/20 p-3 font-medium text-college-navy">{row.time}</td>
                          {row.classes.map((classInfo, dayIndex) => (
                            <td key={dayIndex} className={`border border-college-gold/20 p-2 ${
                              classInfo.class.includes('Break') ? 'bg-college-gold/20 text-center font-medium' : 
                              classInfo.class === 'Free Period' ? 'bg-green-50 text-green-800 text-center' :
                              classInfo.class === 'Faculty Meeting' ? 'bg-blue-50 text-blue-800 text-center' : 'text-gray-700'
                            }`}>
                              <div className="font-medium">{classInfo.class}</div>
                              {classInfo.room && <div className="text-xs text-gray-500">{classInfo.room}</div>}
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
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardTeacher;
