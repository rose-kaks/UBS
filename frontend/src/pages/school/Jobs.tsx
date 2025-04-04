
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, Plus, BookOpen, Users, Briefcase, Mail, CheckCircle, XCircle, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SchoolJobs = () => {
  const { toast } = useToast();
  const [isAddingJob, setIsAddingJob] = useState(false);
  
  const activeJobs = [
    {
      id: 1,
      title: "Mathematics Teacher",
      subject: "Mathematics",
      postedDate: "Apr 1, 2023",
      schedule: "Mon, Wed, Fri 2:00 PM - 3:30 PM",
      duration: "3 months",
      gradeLevel: "9-12",
      status: "Open",
      applications: 6,
      required: "Algebra, Calculus",
      description: "Looking for an experienced mathematics teacher to conduct lessons on algebra and calculus for high school students."
    },
    {
      id: 2,
      title: "English Literature Instructor",
      subject: "English Literature",
      postedDate: "Apr 3, 2023",
      schedule: "Tues, Thurs 1:00 PM - 2:30 PM",
      duration: "4 months",
      gradeLevel: "8-10",
      status: "Open",
      applications: 4,
      required: "Literature, Poetry Analysis",
      description: "Seeking an English literature instructor to teach Literature and poetry analysis to middle and high school students."
    }
  ];
  
  const filledJobs = [
    {
      id: 3,
      title: "Science Lab Assistant",
      subject: "Science",
      postedDate: "Mar 15, 2023",
      schedule: "Mon, Wed 3:00 PM - 4:30 PM",
      duration: "6 months",
      gradeLevel: "10-12",
      status: "Filled",
      filledBy: "Meera Joshi",
      required: "Chemistry, Biology",
      description: "Needed a science lab assistant to help with chemistry and biology experiments for high school students."
    }
  ];
  
  const applications = [
    {
      id: 1,
      jobTitle: "Mathematics Teacher",
      applicant: {
        name: "Dr. Akash Verma",
        email: "abc@example.com",
        avatar: "https://th.bing.com/th/id/OIP.o7M33HWeWOnhRjrjP0oRKwAAAA?w=141&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      },
      appliedDate: "Apr 2, 2023",
      experience: "12 years",
      status: "Under Review"
    },
    {
      id: 2,
      jobTitle: "Mathematics Teacher",
      applicant: {
        name: "Ms. Vandana Sharma",
        email: "abcd@example.com",
        avatar: "https://th.bing.com/th/id/OIP.JoqvlmymwKeuAG3MSxqWBQHaK6?w=121&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      },
      appliedDate: "Apr 2, 2023",
      experience: "8 years",
      status: "Under Review"
    },
    {
      id: 3,
      jobTitle: "English Literature Instructor",
      applicant: {
        name: "Rohan Patil",
        email: "abcde@example.com",
        avatar: "data:image/jpeg;base64,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"
      },
      appliedDate: "Apr 4, 2023",
      experience: "10 years",
      status: "Under Review"
    }
  ];
  
  const handleAddJob = () => {
    toast({
      title: "Job Posted",
      description: "The volunteer position has been successfully posted.",
    });
    
    setIsAddingJob(false);
  };
  
  const handleApproveApplication = (id: number) => {
    toast({
      title: "Application Approved",
      description: "The volunteer has been selected for the position.",
    });
  };
  
  const handleRejectApplication = (id: number) => {
    toast({
      title: "Application Rejected",
      description: "The application has been rejected.",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Jobs & Opportunities</h1>
            <p className="text-muted-foreground">
              Post and manage volunteer teaching positions
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setIsAddingJob(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Post New Job
            </Button>
          </div>
        </div>
        
        {isAddingJob ? (
          <Card>
            <CardHeader>
              <CardTitle>Post New Volunteer Position</CardTitle>
              <CardDescription>
                Create a new teaching opportunity for volunteers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="job-title" className="text-sm font-medium">Position Title</label>
                <Input id="job-title" placeholder="e.g., Mathematics Teacher, Science Instructor..." />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="job-subject" className="text-sm font-medium">Subject</label>
                  <select 
                    id="job-subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select subject...</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="english">English Literature</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                    <option value="computer">Computer Science</option>
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="language">Foreign Languages</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="job-grade" className="text-sm font-medium">Grade Level</label>
                  <Input id="job-grade" placeholder="e.g., 6-8, 9-12" />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="job-schedule" className="text-sm font-medium">Schedule</label>
                  <Input id="job-schedule" placeholder="e.g., Mon, Wed, Fri 2:00 PM - 3:30 PM" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="job-duration" className="text-sm font-medium">Duration</label>
                  <Input id="job-duration" placeholder="e.g., 3 months, 1 semester" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="job-skills" className="text-sm font-medium">Required Skills/Knowledge</label>
                <Input id="job-skills" placeholder="e.g., Algebra, Calculus, Experience with high school students" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="job-description" className="text-sm font-medium">Description</label>
                <Textarea 
                  id="job-description" 
                  placeholder="Describe the position, responsibilities, and requirements..." 
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="ghost" onClick={() => setIsAddingJob(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddJob}>
                Post Position
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            <Tabs defaultValue="positions">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="positions">Job Postings</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="positions" className="mt-6 space-y-6">
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="search" 
                      placeholder="Search job postings..." 
                      className="pl-8" 
                    />
                  </div>
                  <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option value="">All Subjects</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="english">English</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                  </select>
                  <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option value="">All Statuses</option>
                    <option value="open">Open</option>
                    <option value="filled">Filled</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-bold tracking-tight">Open Positions</h2>
                  {activeJobs.map((job) => (
                    <Card key={job.id}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>
                              {job.subject} • Grade {job.gradeLevel}
                            </CardDescription>
                          </div>
                          <Badge className="w-fit bg-green-500">{job.status}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Posted: {job.postedDate}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Schedule: {job.schedule}</span>
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Duration: {job.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Required: {job.required}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{job.applications} applications received</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm">{job.description}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="flex w-full flex-wrap gap-2">
                          <Button className="flex-1">
                            <Eye className="mr-2 h-4 w-4" />
                            View Applications
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Mail className="mr-2 h-4 w-4" />
                            Message Applicants
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Edit Position
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-bold tracking-tight">Filled Positions</h2>
                  {filledJobs.map((job) => (
                    <Card key={job.id}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>
                              {job.subject} • Grade {job.gradeLevel}
                            </CardDescription>
                          </div>
                          <Badge className="w-fit bg-blue-500">{job.status}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Posted: {job.postedDate}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Schedule: {job.schedule}</span>
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Duration: {job.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Filled by: {job.filledBy}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm">{job.description}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="flex w-full flex-wrap gap-2">
                          <Button variant="outline" className="flex-1">
                            <Users className="mr-2 h-4 w-4" />
                            View Classes
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Volunteer
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="applications" className="mt-6 space-y-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search applications..." 
                    className="pl-8 mb-4" 
                  />
                </div>
                
                {applications.map((application) => (
                  <Card key={application.id}>
                    <CardHeader className="pb-2">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                            <Briefcase className="h-6 w-6 text-orange-500" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{application.jobTitle}</CardTitle>
                            <CardDescription>Applied on {application.appliedDate}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {application.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 overflow-hidden rounded-full">
                            <img 
                              src={application.applicant.avatar} 
                              alt={application.applicant.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{application.applicant.name}</p>
                            <p className="text-sm text-muted-foreground">{application.applicant.email}</p>
                          </div>
                        </div>
                        <div className="md:ml-auto flex items-center">
                          <div className="rounded-full border px-3 py-1 text-xs">
                            {application.experience} of teaching experience
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <div className="flex w-full flex-wrap gap-2">
                        <Button className="flex-1" onClick={() => handleApproveApplication(application.id)}>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Approve
                        </Button>
                        <Button variant="outline" className="flex-1" onClick={() => handleRejectApplication(application.id)}>
                          <XCircle className="mr-2 h-4 w-4" />
                          Reject
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SchoolJobs;
