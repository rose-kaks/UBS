import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, School, BookOpen, Star, Award, Calendar, Video, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-28 md:py-32 min-h-screen overflow-hidden w-full bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-edconnect-beige/30 to-edconnect-beige-light/20 z-0" />
        <img src="frontend/hero.jpeg" alt="Hero Image" className="absolute inset-0 w-full h-full object-cover z-0 opacity-25" />
        <div className="container relative z-10 flex flex-col justify-center items-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-10">
              {t('hero.title')}
              <span className="text-edconnect-orange block">{t('hero.makeImpact')}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <Button asChild size="lg" className="px-8 py-4 text-xl">
                <Link to="/register">{t('hero.getStarted')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-4 text-xl">
                <Link to="/schools">{t('hero.findSchools')}</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-10 mt-6 justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-edconnect-orange">500+</p>
                <p className="text-sm text-muted-foreground">{t('hero.stats.schools')}</p>
              </div>
              <div className="h-12 border-r border-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-edconnect-orange">2,500+</p>
                <p className="text-sm text-muted-foreground">{t('hero.stats.volunteers')}</p>
              </div>
              <div className="h-12 border-r border-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-edconnect-orange">10,000+</p>
                <p className="text-sm text-muted-foreground">{t('hero.stats.students')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-edconnect-beige-light/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('howItWorks.title')}</h2>
            <p className="text-lg text-foreground/80">
              {t('howItWorks.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-edconnect-orange/10 flex items-center justify-center mb-4">
                  <School className="h-6 w-6 text-edconnect-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('howItWorks.forSchools')}</h3>
                <p className="text-foreground/80 mb-4">
                  {t('howItWorks.schoolsDescription')}
                </p>
                <Link to="/register" className="text-edconnect-orange font-medium inline-flex items-center hover:underline">
                  {t('howItWorks.registerSchool')} <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-edconnect-orange/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-edconnect-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('howItWorks.forVolunteers')}</h3>
                <p className="text-foreground/80 mb-4">
                  {t('howItWorks.volunteersDescription')}
                </p>
                <Link to="/register" className="text-edconnect-orange font-medium inline-flex items-center hover:underline">
                  {t('howItWorks.becomeVolunteer')} <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-edconnect-orange/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-edconnect-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('howItWorks.forStudents')}</h3>
                <p className="text-foreground/80 mb-4">
                  {t('howItWorks.studentsDescription')}
                </p>
                <Link to="/register" className="text-edconnect-orange font-medium inline-flex items-center hover:underline">
                  {t('howItWorks.joinStudent')} <ChevronRight className="h-4 w-4 ml-1" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-lg text-foreground/80">
              {t('features.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Calendar className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('features.classScheduling')}</h3>
                <p className="text-sm text-foreground/80">
                  {t('features.classSchedulingDesc')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Video className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('features.videoContent')}</h3>
                <p className="text-sm text-foreground/80">
                  {t('features.videoContentDesc')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('features.volunteerTracking')}</h3>
                <p className="text-sm text-foreground/80">
                  {t('features.volunteerTrackingDesc')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Award className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('features.certificates')}</h3>
                <p className="text-sm text-foreground/80">
                  {t('features.certificatesDesc')}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
            <p className="text-lg text-foreground/80">
              {t('testimonials.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="italic text-foreground/80 mb-4">
                  {t('testimonials.quote1')}
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-edconnect-orange/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-edconnect-orange">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">{t('testimonials.name1')}</p>
                    <p className="text-sm text-muted-foreground">{t('testimonials.role1')}</p>

                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="italic text-foreground/80 mb-4">
                  {t('testimonials.quote2')}
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-edconnect-orange/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-edconnect-orange">MS</span>
                  </div>
                  <div>
                    <p className="font-semibold">{t('testimonials.name2')}</p>
                    <p className="text-sm text-muted-foreground">{t('testimonials.role2')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="italic text-foreground/80 mb-4">
                  {t('testimonials.quote3')}
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-edconnect-orange/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-edconnect-orange">AT</span>
                  </div>
                  <div>
                    <p className="font-semibold">{t('testimonials.name3')}</p>
                    <p className="text-sm text-muted-foreground">{t('testimonials.role3')}</p>
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
                {t('cta.title')}
              </h2>
              <p className="text-white/90 text-lg mb-8">
                {t('cta.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="bg-white text-edconnect-orange hover:bg-white/90">
                  <Link to="/register">{t('cta.signUp')}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/about">{t('cta.learnMore')}</Link>
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