import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (elementId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${elementId}`;
      return;
    }
    
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all px-[5%] duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-serif font-bold text-2xl gradient-text hover:scale-105 transition-transform">
            UMAR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (item.href.startsWith('#')) {
                    handleScroll(item.href.substring(1));
                  } else {
                    window.location.href = item.href;
                  }
                }}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <Link to="/all-projects">
              <Button variant="outline" size="sm" className="ml-4">
                All Projects
              </Button>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-center space-x-2">
            <div className="flex items-center justify-center">
              <ThemeToggle />
            </div>
            <div className="flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full hover:bg-primary/10 transition-all duration-200"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <Menu className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                  <X className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`md:hidden fixed inset-0 top-16 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className={`relative bg-black border-t border-border shadow-2xl transform transition-all duration-300 ease-out ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}>
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`transform transition-all duration-300 ease-out ${
                    isOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => {
                      if (item.href.startsWith('#')) {
                        handleScroll(item.href.substring(1));
                      } else {
                        window.location.href = item.href;
                        setIsOpen(false);
                      }
                    }}
                    className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium border border-transparent hover:border-primary/20 group"
                  >
                    <span className="flex items-center justify-between">
                      {item.name}
                      <span className="w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-6"></span>
                    </span>
                  </button>
                </div>
              ))}
              
              <div 
                className={`pt-4 transform transition-all duration-300 ease-out ${
                  isOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${navItems.length * 50}ms` }}
              >
                <Link to="/all-projects" onClick={() => setIsOpen(false)}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                  >
                    All Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;