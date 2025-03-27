
import { useState, useEffect } from 'react';
import { useScrollPosition } from '@/utils/animations';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const scrollY = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Introduction', href: '/introduction' },
    { name: 'Core Technologies', href: '/core-technologies' },
    { name: 'Frameworks', href: '/frameworks' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Future', href: '/future' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
      scrollY > 10 ? "bg-background/80 backdrop-blur-md border-primary/20" : "bg-transparent border-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-lg font-mono uppercase tracking-wider text-primary cyberpunk-glow">
              <span className="text-foreground">&lt;</span>
              AI Agents
              <span className="text-foreground">/&gt;</span>
            </span>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "font-mono text-sm uppercase tracking-wider transition-colors relative group",
                  isActive(link.href) 
                    ? "text-primary cyberpunk-glow" 
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-px bg-primary transform origin-left transition-transform duration-300",
                  isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )}></span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center text-foreground"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 right-0 bg-muted/95 backdrop-blur-lg border-b border-primary/20 transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[500px] border-opacity-100" : "max-h-0 border-opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "block py-2 px-3 font-mono text-sm uppercase tracking-wider transition-colors",
                isActive(link.href) 
                  ? "text-primary bg-muted/50 cyberpunk-glow" 
                  : "text-foreground/70 hover:bg-muted/30 hover:text-foreground"
              )}
            >
              {isActive(link.href) && <span className="mr-1 text-secondary">&gt;</span>}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
