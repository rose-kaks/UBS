
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Star } from "lucide-react";

const Volunteers = () => {
  const topVolunteers = [
    {
      id: 1,
      name: "Dr. Arvind Deshmukh",
      avatar: "https://th.bing.com/th/id/OIP.EGSlamshXCYMY5Uwl2KKigHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      role: "Mathematics and Science",
      hours: 156,
      rating: 4.9,
      bio: "Experienced math teacher with a passion for making complex concepts accessible to all students."
    },
    {
      id: 2,
      name: "Priya Nair",
      avatar: "https://th.bing.com/th/id/OIP.IodMvnmkEqKYwIpt-xHxhwHaEo?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      role: "English and Phonics",
      hours: 142,
      rating: 4.8,
      bio: "Specializes in early childhood education and phonics-based learning. She has worked with various NGOs to enhance reading and writing skills in rural schools."
    },
    {
      id: 3,
      name: "Sanjay Kulkarni",
      avatar: "https://th.bing.com/th/id/OIP.2-MM8v5pOJtXhtkVV-C90QHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      role: "Social Studies and Marathi",
      hours: 128,
      rating: 4.7,
      bio: "Passionate about preserving and teaching Marathi literature, he makes history come alive through storytelling and interactive activities"
    },
    {
      id: 4,
      name: "Neha Iyer",
      avatar: "https://th.bing.com/th/id/OIP.zGJDI2HktKMY4ikglsK_vQHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      role: "Computer Science",
      hours: 80,
      rating: 4.9,
      bio: "Introduces students to the world of coding in a fun and interactive way. She has conducted numerous workshops on digital literacy for rural schools."
     },
    {
      id: 5,
      name: "Vandana Sharma",
      avatar: "https://th.bing.com/th/id/OIP.omx3Ej13-_8i-gNbG_LjbQHaE7?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      role: "Physics and Astronomy",
      hours: 115,
      rating: 4.6,
      bio: "MSc in Physics, has worked with ISRO-backed educational programs and believes in making science hands-on and exciting for students."
    },
    {
      id: 6,
      name: "Ananya Sen",
      avatar: "data:image/jpeg;base64,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",
      role: "Economics and Business Studies",
      hours: 134,
      rating: 4.8,
      bio: "MBA in finance, simplifies economic concepts and promotes financial literacy among high school students, encouraging them to think critically about real-world economic issues."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-orange-50 py-12">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Volunteer Leaderboard
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Recognizing our most dedicated volunteers who are making a difference in education
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Top Volunteers</h2>
              <Button>Become a Volunteer</Button>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topVolunteers.map((volunteer) => (
                <Card key={volunteer.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                        <AvatarFallback>{volunteer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{volunteer.name}</CardTitle>
                        <CardDescription>{volunteer.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{volunteer.bio}</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">{volunteer.hours} hours</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">{volunteer.rating}/5.0</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Profile</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteers;
