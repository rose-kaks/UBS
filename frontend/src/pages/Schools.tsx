
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Schools = () => {
  const schools = [
    {
      id: 1,
      name: "Zilla Parishad High School",
      location: "Saroor Nagar, Hyderabad",
      description: "Co-ed",
      image: "/placeholder.svg",
      programs: 12
    },
    {
      id: 2,
      name: "Zilla Parishad High School",
      location: "Champapet, Hyderabad",
      description: "Co-ed",
      image: "/placeholder.svg",
      programs: 8
    },
    {
      id: 3,
      name: "Zilla Parishad High School",
      location: "Pedda Amberpet, Rangareddy",
      description: "Co-ed, State Board",
      image: "/placeholder.svg",
      programs: 25
    },
    {
      id: 4,
      name: "Zilla Parishad Primary School",
      location: "Talegaon, Pune",
      description: "Co-ed",
      image: "/placeholder.svg",
      programs: 15
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-orange-50 py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Find Schools
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Discover schools in our network that are looking for volunteers like you
                </p>
              </div>
              <div className="mx-auto w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search schools..." 
                    className="w-full rounded-md bg-white pl-8 shadow-sm" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {schools.map((school) => (
                <Card key={school.id} className="overflow-hidden">
                  <img 
                    src={school.image} 
                    alt={school.name} 
                    className="h-48 w-full object-cover" 
                  />
                  <CardHeader>
                    <CardTitle>{school.name}</CardTitle>
                    <CardDescription>{school.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{school.description}</p>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {school.programs} volunteer programs available
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={`/schools/${school.id}`}>View School</Link>
                    </Button>
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

export default Schools;
