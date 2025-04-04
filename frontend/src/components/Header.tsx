import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, LogOut, User, BookOpen, Users, School, Calendar, Award, Video, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { user, logout, isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t('header.home'), href: '/' },
    { name: t('header.findSchools'), href: '/schools' },
    { name: t('header.volunteers'), href: '/volunteers' },
    { name: t('header.events'), href: '/events' },
    { name: t('header.resources'), href: '/resources' },
    { name: t('header.about'), href: '/about' },
    { name: t('header.contact'), href: '/contact' },
  ];

  const dashboardLink = user?.role === 'student' 
    ? '/student/dashboard' 
    : user?.role === 'volunteer' 
      ? '/volunteer/dashboard' 
      : '/school/dashboard';

  const UserIcon = user?.role === 'student' 
    ? BookOpen 
    : user?.role === 'volunteer' 
      ? Users 
      : School;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-amber-200 rounded-md flex items-center justify-center">
              <span className="text-white font-bold">EC</span>
            </div>
            <span className="font-bold text-xl">EdConnect</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="hidden md:flex gap-2 mr-4">
            <button 
              onClick={() => i18n.changeLanguage('en')}
              className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-edconnect-orange/10 text-edconnect-orange font-medium' : 'text-muted-foreground'}`}
            >
              EN
            </button>
            <button 
              onClick={() => i18n.changeLanguage('hi')}
              className={`px-2 py-1 rounded ${i18n.language === 'hi' ? 'bg-edconnect-orange/10 text-edconnect-orange font-medium' : 'text-muted-foreground'}`}
            >
              हिं
            </button>
          </div>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.profileImage || '/placeholder.svg'} alt={user?.name || 'User'} />
                    <AvatarFallback>
                      {user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-0.5">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to={dashboardLink} className="cursor-pointer flex items-center">
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>{t('header.dashboard')}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>{t('header.profile')}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => logout()}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>{t('header.logout')}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <Button asChild variant="ghost">
                <Link to="/login">{t('header.login')}</Link>
              </Button>
              <Button asChild>
                <Link to="/register">{t('header.signup')}</Link>
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 pt-0 bg-background border-b">
          <div className="flex justify-end gap-2 mb-4">
            <button 
              onClick={() => i18n.changeLanguage('en')}
              className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-edconnect-orange/10 text-edconnect-orange font-medium' : 'text-muted-foreground'}`}
            >
              English
            </button>
            <button 
              onClick={() => i18n.changeLanguage('hi')}
              className={`px-3 py-1 rounded ${i18n.language === 'hi' ? 'bg-edconnect-orange/10 text-edconnect-orange font-medium' : 'text-muted-foreground'}`}
            >
              हिंदी
            </button>
          </div>
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="py-2 px-3 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {!isAuthenticated && (
              <>
                <Link
                  to="/login"
                  className="py-2 px-3 hover:bg-muted rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('header.login')}
                </Link>
                <Link
                  to="/register"
                  className="py-2 px-3 bg-primary text-primary-foreground rounded-md flex justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('header.signup')}
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};