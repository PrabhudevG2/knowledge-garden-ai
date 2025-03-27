
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/utils/animations';

const Header = () => {
  const scrollPosition = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isScrolled = scrollPosition > 10;
  
  const navItems = [
    { name: "Introduction", href: "#introduction" },
    { name: "Core Technologies", href: "#core-technologies" },
    { name: "Frameworks", href: "#frameworks" },
    { name: "Applications", href: "#use-cases" },
    { name: "Future", href: "#future" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -100; // Adjust based on header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300",
        isScrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-display font-medium flex items-center gap-2">
          <span className="text-primary">AI</span>
          <span className="hidden sm:inline">Agents</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-all", 
              isMenuOpen && "translate-y-2 rotate-45"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-all", 
              isMenuOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-all", 
              isMenuOpen && "-translate-y-2 -rotate-45"
            )} 
          />
        </button>
        
        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-background flex flex-col justify-center items-center transition-opacity duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col space-y-8 text-center">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "text-xl font-medium text-foreground/80 hover:text-primary transition-all",
                  isMenuOpen && "animate-fade-in-up",
                  // Staggered animation
                  isMenuOpen && `[animation-delay:${200 + i * 50}ms]`
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
