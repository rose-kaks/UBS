
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, School, BookOpen, Star, Award, Calendar, Video, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-edconnect-beige/50 to-edconnect-beige-light/30 z-0" />
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-[url('data:image/jpeg;base64,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')] bg-no-repeat bg-cover opacity-20 z-0" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Connect, Volunteer,
              <span className="text-edconnect-orange block">Make an Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              EdConnect brings together schools and volunteers to create enriching educational 
              experiences for students across the Zilla Parishad Schools of Pune, Mumbai and Hyderabad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="px-6">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-6">
                <Link to="/schools">Find Schools</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-edconnect-orange">500+</p>
                <p className="text-sm text-muted-foreground">Schools</p>
              </div>
              <div className="h-10 border-r border-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-edconnect-orange">2,500+</p>
                <p className="text-sm text-muted-foreground">Volunteers</p>
              </div>
              <div className="h-10 border-r border-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-edconnect-orange">10,000+</p>
                <p className="text-sm text-muted-foreground">Students Helped</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-edconnect-beige-light/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How EdConnect Works</h2>
            <p className="text-lg text-foreground/80">
              Our platform makes it easy to connect schools with qualified volunteers to enhance the educational experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-edconnect-orange/10 flex items-center justify-center mb-4">
                  <School className="h-6 w-6 text-edconnect-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">For Schools</h3>
                <p className="text-foreground/80 mb-4">
                  Register your school, submit your curriculum needs, and connect with qualified volunteers.
                </p>
                <Link to="/register" className="text-edconnect-orange font-medium inline-flex items-center hover:underline">
                  Register as a School <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-edconnect-orange/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-edconnect-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">For Volunteers</h3>
                <p className="text-foreground/80 mb-4">
                  Create your profile, browse opportunities, and share your expertise with students who need it.
                </p>
                <Link to="/register" className="text-edconnect-orange font-medium inline-flex items-center hover:underline">
                  Become a Volunteer <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-edconnect-orange/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-edconnect-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">For Students</h3>
                <p className="text-foreground/80 mb-4">
                  Access quality educational content, attend live sessions, and learn from experienced professionals.
                </p>
                <Link to="/register" className="text-edconnect-orange font-medium inline-flex items-center hover:underline">
                  Join as a Student <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-lg text-foreground/80">
              EdConnect offers a comprehensive set of tools to make educational volunteering seamless and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Calendar className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">Class Scheduling</h3>
                <p className="text-sm text-foreground/80">
                  Intuitive calendar system for scheduling and managing live classes and sessions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Video className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">Video Content</h3>
                <p className="text-sm text-foreground/80">
                  Upload and access recorded video lessons to supplement live teaching.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">Volunteer Tracking</h3>
                <p className="text-sm text-foreground/80">
                  Track volunteer hours, contributions, and impact with detailed analytics.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Award className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">Certificates</h3>
                <p className="text-sm text-foreground/80">
                  Generate certificates for volunteers to recognize their contributions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-edconnect-beige-light/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
            <p className="text-lg text-foreground/80">
              Read about the experiences of schools, volunteers, and students using EdConnect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="italic text-foreground/80 mb-4">
                  "As a school principal, EdConnect has revolutionized how we bring expert knowledge into our classrooms. 
                  Our students love learning from professionals in various fields."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-edconnect-orange/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-edconnect-orange">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Dr. Kaweri Gambhir</p>
                    <p className="text-sm text-muted-foreground">Principal, ZPHS, Kukatpally, Hyderabad</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="italic text-foreground/80 mb-4">
                  "Volunteering through EdConnect has been incredibly rewarding. The platform makes it easy to 
                  schedule sessions, and I love seeing the impact I'm making on students' education."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-edconnect-orange/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-edconnect-orange">MS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Saksham Malhotra</p>
                    <p className="text-sm text-muted-foreground">Volunteer, Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="italic text-foreground/80 mb-4">
                  "Learning from real professionals has helped me understand what I want to do after graduation. 
                  The volunteer sessions are engaging and have made difficult subjects much easier to grasp."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-edconnect-orange/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-edconnect-orange">AT</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sara Aggarwal</p>
                    <p className="text-sm text-muted-foreground">Student, Grade 11</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-gradient-to-r from-edconnect-orange to-edconnect-orange-light rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join our community of schools, volunteers, and students to create better educational experiences today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="bg-white text-edconnect-orange hover:bg-white/90">
                  <Link to="/register">Sign Up Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
