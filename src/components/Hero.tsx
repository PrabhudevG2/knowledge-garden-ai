
import { heroContent } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Cpu, Zap, Code, Database, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Cyberpunk styling elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background -z-10" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-[-5] opacity-10"
           style={{
             backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), 
                             linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} />
      
      {/* Scan line effect */}
      <div className="scan-line"></div>
      
      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col max-w-4xl mx-auto text-center">
          {/* Glitchy title */}
          <div 
            className="mb-6 inline-flex mx-auto"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <span className="console-text text-xs tracking-widest py-1 px-3 border border-primary glitch-hover animate-fade-in cyberpunk-glow">
              &lt;/&gt; SYSTEM.INITIALIZE = TRUE
            </span>
          </div>
          
          {/* Main title with image and cyberpunk styling */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-4">
            <div className="flex-1">
              <h1
                className="text-hero font-mono uppercase tracking-tight leading-[1.1] text-balance animate-fade-in-up cyberpunk-glow"
                style={{ animationDelay: '200ms' }}
              >
                <span className="text-primary block">&lt;{heroContent.title}&gt;</span>
                <span className="block">{heroContent.subtitle}</span>
              </h1>
            </div>
            {/* Further adjusted image container styling */}
            <div className="w-full md:w-2/5 lg:w-1/3 animate-fade-in-up flex items-center justify-center mt-4 md:mt-0" style={{ animationDelay: '300ms' }}>
              <img
                src="/placeholder.svg"
                alt="AI Agent visualization"
                // Force specific height and width, ensure object-contain works
                className="w-full h-64 md:h-80 object-contain cyberpunk-border p-2 bg-muted/10 shadow-[0_0_20px_rgba(0,255,255,0.15)]"
              />
            </div>
          </div>
          
          {/* Description */}
          <p 
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 text-balance animate-fade-in-up console-text"
            style={{ animationDelay: '400ms' }}
          >
            {heroContent.description}
          </p>
          
          {/* CTA buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mx-auto animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <a 
              href="#introduction" 
              className="cyberpunk-btn"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#introduction')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              INITIATE SEQUENCE
            </a>
            
            <a 
              href="/case-studies" 
              className="px-8 py-3 border border-primary/60 text-primary rounded-none font-mono uppercase tracking-wider hover:bg-primary/10 transition-all relative overflow-hidden cyberpunk-glow"
            >
              VIEW CASE FILES
            </a>
          </div>
        </div>
        
        {/* Cyberpunk floating elements */}
        <div className="relative h-[200px] mt-16 md:mt-24">
          <div className="absolute left-1/4 top-1/2 w-20 h-20 flex items-center justify-center bg-muted border border-primary shadow-[0_0_15px_rgba(0,255,255,0.3)] animate-float cyberpunk-border" 
              style={{ animationDelay: '0s' }}
          >
            <Cpu className="w-10 h-10 text-primary" />
          </div>
          
          <div className="absolute left-1/2 top-1/4 w-24 h-24 flex items-center justify-center bg-muted border border-secondary shadow-[0_0_15px_rgba(255,0,255,0.3)] animate-float cyberpunk-border"
              style={{ animationDelay: '1.5s' }}
          >
            <Zap className="w-12 h-12 text-secondary" />
          </div>
          
          <div className="absolute right-1/4 top-3/4 w-16 h-16 flex items-center justify-center bg-muted border border-primary shadow-[0_0_15px_rgba(0,255,255,0.3)] animate-float cyberpunk-border"
              style={{ animationDelay: '0.8s' }}
          >
            <Terminal className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
      
      {/* Down arrow indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          width="20" 
          height="12" 
          viewBox="0 0 20 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <path 
            d="M1 1L10 10L19 1" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
